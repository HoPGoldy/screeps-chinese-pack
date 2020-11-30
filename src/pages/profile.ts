import { getOverviewHeaderContent } from './overview'

const content: PageContent = {
    hashs: ['#!/profile'],
    content: [
        { 'en-US': 'View Steam profile', 'zh-CN': '查看 Steam 个人资料' },
        { 'en-US': 'My overview', 'zh-CN': '我的总览' },
        { 'en-US': 'Current month', 'zh-CN': '本月统计' },
        { 'en-US': 'EXPANSION', 'zh-CN': '扩张' },
        { 'en-US': 'CONTROL', 'zh-CN': '控制' },
        { 'en-US': 'POINTS', 'zh-CN': '点数', 'reuse': true },
        { 'en-US': 'RANK', 'zh-CN': '排名', 'reuse': true },
        { 'en-US': 'Show all', 'zh-CN': '显示全部', 'reuse': true },
        { 'en-US': 'Hide', 'zh-CN': '收起', 'reuse': true },

        getOverviewHeaderContent()
    ]
}

export default content
