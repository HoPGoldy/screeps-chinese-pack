/**
 * 文档翻译内容
 * 
 * 包含了翻译文本的正文（以语言文化代码为键的字符串）
 * 和一些应用于该条翻译的配置项
 */
type TranslationContent = {
    [Language in Languages]: string
} & {
    /**
     * 该翻译内容是否可以重用
     * 
     * 默认为 false，翻译模块会在应用本条翻译后将其从待翻译队列中移除以加快后续翻译速度
     * 设置为 true 后将不会移除，适用于在页面中出现多次的问题，例如按钮、label 等短文本
     */
    reuse?: boolean

    /**
     * 自定义文本元素
     * 
     * 如果需要对文本元素进行更高级的自定义，例如修改字体或动态调整内容，可以通过本回调完成
     * 
     * @param el 要进行更新的文本
     * @return 修改完成的新的 html 元素，该元素将会被直接替换到原有位置
     */
    custom?: (el: HTMLElement) => HTMLElement
}

/**
 * 所有支持的语种
 */
type Languages = 'en-US' | 'zh-CN'

/**
 * 页面翻译内容
 * 
 * 包含一整个页面的翻译内容（以 hash 的变化区分页面）
 * 会在页面变化时通过 hash 字段进行匹配，以此缩小翻译文本的范围
 */
interface PageContent {
    hashs: string[]
    content: TranslationContent[]
}

/**
 * 当前页面使用的翻译源
 * 
 * 和上面 PageContent 的区别在于这个的 hash 是完全等于当前页面的 hash 的
 * 在 hash 变更后会去搜索所有的 PageContent，并将匹配到的 content 都合并到这个对象的 content 下
 */
interface CurrentPageContent {
    hash: string
    content: TranslationContent[]
}

/**
 * hash 变化时触发的回调事件
 */
type HashChangeCallback = (newHash: string) => any

/**
 * 页面内容变化时触发的回调
 */
type ContentChangeCallback = (contentElement: HTMLElement) => any

/**
 * 翻译的方向
 * 将文本从 from 翻译到 to
 */
interface TranslationDirection {
    from: Languages
    to: Languages
}