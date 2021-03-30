const content: PageContent = {
    hashs: ['#!/enter'],
    content: [
        { 'en-US': 'Persistent World', 'zh-CN': '永恒世界' },
        {
            'selector': 'body > app2-router-outlet > app-enter-base > section > p',
            'zh-CN': '无限制地发展您的殖民地，在这个巨大的永恒世界的历史上留下您的印记。'
        },
        {
            'selector': 'body > app2-router-outlet > app-enter-base > section > p',
            'zh-CN': '无限制地发展您的殖民地，在这个巨大的永恒世界的历史上留下您的印记。'
        },
        // 这两个 enter，一个是主世界的进入按钮，一个是赛季服的进入按钮
        // 主世界的进入按钮有图标，所以需要加一个空格
        { 'en-US': 'Enter', 'zh-CN': '\u00A0进入' },
        { 'en-US': 'Enter', 'zh-CN': '进入' },
        { 'en-US': 'Seasonal World', 'zh-CN': '赛季世界' },
        {
            'selector': 'body > app2-router-outlet > app-enter-base > aside > div.__intro.--flex.--hcenter.--vcenter.--column > p',
            'zh-CN': '在赛季排名中拔得头筹，<br _ngcontent-yvh-c3="">并在和其他玩家的竞争中<br _ngcontent-yvh-c3="">赢取超棒的奖励。'
        },
        {
            'en-US': 'The season entry fee is changed according to the following schedule:',
            'zh-CN': '赛季服门票将会根据以下时间表进行调整：'
        },
        {
            'en-US': 'Grants access to the Seasonal World or a special event in the Persistent World.',
            'zh-CN': '解锁赛季世界或者永恒世界中的特殊事件',
            'reuse': true
        },
        {
            'en-US': 'Remember that by buying resources in our store',
            'zh-CN': '请记住，在我们的商店中购买物品',
            'reuse': true
        },
        {
            'en-US': 'you support game development! ☻',
            'zh-CN': '就是在支持游戏开发！☻',
            'reuse': true
        },
        {
            'en-US': 'All prices exclude VAT where applicable.',
            'zh-CN': '所有价格均不含增值税（如适用）。 ',
            'reuse': true
        },
        { 'en-US': 'or', 'zh-CN': '或者' },
        { 'en-US': 'in-game market', 'zh-CN': '\u00A0游戏内市场' },
        /* {
            'selector': 'body > app2-router-outlet > app-enter-base > aside > div.__intro.--flex.--hcenter.--vcenter.--column > div.--flex.--column > app-time-left',
            'zh-CN': (el: HTMLElement) => {
                 el.innerHTML = el.innerHTML.replace('d', '天')
                // el.innerHTML = el.innerHTML.replace('left', ' 剩余')
            },
            'reuse': true
        }, */
        { 'en-US': 'View details', 'zh-CN': '了解更多细节' },
        { 'en-US': 'To join the season you need to have', 'zh-CN': '您需要' },
        { 'en-US': 'season keys.', 'zh-CN': '赛季key。' },
        {
            'en-US': 'You need a Steam license or full unlocked CPU to start playing in the Persistent World.',
            'zh-CN': '在永恒世界游玩您需要一个 Steam 许可或完全解锁的 CPU 权限。'
        },
        { 'en-US': 'Screeps on Steam', 'zh-CN': '在 Steam 上的 Screeps' },
        { 'en-US': 'Gives limited 20 CPU indefinitely', 'zh-CN': '永远拥有有限的20 CPU' },
        { 'en-US': 'CPU Unlocks', 'zh-CN': '解锁 CPU' },
        { 'en-US': 'Activates full unlocked CPU for 1 day each', 'zh-CN': '每一个可以激活一天完全解锁的 CPU 权限' },
        { 'en-US': 'I have a coupon', 'zh-CN': '我有一个优惠码' },
        { 'en-US': 'Enter your coupon code', 'zh-CN': '输入您的优惠码' },
        { 'en-US': 'Code', 'zh-CN': '优惠码' },
        { 'en-US': 'Required Field', 'zh-CN': '必填' },
        { 'en-US': 'Ok', 'zh-CN': '确定' },
        { 'en-US': 'Cancel', 'zh-CN': '取消' }
    ]
}

export default content
