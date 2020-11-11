const TOOLTIP_LABEL: MultipleMap = {
    'Turn off rate limiting for 2 hours': '解除 2 小时的访问速率限制',
    'Remove': '移除'
}

/**
 * 验证令牌管理
 * @see https://screeps.com/a/#!/account/auth-tokens
 */
const content: PageContent = {
    hashs: ['#!/account/auth-tokens'],
    content: [
        { 'en-US': 'Auth Tokens', 'zh-CN': '验证令牌' },
        { 'en-US': 'Add new auth token', 'zh-CN': '添加一个新的验证令牌' },
        { 'en-US': 'Description (optional)', 'zh-CN': '介绍（可选）' },
        { 'en-US': 'Only selected endpoints:', 'zh-CN': '仅允许访问选中接口' },
        { 'en-US': 'Generate token', 'zh-CN': '生成令牌' },
        {
            'en-US': 'You can create tokens to authenticate to our Web API endpoints in external tools.\nThese tokens allow to skip solving CAPTCHA on login, but rate limiting is applied.',
            'zh-CN': '您可以创建一个令牌来使外部工具可以访问我们的 Web API。这些令牌允许在访问时跳过验证码，但是会有一定的访问速率限制。'
        },
        { 'en-US': 'Full access', 'zh-CN': '完全访问权限', 'reuse': true },
        { 'en-US': 'WebSockets (console)', 'zh-CN': 'WebSockets (控制台)', 'reuse': true },
        { 'en-US': 'WebSockets (rooms)', 'zh-CN': 'WebSockets (房间)', 'reuse': true },
        {
            'en-US': 'Be sure to record your generated token, it will not be shown again!',
            'zh-CN': '请务必妥善保管该令牌，它将不会再次显示！',
            'reuse': true
        },
        { 'en-US': 'OK', 'zh-CN': '明白', 'reuse': true },
        {
            'selector': 'div.tooltip.ng-scope.ng-isolate-scope > div.tooltip-inner.ng-binding',
            'zh-CN': (el: HTMLElement) => {
                const newContent = TOOLTIP_LABEL[el.innerHTML]
                if (newContent) el.innerHTML = newContent
            },
            'reuse': true
        }
    ]
}

export default content
