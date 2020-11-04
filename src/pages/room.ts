const TOOLTIP_LABEL: MultipleMap = {
    'World': '世界',
    'Room overview': '房间总览',
    'Replay room history': '回放房间录像',
    'View / Pan': '查看 / 拖动',
    'Create Flag': '创建旗帜',
    'Construct': '建筑',
    'Pause&nbsp;tracking': '停止追踪',
    'Clear': '清空日志',
    'Main&nbsp;memory': '主内存',
    'Segments': '分段内存'
}

const content: PageContent = {
    hashs: ['#!/room', '#!/sim/custom', '#!/sim/survival', '#!/sim/tutorial/'],
    content: [
        {
            'selector': 'div.tooltip.ng-scope.ng-isolate-scope > div.tooltip-inner.ng-binding',
            'zh-CN': (el: HTMLElement) => {
                const newContent = TOOLTIP_LABEL[el.innerHTML]
                if (newContent) {
                    el.innerHTML = newContent
                    // 某些中文的 tooltip 会每个字都换行，非常难看，所以指定一个宽度将其撑开
                    el.style.minWidth = `${18 * newContent.length}px`
                }
            },
            'reuse': true
        },

        // 下方 Script 面板
        { 'en-US': 'Script', 'zh-CN': '脚本' },
        { 'en-US': 'Branch:', 'zh-CN': '分支:', 'reuse': true },
        { 'en-US': 'Modules', 'zh-CN': '模块', 'reuse': true },
        { 'en-US': 'Choose active branch:', 'zh-CN': '选择活动分支', 'reuse': true },
        { 'en-US': 'Add normal module', 'zh-CN': '添加普通模块', 'reuse': true },
        { 'en-US': 'Add binary module', 'zh-CN': '添加二进制模块', 'reuse': true },
        {
            'selector': 'section > section > div:nth-child(2) > div.modules-list > form > input',
            'zh-CN': (el: HTMLInputElement) => {
                el.placeholder = '输入新模块名称...'
            },
            'reuse': true
        },
        // // 下方 Console 面板
        { 'en-US': 'Console', 'zh-CN': '控制台' },
        // // 下方 Memory 面板
        { 'en-US': 'Memory', 'zh-CN': '内存' },
        {
            'selector': 'div.tab-pane > .ng-scope > section > div:nth-child(2) > div > form > input',
            'zh-CN': (el: HTMLInputElement) => {
                el.placeholder = '添加新的内存监视路径，例如：creeps.John'
            },
            'reuse': true
        },
        { 'en-US': 'SEGMENT #:', 'zh-CN': '片段 #:', 'reuse': true },

        { 'en-US': 'Sign:', 'zh-CN': '签名:', 'reuse': true },

        // 右侧 panel 名
        { 'en-US': 'World Map', 'zh-CN': '世界地图' },
        // 入侵者面板
        { 'en-US': 'Invasion', 'zh-CN': '入侵' },
        { 'en-US': 'Type', 'zh-CN': '类型' },
        { 'en-US': 'Melee', 'zh-CN': '近战' },
        { 'en-US': 'Ranged', 'zh-CN': '远程' },
        { 'en-US': 'Healer', 'zh-CN': '治疗' },
        { 'en-US': 'Size', 'zh-CN': '大小' },
        { 'en-US': 'Small', 'zh-CN': '小型' },
        { 'en-US': 'Big', 'zh-CN': '大型' },
        { 'en-US': 'Boosted', 'zh-CN': '强化' },
        { 'en-US': 'Create an invader', 'zh-CN': '创造入侵者' },
        // 坐标面板
        { 'en-US': 'Cursor', 'zh-CN': '坐标' },
        { 'en-US': 'Terrain:', 'zh-CN': '地形' },
        // { 'en-US': 'plain', 'zh-CN': '平原', 'reuse': true },
        // { 'en-US': 'swamp', 'zh-CN': '沼泽', 'reuse': true },
        // { 'en-US': 'wall', 'zh-CN': '墙壁', 'reuse': true },
        // RoomObject 面板
        { 'en-US': 'Position:', 'zh-CN': '位置 (position):', 'reuse': true },
        { 'en-US': 'Hits:', 'zh-CN': '生命值 (hits):', 'reuse': true },
        { 'en-US': 'Owner:', 'zh-CN': '所有者 (owner):', 'reuse': true },
        { 'en-US': 'Energy:', 'zh-CN': '能量 (energy):', 'reuse': true },
        { 'en-US': 'Cooldown:', 'zh-CN': '冷却 (cooldown):', 'reuse': true },
        { 'en-US': 'Decay in:', 'zh-CN': '老化 (decay):', 'reuse': true },
        { 'en-US': 'Public:', 'zh-CN': '开放 (public):', 'reuse': true },
        { 'en-US': 'Name:', 'zh-CN': '名称 (name):', 'reuse': true },
        { 'en-US': 'Fatigue:', 'zh-CN': '疲劳 (fatigue):', 'reuse': true },
        { 'en-US': 'Time to live:', 'zh-CN': '剩余存活时间:', 'reuse': true },
        { 'en-US': 'Make public', 'zh-CN': '设为开放', 'reuse': true },
        { 'en-US': 'Make non-public', 'zh-CN': '设为非开放', 'reuse': true },
        { 'en-US': 'Notify me when attacked', 'zh-CN': '被攻击时通知我', 'reuse': true },
        { 'en-US': 'Destroy this structure', 'zh-CN': '摧毁该建筑', 'reuse': true },
        { 'en-US': 'Click again to confirm', 'zh-CN': '再次点击以确认', 'reuse': true },

        { 'en-US': 'Mineral:', 'zh-CN': '矿藏 (mineral):', 'reuse': true },
        { 'en-US': 'Density:', 'zh-CN': '丰度 (density):', 'reuse': true },
        { 'en-US': 'Amount:', 'zh-CN': '余量 (amount):', 'reuse': true },
        { 'en-US': 'Regeneration in:', 'zh-CN': '重新生成于:', 'reuse': true },
        { 'en-US': 'Learn more', 'zh-CN': '了解更多', 'reuse': true },
        { 'en-US': 'Build an extractor here to mine this mineral deposit.', 'zh-CN': '在此处建筑一个 extractor 以采集该矿藏。', 'reuse': true },
        { 'en-US': 'Amount:', 'zh-CN': '余量 (amount):', 'reuse': true },

        { 'en-US': 'Level:', 'zh-CN': '等级 (level):', 'reuse': true },
        { 'en-US': 'Safe modes available:', 'zh-CN': '剩余安全模式:', 'reuse': true },
        { 'en-US': 'Downgrade in:', 'zh-CN': '降级时间:', 'reuse': true },
        { 'en-US': 'Power enabled:', 'zh-CN': '是否启用 Power:', 'reuse': true },
        { 'en-US': 'Activate safe mode', 'zh-CN': '激活安全模式', 'reuse': true },
        { 'en-US': 'Unclaim', 'zh-CN': '取消占领', 'reuse': true }
    ]
}

export default content
