import { dontTranslate } from 'utils'

const content: PageContent = {
    hashs: ['#!/'],
    content: [
        // 阻止翻译右上角的 CPU 及内存使用量
        dontTranslate('.cpu > .sysbar-title > strong'),
        dontTranslate('.mem > div.sysbar-title > strong'),

        { 'en-US': 'Persistent world:', 'zh-CN': '永恒世界：', 'reuse': true },
        { 'en-US': 'Overview', 'zh-CN': '总览', 'reuse': true },
        { 'en-US': 'World', 'zh-CN': '世界', 'reuse': true },
        { 'en-US': 'Market', 'zh-CN': '市场', 'reuse': true },
        { 'en-US': 'Inventory', 'zh-CN': '库存', 'reuse': true },

        { 'en-US': 'Documentation', 'zh-CN': '文档', 'reuse': true },
        { 'en-US': 'Training', 'zh-CN': '练习', 'reuse': true },
        { 'en-US': 'Public Test Realm', 'zh-CN': '公共测试服务器', 'reuse': true },

        { 'en-US': 'Messages', 'zh-CN': '消息', 'reuse': true },
        { 'en-US': 'Report a problem', 'zh-CN': '问题上报', 'reuse': true },

        { 'en-US': 'Blog', 'zh-CN': '博客', 'reuse': true },
        { 'en-US': 'Forum', 'zh-CN': '论坛', 'reuse': true },

        { 'en-US': 'Terms of Service', 'zh-CN': '服务条款', 'reuse': true },
        { 'en-US': 'Privacy policy', 'zh-CN': '隐私政策', 'reuse': true },

        { 'en-US': 'Respawn', 'zh-CN': '重生', 'reuse': true },
        { 'en-US': 'View profile', 'zh-CN': '查看资料', 'reuse': true },
        { 'en-US': 'Manage account', 'zh-CN': '账户管理', 'reuse': true },
        { 'en-US': 'Sign out', 'zh-CN': '登出', 'reuse': true },

        { 'en-US': 'New update is available', 'zh-CN': '有可用的更新' },
        { 'en-US': 'RELOAD', 'zh-CN': '重新加载' },
        { 'en-US': 'Your CPU is limited', 'zh-CN': '您的 CPU 受限' },
        { 'en-US': 'Order a subscription here', 'zh-CN': '点此购买一个订阅 ' },

        // 登陆弹窗
        { 'en-US': 'Sign In', 'zh-CN': '登陆', 'reuse': true },
        { 'en-US': 'E-mail or username', 'zh-CN': '邮箱或用户名', 'reuse': true },
        { 'en-US': 'Password', 'zh-CN': '密码', 'reuse': true },
        { 'en-US': 'SIGN IN', 'zh-CN': '登陆', 'reuse': true },
        { 'en-US': 'OR', 'zh-CN': '或', 'reuse': true },
        { 'en-US': 'I forgot my password', 'zh-CN': '我忘记密码了', 'reuse': true },
        { 'en-US': 'Create a new account', 'zh-CN': '创建一个新账户', 'reuse': true },
        { 'en-US': 'Account credentials are invalid', 'zh-CN': '账号验证失败', 'reuse': true },

        // 右上角登陆按钮
        { 'en-US': 'Sign in', 'zh-CN': '登陆 ', 'reuse': true },
        { 'en-US': 'or register', 'zh-CN': '或注册', 'reuse': true },

        { 'en-US': 'Global Control Level has been increased!', 'zh-CN': '全局控制等级（GCL）已提升！' },
        { 'en-US': 'You can control', 'zh-CN': '您现在可以控制 ' },
        { 'en-US': /\d+ rooms/, 'zh-CN': (text: string) => text.replace('rooms', '个房间') },
        { 'en-US': 'now.', 'zh-CN': '了。' },

        // 阻止翻译左侧边栏头部的赛季服倒计时
        {
            'selector': 'app-time-left',
            /**
             * 因为这个元素会因为未知原因销毁重建一次，导致单纯通过 dontTranslate 设置的禁止翻译被清掉了
             * 所以这里加个延迟，等元素重建完成后再添加禁止翻译
             */
            'zh-CN': () => setTimeout(() => {
                const el = document.body.querySelector('app-time-left')
                el.stopTranslateSearch = true
            }, 1000)
        },

        // 重生确认框
        {
            'en-US': 'All your buildings and creeps will become unowned so that you\n        can reset your spawn in any vacant room on the map.',
            'zh-CN': '您将失去所有的建筑和 creep，然后您就可以在地图上的任意无主房间重新放置 spawn。',
            'reuse': true
        },
        { 'en-US': 'Learn more', 'zh-CN': '了解更多', 'reuse': true },
        { 'en-US': 'Note:', 'zh-CN': '注意：', 'reuse': true },
        {
            'en-US': 'you will NOT be able to spawn again in the same\n        room within 3 days since the initial spawn placement!',
            'zh-CN': '在放置第一个 spawn 之后的三天内，您将无法再次重生在相同房间中。',
            'reuse': true
        },
        { 'en-US': 'Cancel', 'zh-CN': '取消', 'reuse': true }
    ]
}

export default content
