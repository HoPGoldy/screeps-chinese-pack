/**
 * 递归获取该元素下所有包含内容的 text 元素
 * 
 * @param el 要进行查询的 html 节点
 * @return 包含内容的 text 元素数组
 */
export const getContentElement = function (el: Node): Text[] {
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
 * 判断一个节点是否为 HTMLElement
 * 
 * @param el 要判断的节点
 */
export const isHTMLElement = function (el: Node): el is HTMLElement {
    return el.nodeType === Node.ELEMENT_NODE
}


/**
 * 判断一个节点是否为 Text
 * 
 * @param el 要判断的节点
 */
export const isText = function (el: Node): el is Text {
    return el.nodeType === Node.TEXT_NODE
}


/**
 * 去除 hash 中的 query 字符串
 * @param hash 可能包含 query 的 hash
 */
export const getNoQueryHash = function (hash: string): string {
    return hash.split('?')[0]
}

// 缓存上次的路由，用于减少路由回调触发次数
let lastHash = ''

/**
 * 监听路由的变化
 * 
 * @param callback 在变更时执行的回调，入参为新的 hash（包含 query 字符串）
 */
export const onHashChange = function (callback: HashChangeCallback = () => {}) {
    // 在更新时触发回调
    const hashCallback = () => {
        const newHash = getNoQueryHash(document.location.hash)
        if (lastHash === newHash) return

        callback(document.location.hash)
        lastHash = newHash
    }

    // pushState 和 replaceState 不会触发对应的回调，这里包装一下
    history.pushState = wapperHistory('pushState')
    history.replaceState = wapperHistory('replaceState')

    // 页面变更时触发回调
    window.addEventListener('replaceState', hashCallback)
    window.addEventListener('pushState', hashCallback)
    window.addEventListener('hashchange', hashCallback)
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
        window.dispatchEvent(new Event(type))
        return result
    }
}


/**
 * 生成元素变更回调
 * 
 * MutationObserver 接受回调的入参不是单纯的 html 元素数组
 * 这里将其格式化后再执行业务回调
 * 
 * @param callback 要触发的实际回调
 */
const getMutationCallback = function (callback: ContentChangeCallback) {
    return function (mutationsList: MutationRecord[]) {
        // 获取发生变更的节点
        const changedNodes: Node[] = [].concat(...mutationsList.map(mutation => {
            if (mutation.target.stopTranslateSearch) return []
            if (isExceptElement(mutation.target)) return []

            if (mutation.type === 'childList') {
                if (mutation.addedNodes.length > 0) return [...mutation.addedNodes]
                // 变更有可能是有节点移除了，这时候是没必要进行翻译操作的
                if (mutation.removedNodes.length === 0) return [mutation.target]
            }
            // 是节点内容变更的话就直接返回变更的节点
            else if (mutation.type === 'characterData') {
                return [mutation.target]
            }

            return []
        }))

        // 执行回调
        if (changedNodes.length > 0) callback(changedNodes)
    }
}


/**
 * 判断一个节点是否被禁止翻译
 * 
 * 会顺着 dom 树一直往上找，遇到设置有 stopTranslateSearch 属性的祖先节点的话就禁止翻译
 * 
 * @param el 要进行判断的节点
 * @returns 是否为被禁止翻译的节点
 */
export const isExceptElement = function (el: Node): boolean {
    if (el.stopTranslateSearch) return true
    if (el.parentNode) return isExceptElement(el.parentNode)

    return false
}

/**
 * 将一个 html 元素及其子元素设置为禁止翻译
 * 
 * @param selector 禁止翻译的 css 选择器
 */
export const dontTranslate = function (selector: string): TranslationContent {
    return {
        'selector': selector,
        'zh-CN': (el: HTMLElement) => el.stopTranslateSearch = true
    }
}


/**
 * 去掉字符串两端的空白字符
 * 
 * @param str 要修剪的字符串
 */
export const trim = function (str: string): string {
    return str.replace(/(^\s*)|(\s*$)/g, '')
}


/**
 * 回调 - 页面有新元素变更
 * 
 * @param callback 在变更时执行的回调，入参为发生变更的 HTMLElement（包括新增和修改，没有删除）
 */
export const onElementChange = function (callback: ContentChangeCallback = () => {}) {
    const observer = new MutationObserver(getMutationCallback(callback))

    // 启动监听
    observer.observe(document.body, {
        childList: true,
        characterData: true,
        subtree: true
    })
}


/**
 * 回调 - 当页面出现可以进行翻译的内容
 * 
 * @param callback 页面可以进行翻译时执行的回调
 */
export const onPageLoad = function (callback: () => any) {
    // 设置定时器，在页面出现内容后就开始翻译
    // 这个设定是因为国内网络不好的时候会出现页面还在加载（一直转圈）但是已经可以进行游戏的情况
    // 这时候下面的 readystatechange 是还没有触发的
    const timer = setInterval(() => {
        if (document.body.innerText.length <= 0) return

        clearInterval(timer)
        callback()
    }, 500)

    /**
     * 在文档加载完成后再执行一次全量翻译防止有遗漏
     */
    document.addEventListener('readystatechange', () => {
        clearInterval(timer)
        callback()
    })
}


/**
 * 多行翻译
 * 
 * 当一个 css 选择器会选中多个元素时，就可以使用该函数快速生成一个翻译源
 * 会根据传入的数据源的键值对进行翻译
 * 
 * @param contents 多行翻译源
 */
export const translateMultiple = function (contents: MultipleMap) {
    return (el: HTMLElement) => {
        const newContent = contents[trim(el.innerHTML)]
        if (newContent) el.innerHTML = newContent
    }
}
