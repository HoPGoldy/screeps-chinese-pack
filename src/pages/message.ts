/**
 * 消息面板
 * @see https://screeps.com/a/#!/messages
 */
const content: PageContent = {
    hashs: ['#!/messages'],
    content: [
        { 'en-US': /Messages to \S+/, 'zh-CN': (text: string) => `${text.replace('Messages to', '与')} 的聊天消息` },
        { 'en-US': 'View user profile', 'zh-CN': '查看用户资料' },
        { 'en-US': 'Send', 'zh-CN': '发送' },
        { 'en-US': 'You can use', 'zh-CN': '您可以使用 ' },
        { 'en-US': 'to format your message', 'zh-CN': ' 来格式化您的消息' },
        {
            'selector': '.page-content.ng-scope textarea',
            'zh-CN': (el: HTMLElement) => el.setAttribute('placeholder', '输入新消息...'),
            'reuse': true
        }
    ]
}

export default content
