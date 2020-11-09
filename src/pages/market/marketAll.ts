const content: PageContent = {
    hashs: ['#!/market/all'],
    content: [
        // 市场->全部订单
        { 'en-US': 'Raw resources', 'zh-CN': '原始资源' },
        { 'en-US': 'Factory production', 'zh-CN': '工厂产物' },
        { 'en-US': 'Lab production', 'zh-CN': '实验室产物' },
        // 订单明细
        { 'en-US': 'Refresh', 'zh-CN': '刷新' },
        { 'en-US': 'Target room:', 'zh-CN': '目标房间' },
        { 'en-US': 'Selling', 'zh-CN': '出售中' },
        { 'en-US': 'Buying', 'zh-CN': '求购中' },
        { 'en-US': 'Order ID', 'zh-CN': '订单标识', 'reuse': true },
        { 'en-US': 'Price', 'zh-CN': '单价', 'reuse': true },
        { 'en-US': 'Available', 'zh-CN': '可用', 'reuse': true },
        { 'en-US': 'Remaining', 'zh-CN': '剩余', 'reuse': true },
        { 'en-US': 'Total', 'zh-CN': '总量', 'reuse': true },
        { 'en-US': 'Room', 'zh-CN': '房间', 'reuse': true },
        { 'en-US': 'Range', 'zh-CN': '范围', 'reuse': true },
        { 'en-US': 'Price history', 'zh-CN': '历史单价' },
        { 'en-US': 'Date', 'zh-CN': '日期' },
        { 'en-US': 'Transactions', 'zh-CN': '交易次数' },
        { 'en-US': 'Total volume', 'zh-CN': '总成交量' },
        { 'en-US': 'Price (avg ± stddev)', 'zh-CN': '单价 (均价 ± 标准差)' },
        
        // 翻译订单
        {
            'selector': '#mat-dialog-0 > app-dlg-resource-orders > header:nth-child(6) > div:nth-child(1) > span',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('orders', '个订单')
            }
        },
        {
            'selector': '#mat-dialog-0 > app-dlg-resource-orders > header:nth-child(8) > div > span',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('orders', '个订单')
            }
        }
        
    ]
}

export default content