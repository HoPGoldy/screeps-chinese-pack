import { TRANSLATE_FROM, TRANSLATE_TO } from 'setting'
import { contentCache, getContent, updateContent } from 'storage'
import { isExceptElement, isHTMLElement, isText, trim } from 'utils'


/**
 * 递归获取该元素下所有包含内容的 text 元素
 * 
 * @param el 要进行查询的 html 节点
 * @return 包含内容的 text 元素数组
 */
const getContentElement = function (el: Node): Text[] {
    if (isHTMLElement(el)) {
        // 该元素被禁止翻译了就跳过
        if (el.stopTranslateSearch) return []
        const contentElement: Text[] = []

        // 遍历所有子节点递归拿到内容节点
        for (let i = 0; i < el.childNodes.length; i += 1) {
            const children = el.childNodes[i]

            if (children.nodeType === Node.TEXT_NODE) {
                // Text 节点中有很多只有换行符或者空格的，这里将其剔除掉
                // 正则含义：包含除“换行”“回车”“空格”以外的其他字符
                if (!/[^(\n|\r| )]/g.test((children as Text).wholeText)) continue
                contentElement.push(children as Text)
            }
            // 元素节点的话就递归继续获取（不会搜索 script 标签）
            else if (isHTMLElement(children) && children.nodeName !== 'SCRIPT') {
                contentElement.push(...getContentElement(children))
            }
        }

        return contentElement
    }
    // 如果是文本节点的话就直接返回
    if (isText(el)) return [el]

    return []
}

/**
 * 使用对应的翻译内容更新 html 元素
 * 
 * @param el 要更新的元素
 * @param content 要更新的翻译内容
 */
const updateElement = function (el: HTMLElement, content: TranslationContent): string {
    const newContent = content[TRANSLATE_TO]

    if (typeof newContent === 'string') el.innerHTML = newContent
    else if (typeof newContent === 'function') newContent(el as (HTMLElement & string))

    return el.innerHTML
}


/**
 * 使用对应的翻译内容更新 html 元素
 * 
 * @param el 要更新的元素
 * @param content 要更新的翻译内容
 * 
 * @returns 翻译后的内容，若未翻译则为 undefined
 */
const updateProtectElement = function (el: HTMLElement, content: TranslationContent): string {
    const newContent = content[TRANSLATE_TO]

    // 是替身节点的话就不执行任何操作
    if (el.isStandNode) return ''

    el.style.display = 'none'

    // 创建替身并进行基础设置
    const newEl = el.cloneNode(true) as HTMLElement
    newEl.style.display = null
    newEl.isStandNode = true

    // 翻译替身
    if (typeof newContent === 'string') newEl.innerHTML = newContent
    else if (typeof newContent === 'function') newContent(newEl as (HTMLElement & string))

    // 更新替身
    if (el.standNode) el.parentElement.replaceChild(newEl, el.standNode)
    else el.parentElement.appendChild(newEl)

    el.standNode = newEl

    // 由于某些节点可能会存在 class 变化的问题
    // （比如 map 界面中房间介绍的储量，会通过加入临时的 class 来实现 in-out 效果，但是这些临时 class 会一直在替身节点身上，导致样式有问题）
    // 所以这里开启一个监听，以保证替身节点的样式一致
    const observer = new MutationObserver(() => {
        el.standNode.className = el.className
    })
    observer.observe(el, { attributes: true })

    // 受保护节点会一直返回翻译前的内容
    return el.innerHTML
}


/**
 * 使用对应的翻译内容更新 text 元素
 * 
 * @param el 要更新的文本节点
 * @param content 要更新的翻译内容
 */
const updateText = function (el: Text, content: TranslationContent): void {
    const newContent = content[TRANSLATE_TO]
    if (typeof newContent === 'string') el.parentElement.replaceChild(new Text(newContent), el)
    else if (typeof newContent === 'function') {
        const newText = newContent(el.wholeText as (HTMLElement & string))
        el.parentElement.replaceChild(new Text(newText), el)
    }
}


/**
 * 翻译所有带选择器的内容
 * 
 * @param el 要翻译的 html 元素
 * @param allQueryContents 所有包含选择器的翻译项
 */
const translateQueryContent = function (allQueryContents: TranslationContent[]): TranslationContent[] {
    // 翻译所有有选择器的元素
    return allQueryContents.filter(content => {
        const targetElements = document.body.querySelectorAll(content.selector)
        if (targetElements.length === 0) return true

        // 翻译并阻止后续再次翻译
        targetElements.forEach((element, index) => {
            if (!isHTMLElement(element) || isExceptElement(element)) return
            const cacheKey = content.selector + index
            // 如果元素的内容没有发生变更，就不执行更新
            const preContent = contentCache.get(cacheKey)
            if (preContent !== undefined && preContent === element.innerHTML) return

            const newContent = content.protect ?
                updateProtectElement(element, content) :
                updateElement(element, content)

            // 更新缓存并阻止后续翻译
            contentCache.set(cacheKey, newContent)
        })

        return content.reuse
    })
}


/**
 * 翻译所有不带 css 选择器的内容
 * 
 * 会遍历取出 el 下的待翻译文本（Text 对象），然后和翻译项进行文本对比，若对比完全匹配则进行翻译
 * **注意**，会自动移除待对比文本前后的空白字符
 * 
 * @param el 要翻译的 html 元素
 * @param allContents 所有不带选择器的翻译内容
 */
const translateNormalContent = function (el: Node, allContents: TranslationContent[]): TranslationContent[] {
    if (isExceptElement(el)) return allContents
    // 取出所有待翻译元素
    const needTranslateText = getContentElement(el)

    // 遍历所有节点进行翻译
    needTranslateText.forEach(text => {
        // 这个文本有可能在之前已经被翻译了（被从其父节点上剔除），所以这里不再进行无效翻译
        if (!text.parentElement) return

        const originContent: string = text.wholeText

        // 找到符合的翻译内容，并保存其索引
        let translationIndex: number
        const currentTranslation = allContents.find((content, index) => {
            const matchContent = content[TRANSLATE_FROM]
            const targetContent = trim(originContent)

            // 使用字符串匹配
            if (typeof matchContent === 'string') {
                if (matchContent !== targetContent) return false
            }
            // 不然就使用正则进行匹配
            else if (!(matchContent as RegExp).test(targetContent)) return false

            translationIndex = index
            return true
        })

        // 没找到就下一个
        if (!currentTranslation) {
            // console.warn(`文本 ${originContent} 未翻译`)
            return
        }

        // 更新文本，如果没指定重用的话就将其移除
        updateText(text, currentTranslation)
        if (!currentTranslation.reuse) allContents.splice(translationIndex, 1)
    })

    return allContents
}


/**
 * 翻译指定节点
 * 
 * 会使用当前数据源递归翻译其子元素
 * 该方法会修改 全局存储 currentPageContent 的内容（会将完成翻译的内容从 content 取出以提高性能，除非该 content 指定了 reuse）
 * 
 * @param changedNode 发生变更的节点
 */
const translate = function (changedNode: Node[]): void {
    const {
        content: allContents,
        queryContent: allQueryContents
    } = getContent()

    // 有选择器的内容每次变更只会被翻译一次
    const nextSearchdQueryContents = translateQueryContent(allQueryContents)
    updateContent({ queryContent: nextSearchdQueryContents })

    // 文本内容每个都会被执行翻译
    for (const node of changedNode) {
        const nextSearchContents = translateNormalContent(node, allContents)
        // 把没有使用或者启用了重用的翻译内容更新回数据源
        updateContent({ content: nextSearchContents })
    }
}

export default translate
