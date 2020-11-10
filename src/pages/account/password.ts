/**
 * 密码重置配置页
 * @see https://screeps.com/a/#!/account/password
 */
const content: PageContent = {
    hashs: ['#!/account/password'],
    content: [
        { 'en-US': 'Change password', 'zh-CN': '修改密码' },
        { 'en-US': 'Old Password', 'zh-CN': '先前密码' },
        { 'en-US': 'New Password', 'zh-CN': '新的密码' },
        { 'en-US': 'Confirm Password', 'zh-CN': '确认密码' },

        { 'en-US': 'Password doesn\'t match.', 'zh-CN': '密码不匹配', 'reuse': true },
        { 'en-US': 'Your current password.', 'zh-CN': '您的当前密码。', 'reuse': true },
        {
            'en-US': 'Must be at least 8 characters including one uppercase letter, one special character and alphanumeric characters.',
            'zh-CN': '最少需要 8 个字符，包含一个大写字母、一个特殊字符以及数字和字母字符。',
            'reuse': true
        },
        { 'en-US': 'Once again please.', 'zh-CN': '请重复一遍新密码', 'reuse': true },

        { 'en-US': 'Save', 'zh-CN': '保存' },
        { 'en-US': 'Cancel', 'zh-CN': '取消' }
    ]
}

export default content
