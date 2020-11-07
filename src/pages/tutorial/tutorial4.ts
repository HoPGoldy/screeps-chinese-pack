import { DOCUMENT_CN } from 'setting'
import { translateMultiple } from 'utils'
import { getObjectiveTranslationContent } from './utils'

/**
 * 教程正文
 */
const TUTORIAL_CONTENT = {
    'Until now, we have created new creeps directly in the console. It’s not a good idea to do it constantly since\nthe very idea of Screeps is making your colony control itself. You will do well if you teach your spawn to\nproduce creeps in the room on its own.':
    '到目前为止，我们都是通过在控制台中输入命令来手动创建新的 creep。我们并不推荐经常这么做，因为 Screeps 的主旨就是让您的殖民地实现自我控制。更好的做法是教会您这个房间中的 spawn 自己生产 creep。',

    'This is a rather complicated topic and many players spend months perfecting and refining their auto-spawning\ncode. But let’s try at least something simple and master some basic principles to start with.':
    '这是一个相当复杂的问题，许多玩家会花费几个月的时间来完善和增强他们的自动孵化代码。但是先让我们从简单开始，来了解一些相关的基本原则。',

    'You will have to create new creeps when old ones die from age or some other reasons. Since there are no\nevents in the game to report death of a particular creep, the easiest way is to just count the number of\nrequired creeps, and if it becomes less than a defined value, to start spawning.':
    '您需要在老的 creep 因为寿命或其他原因死掉时孵化新的 creep。由于游戏中没有事件机制来报告特定 creep 的死亡。所以最简单的方式就是通过统计每种 creep 的数量，一旦其数量低于给定值，就开始孵化。',

    'There are several ways to count the number of creeps of the required type. One of them is filtering\n<code>Game.creeps</code> with the help of the <code>_.filter</code> function and using the role in\ntheir memory. Let’s try to do that and bring the number of creeps into the console.':
    '有很多种方法可以统计指定类型的 creep 数量。其中一种就是通过 <code>_.filter</code> 方法以及 creep 内存中的 role 字段对 <code>Game.creeps</code> 进行筛选。让我们尝试一下，并把 creep 的数量显示在控制台中。',

    'Let’s say we want to have at least two harvesters at any time. The easiest way to achieve this is to run\n<code>StructureSpawn.spawnCreep</code> each time we discover it’s less than this number. You may not define its\nname (it will be given automatically in this case), but don’t forget to define the needed role.':
    '假设我们最少需要维持两个采集单位（harvester），最简单的办法就是：每当我们发现它们的数量小于这个值时，就执行 <code>StructureSpawn.spawnCreep</code> 方法。您可能还没想好它们应该叫什么（这一步我们会自动给它们起名字），但是不要忘了给他们设置需要的角色（role）。',

    'We may also add some new <code>RoomVisual</code> call in order to visualize what creep is being spawned.':
    '我们还会添加一些新的 <code>RoomVisual</code> 来显示当前正在孵化的 creep。',

    'Now let’s try to emulate a situation when one of our harvesters dies. You can now give the command\n<code>suicide</code> to the creep via the console or its properties panel on the right.':
    '现在让我们模拟一下，当一个采集单位死掉了的情况。您可以在控制台中对指定 creep 执行 <code>suicide</code> 命令，或者直接在右侧的属性面板中点击 “自杀” 按钮。',

    'As you can see from the console, after we lacked one harvester, the spawn instantly started building a new\none with a new name.':
    '您可以看到，当我们失去了一个采集单位后，spawn 会立刻开始孵化新的 creep，并且它还有个全新的名字。',

    'An important point here is that the memory of dead creeps is not erased but kept for later reuse.\nIf you create creeps with random names each time it may lead to memory overflow, so you should clear\nit in the beginning of each tick (prior to the creep creation code).':
    '还有一件事，由于死亡 creep 的内存我们之后可能会用到，所以它们并不会被自动清除。如果您每次都用随机名称去孵化新 creep 的话，内存可能会因此溢出，所以您需要在每个 tick 开始的时候将它们清除掉（creep 创建代码之前）。',

    'Now the memory of the deceased is relegated to oblivion which saves us resources.':
    '现在，死者的内存被回收掉了，这有助于帮助我们节省资源。',

    'Apart from creating new creeps after the death of old ones, there is another way to maintain the needed number\nof creeps: the method <code>StructureSpawn.renewCreep</code>. Creep aging is disabled in the Tutorial, so we recommend\nthat you familiarize yourself with it on your own.':
    '除了在老 creep 死掉之后再创建一个新的，还有其他的方法可以把 creep 的数量维持在期望值：<code>StructureSpawn.renewCreep</code> 方法。不过在本教程中 creep 的老化已经被禁用了，所以我们建议您自己尝试了解一下。'
}

/**
 * 行动目标文本
 */
const OBJECTIVE_CONTENT = {
    'Add the output of the number of creeps with the role <code>harvester</code> into the console.':
    '把 <code>harvester</code> 角色的 creep 数量显示在控制台中。',

    'Add the logic for <code>StructureSpawn.spawnCreep</code> in your main module.':
    '在您的 main 模块中添加 <code>StructureSpawn.spawnCreep</code> 相关逻辑。',

    'Make one of the harvesters suicide.':
    '让某个采集单位自杀。',

    'Add code to clear the memory.':
    '添加清理内存的代码。'
}

/**
 * 帮助文档更换
 */
const OBJECTIVE_LINK = {
    'http://docs.screeps.com/api/#Game.creeps':
    `${DOCUMENT_CN}/api/#Game.creeps`,

    'http://docs.screeps.com/api/#StructureSpawn.spawnCreep':
    `${DOCUMENT_CN}/api/#StructureSpawn.spawnCreep`,

    'http://docs.screeps.com/api/#RoomVisual':
    `${DOCUMENT_CN}/api/#RoomVisual`,

    'http://docs.screeps.com/api/#Creep.suicide':
    `${DOCUMENT_CN}/api/#Creep.suicide`,

    'http://docs.screeps.com/api/#StructureSpawn.renewCreep':
    `${DOCUMENT_CN}/api/#StructureSpawn.renewCreep`
}


const content: PageContent = {
    hashs: ['#!/sim/tutorial/4'],

    content: [
        { 'en-US': 'Back', 'zh-CN': '返回', 'reuse': true },
        { 'en-US': 'Start', 'zh-CN': '开始', 'reuse': true },
        { 'en-US': 'Next', 'zh-CN': '下一步', 'reuse': true },
        { 'en-US': 'Got it', 'zh-CN': '明白了', 'reuse': true },
        { 'en-US': 'Code', 'zh-CN': '代码', 'reuse': true },
        { 'en-US': 'Next section', 'zh-CN': '下一关', 'reuse': true },
        { 'en-US': 'Stay', 'zh-CN': '再待会', 'reuse': true },
        { 'en-US': 'Documentation:', 'zh-CN': '文档：', 'reuse': true },

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
