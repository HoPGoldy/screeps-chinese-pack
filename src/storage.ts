import pages from 'pages'
import { getNoQueryHash } from 'utils'

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
 * HTML 元素内容缓存
 * 
 * 会缓存上次翻译后的内容，如果下次获取元素发现没有变化就不会执行翻译
 */
export const contentCache = new Map<string, string>()


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
    Object.keys(newContent).forEach(key => {
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
export const updateSource = function (hash: string): CurrentPageContent {
    const currentHash = getNoQueryHash(hash)

    // 没有变更就不进行搜索
    if (currentHash === currentPageContent.hash) return currentPageContent

    const newContent = []
    const newQueryContent = []

    // 找到所有匹配的翻译源
    for (const page of pages) {
        const matched = page.hashs.find(pageHash => {
            // 如果 hash 为空的话就精确匹配，不然太多了
            if (currentHash === '') return currentHash === pageHash
            // 有 hash 的话就进行首匹配
            if (pageHash !== '') return currentHash.startsWith(pageHash)
            return false
        })

        if (matched === undefined) continue

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

    // 页面切换了，清空缓存
    contentCache.clear()

    return currentPageContent
}
