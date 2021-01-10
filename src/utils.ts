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
