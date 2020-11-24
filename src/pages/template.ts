const content: PageContent = {
    /**
     * 将该页内容应用到哪些 hash 路由中
     * 
     * 在页面切换时会通过首匹配该 hash 来选择哪些翻译源是适用于该页面的，
     * 可以通过填写多个来进行复用，不同的翻译源可以通过填写相同的 hash，在翻译时会自动进行组合。
     */
    hashs: ['#!/overview'],

    /**
     * 翻译的内容
     * 
     * 在页面内容发生变更时，翻译器会提取所有变更的 html 元素中的内容，
     * 并将其 **去除前后空白字符** 和下文中指定的翻译原文进行匹配，匹配成功则进行翻译
     */
    content: [
        /**
         * 基础用例
         * 
         * 通过在 'en-US' 中指定原文，在 'zh-CN' 中指定汉化文本来进行翻译
         */
        { 'en-US': 'Overview', 'zh-CN': '总览' },

        /**
         * 复用翻译项
         * 
         * 默认情况下一个翻译内容只会被使用一次，当该项翻译会用在多个地方时（或者存在于可以重复打开的弹窗中），可以指定 reuse 来进行复用，
         * 又或者当你使用基础用例写完之后发现文本并没有翻译（页面拿去翻译某个你没看到的文本了），就可以尝试加上该选项
         */
        { 'en-US': 'Stats Period', 'zh-CN': '统计时长', 'reuse': true },

        /**
         * 自定义翻译内容
         * 
         * 你可以传入一个函数来进行更复杂的翻译操作
         * 函数接受一个字符串（原文），并返回一个新的字符串（翻译后的内容）
         */
        {
            'en-US': 'Stats Period',
            'zh-CN': (oldContent: string) => `统计时长（${oldContent}）`
        },

        /**
         * 使用正则匹配翻译内容
         * 
         * 当某个元素无法通过简单的文本对比匹配时（例如 "shard3 / room W47S6" > "shard3 / 房间 W12N12"）
         * 就可以通过传入一个正则来进行匹配
         */
        {
            'en-US': /You have \d+ experimentation periods left/,
            'zh-CN': (text: string) => text.replace('You have', '你还剩余').replace('experimentation periods left', '个实验期')
        },

        /**
         * 使用 css 选择器获取元素
         * 
         * 当一段内容中包含 html 标签时（插入了 <br> 或者一些 <b> 之类的文本格式化标签），翻译器会将其拆分成多段文本进行一一匹配，
         * 此时会导致翻译内容碎片化，所以我们可以通过传入 selector 字段来直接获取到对应的元素，并进行自定义翻译
         * 
         * 然后，通过向 'zh-CN' 传入一个函数，函数接受匹配到的 HTML 元素，然后就可以自己对其进行处理
         * 注意！**当指定了 selector 时，翻译项传入的函数接受的一定是 HTML 元素（不指定 selector 时接收到的是 string）**
         */
        {
            'selector': '.tutorial-content.ng-scope > section > p',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace(
                    'use this button or <strong>Ctrl+Enter</strong>.',
                    '使用 <strong>Ctrl+Enter</strong> 来向游戏提交代码。'
                )
            }
        }
    ]
}

export default content
