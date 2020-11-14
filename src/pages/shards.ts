const content: PageContent = {
    hashs: ['#!/shards'],
    content: [
        { 'en-US': 'Shards', 'zh-CN': '位面' },
        {
            'selector': '._back',
            'zh-CN': (el: HTMLElement) => {
                el.setAttribute('content', '选择世界')
            }
        },

        { 'en-US': 'World shards are isolated from each other and run your code separately.', 'zh-CN': ' 在世界中的不同位面是独立的，并且会分开运行你的代码。' },
        { 'en-US': 'Your creeps can travel between them using special portals.', 'zh-CN': '通过使用特殊的传送门。你的 creep 可以在不同位面间穿行。' },
        { 'en-US': 'Learn more', 'zh-CN': '了解更多' },

        {
            'selector': '.shard__title',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('shard', '位面')
            }
        },
        { 'en-US': 'claimable rooms', 'zh-CN': '可占领房间', 'reuse': true },
        { 'en-US': 'active players', 'zh-CN': '活跃玩家', 'reuse': true },
        { 'en-US': 'avg tick duration', 'zh-CN': '每 tick 平均时间', 'reuse': true },
        {
            'selector': '.shard__info-value span',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('No', '无限制')
            }
        },
        { 'en-US': 'CPU limit', 'zh-CN': 'CPU 限制', 'reuse': true },
        {
            'selector': '.shard__cpu',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('CPU assigned', 'CPU 分配')
            }
        },

        { 'en-US': 'Re-assign CPU', 'zh-CN': '重新分配 CPU' },

        { 'en-US': 'Unused CPU left:', 'zh-CN': '未使用的 CPU 剩余：' },
        { 'en-US': 'Save CPU', 'zh-CN': '保存 CPU 分配' },
        { 'en-US': 'Cancel', 'zh-CN': '取消' }
    ]
}

export default content
