const content: PageContent = {
    hashs: ['#!/inventory'],
    content: [
        // 介绍
        {
            'en-US':
                'This section contains ephemeral resources that are stored directly in your account.',
            'zh-CN': '这里展示了直接存储在您帐户中的临时资源。',
            'reuse': true
        },
        // 装饰状态
        { 'en-US': 'Activate', 'zh-CN': '启用', 'reuse': true },
        { 'en-US': 'Active', 'zh-CN': '启用', 'reuse': true },
        { 'en-US': 'Global active', 'zh-CN': '全局启用', 'reuse': true },
        { 'en-US': 'Not active', 'zh-CN': '未启用', 'reuse': true },
        // 全局通用
        { 'en-US': 'All', 'zh-CN': '全部', 'reuse': true },
        { 'en-US': 'Ok', 'zh-CN': '好的', 'reuse': true },
        // 类型选择框
        { 'en-US': 'Type', 'zh-CN': '类别', 'reuse': true },
        { 'en-US': 'Badge', 'zh-CN': '徽章', 'reuse': true },
        { 'en-US': 'Creep', 'zh-CN': 'creep皮肤', 'reuse': true },
        { 'en-US': 'Graffiti', 'zh-CN': '涂鸦', 'reuse': true },
        { 'en-US': 'Wall texture', 'zh-CN': '墙壁材质', 'reuse': true },
        { 'en-US': 'Floor texture', 'zh-CN': '地面材质', 'reuse': true },
        // 主题选择框
        { 'en-US': 'Theme', 'zh-CN': '主题', 'reuse': true },
        { 'en-US': 'Nature', 'zh-CN': '自然', 'reuse': true },
        { 'en-US': 'Winter', 'zh-CN': '凛冬', 'reuse': true },
        { 'en-US': 'Alien', 'zh-CN': '异域', 'reuse': true },
        { 'en-US': 'Sea', 'zh-CN': '海洋', 'reuse': true },
        { 'en-US': 'Fire', 'zh-CN': '火热', 'reuse': true },
        { 'en-US': 'Desert', 'zh-CN': '沙漠', 'reuse': true },
        { 'en-US': 'Mono', 'zh-CN': '独行', 'reuse': true },
        // 排序选择框
        { 'en-US': 'Sort', 'zh-CN': '排序', 'reuse': true },
        { 'en-US': 'New to old', 'zh-CN': '获取时间从早到晚', 'reuse': true },
        { 'en-US': 'Old to new', 'zh-CN': '获取时间从晚到早', 'reuse': true },
        { 'en-US': 'Rare to common', 'zh-CN': '品质从稀有到常见', 'reuse': true },
        { 'en-US': 'Common to rare', 'zh-CN': '品质从常见到稀有', 'reuse': true },
        { 'en-US': 'Rooms', 'zh-CN': '按激活状态', 'reuse': true },
        // 目标房间
        { 'en-US': 'Target room:', 'zh-CN': '目标房间:', 'reuse': true },
        // 中央抽奖区域
        {
            'en-US': 'Pixelization is available',
            'zh-CN': '使用pixel来抽取装饰物',
            'reuse': true
        },
        { 'en-US': 'You need', 'zh-CN': '你需要', 'reuse': true },
        {
            'en-US': 'to pixelize one decoration.',
            'zh-CN': '来抽取装饰物',
            'reuse': true
        },
        { 'en-US': 'Restrict by theme', 'zh-CN': '限定主题', 'reuse': true },
        // 侧边栏 Steam 交互相关
        {
            'en-US': 'error connecting to Steam',
            'zh-CN': '连接至Steam时发生错误',
            'reuse': true
        },
        {
            'en-US': 'Drag to Transfer to Steam',
            'zh-CN': '拖拽物品转移到Steam库存',
            'reuse': true
        },
        {
            'en-US': 'Dragged decorations will be deactivated.',
            'zh-CN': '被拖拽的物品将会变为未启用状态',
            'reuse': true
        },
        {
            'en-US': 'Transfer to Steam',
            'zh-CN': '转移到Steam库存',
            'reuse': true
        },
        { 'en-US': 'Convert to pixels', 'zh-CN': '分解为pixel', 'reuse': true },
        { 'en-US': 'Steam inventory', 'zh-CN': 'Steam库存', 'reuse': true },
        {
            'en-US': 'Steam Community Market',
            'zh-CN': 'Steam社区市场',
            'reuse': true
        },
        // 底边栏
        { 'en-US': 'Select all', 'zh-CN': '全选', 'reuse': true },
        { 'en-US': 'Deactivate', 'zh-CN': '停用', 'reuse': true },
        { 'en-US': 'Cancel', 'zh-CN': '取消', 'reuse': true },
        // {
        //     'selector': 'button.btn.btn--transparent',
        //     'zh-CN': (el: HTMLElement) => {
        //         el.innerHTML = el.innerHTML.replace('Unselect', '撤销选择')
        //     },
        //     'reuse': true
        // },
        {
            'en-US': 'Are you sure you want to deactivate decoration(s)?',
            'zh-CN': '确定要停用勾选的装饰吗?',
            'reuse': true
        },
        {
            'en-US':
                'They will be saved in your account and can be reactivated in the future.',
            'zh-CN': '这些装饰将会继续存储在你的账户中，你可以之后再启用他们。',
            'reuse': true
        },
        // 明细
        // 皮肤明细
        {
            'en-US': 'You can use this image to decorate your creeps.',
            'zh-CN': '你可以用此物品来装饰你的creep。',
            'reuse': true
        },
        { 'en-US': 'Name Filter', 'zh-CN': '名称过滤器', 'reuse': true },
        {
            'en-US': 'You can enter multiple filters.',
            'zh-CN': '你可以输入多个过滤器',
            'reuse': true
        },
        { 'en-US': 'Exclude', 'zh-CN': '除外', 'reuse': true },
        { 'en-US': 'Alpha', 'zh-CN': '透明度', 'reuse': true },
        { 'en-US': 'Brightness', 'zh-CN': '亮度', 'reuse': true },
        { 'en-US': 'Convert back to', 'zh-CN': '分解为', 'reuse': true },
        { 'en-US': 'Back edit', 'zh-CN': '返回编辑', 'reuse': true },
        { 'en-US': 'Decoration activated', 'zh-CN': '装饰已启用', 'reuse': true },
        { 'en-US': 'Got it', 'zh-CN': '好的', 'reuse': true },
        {
            'selector': 'p.ng-star-inserted > div',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('Decoration', '装饰')
                el.innerHTML = el.innerHTML.replace('activated.', '已启用')
            }
        },
        // 涂鸦明细
        {
            'en-US': 'You can place this image as a graffiti on walls.',
            'zh-CN': '你可以将涂鸦放置在墙面上。',
            'reuse': true
        },
        {
            'en-US': 'Adjustable brightness and lighting animation.',
            'zh-CN': '可调节的亮度和发光动画',
            'reuse': true
        },
        { 'en-US': 'Animation', 'zh-CN': '动画', 'reuse': true },
        { 'en-US': 'Flash', 'zh-CN': '闪光', 'reuse': true },
        { 'en-US': 'None', 'zh-CN': '静止', 'reuse': true },
        { 'en-US': 'Slow', 'zh-CN': '慢速', 'reuse': true },
        { 'en-US': 'Fast', 'zh-CN': '快速', 'reuse': true },
        { 'en-US': 'Blink', 'zh-CN': '闪烁', 'reuse': true },
        { 'en-US': 'Neon', 'zh-CN': '霓虹', 'reuse': true },
        { 'en-US': 'Type', 'zh-CN': '类别', 'reuse': true }
    ]
}

export default content
