/**
 * 新版本地图
 * @see https://screeps.com/a/#!/map2/shard3
 */
const content: PageContent = {
    hashs: ['#!/map2'],
    content: [
        { 'en-US': 'Owner:', 'zh-CN': '所有者: ', 'reuse': true },
        { 'en-US': 'None', 'zh-CN': '无', 'reuse': true },
        { 'en-US': 'Safe mode', 'zh-CN': '安全模式', 'reuse': true },
        { 'en-US': 'Not available', 'zh-CN': '未开放', 'reuse': true },
        { 'en-US': 'Sign:', 'zh-CN': '签名: ', 'reuse': true },
        { 'en-US': 'Reservation:', 'zh-CN': '预定: ', 'reuse': true },
        { 'en-US': 'Mineral:', 'zh-CN': '矿物类型: ', 'reuse': true },
        { 'en-US': 'Density:', 'zh-CN': '储量: ', 'reuse': true },

        { 'en-US': 'Random Room', 'zh-CN': '随机房间', 'reuse': true },
        { 'en-US': 'Display', 'zh-CN': '展示项目：', 'reuse': true },
        { 'en-US': 'Owner control level', 'zh-CN': '房间拥有者房间控制等级', 'reuse': true },
        { 'en-US': 'Minerals', 'zh-CN': '矿物类型', 'reuse': true },
        { 'en-US': 'Settings', 'zh-CN': '设置', 'reuse': true },
        { 'en-US': 'Preferences', 'zh-CN': '偏好' },
        { 'en-US': 'Show player units', 'zh-CN': '显示玩家单位' },
        { 'en-US': 'Show map visuals', 'zh-CN': '显示地图视觉效果' },
        { 'en-US': 'Highlight claimable areas', 'zh-CN': '高亮可占领房间' },
        {
            'selector': '.__search > input',
            'zh-CN': (el: HTMLElement) => {
                el.setAttribute('placeholder', '通过房间名或玩家名来搜索 ...')
            }
        }
    ]
}

export default content
