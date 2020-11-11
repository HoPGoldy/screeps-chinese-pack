const trim = function (str: string): string {
    return str.replace(/(^\s*)|(\s*$)/g, '')
}

const translateMultiple = function (contents: MultipleMap) {
    return (el: HTMLElement) => {
        const newContent = contents[trim(el.innerHTML)]
        if (newContent) el.innerHTML = newContent
    }
}

const NOTICE_LOG: MultipleMap = {
    'Choose location': '选择建造位置',
    'Place your spawn': '选择建造Spawn的位置'
}

const content: PageContent = {
    hashs: ['#!/room', '#!/sim/custom', '#!/sim/survival', '#!/sim/tutorial/'],
    content: [
        // 建筑
        { 'en-US': 'Construct', 'zh-CN': '建筑', 'reuse': true },
        // 建筑过多弹窗
        {
            'en-US': 'You have too many construction sites. The maximum number of construction sites per player is 100.',
            'zh-CN': '你创建的construction site过多。每个玩家能够创建的construction site上限为100。',
            'reuse': true
        },
        // 下方提示
        {
            'selector': 'g > text',
            'zh-CN': translateMultiple(NOTICE_LOG),
            'queryWith': document.body,
            'reuse': true
        },
        // 建筑状态
        {
            'selector': 'div > div > div > button > .ng-scope > div',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('Available:', '可建造数:')
                el.innerHTML = el.innerHTML.replace('required', '')
                el.innerHTML = el.innerHTML.replace('RCL ', '要求RCL')
                el.innerHTML = el.innerHTML.replace('Available', '可建造')
                el.innerHTML = el.innerHTML.replace('No controller', '控制器无效')
            },
            'reuse': true
        },
        // Spawn建造弹窗
        { 'en-US': 'Create', 'zh-CN': '建造', 'reuse': true },
        {
            'selector': 'div > div > section > form > .modal-body > input',
            'zh-CN': (el: HTMLElement) => {
                el.setAttribute('placeholder', '名称')
            },
            'reuse': true
        },
        {
            'selector': 'div > div > section > form > .modal-body',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('Enter name', '输入Spawn的名称')
            },
            'reuse': true
        },
        { 'en-US': 'Cancel', 'zh-CN': '取消', 'reuse': true },
        { 'en-US': 'OK', 'zh-CN': '确认', 'reuse': true },
        // 建筑描述
        { 'en-US': 'Contains additional energy which can be used by spawns for spawning bigger creeps.', 'zh-CN': '为Spawn提供生产更大体型creep所需要的储能空间。', 'reuse': true },
        { 'en-US': 'Decreases movement cost. Decays over time and requires repair.', 'zh-CN': '降低移动的消耗。会随着时间推移而风化并需要维护。', 'reuse': true },
        { 'en-US': 'Blocks movement of all creeps. Requires repair after construction.', 'zh-CN': '能够阻挡所有creep。建造之后需要维护。', 'reuse': true },
        { 'en-US': 'Defends creeps and structures on the same tile and blocks enemy movement. Decays over time and requires repair.', 'zh-CN': '保护位于同一位置的creep及建筑，能够阻挡敌人。会随着时间推移而风化并需要维护。', 'reuse': true },
        { 'en-US': 'Remotely attacks or heals any creep in a room, or repairs a structure.', 'zh-CN': '能够对同房间的任意creep进行远距离攻击或治疗，也可对建筑进行维护。', 'reuse': true },
        { 'en-US': 'Stores up to 2,000 resource units. Decays over time and requires repair.', 'zh-CN': '能够存储2,000单位的资源。会随着时间推移而风化并需要维护。', 'reuse': true },
        { 'en-US': 'Stores up to 1,000,000 resource units.', 'zh-CN': '能够存储1,000,000单位的资源。', 'reuse': true },
        { 'en-US': 'Remotely transfers energy to another Link in the same room.', 'zh-CN': '能够向同房间的Link远距离传送能量。', 'reuse': true },
        { 'en-US': 'Allows to mine a mineral deposit.', 'zh-CN': '允许玩家采集矿物。', 'reuse': true },
        { 'en-US': 'Produces mineral compounds and boosts creeps.', 'zh-CN': '能够制造矿物化合物并强化creep。', 'reuse': true },
        { 'en-US': 'Sends any resources to a\u00A0Terminal in another room.', 'zh-CN': '能够向另一房间的Terminal发送任意资源。', 'reuse': true },
        { 'en-US': 'Produces trade commodities.', 'zh-CN': '能够生产可交易商品。', 'reuse': true },
        { 'en-US': 'Spawns creeps using energy contained in the room spawns and extensions.', 'zh-CN': '使用房间内Spawn与Extension储备的能量生产creep。', 'reuse': true },
        { 'en-US': 'Provides visibility into a distant room from your script.', 'zh-CN': '能够使你的脚本获取远处一房间的视野。', 'reuse': true },
        { 'en-US': 'Spawns power creeps with special unique powers.', 'zh-CN': '能够生产拥有特殊技能的超能creep。', 'reuse': true },
        { 'en-US': 'Launches a nuke to a distant room dealing huge damage to the landing area.', 'zh-CN': '能够向远处一房间发射核弹，对命中区域造成巨大伤害。', 'reuse': true }
        // 建筑名称，暂不翻译，中文来自hoho简书
        // { 'en-US': 'Extension', 'zh-CN': 'Spawn 扩展', 'reuse': true },
        // { 'en-US': 'Road', 'zh-CN': '道路', 'reuse': true },
        // { 'en-US': 'Wall', 'zh-CN': '墙', 'reuse': true },
        // { 'en-US': 'Rampart', 'zh-CN': '城墙', 'reuse': true },
        // { 'en-US': 'Tower', 'zh-CN': '塔', 'reuse': true },
        // { 'en-US': 'Container', 'zh-CN': '容器', 'reuse': true },
        // { 'en-US': 'Storage', 'zh-CN': '仓库', 'reuse': true },
        // { 'en-US': 'Link', 'zh-CN': '传送器', 'reuse': true },
        // { 'en-US': 'Extractor', 'zh-CN': '提取机', 'reuse': true },
        // { 'en-US': 'Lab', 'zh-CN': '实验室', 'reuse': true },
        // { 'en-US': 'Factory', 'zh-CN': '工厂', 'reuse': true },
        // { 'en-US': 'Spawn', 'zh-CN': 'Spawn', 'reuse': true },
        // { 'en-US': 'Terminal', 'zh-CN': '终端', 'reuse': true },
        // { 'en-US': 'Observer', 'zh-CN': '观察者', 'reuse': true },
        // { 'en-US': 'Power Spawn', 'zh-CN': '超能Spawn', 'reuse': true },
        // { 'en-US': 'Nuker', 'zh-CN': '核弹井', 'reuse': true },
    ]
}

export default content
