import { translateMultiple } from 'utils'

/**
 * 中间横排的信息一览
 */
const OVERVIEW_HEADER: MultipleMap = {
    'Control<br>points': '控制点数',
    'Energy<br>harvested': '能量采集',
    'Energy<br>on construct': '能量 - 建筑消耗',
    'Energy<br>on creeps': '能量 - 孵化消耗',
    'Creeps<br>produced': 'creep 孵化',
    'Creeps<br>lost': 'creep 损失',
    'Power<br>processed': 'power 处理'
}

/**
 * 图表右上角的下拉框选项
 */
const GRAPH_SELECT_LIST: MultipleMap = {
    'Power processed': 'power 处理',
    'Control points': '控制点数',
    'Energy harvested': '能量采集',
    'Energy spent on construction': '能量 - 建筑消耗',
    'Energy spent on creeps': '能量 - 孵化消耗',
    'Creeps produced': 'creep 孵化',
    'Creeps lost': 'creep 损失'
}

/**
 * 获取翻译总览数据统计
 */
export const getOverviewHeaderContent = function (): TranslationContent {
    return {
        'selector': '.profile-stat-title',
        'zh-CN': translateMultiple(OVERVIEW_HEADER),
        'reuse': true
    }
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
        { 'en-US': 'View leaderboard', 'zh-CN': '查看排行榜', 'reuse': true },

        getOverviewHeaderContent(),
        // 翻译下拉框当前选中值
        {
            'selector': 'button > span.toggle-text.ng-scope > span',
            'zh-CN': translateMultiple(GRAPH_SELECT_LIST),
            'reuse': true
        },
        // 翻译下拉框选项
        {
            'selector': 'a.ng-binding.ng-scope',
            'zh-CN': translateMultiple(GRAPH_SELECT_LIST),
            'reuse': true
        }
    ]
}

export default content
