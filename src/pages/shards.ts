const content: PageContent = {
    hashs: ['#!/shards'],
    content: [
        { 'en-US': 'Shards', 'zh-CN': '位面 Shards' },
        {
            'selector': '._back',
            'zh-CN': (el: HTMLElement) => {
                el.setAttribute('content', '选择世界')
            }
        },

        { 'en-US': 'World shards are isolated from each other and run your code separately.', 'zh-CN': ' 在世界中的不同位面是独立的，并且会分开运行您的代码。' },
        { 'en-US': 'Your creeps can travel between them using special portals.', 'zh-CN': '通过使用特殊的传送门。您的 creep 可以在不同位面间穿行。' },
        { 'en-US': 'Learn more', 'zh-CN': '了解更多' },

        { 'en-US': 'claimable rooms', 'zh-CN': '可占领房间', 'reuse': true },
        { 'en-US': 'active players', 'zh-CN': '活跃玩家', 'reuse': true },
        { 'en-US': 'avg tick duration', 'zh-CN': '每 tick 平均时间', 'reuse': true },
        { 'en-US': 'CPU limit', 'zh-CN': 'CPU 限制', 'reuse': true },
        // 重新分配后不会立刻显示，暂时隐藏
        // { 'en-US': /CPU assigned/, 'zh-CN': (text: string) => text.replace('assigned', '被分配'), 'reuse': true, 'protect': true },
        { 'en-US': 'Re-assign CPU', 'zh-CN': '重新分配 CPU', 'reuse': true },

        { 'en-US': 'Unused CPU left:', 'zh-CN': '未使用的 CPU 剩余：' },
        { 'en-US': 'Save CPU', 'zh-CN': '保存 CPU 分配' },
        { 'en-US': 'Cancel', 'zh-CN': '取消' },

        // 分配确认提示
        { 'en-US': 'You\'re going to re-assign your CPU to the following shards:', 'zh-CN': '您将要重新分配您的 CPU 到以下 shard：', 'reuse': true },
        { 'en-US': 'You will not be able to change these settings in the next', 'zh-CN': '在接下来的 ', 'reuse': true },
        { 'en-US': /hours/, 'zh-CN': (text: string) => text.replace('hours', '小时里您将无法再次编辑该配置'), 'reuse': true },
        { 'en-US': 'Do you want to proceed?', 'zh-CN': '确定要继续么？', 'reuse': true },

        { 'en-US': 'Ok', 'zh-CN': '确定', 'reuse': true },
        { 'en-US': 'Cancel', 'zh-CN': '取消', 'reuse': true }
    ]
}

export default content
