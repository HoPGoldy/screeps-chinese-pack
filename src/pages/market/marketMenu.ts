const content: PageContent = {
    hashs: ['#!/market/all', '#!/market/my', '#!/market/history'],
    content: [
        // 市场 header 部分
        { 'en-US': 'Market allows to automatically trade resources with other players.', 'zh-CN': '市场允许您和其他玩家自动交易资源。' },
        { 'en-US': 'Learn more', 'zh-CN': '了解更多' },
        { 'en-US': 'All orders', 'zh-CN': '全部订单' },
        { 'en-US': 'My orders', 'zh-CN': '我的订单' },
        { 'en-US': 'History', 'zh-CN': '订单历史' },
        // 无订单时的翻译
        { 'en-US': 'You have no orders', 'zh-CN': '你还没有订单', 'reuse': true },
        { 'en-US': 'Create an order using the', 'zh-CN': '创建订单请参考', 'reuse': true },
        { 'en-US': 'Market API.', 'zh-CN': '市场API', 'reuse': true }
    ]
}

export default content
