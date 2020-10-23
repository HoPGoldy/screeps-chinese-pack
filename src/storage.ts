import pages from 'pages'

/**
 * 实际的存储对象
 * 
 * 脚本执行时访问的翻译源都保存在这里
 */
const currentPageContent: CurrentPageContent = {
    hash: undefined,
    content: [],
    queryContent: []
}


/**
 * 获取当前的翻译源文本
 * 
 * @return 当前使用的翻译源 [ 普通翻译对象，包含选择器的翻译对象 ]
 */
export const getContent = function (): CurrentPageContent {
    return currentPageContent
}


/**
 * 更新翻译内容
 * 
 * @param newContent 新的翻译内容
 */
export const updateContent = function (newContent: UpdateNewContent): void {
    // 遍历所有键尝试更新
    Object.keys(newContent).map(key => {
        // 如果没有值或者当前数据源不包含该键就不更新
        if (!newContent[key] || !(key in currentPageContent)) return

        currentPageContent[key] = newContent[key]
    })
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

    const newContent = []
    const newQueryContent = []

    // 找到所有匹配的翻译源
    for (const page of pages) {
        const matched = page.hashs.find(hash => currentHash.startsWith(hash))
        if (!matched) continue

        // 根据是否由 selector 分开存储
        page.content.forEach(content => {
            if (content.selector) newQueryContent.push(content)
            else newContent.push(content)
        })
    }
    
    // 更新当前存储
    currentPageContent.hash = currentHash
    currentPageContent.content = newContent
    currentPageContent.queryContent = newQueryContent

    return currentPageContent
}