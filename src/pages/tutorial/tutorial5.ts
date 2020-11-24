import { DOCUMENT_CN } from 'setting'
import { translateMultiple } from 'utils'
import { getBaseUIContent, getObjectiveTranslationContent } from './utils'

/**
 * 教程正文
 */
const TUTORIAL_CONTENT = {
    'The world of Screeps is not the safest place. Other players may have claims on your territory.\nBesides, your room may be raided by neutral NPC creeps occasionally. So you ought to think about your\ncolony defense in order to develop it successfully.':
    'Screeps 的世界并不安全。其他玩家可能想要占领您的领土。此外，您的房间也会偶尔遭到中立 NPC creep 的袭击。所以，您需要好好考虑下殖民地的防御，这样您才能更加安全的发展自己。',

    'This hostile creep has come from the left entry and attacked your colony. It’s good that we have walls to\nrestrain it temporarily. But they will fall sooner or later, so we need to deal with the problem.':
    '敌方 creep 从房间左边的入口入侵并袭击了您的殖民地。由于我们有墙壁可以暂时抵挡它的进攻，所以目前问题不大。但是墙壁迟早会被打穿，所以我们需要尽快解决这个问题。',

    'The surest way to fend off an attack is using the room <strong>Safe Mode</strong>.\nIn safe mode, no other creep will be able to use any harmful methods in the room (but you’ll still be able to defend against strangers).':
    '抵御进攻最可靠的方法就是使用房间的 <strong>安全模式</strong>（Safe Mode）。在安全模式中，房间中任何非己方 creep 都无法执行任何有害的操作（但是您依旧可以进行反抗。）',

    'The safe mode is activated via the room controller which should have activations available to use.\nLet’s spend one activation to turn it on in our room.':
    '安全模式是通过房间控制器（controller）激活的，不过首先我们要有可用的激活次数。现在让我们在房间中启动安全模式。',

    'As you can see, the enemy creep stopped attacking the wall – its harmful methods are blocked.\nWe recommend that you activate safe mode when your defenses fail.':
    '如您所见，敌方 creep 已经不再进攻墙壁了 - 它的有害操作被阻止了。我们建议您在房间的防御失效时再激活安全模式。',

    'Now let’s cleanse the room from unwanted guests.':
    '现在，让我们把这些不速之客清理掉。',

    'Towers are the easiest way to actively defend a room. They use energy and can be targeted at any creep in a room\nto attack or heal it. The effect depends on the distance between the tower and the target.':
    '防御塔（tower）是防御房间最简单直接的手段。它们可以消耗能量来治疗或攻击房间中的任何 creep。治疗/攻击效果取决于 tower 和目标之间的直线距离。',

    'To start with, let’s lay a foundation for our new tower. You can set any place you wish inside the walls\nand place the construction site there with the help of the button “Construct” on the upper panel.':
    '首先，让我们给新 tower 打好地基。您可以在墙壁之内的任何位置放置 tower 的工地，通过顶部面板中的 “建造” 按钮找到它。',

    'The creep Builder1 has immediately started the construction. Let’s wait until it finishes.':
    'creep Builder1 立刻反应过来并开始了建造。现在让我们等它造好。',

    'A tower uses energy, so let’s set the harvester role to bring energy to the tower along with other structures.\nTo do this, you need to add the constant <code>STRUCTURE_TOWER</code> to the filter of structures your\nharvester is aimed at.':
    'tower 需要能量，所以让我们改造一下 harvester 角色，让其可以把能量带到 tower 和其他建筑中。想要实现这个功能，您需要将 <code>STRUCTURE_TOWER</code> 常量添加到用于筛选您采集单位目标的 filter 中。',

    'Excellent, your tower is ready to use!':
    '棒极了，您的 tower 已经准备就绪了！',

    'Like a creep, a tower has several similar methods: <code>attack</code>, <code>heal</code>, and\n<code>repair</code>. Each action spends 10 energy units. We need to use <code>attack</code> on the closest\nenemy creep upon its discovery. Remember that distance is vital: the effect can be several times stronger\nwith the same energy cost!':
    '就像 creep 一样，tower 也有几个类似的方法：<code>attack</code> - 攻击，<code>heal</code> - 治疗，以及 <code>repair</code> - 维修。每个操作都会消耗 10 点能量。一旦发现了敌人，我们就需要使用 <code>attack</code> 方法攻击距离最近的敌方 creep。请记住，距离非常重要：在相同的能量消耗下，操作带来的效果可能会有好几倍的差距。',

    'To get the tower object directly you can use its ID from the right panel and the method <code>Game.getObjectById</code>.':
    '想要获取 tower 的对象，您可以使用它的 ID（右侧面板中）以及 <code>Game.getObjectById</code> 方法。',

    'The enemy creep is eliminated and our colony can breathe easy. However, the invader has damaged some walls during the brief\nattack. You’d better set up auto-repair.':
    '敌方 creep 被消灭，我们终于可以松口气了。但是，在刚才短暂的袭击中，入侵者还是对一些墙壁造成了伤害。您最好设置一下自动维修机制。',

    'Damaged structures can be repaired by both creeps and towers. Let’s try to use a tower for that.\nWe’ll need the method <code>repair</code>. You will also need the method <code>Room.find</code> and a filter to locate the damaged walls.':
    'creep 和 tower 都可以修复受损的建筑，这次让我们用 tower 来试一下。使用 <code>repair</code> 方法可以完成这个任务。除此之外，您还需要使用 <code>Room.find</code> 方法和一个 filter 去筛选除那些受损的墙壁（wall）。',

    'Note that since walls don’t belong to any player, finding them requires the constant <code>FIND_STRUCTURES</code>\nrather than <code>FIND_MY_STRUCTURES</code>.':
    '请注意，由于墙壁不属于任何玩家，所以我们需要使用 <code>FIND_STRUCTURES</code> 常量进行搜索而不是 <code>FIND_MY_STRUCTURES</code>。',

    'All the damage from the attack has been repaired!':
    '所有在袭击中受损的建筑都被修好了！',

    'Congratulations, you have completed the Tutorial! Now you have enough knowledge and code to start playing in\nthe online mode. Choose your room, found a colony, and set out on your own quest for domination in the\nworld of Screeps!':
    '恭喜，您已经完成了全部的教程！现在您已经有足够的知识和代码可以在线上模式中游玩了。挑选您的房间，建立殖民地，然后按照您的意愿在 Screeps 的世界中建立统治！',

    'If you want to delve deeper in the subtleties of the game or have any questions, please feel free to refer to:':
    '如果您想更深入的了解游戏或者有任何疑问，请随时参考：'
}

/**
 * 行动目标文本
 */
const OBJECTIVE_CONTENT = {
    'Defending your room':
    '防御您的房间',

    'Activate safe mode.':
    '激活安全模式。',

    'Place the construction site for the tower (manually or using the code below).':
    '放置 Tower 的工地（手动或使用下面的代码）。',

    'Add <code>STRUCTURE_TOWER</code> to the module <code>role.harvester</code> and wait for the energy to appear in the tower.':
    '在 <code>role.harvester</code> 模块中添加 <code>STRUCTURE_TOWER</code>，然后等待能量运送到 tower 中。',

    'Destroy the enemy creep with the help of the tower.':
    '使用 tower 消灭敌方 creep。',

    'Repair all the damaged walls.':
    '修复所有受损的墙壁（wall）。'
}

/**
 * 帮助文档更换
 */
const OBJECTIVE_LINK = {
    'http://docs.screeps.com/defense.html':
    `${DOCUMENT_CN}/defense.html`,

    'http://docs.screeps.com/api/#StructureController.activateSafeMode':
    `${DOCUMENT_CN}/api/#StructureController.activateSafeMode`,

    'http://docs.screeps.com/api/#StructureTower':
    `${DOCUMENT_CN}/api/#StructureTower`,

    'http://docs.screeps.com/api/#Room.createConstructionSite':
    `${DOCUMENT_CN}/api/#Room.createConstructionSite`,

    'http://docs.screeps.com/api/#Game.getObjectById':
    `${DOCUMENT_CN}/api/#Game.getObjectById`,

    'http://docs.screeps.com/api/#RoomObject.pos':
    `${DOCUMENT_CN}/api/#RoomObject.pos`,

    'http://docs.screeps.com/api/#RoomPosition.findClosestByRange':
    `${DOCUMENT_CN}/api/#RoomPosition.findClosestByRange`,

    'http://docs.screeps.com/api/#StructureTower.attack':
    `${DOCUMENT_CN}/api/#StructureTower.attack`,

    'http://docs.screeps.com/api/#Room.find':
    `${DOCUMENT_CN}/api/#Room.find`,

    'http://docs.screeps.com/api/#StructureTower.repair':
    `${DOCUMENT_CN}/api/#StructureTower.repair`
}


const content: PageContent = {
    hashs: ['#!/sim/tutorial/5'],

    content: [
        ...getBaseUIContent(),

        { 'en-US': 'Slack chat', 'zh-CN': 'Slack 聊天', 'reuse': true },
        { 'en-US': 'Finish', 'zh-CN': '完成', 'reuse': true },

        // 翻译所有教程文本
        {
            'selector': '.tutorial-content.ng-scope > section > p',
            'zh-CN': translateMultiple(TUTORIAL_CONTENT),
            'reuse': true
        },
        // 翻译所有目标文本
        ...getObjectiveTranslationContent(OBJECTIVE_CONTENT, OBJECTIVE_LINK)
    ]
}

export default content
