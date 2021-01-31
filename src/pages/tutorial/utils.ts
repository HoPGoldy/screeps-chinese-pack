import { trim } from 'utils'

/**
 * 翻译 Objective 元素
 * 
 * 目标元素（Objective）是指教程中加粗的文本，分为以下两种：
 * - 目标型元素：指示下一步应该做什么（例如：点击控制台面板）
 * - 文档型元素：一个列表，列出了相关的文档
 * 
 * @param contents 正文替换内容
 * @param linkHrefs 链接替换内容
 * @returns 用于翻译 Objective 元素的内容
 */
export const getObjectiveTranslationContent = function (contents: MultipleMap, linkHrefs: MultipleMap): TranslationContent[] {
    const contentsIndex = Object.keys(contents)

    return [
        // 翻译所有行动目标，注意这里的选择器是目标元素最前面的小箭头，向右的就作为行动目标解析
        {
            'selector': '.objective > .fa-caret-right',
            'zh-CN': (el: HTMLElement) => {
                // 获取到原始对象
                const objectiveEl = el.parentElement
                // 倒叙匹配翻译文本，因为前面有个小箭头，匹配起来会更浪费性能
                const targetContentKey = contentsIndex.find(key => trim(objectiveEl.innerHTML).endsWith(key))
                if (!targetContentKey) return

                // 匹配成功，进行翻译，这里是肯定能取到值的，因为 targetContentKey 一定是 contents 的键
                const newContent = contents[targetContentKey]
                objectiveEl.innerHTML = objectiveEl.innerHTML.replace(targetContentKey, newContent)
            },
            'reuse': true,
            // 因为这里 selector 获取的是前面的小箭头，而这个是不会变的，所以需要跳过查重检查
            'ingnoreRepeatedCheck': true
        },

        // 翻译所有文档目标，注意这里的选择器是目标元素最前面的小箭头，向下的就作为文档目标解析
        {
            'selector': '.objective a',
            'zh-CN': (el: HTMLAnchorElement) => {
                // 翻译链接文本
                const newContent = contents[trim(el.innerHTML)]
                if (newContent) el.innerHTML = newContent

                // 翻译链接网址
                const newHref = linkHrefs[el.href]
                if (newHref) el.href = newHref
            },
            'reuse': true
        }
    ]
}

/**
 * 获取每个教程章节中都包含的 UI 翻译内容
 */
export const getBaseUIContent = function (): TranslationContent[] {
    return [
        { 'en-US': 'Back', 'zh-CN': '返回', 'reuse': true },
        { 'en-US': 'Start', 'zh-CN': '开始', 'reuse': true },
        { 'en-US': 'Next', 'zh-CN': '下一步', 'reuse': true },
        { 'en-US': 'Got it', 'zh-CN': '明白了', 'reuse': true },
        { 'en-US': 'Code', 'zh-CN': '代码', 'reuse': true },
        { 'en-US': 'Stay', 'zh-CN': '留在这里', 'reuse': true },
        { 'en-US': 'Documentation:', 'zh-CN': '文档：', 'reuse': true }
    ]
}
