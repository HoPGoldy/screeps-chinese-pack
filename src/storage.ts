import pages from 'pages'

/**
 * 实际的存储对象
 * 
 * 脚本执行时访问的翻译源都保存在这里
 */
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
 * @param hash 要进行翻译源匹配的 hash 值
 * @returns 更新后的翻译源
 */
export const updateContentSource = function (hash: string): CurrentPageContent | undefined {
    // 因为 hash 包含 query 字符串，所以这里要剔除掉
    const hashList = hash.split('?')
    const currentHash = hashList.length > 0 ? hashList[0] : '/'

    // 没有变更就不进行搜索
    if (currentHash === currentPageContent.hash) return currentPageContent

    // 找到所有匹配的翻译源
    const newContent: TranslationContent[] = [].concat(...pages.map(pageContent => {
        const matched = pageContent.hashs.find(hash => currentHash.startsWith(hash))
        return matched ? pageContent.content : []
    }))
    
    currentPageContent.hash = currentHash
    currentPageContent.content = newContent

    return currentPageContent
}