import { trim } from 'utils'

const content: PageContent = {
    hashs: ['#!/sim/tutorial'],
    content: [
        // 在 simTab 页里已经翻译了主要的标题文本，所以这里不再重复翻译
        { 'en-US': 'View scripts on GitHub', 'zh-CN': '在 GitHub 上查看代码' },

        { 'en-US': 'Game UI and basic scripting', 'zh-CN': '游戏 UI 与基础编程' },
        { 'en-US': 'Upgrading controller', 'zh-CN': '升级控制器' },
        { 'en-US': 'Building structures', 'zh-CN': '建造建筑' },
        { 'en-US': 'Auto-spawning creeps', 'zh-CN': '自动孵化 creep' },
        { 'en-US': 'Defending your room', 'zh-CN': '防守您的房间' },

        { 'en-US': 'Don\'t know how to code in JavaScript?', 'zh-CN': '不知道如何编写 JavaScript 代码？', 'reuse': true },
        { 'en-US': 'Check out this free interactive course!', 'zh-CN': '看看这个免费的互动教程！', 'reuse': true },
        { 'en-US': 'Ok', 'zh-CN': '确定', 'reuse': true },

        // 重玩章节提示，因为里边包含动态字符串（章节名），所以这里用选择器拿到并翻译
        {
            'selector': 'app-dlg-confirm > app-confirm > main > p',
            'zh-CN': (el: HTMLElement) => {
                const oldContent = trim(el.innerHTML)
                if (!oldContent.startsWith('This will remove your existing code from the')) return

                const tutorialName = oldContent.match(/"tutorial-\d{1,}"/g)
                el.innerHTML = `这将会移除 ${tutorialName} 分支上现存的代码，确定要重新开始这一教程部分么？`
            },
            'reuse': true
        }
    ]
}

export default content
