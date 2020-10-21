import pages from 'pages'

const currentPageContent: CurrentPageContent = {
    hash: undefined,
    content: []
}

/**
 * 获取当前的翻译源文本
 * 
 * @return 当前使用的翻译源
 */
export const getContent = function (): TranslationContent[] {
    return currentPageContent.content
}

/**
 * 尝试更新翻译源文本
 * 
 * 会去检查 hash 是否匹配，当 hash 变更（切换到了新页面）时会重新从 pages 里选择翻译源
 * 
 * @return 如果来源更新了就返回新来源，否则返回 undefined
 */
export const updateContentSource = function (): CurrentPageContent | undefined {
    // 因为 hash 包含 query 字符串，所以这里要剔除掉
    const hashList = document.location.hash.split('?')
    const currentHash = hashList.length > 0 ? hashList[0] : '/'

    // 没有变更
    if (currentHash === currentPageContent.hash) return undefined

    // 找到所有匹配的翻译源
    const newContent: TranslationContent[] = [].concat(...pages.map(pageContent => {
        const matched = pageContent.hashs.find(hash => currentHash.startsWith(hash))
        return matched ? pageContent.content : []
    }))
    
    currentPageContent.hash = currentHash
    currentPageContent.content = newContent

    return currentPageContent
}