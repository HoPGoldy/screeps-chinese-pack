/**
 * 账户管理入口页面
 * @see https://screeps.com/a/#!/account
 */
const content: PageContent = {
    hashs: ['#!/account'],
    content: [
        { 'en-US': 'Account', 'zh-CN': '账户' },
        { 'en-US': 'Notifications', 'zh-CN': '通知' },
        { 'en-US': 'Player name', 'zh-CN': '玩家昵称' },
        { 'en-US': 'Badge', 'zh-CN': '徽标' },
        { 'en-US': 'E-mail', 'zh-CN': '邮箱' },
        { 'en-US': 'Password', 'zh-CN': '密码', 'reuse': true },
        { 'en-US': 'Auth tokens', 'zh-CN': '验证令牌' },
        {
            'en-US': 'Keep yourself notified about what is happening in the game.',
            'zh-CN': '让自己时刻了解游戏中发生了什么。'
        },
        { 'en-US': 'Learn more', 'zh-CN': '了解更多', 'reuse': true },
        {
            'en-US': 'Link your Steam account to use the same account in both web and Steam versions of the game.',
            'zh-CN': '关联您的 Steam 账户来同步 Web 和 Steam 版本的游戏内容。'
        },
        {
            'en-US': 'You can link your GitHub account and automatically pull code to Screeps from any of your GitHub repositories.',
            'zh-CN': '您可以关联您的 Github 账户并从任何仓库中自动推送代码到 Screeps。'
        },

        { 'en-US': 'CPU Unlock', 'zh-CN': 'CPU 解锁', 'reuse': true },
        { 'en-US': 'CPU Unlock:', 'zh-CN': 'CPU 解锁：', 'reuse': true },

        { 'en-US': 'Notifications enabled', 'zh-CN': '启用通知' },
        { 'en-US': 'Send interval', 'zh-CN': '通知发送间隔', 'reuse': true },
        { 'en-US': 'Send when online', 'zh-CN': '在线时是否发送', 'reuse': true },
        { 'en-US': 'Notify on errors', 'zh-CN': '代码异常时通知', 'reuse': true },
        { 'en-US': 'Notify on new messages', 'zh-CN': '有新消息时通知', 'reuse': true },

        // steam 关联
        {
            'en-US': 'Do you really want to unlink your Steam account?',
            'zh-CN': '您确定要解除和 Steam 账户的关联么？',
            'reuse': true
        },
        { 'en-US': 'LINK TO STEAM', 'zh-CN': '关联至 STEAM', 'reuse': true },
        { 'en-US': 'Steam user', 'zh-CN': 'Steam 用户' },
        { 'en-US': 'Steam profile link visible', 'zh-CN': 'Steam 个人资料是否可见' },

        // github 关联
        {
            'en-US': 'Do you really want to unlink your GitHub account?',
            'zh-CN': '您确定要解除和 GitHub 账户的关联么？',
            'reuse': true
        },
        { 'en-US': 'LINK TO GITHUB', 'zh-CN': '关联至 GITHUB', 'reuse': true },
        { 'en-US': 'GitHub user', 'zh-CN': 'GitHub 用户' },
        { 'en-US': 'Sync from repository', 'zh-CN': '启用同步的仓库' },
        { 'en-US': 'Not set', 'zh-CN': '未设置' },

        { 'en-US': 'Cancel', 'zh-CN': '取消', 'reuse': true },
        { 'en-US': 'OK', 'zh-CN': '确定', 'reuse': true },

        { 'en-US': 'Learn how to commit scripts from local machine', 'zh-CN': '了解如何从本地机器提交代码' }
    ]
}

export default content
