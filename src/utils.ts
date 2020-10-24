import { TRANSLATE_FROM, TRANSLATE_TO } from 'setting'
import { updateContent, getContent } from 'storage'

/**
 * 递归获取该元素下所有包含内容的 text 元素
 * 
 * @param el 要进行查询的 html 节点
 * @return 包含内容的 text 元素数组
 */
export const getContentElement = function (el: Node): Text[] {
    if (el instanceof HTMLElement) {
        // 没有内容或者该元素被禁止翻译了
        if (!el.innerText || el.stopTranslateSearch) return []
        const contentElement: Text[] = []

        // 遍历所有子节点递归拿到内容节点
        for (const children of el.childNodes) {
            if (children.nodeType === Node.TEXT_NODE) {
                // Text 节点中有很多只有换行符或者空格的，这里将其剔除掉
                // 正则含义：包含除“换行”“回车”“空格”以外的其他字符
                if (!/[^(\n|\r| )]/g.test((children as Text).wholeText)) continue
                contentElement.push(children as Text)
            }
            // 元素节点的话就递归继续获取（不会搜索 script 标签）
            else if (children.nodeType === Node.ELEMENT_NODE && children.nodeName !== 'SCRIPT') {
                contentElement.push(...getContentElement(children))
            }
        }

        return contentElement
    }

    return []
}


/**
 * 翻译指定 html 元素
 * 
 * 会使用当前数据源递归翻译其子元素
 * 该方法会修改 content 参数的内容（会将完成翻译的内容从 content 取出以提高性能，除非该 content 指定了 reuse）
 * 
 * @param el 要进行翻译的 html 元素
 */
export const translate = function (el: HTMLElement): void {
    // console.time('translate')
    const {
        content: allContents,
        queryContent: allQueryContents
    } = getContent()

    // 翻译所有有选择器的元素
    const notFindContent = allQueryContents.filter(content => {
        const targetElements = el.querySelectorAll(content.selector)
        if (targetElements.length === 0) return true

        // 翻译并阻止后续再次翻译
        targetElements.forEach(element => {
            if (element.nodeType !== Node.ELEMENT_NODE) return

            updateElement((element as HTMLElement), content)
            element.stopTranslateSearch = true
        })

        return content.reuse ? true : false
    })

    // 取出所有待翻译元素
    const needTranslateText = getContentElement(el)

    // 遍历所有节点进行翻译
    needTranslateText.forEach(text => {
        let originContent: string = text.wholeText

        // 找到符合的翻译内容，并保存其索引
        let translationIndex: number
        const currentTranslation = allContents.find((content, index) => {
            // 取出前后可能存在的换行符
            // 正则含义：去除字符串前后可能存在的空字符
            if (content[TRANSLATE_FROM] !== originContent.replace(/(^\s*)|(\s*$)/g, '')) return false

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

    // 把结果更新回数据源
    updateContent({ content: allContents, queryContent: notFindContent })
    // console.timeEnd('translate')
}


/**
 * 使用对应的翻译内容更新 html 元素
 * 
 * @param el 要更新的元素
 * @param content 要更新的翻译内容
 */
const updateElement = function (el: HTMLElement, content: TranslationContent): void {
    const newContent = content[TRANSLATE_TO]

    if (typeof newContent === 'string') el.innerHTML = newContent
    else newContent(el as (HTMLElement & string))
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
    else {
        const newText = newContent(el.wholeText as (HTMLElement & string))
        el.parentElement.replaceChild(new Text(newText), el)
    }
}

/**
 * 监听路由的变化
 */
export const onHashChange = function (callback: HashChangeCallback = () => {}, type: HashChangeListenerType = 'hash') {
    // 在更新时触发回调
    const hashCallback = () => callback(document.location.hash)

    if (type === 'history') {
        // pushState 和 replaceState 不会触发对应的回调，这里包装一下
        history.pushState = wapperHistory('pushState')
        history.replaceState = wapperHistory('replaceState')

        window.addEventListener('replaceState', hashCallback)
        window.addEventListener('pushState', hashCallback)
    }
    else {
        window.addEventListener('hashchange', hashCallback)
    }
}


/**
 * 将指定方法包装上事件功能
 * 
 * @param type 要包装的方法名，会在该方法执行时发射同名的事件
 * @return 包装好的新方法
 */
const wapperHistory = function (type: string) {
    // 保存原始方法
    const originFunc = history[type]

    return function (...args) {
        const result = originFunc.apply(this, args)
        // 派发事件
        const e = new Event(type)
        window.dispatchEvent(e)
        return result
    }
}