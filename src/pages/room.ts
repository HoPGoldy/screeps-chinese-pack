import { dontTranslate, translateMultiple } from 'utils'

const CONSTRUCT_NOTICE: MultipleMap = {
    'Choose location': '选择位置',
    'Place your spawn': '放置您的 Spawn'
}

const TOOLTIP_LABEL: MultipleMap = {
    'World': '世界',
    'Room overview': '房间总览',
    'Replay room history': '回放房间录像',
    'View / Pan': '查看 / 拖动',
    'Create Flag': '创建旗帜',
    'Construct': '建筑',
    'Customize': '自定义房间设置',
    'Pause&nbsp;tracking': '停止追踪',
    'Clear': '清空日志',
    'Main&nbsp;memory': '主内存',
    'Segments': '分段内存',
    'Hide side panel': '隐藏侧边栏',
    'Display options': '显示设置'
}

const content: PageContent = {
    hashs: ['#!/room', '#!/sim/custom', '#!/sim/survival', '#!/sim/tutorial/', '#!/history'],
    content: [
        // 禁止翻译代码、控制台、内存字段
        dontTranslate('.ace_editor'),
        dontTranslate('.console-messages-list'),
        dontTranslate('.memory-content'),
        dontTranslate('.memory-segment-content'),

        {
            'selector': 'div.tooltip.ng-scope.ng-isolate-scope > div.tooltip-inner.ng-binding',
            'zh-CN': (el: HTMLElement) => {
                const newContent = TOOLTIP_LABEL[el.innerHTML]
                if (newContent) {
                    el.innerHTML = newContent
                    // 某些中文的 tooltip 会每个字都换行，非常难看，所以指定一个宽度将其撑开
                    el.style.minWidth = `${18 * newContent.length}px`
                }
            },
            'reuse': true
        },

        // 下方 Script 面板
        { 'en-US': 'Script', 'zh-CN': '脚本' },
        { 'en-US': 'Branch:', 'zh-CN': '分支:', 'reuse': true },
        { 'en-US': 'Modules', 'zh-CN': '模块', 'reuse': true },
        { 'en-US': 'Choose active branch:', 'zh-CN': '选择活动分支', 'reuse': true },
        { 'en-US': 'Add normal module', 'zh-CN': '添加普通模块', 'reuse': true },
        { 'en-US': 'Add binary module', 'zh-CN': '添加二进制模块', 'reuse': true },
        {
            'selector': 'section > section > div:nth-child(2) > div.modules-list > form > input',
            'zh-CN': (el: HTMLInputElement) => {
                el.placeholder = '输入新模块名称...'
            },
            'reuse': true
        },
        // // 下方 Console 面板
        { 'en-US': 'Console', 'zh-CN': '控制台' },
        // // 下方 Memory 面板
        { 'en-US': 'Memory', 'zh-CN': '内存' },
        // 为了放置内存字段被错误翻译，内存面板被整个禁止翻译了，所以这个也就用不到了
        // {
        //     'selector': 'div.tab-pane > .ng-scope > section > div:nth-child(2) > div > form > input',
        //     'zh-CN': (el: HTMLInputElement) => {
        //         el.placeholder = '添加新的内存监视路径，例如：creeps.John'
        //     }
        // },
        { 'en-US': 'SEGMENT #:', 'zh-CN': '片段 #:', 'reuse': true },

        { 'en-US': 'Sign:', 'zh-CN': '签名:', 'reuse': true },

        // 右侧 panel 名
        // 装扮面板
        { 'en-US': 'Decorations', 'zh-CN': '装饰' },
        { 'en-US': 'View in inventory', 'zh-CN': '在库存中查看' },

        { 'en-US': 'World Map', 'zh-CN': '世界地图' },
        // 入侵者面板
        { 'en-US': 'Invasion', 'zh-CN': '入侵' },
        { 'en-US': 'Type', 'zh-CN': '类型' },
        { 'en-US': 'Melee', 'zh-CN': '近战' },
        { 'en-US': 'Ranged', 'zh-CN': '远程' },
        { 'en-US': 'Healer', 'zh-CN': '治疗' },
        { 'en-US': 'Size', 'zh-CN': '大小' },
        { 'en-US': 'Small', 'zh-CN': '小型' },
        { 'en-US': 'Big', 'zh-CN': '大型' },
        { 'en-US': 'Boosted', 'zh-CN': '强化' },
        { 'en-US': 'Create an invader', 'zh-CN': '创造入侵者' },
        // 坐标面板
        { 'en-US': 'Cursor', 'zh-CN': '坐标' },
        { 'en-US': 'Terrain:', 'zh-CN': '地形' },
        {
            'selector': '.cursor.ng-isolate-scope > div > div > div > span',
            'zh-CN': translateMultiple({
                'plain': '平原（plain）',
                'swamp': '沼泽（swamp）',
                'wall': '墙壁（wall）'
            }),
            'protect': true,
            'reuse': true
        },
        // RoomObject 面板
        { 'en-US': 'Position:', 'zh-CN': '位置 position:', 'reuse': true },
        { 'en-US': 'Hits:', 'zh-CN': '生命值 hits:', 'reuse': true },
        { 'en-US': 'Owner:', 'zh-CN': '所有者 owner:', 'reuse': true },
        { 'en-US': 'Energy:', 'zh-CN': '能量 energy:', 'reuse': true },
        { 'en-US': 'Cooldown:', 'zh-CN': '冷却 cooldown:', 'reuse': true },
        { 'en-US': 'Decay in:', 'zh-CN': '老化 decay:', 'reuse': true },
        { 'en-US': 'Public:', 'zh-CN': '开放 public:', 'reuse': true },
        { 'en-US': 'Name:', 'zh-CN': '名称 name:', 'reuse': true },
        { 'en-US': 'Fatigue:', 'zh-CN': '疲劳 fatigue:', 'reuse': true },
        { 'en-US': 'Time to live:', 'zh-CN': '剩余存活时间:', 'reuse': true },
        { 'en-US': 'Make public', 'zh-CN': '设为开放', 'reuse': true },
        { 'en-US': 'Make non-public', 'zh-CN': '设为非开放', 'reuse': true },
        { 'en-US': 'Notify me when attacked', 'zh-CN': '被攻击时通知我', 'reuse': true },
        { 'en-US': 'Destroy this structure', 'zh-CN': '摧毁该建筑', 'reuse': true },
        { 'en-US': 'Click again to confirm', 'zh-CN': '再次点击以确认', 'reuse': true },

        { 'en-US': 'Mineral:', 'zh-CN': '矿藏 mineral:', 'reuse': true },
        { 'en-US': 'Density:', 'zh-CN': '丰度 density:', 'reuse': true },
        { 'en-US': 'Amount:', 'zh-CN': '余量 amount:', 'reuse': true },
        { 'en-US': 'Regeneration in:', 'zh-CN': '重新生成于:', 'reuse': true },
        { 'en-US': 'Learn more', 'zh-CN': '了解更多', 'reuse': true },
        { 'en-US': 'Build an extractor here to mine this mineral deposit.', 'zh-CN': '在此处建筑一个 extractor 以采集该矿藏。', 'reuse': true },
        { 'en-US': 'Amount:', 'zh-CN': '余量 amount:', 'reuse': true },

        { 'en-US': 'Level:', 'zh-CN': '等级 level:', 'reuse': true },
        { 'en-US': 'Safe modes available:', 'zh-CN': '剩余安全模式:', 'reuse': true },
        { 'en-US': 'Downgrade in:', 'zh-CN': '降级时间:', 'reuse': true },
        { 'en-US': 'Power enabled:', 'zh-CN': '是否启用 Power:', 'reuse': true },
        { 'en-US': 'Activate safe mode', 'zh-CN': '激活安全模式', 'reuse': true },
        { 'en-US': 'This action will consume 1 available safe mode activation. Proceed?', 'zh-CN': '这将会消耗掉一次安全模式激活次数，确定继续？', 'reuse': true },
        { 'en-US': 'Unclaim', 'zh-CN': '取消占领', 'reuse': true },

        // 建筑面板
        // 建筑
        { 'en-US': 'Construct', 'zh-CN': '建筑', 'reuse': true },
        // 建筑过多弹窗
        {
            'en-US': 'You have too many construction sites. The maximum number of construction sites per player is 100.',
            'zh-CN': '您创建的 construction site 过多。每个玩家能够创建的 construction site 上限为 100。',
            'reuse': true
        },
        // 下方提示
        {
            'selector': 'g > text',
            'zh-CN': translateMultiple(CONSTRUCT_NOTICE),
            'reuse': true
        },
        // 建筑状态
        // 无法更新可建筑数量，暂时禁用
        // {
        //     'selector': 'div > div > div > button > .ng-scope > div',
        //     'zh-CN': (el: HTMLElement) => {
        //         el.innerHTML = el.innerHTML.replace('Available:', '可建造数:')
        //         el.innerHTML = el.innerHTML.replace('required', '')
        //         el.innerHTML = el.innerHTML.replace('RCL ', '要求RCL')
        //         el.innerHTML = el.innerHTML.replace('Available', '可建造')
        //         el.innerHTML = el.innerHTML.replace('No controller', '控制器无效')
        //     },
        //     'reuse': true
        // },
        // Spawn 建造弹窗
        { 'en-US': 'Create', 'zh-CN': '建造', 'reuse': true },
        { 'en-US': 'Enter name:', 'zh-CN': '输入名称', 'reuse': true },
        { 'en-US': 'Cancel', 'zh-CN': '取消', 'reuse': true },
        { 'en-US': 'OK', 'zh-CN': '确认', 'reuse': true },
        // 建筑描述
        { 'en-US': 'Contains additional energy which can be used by spawns for spawning bigger creeps.', 'zh-CN': '为 Spawn 提供生产更大体型 creep 所需要的储能空间。', 'reuse': true },
        { 'en-US': 'Decreases movement cost. Decays over time and requires repair.', 'zh-CN': '降低移动的消耗。会随着时间推移而老化并需要维护。', 'reuse': true },
        { 'en-US': 'Blocks movement of all creeps. Requires repair after construction.', 'zh-CN': '能够阻挡所有 creep。建造之后需要维护。', 'reuse': true },
        {
            'en-US': 'Defends creeps and structures on the same tile and blocks enemy movement. Decays over time and requires repair.',
            'zh-CN': '保护位于同一位置的 creep 及建筑，能够阻挡敌人。会随着时间推移而老化并需要维护。',
            'reuse': true
        },
        {
            'en-US': 'Remotely attacks or heals any creep in a room, or repairs a structure.',
            'zh-CN': '能够对同房间的任意 creep 进行远距离攻击或治疗，也可对建筑进行维护。',
            'reuse': true
        },
        { 'en-US': 'Stores up to 2,000 resource units. Decays over time and requires repair.', 'zh-CN': '能够存储 2,000 点资源。会随着时间推移而老化并需要维护。', 'reuse': true },
        { 'en-US': 'Stores up to 1,000,000 resource units.', 'zh-CN': '能够存储 1,000,000 点资源。', 'reuse': true },
        { 'en-US': 'Remotely transfers energy to another Link in the same room.', 'zh-CN': '能够向同房间的 Link 远距离传送能量。', 'reuse': true },
        { 'en-US': 'Allows to mine a mineral deposit.', 'zh-CN': '允许玩家采集矿物。', 'reuse': true },
        { 'en-US': 'Produces mineral compounds and boosts creeps.', 'zh-CN': '能够制造矿物化合物并强化 creep。', 'reuse': true },
        { 'en-US': 'Sends any resources to a\u00A0Terminal in another room.', 'zh-CN': '能够向另一房间的 Terminal 发送任意资源。', 'reuse': true },
        { 'en-US': 'Produces trade commodities.', 'zh-CN': '能够生产可交易商品。', 'reuse': true },
        { 'en-US': 'Spawns creeps using energy contained in the room spawns and extensions.', 'zh-CN': '使用房间内 Spawn 与 Extension 储备的能量生产 creep。', 'reuse': true },
        { 'en-US': 'Provides visibility into a distant room from your script.', 'zh-CN': '能够使您的脚本获取远处一房间的视野。', 'reuse': true },
        { 'en-US': 'Spawns power creeps with special unique powers.', 'zh-CN': '能够生产拥有特殊技能的超能 creep。', 'reuse': true },
        { 'en-US': 'Launches a nuke to a distant room dealing huge damage to the landing area.', 'zh-CN': '能够向远处一房间发射核弹，对命中区域造成巨大伤害。', 'reuse': true },

        // 右侧面板相关提示
        {
            'selector': 'a.help.ng-scope',
            'zh-CN': (el: HTMLElement) => {
                el.setAttribute('title', '该 controller 在降级时间达到最大之前无法升级（点击了解详情)')
            },
            'reuse': true
        },
        {
            'selector': 'div.damaged.ng-binding.ng-scope > a',
            'zh-CN': (el: HTMLElement) => {
                el.setAttribute('title', '通过升级 controller 避免降级（点击了解详情）')
            },
            'reuse': true
        },
        // 建筑工地面板
        { 'en-US': 'Construction Site', 'zh-CN': '建筑工地', 'reuse': true },
        { 'en-US': 'Structure:', 'zh-CN': '建筑(structure):', 'reuse': true },
        { 'en-US': 'Progress:', 'zh-CN': '进度(progress):', 'reuse': true },
        { 'en-US': 'Remove construction site', 'zh-CN': '移除建筑工地', 'reuse': true },

        // creep 面板
        { 'en-US': 'Suicide', 'zh-CN': '自杀 suicide' },
        { 'en-US': 'View memory', 'zh-CN': '查看 memory' },
        { 'en-US': 'Body', 'zh-CN': '部件' },

        // powercreep
        { 'en-US': 'Class:', 'zh-CN': '种类：', 'reuse': true },

        // 房间显示设置 
        { 'en-US': 'Show my names', 'zh-CN': '显示己方名称', 'reuse': true },
        { 'en-US': 'Show hostile names', 'zh-CN': '显示敌方名称', 'reuse': true },
        { 'en-US': 'Show flags', 'zh-CN': '显示旗帜（flag）', 'reuse': true },
        { 'en-US': 'Show flags names', 'zh-CN': '显示旗帜（flag）名称', 'reuse': true },
        { 'en-US': 'Show creeps speech', 'zh-CN': '显示 creep 的对话气泡', 'reuse': true },
        { 'en-US': 'Show visuals', 'zh-CN': '显示房间视觉效果（RoomVisual）', 'reuse': true },
        { 'en-US': 'Lighting:', 'zh-CN': '单位提供光照:', 'reuse': true },
        { 'en-US': 'Swamp texture:', 'zh-CN': '沼泽纹理:', 'reuse': true },
        { 'en-US': 'Hardware acceleration (WebGL)', 'zh-CN': '硬件加速（WebGL）', 'reuse': true },
        { 'en-US': 'Show metrics', 'zh-CN': '显示相关参数', 'reuse': true },
        { 'en-US': 'HD resolution:', 'zh-CN': '高清显示设置:', 'reuse': true },
        { 'en-US': 'Upscaling (performance)', 'zh-CN': 'Upscaling（性能）', 'reuse': true },
        { 'en-US': 'Native (quality)', 'zh-CN': 'Native（效果）', 'reuse': true },
        { 'en-US': 'Normal', 'zh-CN': '正常', 'reuse': true },
        { 'en-US': 'Low', 'zh-CN': '低', 'reuse': true },
        { 'en-US': 'Disabled', 'zh-CN': '关闭', 'reuse': true },
        { 'en-US': 'Animated', 'zh-CN': '动态', 'reuse': true },
        { 'en-US': 'Static', 'zh-CN': '静态', 'reuse': true },

        // effect面板
        { 'en-US': 'Effects', 'zh-CN': '效果', 'reuse': true },
        // {
        //     'selector': 'div.effect-icon',
        //     'zh-CN': (el: HTMLElement) => {
        //         let text = el.getAttribute('title')
        //         text = text.replace('Ticks remaining', '剩余时长')
        //         el.setAttribute('title', text)
        //     },
        //     'reuse': true
        // },
        {
            'en-US': 'While this structure is alive, it will send invader creeps to all rooms in this sector. It also seems there are some valuable resources inside.',
            'zh-CN': '当该建筑存在时, 会在本 sector 的全部房间生成 invader creeps。其内部似乎有贵重的资源。',
            'reuse': true
        },

        // 特殊建筑面板
        // portal
        { 'en-US': 'Destination:', 'zh-CN': '目的地 destination:', 'reuse': true },

        // controller
        { 'en-US': 'Reserved:', 'zh-CN': '预定:', 'reuse': true },

        // invader core
        { 'en-US': 'This structure is spawned by its parent nearby.', 'zh-CN': '该建筑由位于附近的父建筑生成', 'reuse': true },
        { 'en-US': 'Deploying in:', 'zh-CN': '剩余部署时间:', 'reuse': true },

        // invader core creep
        {
            'en-US': 'This creep is angry with your harvesting activity here. Its home is located somewhere in this sector.',
            'zh-CN': '您的采集行为激怒了这个 creep。它的出生点位于本 sector 的某个位置。',
            'reuse': true
        },

        // source keeper lair
        { 'en-US': 'Spawning in:', 'zh-CN': '下一次生成单位:', 'reuse': true },

        // deposite
        { 'en-US': 'Deposit:', 'zh-CN': '沉积物 Deposit:', 'reuse': true },
        { 'en-US': 'Last cooldown:', 'zh-CN': '上一次采集冷却:', 'reuse': true },

        // powerbank
        { 'en-US': 'Power:', 'zh-CN': 'Power 容量:', 'reuse': true },
        { 'en-US': 'This structure emits bright light and splashes of sparks.', 'zh-CN': '这个建筑散发着亮光，飞溅出火星。', 'reuse': true },

        // tombstone
        { 'en-US': 'Death time:', 'zh-CN': '死亡时间:', 'reuse': true },
        // {
        //     'selector': 'div.ng-scope > div.ng-binding.ng-scope',
        //     'zh-CN': (el: HTMLElement) => {
        //         el.innerHTML = el.innerHTML.replace('ago', '之前')
        //     },
        //     'reuse': true
        // }

        // 旗帜放置面板
        { 'en-US': 'Change position', 'zh-CN': '修改位置', 'reuse': true },
        { 'en-US': 'Change color', 'zh-CN': '修改颜色', 'reuse': true },
        { 'en-US': 'Remove flag', 'zh-CN': '移除旗帜', 'reuse': true },
        { 'en-US': 'Color:', 'zh-CN': '主要颜色 color:', 'reuse': true },
        { 'en-US': 'Secondary color:', 'zh-CN': '次要颜色 secondaryColor:', 'reuse': true },
        {
            'en-US': 'Flag with the same name already exists and will be overwritten!',
            'zh-CN': '相同名称的旗帜已存在，继续创建将覆盖原旗帜！',
            'reuse': true
        }
    ]
}

export default content
