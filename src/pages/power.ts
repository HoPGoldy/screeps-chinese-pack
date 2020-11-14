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

        {
            'selector': '._upgrade',
            'zh-CN': (el: HTMLElement) => {
                el.style.content = '升级'
            },
            'reuse': true
        },

        { 'en-US': 'lvl 1', 'zh-CN': '等级1', 'reuse': true },
        { 'en-US': 'lvl 2', 'zh-CN': '等级2', 'reuse': true },
        { 'en-US': 'lvl 3', 'zh-CN': '等级3', 'reuse': true },
        { 'en-US': 'lvl 4', 'zh-CN': '等级4', 'reuse': true },
        { 'en-US': 'lvl 5', 'zh-CN': '等级5', 'reuse': true },
        // pc技能
        // GENERATE_OPS
        { 'en-US': 'Generate', 'zh-CN': '生产 ', 'reuse': true },
        { 'en-US': 'ops resource units.', 'zh-CN': ' 单位的ops。', 'reuse': true },
        // OPERATE_EXTENSION
        { 'en-US': 'Instantly fill', 'zh-CN': '使用目标 (container, storage, terminal) 内的能量立即充满房间内 ', 'reuse': true },
        { 'en-US': 'of all extensions in the room using energy from the target structure (container, storage, or terminal).', 'zh-CN': ' 的 extension.', 'reuse': true },
        { 'en-US': 'Cooldown 50 ticks.', 'zh-CN': ' 冷却50 ticks。 ', 'reuse': true },
        { 'en-US': 'Range 3 squares.', 'zh-CN': '距离3格。 ', 'reuse': true },
        { 'en-US': 'Consumes 2 ops resource units.', 'zh-CN': '消耗2点 ops。', 'reuse': true }
    ]
}

export default content
