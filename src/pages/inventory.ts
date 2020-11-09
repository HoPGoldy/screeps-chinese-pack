import { translateMultiple } from 'utils'

/**
 * 中间横排的信息一览
 */
const TYPE_SELECT_LIST: MultipleMap = {
    'All': '全部',
    'Badge': '徽章',
    'Creep': 'creep皮肤',
    'Graffiti': '涂鸦',
    'Wall texture': '墙壁材质',
    'Floor texture': '地面材质'
}

const content: PageContent = {

    hashs: ['#!/inventory'],
    content: [
        { 'en-US': 'This section contains ephemeral resources that are stored directly in your account.', 'zh-CN': '这里展示了直接存储在您帐户中的临时资源。' },
        // 翻译下拉框选项
        {
            'selector': '#cdk-overlay-0 > div > div > span',
            'zh-CN': translateMultiple(TYPE_SELECT_LIST),
            'queryWith': document.body,
            'reuse': true
        }
    ]
}

export default content
