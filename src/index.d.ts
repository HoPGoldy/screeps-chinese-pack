/* eslint-disable no-unused-vars */

/**
 * 文档翻译内容
 * 
 * 包含了翻译文本的正文（以语言文化代码为键的字符串）
 * 和一些应用于该条翻译的配置项
 */
type TranslationContent = {
    /**
     * 翻译内容
     * 
     * 当值为字符串时将直接替换到对应元素的 innerHTML
     * 值为函数时将执行该函数来对元素进行处理
     */
    [Language in Languages]?: string | TextUpdateCallback | ElementUpdateCallback
} & {
    /**
     * 该翻译内容是否可以重用
     * 
     * 默认为 false，翻译模块会在应用本条翻译后将其从待翻译队列中移除以加快后续翻译速度
     * 设置为 true 后将不会移除，适用于在页面中出现多次的问题，例如按钮、label 等短文本
     */
    reuse?: boolean

    /**
     * 文本元素 css 选择器
     * 
     * 当该值不为空时，模块会在每次页面更新时主动通过该选择器查找元素，并优先触发翻译
     */
    selector?: string
}

/**
 * 在元素上自定义添加的属性
 */
interface Element {
    /**
     * 该值为 true 时将阻止 getContentElement 函数继续向下的递归查找
     */
    stopTranslateSearch?: boolean
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
 * 要进行更新的新翻译内容
 * 
 * 会判断其键是否有值并进行局部更新
 */
interface UpdateNewContent {
    content?: TranslationContent[],
    queryContent?: TranslationContent[]
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

    /**
     * 包含 css 选择器的翻译对象
     * 
     * 会在页面更新时主动进行搜索
     */
    queryContent: TranslationContent[]
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
 * 元素更新时触发的回调
 * 
 * 参数是要更新的元素本身，你可以通过直接对其进行更新来设置一些元素属性（例如 title）
 */
type ElementUpdateCallback = BaseCallback<HTMLElement>

/**
 * 文本更新时触发的回调
 * 
 * 参数是原始的内容，回调的返回值将被作为新的内容
 */
type TextUpdateCallback = BaseCallback<string>

/**
 * 翻译回调的原始类型
 * 
 * 用于解决上面两个回调签名不兼容导致的无法调用的问题
 * @TODO 需要优化，调用时将入参指定为了诡异的 (HTMLElement & string）类型
 */
type BaseCallback<T extends HTMLElement | string = HTMLElement> = (updateTarget: T) => T extends HTMLElement ? any : T

/**
 * 翻译的方向
 * 将文本从 from 翻译到 to
 */
interface TranslationDirection {
    from: Languages
    to: Languages
}

/**
 * 多行翻译源
 * 
 * 键为翻译原文，值为翻译后的文本
 */
interface MultipleMap {
    [originContent: string]: string
}
