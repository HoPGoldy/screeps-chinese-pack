const content: PageContent = {
    hashs: ['#!/overview/power'],

    content: [
        // 无Power Creep时界面
        {
            'selector': 'body > app2-router-outlet > app-power-base > app-power-creeps > section > p:nth-child(6)',
            'zh-CN': '你还没有 Power Creeps，需要一个你账号内空余的超能等级来创建一个新的 Power Creep'
        },
        // { 'en-US': 'You have no Power Creeps yet. ', 'zh-CN': '你还没有 Power Creeps' },
        // { 'en-US': 'You need 1 free Power Level in your account to create a new Power Creep. ', 'zh-CN': '需要一个你账号内空余的超能等级来创建一个新的 Power Creep' },
        { 'en-US': 'Create creep', 'zh-CN': '创建 creep' },
        { 'en-US': 'Learn more', 'zh-CN': '了解更多' },

        // 有Power Creep时界面
        { 'en-US': 'Back to Overview', 'zh-CN': '返回总览' },
        {
            'selector': 'body > app2-router-outlet > app-power-base > app-power-creeps > section > app-power-level-tool > div:nth-child(1) > p',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('Global Power Level:', '全局超能等级：')
            }
        },
        {
            'selector': 'body > app2-router-outlet > app-power-base > app-power-creeps > section > app-power-level-tool > div:nth-child(1) > div > a',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('You have', '你还剩余')
                el.innerHTML = el.innerHTML.replace('experimentation periods left', '个实验期')
            }
        },
        { 'en-US': 'Collapse all', 'zh-CN': '收起所有', 'reuse': true },
        { 'en-US': 'Expand all', 'zh-CN': '展开所有', 'reuse': true },
        { 'en-US': 'Create new creep', 'zh-CN': '创建新的 creep' },
        { 'en-US': 'not spawned', 'zh-CN': '未孵化', 'reuse': true },
        // { 'en-US': 'operator', 'zh-CN': '行家', 'reuse': true },
        {
            'selector': '.creep-char creep-char--xp',
            'zh-CN': (el: HTMLElement) => {
                el.style.content = '生命值'
            },
            'reuse': true
        },
        {
            'selector': '._upgrade',
            'zh-CN': (el: HTMLElement) => {
                el.style.content = '升级'
            },
            'reuse': true
        },
        {
            'selector': '._message --alive',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('in ', '在 ')
            },
            'reuse': true
        },
        { 'en-US': 'lvl 1', 'zh-CN': '等级1', 'reuse': true },
        { 'en-US': 'lvl 2', 'zh-CN': '等级2', 'reuse': true },
        { 'en-US': 'lvl 3', 'zh-CN': '等级3', 'reuse': true },
        { 'en-US': 'lvl 4', 'zh-CN': '等级4', 'reuse': true },
        { 'en-US': 'lvl 5', 'zh-CN': '等级5', 'reuse': true }
    ]
}

export default content
