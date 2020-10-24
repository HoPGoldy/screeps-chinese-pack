const content: PageContent = {
    hashs: [ '#!/sim' ],
    content: [
        { 'en-US': 'Simulation mode', 'zh-CN': '模拟模式' },
        {
            'en-US': 'In this mode your script runs not on the server, but locally on your machine, so that you can pause and debug it.',
            'zh-CN': '该模式下，您的代码将运行在本地机器而不是服务器上。因此，您可以暂停并对代码进行调试。'
        },

        { 'en-US': 'Tutorial', 'zh-CN': '教程' },
        {
            'en-US': 'Learn basic game concepts step by step.',
            'zh-CN': '逐步了解游戏中的基本概念。'
        },

        { 'en-US': 'Training', 'zh-CN': '练习' },
        // 练习的文本介绍里有个换行，很气
        {
            'selector': 'body > app2-router-outlet > app-simulation-mode > section:nth-child(2) > div:nth-child(4) > a > section',
            'zh-CN': '在一个预定义布局的虚拟房间中实践您的代码。'
        },
        
        { 'en-US': 'Custom', 'zh-CN': '自定义' },
        {
            'en-US': 'Modify the landscape, create any objects, and test your scripts playing for two virtual players at once.',
            'zh-CN': '修改地形、创建任何对象并同时操控两个虚拟玩家来测试您的代码。'
        }
    ]
}

export default content