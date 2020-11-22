/**
 * 生成一个用于替换类名的翻译内容
 * 
 * @param selector 要替换的 html 元素的选择器
 * @param oldClass 要替换的旧类名
 * @param newClass 要替换成的新类名
 */
const changeElementClassName = function (selector: string, oldClass: string, newClass: string): TranslationContent {
    return {
        selector,
        'zh-CN': (el: HTMLElement) => {
            el.className = el.className.replace(oldClass, newClass)
        },
        'reuse': true
    }
}

const content: PageContent = {
    hashs: ['#!/overview/power'],

    content: [
        // 无 Power Creep 时
        { 'en-US': 'You have no Power Creeps yet.', 'zh-CN': '你还没有 Power Creeps' },
        { 'en-US': 'You need 1 free Power Level in your account to create a new Power Creep.', 'zh-CN': '需要一个你账号内空余的超能等级来创建一个新的 Power Creep' },
        { 'en-US': 'Upgrade', 'zh-CN': '升级' },
        { 'en-US': 'Back', 'zh-CN': '返回', 'reuse': true },

        { 'en-US': 'Create creep', 'zh-CN': '创建 creep' },
        { 'en-US': 'Learn more', 'zh-CN': '了解更多' },
        { 'en-US': 'Global Power Level:', 'zh-CN': '全局超能等级：', 'reuse': true },
        { 'en-US': '.', 'zh-CN': '。', 'reuse': true },

        { 'en-US': 'Required creep level:', 'zh-CN': 'creep 等级需求：', 'reuse': true },
        { 'en-US': 'Required level', 'zh-CN': '等级需求', 'reuse': true },

        // 有 Power Creep 时
        { 'en-US': 'Back to Overview', 'zh-CN': '返回总览', 'reuse': true },
        {
            'en-US': /You have \d+ experimentation periods left/,
            'zh-CN': (text: string) => text.replace('You have', '您还剩余').replace('experimentation periods left', '个实验期')
        },
        { 'en-US': 'Collapse all', 'zh-CN': '收起所有', 'reuse': true },
        { 'en-US': 'Expand all', 'zh-CN': '展开所有', 'reuse': true },
        { 'en-US': 'Create new creep', 'zh-CN': '创建新的 creep' },
        { 'en-US': 'not spawned', 'zh-CN': '未孵化', 'reuse': true },

        {
            'en-US': /lvl \d/,
            'zh-CN': (text: string) => text.replace('lvl', '等级 '),
            'reuse': true
        },

        // pc技能
        // 通用
        {
            'en-US': /Consumes \d+ ops resource units./,
            'zh-CN': (text: string) => text.replace('Consumes', '消耗 ').replace('ops resource units.', '点 ops 资源。'),
            'reuse': true
        },
        {
            'en-US': /Cooldown \d+ ticks./,
            'zh-CN': (text: string) => text.replace('Cooldown', '冷却').replace('ticks.', 'tick。'),
            'reuse': true
        },
        {
            'en-US': /Effect duration \d+ ticks./,
            'zh-CN': (text: string) => text.replace('Effect duration', '效果持续').replace('ticks.', 'tick。'),
            'reuse': true
        },
        {
            'en-US': /Range \d+ squares./,
            'zh-CN': (text: string) => text.replace('Range', '距离').replace('squares.', '格。'),
            'reuse': true
        },

        // GENERATE_OPS
        { 'en-US': 'Generate', 'zh-CN': '生产 ', 'reuse': true },
        { 'en-US': 'Consumes', 'zh-CN': '消耗', 'reuse': true },
        { 'en-US': 'ops resource units.', 'zh-CN': ' 单位的 ops。', 'reuse': true },

        // OPERATE_SPAWN
        { 'en-US': 'Reduce spawn time by', 'zh-CN': '减少孵化时间 ', 'reuse': true },

        // OPERATE_EXTENSION
        { 'en-US': 'Instantly fill', 'zh-CN': '使用目标（container, storage, terminal）内的能量立即充满房间内 ', 'reuse': true },
        { 'en-US': 'of all extensions in the room using energy from the target structure (container, storage, or terminal).', 'zh-CN': ' 的 extension。', 'reuse': true },
        { 'en-US': 'Cooldown 50 ticks.', 'zh-CN': ' 冷却 50 ticks。 ', 'reuse': true },

        // OPERATE_TOWER
        { 'en-US': 'Increase damage, repair and heal amount by', 'zh-CN': '提升 tower 的伤害、修复与治疗效果 ', 'reuse': true },

        // OPERATE_STORAGE
        { 'en-US': 'Increase capacity by', 'zh-CN': '提高 storage 的容量 ', 'reuse': true },
        { 'en-US': 'units.', 'zh-CN': ' 点。', 'reuse': true },

        // OPERATE_LAB
        { 'en-US': 'Increase reaction amount by', 'zh-CN': '提高 lab 的反应产物数量 ', 'reuse': true },

        // OPERATE_OBSERVER
        { 'en-US': 'Grant unlimited range.', 'zh-CN': '给予无限制的观察范围。', 'reuse': true },
        { 'en-US': 'Effect duration', 'zh-CN': '效果持续 ', 'reuse': true },
        { 'en-US': 'ticks.', 'zh-CN': ' tick。', 'reuse': true },

        // OPERATE_TERMINAL
        { 'en-US': 'Decrease transfer energy cost and cooldown by', 'zh-CN': '降低传送所需能量以及冷却 ', 'reuse': true },

        // DISRUPT_SPAWN
        { 'en-US': 'Pause spawning process.', 'zh-CN': '暂停孵化进程。', 'reuse': true },

        // DISRUPT_TOWER
        { 'en-US': 'Reduce effectiveness by', 'zh-CN': '减少 tower 效果', 'reuse': true },

        // DISRUPT_SOURCE
        { 'en-US': 'Pause energy regeneration.', 'zh-CN': '暂停 source 能量重生。', 'reuse': true },

        // SHIELD
        {
            'en-US': 'Create a temporary non-repairable rampart structure on the same square with',
            'zh-CN': '在相同位置上创造一个临时的、不可修复的 rampart，其血量为 ',
            'reuse': true
        },
        {
            'en-US': 'hits.\nCannot be used on top of another rampart.',
            'zh-CN': '点。已经位于 rampart 中时无法使用。',
            'reuse': true
        },

        // FORTIFY
        {
            'en-US': 'Make a wall or rampart tile invulnerable to all creep attacks and powers.',
            'zh-CN': '使一个 wall 或者 rampart 免疫所有来自 creep 的攻击和超能效果。',
            'reuse': true
        },

        // OPERATE_FACTORY
        {
            'en-US': 'Set the level of the factory to the level of the power. This action is permanent, it cannot be undone, and another power level cannot be applied. Apply the same power again to renew its effect.',
            'zh-CN': '将 factory 的等级设置为该超能的等级。该操作是永久性的，无法撤销，并且无法用其他等级的同类超能进行覆盖。施加相同等级的超能来重新激活该效果。',
            'reuse': true
        },

        // REGEN_SOURCE
        { 'en-US': 'Regenerate', 'zh-CN': '重新生成 ', 'reuse': true },
        { 'en-US': 'energy units in a source every 15 ticks.', 'zh-CN': ' 点能量于 source 中 / 每 15 tick。', 'reuse': true },

        // REGEN_MINERAL
        { 'en-US': 'mineral units in a deposit every 10 ticks.', 'zh-CN': ' 点矿物于 mineral 中 / 每 10 tick。', 'reuse': true },

        // OPERATE_POWER
        { 'en-US': 'Increase power processing speed of a Power Spawn by', 'zh-CN': '提高 PowerSpawn 的单次 power 处理速率', 'reuse': true },
        { 'en-US': 'units per tick.', 'zh-CN': ' 点每 tick。', 'reuse': true },

        // DISRUPT_TERMINAL
        { 'en-US': 'Block withdrawing resources from the terminal.', 'zh-CN': '阻止从 terminal 中取出资源。', 'reuse': true },

        // OPERATE_CONTROLLER
        {
            'en-US': 'Increase max limit of energy that can be used for upgrading a Level 8 Controller each tick by',
            'zh-CN': '增加 8 级 controller 的每 tick 能量升级上限 ',
            'reuse': true
        },
        { 'en-US': 'energy units.', 'zh-CN': ' 点。', 'reuse': true },

        // 翻译血量、容量以及升级按钮，这些文本都是放在 ::before 伪类的 content 里的
        changeElementClassName('.creep-char--ca', 'creep-char--ca', 'creep-char--ca-cn'),
        changeElementClassName('.creep-char--xp', 'creep-char--xp', 'creep-char--xp-cn'),
        changeElementClassName('._actions > ._upgrade', '_upgrade', '_upgrade-cn'),

        {
            'en-US': 'You cannot delete a Power Creep which is spawned in the world',
            'zh-CN': '您不能删除一个已经孵化的 Power Creep',
            'reuse': true
        },
        { 'en-US': 'Ok', 'zh-CN': '确定', 'reuse': true },
        { 'en-US': 'Activate', 'zh-CN': '激活', 'reuse': true },
        { 'en-US': 'Cancel', 'zh-CN': '取消', 'reuse': true },
        { 'en-US': 'Enter creep name', 'zh-CN': '输入 creep 名称', 'reuse': true },
        { 'en-US': 'Required Field', 'zh-CN': '必填内容', 'reuse': true },
        { 'en-US': 'This action cannot be undone without deleting the creep.', 'zh-CN': '该操作将无法撤销，除非直接删除该 creep。', 'reuse': true },
        { 'en-US': 'Do you want to proceed and use', 'zh-CN': '您确定要使用 ', 'reuse': true },
        { 'en-US': 'for this creep?', 'zh-CN': ' 为该 creep 提升等级么？', 'reuse': true },
        {
            'en-US': 'You can activate a 24-hour experimentation period to work on your Power Creeps builds without losing levels.                 During an experimentation period:',
            'zh-CN': '通过激活一个 24 小时的实验期，您可以在不消耗 GPL 等级的情况下创建一个新的 Power Creep。在实验期间：',
            'reuse': true
        },
        {
            'en-US': 'Power Creeps are deleted immediately without delay.',
            'zh-CN': 'Power Creep 可以被立刻删除，而不会启动删除倒计时。',
            'reuse': true
        },
        {
            'en-US': 'You don\'t lose Global Power Levels when you delete a Power Creep.',
            'zh-CN': '删除 Power Creep 时不会损失 GPL 等级。',
            'reuse': true
        },
        {
            'en-US': /You have \d+ periods left. Would you like to activate it?/,
            'zh-CN': (text: string) => text.replace('You have', '您还有 ').replace('periods left. Would you like to activate it?', ' 个试用期，您确定要激活一个么？'),
            'reuse': true
        },
        {
            'en-US': 'Experimentation period active:',
            'zh-CN': '实验期已激活，剩余时间：',
            'reuse': true
        }
    ]
}

// 由于 pc 的血量、容量和升级按钮的文本都是放在 ::before 里的，所以这里需要伪造一个新的 ::before 来替换内容
// 升级按钮也用 before 就 nm 离谱
const style = document.createElement('style')
style.innerHTML = `
.creep-char--ca-cn::before {
    content: '容量';
    color: #4B4B4B;
    margin-right: 3px;
    display: inline-block;
}
.creep-char--xp-cn::before {
    content: '血量';
    color: #4B4B4B;
    margin-right: 3px;
    display: inline-block;
}
._upgrade-cn {
    display: inline-flex;
    justify-content: center;
    height: 21px;
    width: 62px;
    border: 1px solid rgba(89, 115, 255, 0.4);
    border-radius: 10.5px;
    cursor: pointer;
    color: #5973ff;
    transition: all .3s ease;
}
._upgrade-cn::before {
    content: '升级';
    position: relative;
    top: 1px;
    font-size: 11px;
}
`
document.querySelector('head').appendChild(style)

export default content
