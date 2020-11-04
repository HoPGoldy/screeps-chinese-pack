import { translateMultiple } from 'utils'

const OVERVIEW_HEADER: MultipleMap = {
    'Control<br>points': '控制点数',
    'Energy<br>harvested': '能量采集',
    'Energy<br>on construct': '能量 - 建筑消耗',
    'Energy<br>on creeps': '能量 - 孵化消耗',
    'Creeps<br>produced': 'creep 孵化',
    'Creeps<br>lost': 'creep 损失',
    'Power<br>processed': 'power 处理'
}

const content: PageContent = {
    hashs: ['#!/overview'],
    content: [
        { 'en-US': 'Overview', 'zh-CN': '总览' },

        { 'en-US': 'Global Control Level', 'zh-CN': '全局控制等级' },
        { 'en-US': 'Global Power Level', 'zh-CN': '全局超能等级' },
        { 'en-US': 'Manage Power Creeps', 'zh-CN': '管理 power creep' },
        { 'en-US': 'Stats Period', 'zh-CN': '统计时长', 'reuse': true },

        { 'en-US': 'Graph:', 'zh-CN': '图表:', 'reuse': true },

        { 'en-US': 'Power processed', 'zh-CN': 'power 处理', 'reuse': true },
        { 'en-US': 'Control points', 'zh-CN': '控制点数', 'reuse': true },
        { 'en-US': 'Energy harvested', 'zh-CN': '能量采集', 'reuse': true },
        { 'en-US': 'Energy spent on construction', 'zh-CN': '能量 - 建筑消耗', 'reuse': true },
        { 'en-US': 'Energy spent on creeps', 'zh-CN': '能量 - 孵化消耗', 'reuse': true },
        { 'en-US': 'Creeps produced', 'zh-CN': 'creep 孵化', 'reuse': true },
        { 'en-US': 'Creeps lost', 'zh-CN': 'creep 损失', 'reuse': true },
        { 'en-US': 'Power processed', 'zh-CN': 'power 处理', 'reuse': true },

        {
            'selector': 'body > div.top-content.ng-scope > div.page-content.ng-scope > section > div.overview-block.ng-scope > div.overview-rooms.overview-rooms-grid.ng-scope > div > a > div > i',
            'zh-CN': (el: HTMLElement) => {
                el.title = '查看房间总览'
            }
        },
        {
            'selector': 'body > div.top-content.ng-scope > div.page-content.ng-scope > section > app-profile-stats > div > div > div > div.profile-stat-title',
            'zh-CN': translateMultiple(OVERVIEW_HEADER)
        }
    ]
}

export default content
