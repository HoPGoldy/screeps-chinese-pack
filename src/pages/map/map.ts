import { translateMultiple } from 'utils'

/**
 * 图表右上角的下拉框选项
 */
const GRAPH_SELECT_LIST: MultipleMap = {
    'None': '无',
    'Owner control level': '房间拥有者房间控制等级',
    'Claimable': '是否可被占领',
    'Minerals': '矿物类型',
    'Power enabled': '可否使用 Power 技能',
    'Control points for the last 1 hour': '过去1小时控制点数增长',
    'Control points for the last 24 hours': '过去24小时控制点数增长',
    'Control points for the last 7 days': '过去7天控制点数增长',
    'Energy harvested for the last 1 hour': '过去1小时能量采集',
    'Energy harvested for the last 24 hours': '过去24小时能量采集',
    'Energy harvested for the last 7 days': '过去7天能量采集',
    'Energy spent on construction for the last 1 hour': '过去1小时的能量 - 建筑消耗',
    'Energy spent on construction for the last 24 hours': '过去24小时的能量 - 建筑消耗',
    'Energy spent on construction for the last 7 days': '过去7天的能量 - 建筑消耗',
    'Energy spent on creeps for the last 1 hour': '过去1小时的能量 - 孵化消耗',
    'Energy spent on creeps for the last 24 hours': '过去24小时的能量 - 孵化消耗',
    'Energy spent on creeps for the last 7 days': '过去7天的能量 - 孵化消耗',
    'Creeps produced for the last 1 hour': '过去1小时的 creep 孵化',
    'Creeps produced for the last 24 hours': '过去24小时的 creep 孵化',
    'Creeps produced for the last 7 days': '过去7天的 creep 孵化',
    'Creeps lost for the last 1 hour': '过去1小时的 creep 损失',
    'Creeps lost for the last 24 hours': '过去24小时的 creep 损失',
    'Creeps lost for the last 7 days': '过去7天的 creep 损失',
    'Power processed for the last 1 hour': '过去1小时的 power 处理',
    'Power processed for the last 24 hours': '过去24小时的 power 处理',
    'Power processed for the last 7 days': '过去7天的 power 处理'
}

/**
 * 旧版本地图
 * @see https://screeps.com/a/#!/map/shard3
 */
const content: PageContent = {
    hashs: ['#!/map/'],
    content: [
        {
            'en-US': 'Check out alpha version of the new world map with support of Decorations and Map Visuals (coming soon)',
            'zh-CN': '切换为支持装饰与地图可视化（即将来临）的世界地图 a 测版本'
        },
        {
            'selector': '.room-search > input',
            'zh-CN': (el: HTMLElement) => {
                el.setAttribute('placeholder', '通过房间名或玩家名来搜索 ...')
            },
            'reuse': true
        },

        { 'en-US': 'Display:', 'zh-CN': '展示项目: ', 'reuse': true },
        { 'en-US': 'Toggle units', 'zh-CN': '开关单位显示', 'reuse': true },
        { 'en-US': 'Owner:', 'zh-CN': '所有者: ', 'reuse': true },
        { 'en-US': 'None', 'zh-CN': '无', 'reuse': true },
        /* {
            'selector': 'map-float-info .room-novice.ng-binding.ng-scope',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('Novice area', '新手区')
                el.innerHTML = el.innerHTML.replace('days left', '天剩余')
            },
            'reuse': true
        }, */
        /* {
            'selector': '.room-name.ng-binding',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('Room', '房间')
            },
            'reuse': true
        }, */
        // { 'en-US': 'Room', 'zh-CN': '房间', 'reuse': true },
        { 'en-US': 'Safe mode', 'zh-CN': '安全模式', 'reuse': true },
        { 'en-US': 'Not available', 'zh-CN': '未开放', 'reuse': true },
        { 'en-US': 'Sign:', 'zh-CN': '签名: ', 'reuse': true },
        { 'en-US': 'Reservation:', 'zh-CN': '预定: ', 'reuse': true },
        { 'en-US': 'Mineral:', 'zh-CN': '矿物类型: ', 'reuse': true },
        { 'en-US': 'Density:', 'zh-CN': '储量: ', 'reuse': true },
        { 'en-US': 'Power enabled:', 'zh-CN': '可否使用 Power 技能: ', 'reuse': true },
        { 'en-US': 'Control points:', 'zh-CN': '控制点数增长: ', 'reuse': true },
        { 'en-US': 'Energy harvested:', 'zh-CN': '能量采集: ', 'reuse': true },
        { 'en-US': 'Energy spent:', 'zh-CN': '能量消耗: ', 'reuse': true },
        { 'en-US': 'Body parts produced:', 'zh-CN': '身体部件生产数量: ', 'reuse': true },
        { 'en-US': 'Body parts lost:', 'zh-CN': '身体部件损失数量: ', 'reuse': true },
        { 'en-US': 'Power processed:', 'zh-CN': 'power 精炼: ', 'reuse': true },
        // 未选择房间时
        { 'en-US': 'Welcome to the', 'zh-CN': '欢迎来到 ', 'reuse': true },
        { 'en-US': 'screeps world', 'zh-CN': 'SCREEPS 世界', 'reuse': true },
        { 'en-US': 'Choose a room to found your colony.', 'zh-CN': '选择一个房间来建立您的殖民地', 'reuse': true },
        { 'en-US': 'First time?', 'zh-CN': '第一次尝试? ', 'reuse': true },
        { 'en-US': 'See tips how to choose', 'zh-CN': '看看这个帮您选择的小贴士', 'reuse': true },
        { 'en-US': 'OK', 'zh-CN': '好的', 'reuse': true },
        { 'en-US': 'Select your room', 'zh-CN': '挑选您的房间', 'reuse': true },
        { 'en-US': 'Another area', 'zh-CN': '另一个区域', 'reuse': true },
        { 'en-US': 'Random room', 'zh-CN': '随机房间', 'reuse': true },
        {
            'selector': '.stats > div:nth-child(2) > span',
            'zh-CN': translateMultiple({
                'Ultra': '超高',
                'High': '高',
                'Moderate': '中等',
                'Low': '低'
            }),
            'protect': true,
            'reuse': true
        },
        // 翻译下拉框当前选中值
        {
            'selector': 'button > span.toggle-text.ng-scope > span > b',
            'zh-CN': translateMultiple(GRAPH_SELECT_LIST),
            'reuse': true
        },
        // 翻译下拉框选项
        {
            'selector': 'a.ng-binding.ng-scope',
            'zh-CN': translateMultiple(GRAPH_SELECT_LIST),
            'reuse': true
        },

        { 'en-US': 'Room not found', 'zh-CN': '未找到该房间' }
    ]
}

export default content
