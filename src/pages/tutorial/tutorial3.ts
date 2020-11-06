import { DOCUMENT_CN } from 'setting'
import { translateMultiple } from 'utils'
import { getObjectiveTranslationContent } from './utils'

/**
 * 教程正文
 */
const TUTORIAL_CONTENT = {
    'The Controller upgrade gives access to some new structures: walls, ramparts, and extensions.\nWe’ll discuss walls and ramparts in the next Tutorial section, for now let’s talk about extensions.':
    '控制器升级解锁了新的建筑：wall、rampart 以及 extension。我们将在下个教程部分讨论 wall 和 rampart，现在让我们先来了解一下 extension。',

    '<b>Extensions</b> are required to build larger creeps. A creep with only one body part of one type works poorly.\nGiving it several <code>WORKs</code> will make him work proportionally faster.':
    '<b>Extension</b> 被用来孵化更大型的 creep。每种身体类型只有一个部件的 creep 工作并不高效。多为其添加几个 <code>WORK</code> 部件可以让它们成比例的提高效率。',

    'However, such a creep will be costly and a lone spawn can only contain 300 energy units.\nTo build creeps costing over 300 energy units you need spawn extensions.':
    '但是，这样的 creep 会更加的昂贵，并且单独一个 spawn 只能容纳最多 300 点能量。想要孵化成本超过 300 点能量的 creep，您需要 spawn 拓展（即 extension）。',

    'The second Controller level has <strong>5 extensions</strong> available for you to build.\nThis number increases with each new level.':
    '二级 controller 将允许您建造 <strong>5 个 extension</strong>。每次 controller 升级都会解锁更多的 extension。',

    'You can place extensions at any spot in your room, and a spawn can use them regardless of the distance.\nIn this Tutorial we have already placed corresponding construction sites for your convenience.':
    '您可以在您房间中的任何位置放置 extension，并且 spawn 可以无视彼此之间的距离直接使用 extension 中的能量。为了方便起见，我们已经放置好了对应的建筑工地（construction site）。',

    'Let’s create a new creep whose purpose is to build structures. This process will be similar to the previous Tutorial sections.\nBut this time let’s set <code>memory</code> for the new creep right in the method <code>Spawn.spawnCreep</code> by\npassing it in the third argument.':
    '让我们创建一个用于建造建筑的新 creep。这个过程和之前的教程章节类似。但是这次我们将使用 <code>Spawn.spawnCreep</code> 方法的第三个参数直接为新的 creep 设置 <code>memory</code>。',

    'Our new creep won’t move until we define the behavior for the role <code>builder</code>.':
    '在我们为 <code>builder</code> 角色定义行为逻辑之前，新的 creep 都会傻乎乎的呆在原地。',

    'As before, let’s move this role into a separate module <code>role.builder</code>. The building is carried out\nby applying the method <code>Creep.build</code> to the construction sites searchable by\n<code>Room.find(FIND_CONSTRUCTION_SITES)</code>. The structure requires energy which your creep can harvest on its own.':
    '和之前一样，我们把这个角色放到单独的模块 <code>role.builder</code> 中。建造是通过对建筑工地执行 <code>Creep.build</code> 方法进行的，而工地则可以通过 <code>Room.find(FIND_CONSTRUCTION_SITES)</code> 搜索得到。建造建筑需要能量，您的 creep 应该自己去采集它们。',

    'To avoid having the creep run back and forth too often but make it deplete the cargo, let’s complicate our logic by\ncreating a new Boolean variable <code>creep.memory.building</code> which will tell the creep when to switch tasks.\nWe\'ll also add new <code>creep.say</code> call and <code>visualizePathStyle</code> option to the <code>moveTo</code>\nmethod to visualize the creep\'s intentions.':
    '为了避免由于身上资源耗尽而频繁的来回移动，让我们通过添加一个新的布尔变量 <code>creep.memory.building</code> 来增强一下代码，这个变量将会告诉 creep 应该何时切换任务。我们还调用了 <code>creep.say</code> 并且在 <code>moveTo</code> 方法中添加了 <code>visualizePathStyle</code> 选项来可视化 creep 的移动路径。',

    'Let’s create a call of the new role in the main module and wait for the result.':
    '让我们在 main 模块中引用新的角色并瞧瞧会发生什么。',

    'Your extensions have been built. Now let’s learn to work with them.':
    '您的 extension 已经造好了。现在让我们了解一下如何使用它们。',

    'Maintaining extensions requires you to teach your harvesters to carry energy not just to a spawn but also to\nextensions. To do this, you can either use the <code>Game.structures</code> object or search within the room\nwith the help of <code>Room.find(FIND_STRUCTURES)</code>. In both cases, you will need to filter the list of\nitems on the condition <code>structure.structureType == STRUCTURE_EXTENSION</code> (or, alternatively, <code>structure\n instanceof StructureExtension</code>)\nand also check them for energy load, as before.':
    '想要维护 extension，您需要教会您的采集单位把能量运输到 extension 而不仅仅是 spawn。为此，您需要使用 <code>Game.structures</code> 对象或者在对应的房间执行 <code>Room.find(FIND_STRUCTURES)</code> 方法进行搜索。无论使用哪种方式，您都需要用判断条件 <code>structure.structureType == STRUCTURE_EXTENSION</code>（或者 <code>structure\n instanceof StructureExtension</code>）对结果列表进行筛选，还有别忘了检查它们存有多少能量（就像之前检查 creep 一样）。',

    'To know the total amount of energy in the room, you can use the property <code>Room.energyAvailable</code>.\nLet’s add the output of this property into the console in order to track it during the filling of extensions.':
    '想要了解房间里总共有多少能量可以用于孵化，您可以使用 <code>Room.energyAvailable</code> 属性。让我们把这个属性输出到控制台中以便在 extension 填充期间对齐进行追踪。',

    'Excellent, all the structures are filled with energy. It’s time to build somebody large!':
    '非常好，所有的建筑都填满了能量。是时候建造一些大家伙了！',

    'In total, we have 550 energy units in our spawn and extensions. It is enough to build a creep with the body\n<code>[WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE]</code>. This creep will work 4 times faster than a regular worker\ncreep. Its body is heavier, so we’ll add another <code>MOVE</code> to it. However, two parts are still not\nenough to move it at the speed of a small fast creep which would require 4x<code>MOVEs</code> or building a road.':
    '现在我们的 spawn 和 extension 中总共有 550 点能量。这已经足够建造一个身体部件为 <code>[WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE]</code> 的 creep 了。这个 creep 的工作效率是普通工作单位的 4 倍。但是这也让它变得更重，所以我们给它添加了额外的 <code>MOVE</code> 部件。但是，两个 <code>MOVE</code> 也没办法让它跑得像小 creep 那么快，除非我们给他添加 4 个 <code>MOVEs</code> 或者修一条路。'
}

/**
 * 行动目标文本
 */
const OBJECTIVE_CONTENT = {
    'Spawn a creep with the body <code>[WORK,CARRY,MOVE]</code>, the name <code>Builder1</code>, and <code>{role:\'builder\'}</code>\nas its memory.':
    '孵化一个身体部件为 <code>[WORK,CARRY,MOVE]</code>，名字为 <code>Builder1</code>，并且内存为 <code>{role:\'builder\'}</code> 的 creep。',

    'Create the module <code>role.builder</code> with a behavior logic for a new creep.':
    '创建一个名为 <code>role.builder</code> 的模块，并写入新 creep 的行为逻辑。',

    'By using the module <code>role.builder</code> in the new creep, build all 5 extensions.':
    '通过在新 creep 上应用 <code>role.builder</code> 模块来建造全部 5 个 extension。',

    'Refine the logic in the module <code>role.harvester</code>.':
    '优化 <code>role.harvester</code> 模块中的逻辑。',

    'Fill all the 5 extensions and the spawn with energy.':
    '找到存有能量的 spawn 和全部的 5 个 extension。',

    'Spawn a creep with the body <code>[WORK,WORK,WORK,CARRY,MOVE,MOVE]</code>, the name <code>HarvesterBig</code>, and\n<code>harvester</code> role.':
    '孵化一个身体部件为 <code>[WORK,WORK,WORK,CARRY,MOVE,MOVE]</code>，名称为 <code>HarvesterBig</code> 的 creep 并且设为 <code>harvester</code> 角色。'
}

/**
 * 帮助文档更换
 */
const OBJECTIVE_LINK = {
    'http://docs.screeps.com/api/#StructureSpawn.spawnCreep':
    `${DOCUMENT_CN}/api/#StructureSpawn.spawnCreep`,

    'http://docs.screeps.com/api/#RoomObject.room':
    `${DOCUMENT_CN}/api/#RoomObject.room`,

    'http://docs.screeps.com/api/#Room.find':
    `${DOCUMENT_CN}/api/#Room.find`,

    'http://docs.screeps.com/api/#Creep.build':
    `${DOCUMENT_CN}/api/#Creep.build`,

    'http://docs.screeps.com/api/#Creep.say':
    `${DOCUMENT_CN}/api/#Creep.say`,

    'http://docs.screeps.com/api/#Game.structures':
    `${DOCUMENT_CN}/api/#Game.structures`,

    'http://docs.screeps.com/api/#StructureExtension':
    `${DOCUMENT_CN}/api/#StructureExtension`,

    'http://docs.screeps.com/api/#Room.energyAvailable':
    `${DOCUMENT_CN}/api/#Room.energyAvailable`
}


const content: PageContent = {
    hashs: ['#!/sim/tutorial/3'],

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
