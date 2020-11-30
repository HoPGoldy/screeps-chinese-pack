const content: PageContent = {
    hashs: ['#!/sim/custom', '#!/sim/survival', '#!/sim/tutorial/'],
    content: [
        // 自定义面板
        { 'en-US': 'Customize', 'zh-CN': '自定义房间设置', 'reuse': true },
        { 'en-US': 'Choose action:', 'zh-CN': '选择操作：', 'reuse': true },
        { 'en-US': 'Erase', 'zh-CN': '清除目标', 'reuse': true },
        // 建筑列表里也会被翻译，会有点怪，暂时不用
        // { 'en-US': 'Wall', 'zh-CN': 'Wall 地形', 'reuse': true },
        // { 'en-US': 'C. Wall', 'zh-CN': 'Wall 建筑', 'reuse': true },

        // 练习/模拟房间面板
        // ticks速度调整面板
        { 'en-US': 'Simulation Room', 'zh-CN': '模拟器房间', 'reuse': true },
        // {
        //     'selector': 'div.speed.ng-scope > span.ng-binding',
        //     'zh-CN': (el: HTMLElement) => {
        //         el.innerHTML = el.innerHTML.replace('Speed', '速度(Speed)')
        //     },
        //     'reuse': true
        // },
        { 'en-US': 'Leave simulation', 'zh-CN': '退出模拟器', 'reuse': true },

        // 玩家控制权面板
        { 'en-US': 'Player Control', 'zh-CN': '玩家控制', 'reuse': true },
        { 'en-US': 'Player 2', 'zh-CN': '玩家2', 'reuse': true },

        // 模拟器 controller
        { 'en-US': 'Increase level', 'zh-CN': '提升等级', 'reuse': true },
        { 'en-US': 'Decrease level', 'zh-CN': '降低等级', 'reuse': true }
    ]
}

export default content
