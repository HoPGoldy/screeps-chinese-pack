/**
 * 注册页
 * @see https://screeps.com/a/#!/register
 */
const content: PageContent = {
    hashs: ['#!/register'],
    content: [
        { 'en-US': 'Player Name', 'zh-CN': '玩家名' },
        { 'en-US': 'E-mail', 'zh-CN': '邮箱' },

        // 用户名
        {
            'en-US': 'Other players will see this unique name at your rooms, creeps, and structures. At least 3 alphanumeric characters.',
            'zh-CN': '其他玩家会在您的房间、creep 以及建筑上看到这个唯一的名字。需要至少三个数字或字母字符。',
            'reuse': true
        },
        {
            'en-US': /Minimum \d characters./,
            'zh-CN': (text: string) => text.replace('Minimum', '至少').replace('characters.', '个字符。'),
            'reuse': true
        },
        {
            'en-US': 'This name is already used by another user.',
            'zh-CN': '该名称已经被其他玩家使用了。',
            'reuse': true
        },
        {
            'en-US': 'Only alphanumeric characters are allowed.',
            'zh-CN': '仅允许使用数字或字母字符。',
            'reuse': true
        },

        // 邮箱
        {
            'en-US': 'You will be able to use this e-mail to notify yourself on custom events via in-game API. No spam, we promise.',
            'zh-CN': '您可以通过游戏内 API 向该邮箱发送邮件来提醒您自己游戏内发生了什么事，我们保证不会发送垃圾邮件。',
            'reuse': true
        },
        {
            'en-US': 'Must be a valid e-mail address.',
            'zh-CN': '必须为有效的邮箱地址。',
            'reuse': true
        },
        {
            'en-US': 'This e-mail is already used by another user.',
            'zh-CN': '该邮箱已经被其他玩家使用了。',
            'reuse': true
        },

        // 密码
        {
            'en-US': 'Must be at least 8 characters including at least one numeric character.',
            'zh-CN': '最少需要 8 个字符，包括至少一个数字字符。',
            'reuse': true
        },
        {
            'en-US': 'Please include at least one non-numeric character.',
            'zh-CN': '请确保至少有一个非数字字符。',
            'reuse': true
        },
        {
            'en-US': 'Confirm Password',
            'zh-CN': '重复密码。'
        },
        {
            'en-US': 'Once again please.',
            'zh-CN': '请重复一遍您的密码。',
            'reuse': true
        },
        {
            'en-US': 'Password doesn\'t match.',
            'zh-CN': '密码不匹配',
            'reuse': true
        },

        // 邮箱确认
        { 'en-US': 'Verify E-mail', 'zh-CN': '邮箱确认', 'reuse': true },
        { 'en-US': 'We have sent a confirmation e-mail to you.', 'zh-CN': '我们已向您发送了一份确认邮件。', 'reuse': true },
        { 'en-US': 'Please check your mail and click the link there.', 'zh-CN': '请检查您的邮件并点击其中的链接。', 'reuse': true },

        {
            'en-US': 'By submitting this information you acknowledge that you have read and agree to be bound by the',
            'zh-CN': '提交这些信息，即表示您确认您已阅读并同意 '
        },
        { 'en-US': 'Register', 'zh-CN': '注册' }
    ]
}

export default content
