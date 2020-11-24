/**
 * 要被翻译的语种
 * 
 * 当 TranslationContent 中包含 selector 属性时，该设置将失效（因为翻译源由 selector 选择器指定了）
 */
export const TRANSLATE_FROM: Languages = 'en-US'

/**
 * 要翻译到的语种
 */
export const TRANSLATE_TO: Languages = 'zh-CN'

/**
 * 中文文档的域名
 */
export const DOCUMENT_CN = 'https://screeps-cn.gitee.io'

/**
 * 不进行翻译的元素对应的 css 选择器
 * 
 * 因为某些元素会频繁更新但是又不包含要翻译的内容（如倒计时），所以这里可以直接将其禁止翻译
 */
export const EXCEPT_ELEMENT: string[] = [
    // 右上角 cpu 显示
    '.cpu > .sysbar-title > strong',
    // 右上角内存显示
    '.mem > div.sysbar-title > strong',
    // 左侧边栏头部的赛季服倒计时
    'app-compile-content:nth-child(3) > ng-component > app-time-left',

    // 控制台消息一律不翻译
    '.console-messages-list',
    // 控制台消息的前缀（比如 [下午10:11:28]）
    '.console-messages-list > div > div',
    // 控制台信息内容
    '.console-message > .ng-binding',
    // 控制台信息
    '.console-message',

    // 代码一律不翻译
    '.ace_line',
    '.ace_layer.ace_marker-layer'
]
