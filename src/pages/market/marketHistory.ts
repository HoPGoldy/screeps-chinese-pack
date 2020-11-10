const content: PageContent = {
    hashs: ['#!/market/history'],
    content: [
        // 市场->订单历史
        // 表头
        { 'en-US': 'Expand all', 'zh-CN': '展开全部' },
        { 'en-US': 'Refresh', 'zh-CN': '刷新' },
        { 'en-US': 'Date', 'zh-CN': '成交时间' ,'reuse': true},
        { 'en-US': 'Shard', 'zh-CN': '位面' ,'reuse': true},
        { 'en-US': 'Tick', 'zh-CN': '时刻' ,'reuse': true},
        { 'en-US': 'Change', 'zh-CN': '成交金额' ,'reuse': true},
        { 'en-US': 'Balance', 'zh-CN': '余额' ,'reuse': true},
        { 'en-US': 'Description', 'zh-CN': '描述' ,'reuse': true},

        // 明细
        { 'en-US': 'Resources', 'zh-CN': '资源' ,'reuse': true},
        { 'en-US': 'Owner', 'zh-CN': '原资源拥有人' ,'reuse': true},
        { 'en-US': 'Dealer', 'zh-CN': '成交人' ,'reuse': true},
        { 'en-US': 'Fee type', 'zh-CN': '费用类型' ,'reuse': true},
        { 'en-US': 'Add amount', 'zh-CN': '订单量增加' ,'reuse': true},
        { 'en-US': 'Order ID', 'zh-CN': '订单标识' ,'reuse': true},
        { 'en-US': 'Price', 'zh-CN': '单价' ,'reuse': true},

        // 费用类型
        { 'en-US': 'Extend order', 'zh-CN': '扩充订单' ,'reuse': true},
        { 'en-US': 'Change price', 'zh-CN': '变更单价' ,'reuse': true},
        
        // 描述类
        { 'en-US': 'Market fee', 'zh-CN': '市场费用' ,'reuse': true},
        { 'en-US': 'Resources sold via market order', 'zh-CN': '通过市场订单卖出资源' ,'reuse': true},
        { 'en-US': 'Resources bought via market order', 'zh-CN': '通过市场订单买入资源' ,'reuse': true},
        
        // 页尾
        { 'en-US': 'Newer', 'zh-CN': '更早的记录' },
        { 'en-US': 'Older', 'zh-CN': '更晚的记录' }
    ]
}

export default content