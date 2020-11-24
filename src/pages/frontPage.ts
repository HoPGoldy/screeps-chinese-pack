const content: PageContent = {

    hashs: [],

    content: [
        { 'en-US': 'Status', 'zh-CN': '服务器状态', 'reuse': true },

        { 'en-US': 'MMO sandbox game for programmers', 'zh-CN': '给程序员的MMO沙盒游戏', 'reuse': true },
        { 'en-US': 'It means "scripting creeps"', 'zh-CN': '给程序员的MMO沙盒游戏', 'reuse': true },

        {
            'selector': 'section > nav > a',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace(
                    'Status',
                    '状态'
                )
            },
            'reuse': true
        },
        {
            'selector': 'section > div',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace(
                    'MMO sandbox game for programmers',
                    '给程序员的MMO沙盒游戏'
                )
            },
            'reuse': true
        }
    ]
}

export default content
