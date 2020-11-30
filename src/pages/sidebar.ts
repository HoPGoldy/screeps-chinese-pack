import { dontTranslate } from 'utils'

const content: PageContent = {
    hashs: ['#!/'],
    content: [
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

        // 阻止翻译右上角的 CPU 及内存使用量
        dontTranslate('.cpu > .sysbar-title > strong'),
        dontTranslate('.mem > div.sysbar-title > strong'),

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
        }
    ]
}

export default content
