/**
 * 递归获取该元素下所有包含内容的 html 元素
 * 
 * @param el 要进行查询的 html 元素
 * @return 包含内容的 html 元素数组
 */
export const getContentElement = function (el: HTMLElement): HTMLElement[] {
    if (!el.innerText) return []
    // 下面没有子元素了，那内容就在它自己身上，直接返回
    if (el.children.length === 0) return [el]

    const contentElement: HTMLElement[] = []

    // 遍历所有子节点递归拿到内容节点
    for (const children of el.children) {
        if (!(children instanceof HTMLElement)) continue
        contentElement.push(...getContentElement(children))
    }

    return contentElement
}


/**
 * 翻译指定 html 元素
 * 
 * 会递归翻译其子元素
 * 该方法会修改 content 参数的内容（会将完成翻译的内容从 content 取出以提高性能，除非该 content 指定了 reuse）
 * 
 * @param el 要进行翻译的 html 元素
 * @param content 翻译文本
 */
export const translate = function (el: HTMLElement, content: TranslationContent[]): void {
    const needTranslateElement = getContentElement(el)
}