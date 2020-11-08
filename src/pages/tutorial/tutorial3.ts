import { DOCUMENT_CN } from 'setting'
import { translateMultiple } from 'utils'
import { getBaseUIContent, getObjectiveTranslationContent } from './utils'

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

    'Maintaining extensions requires you to teach your harvesters to carry energy not just to a spawn but also to\nextensions. To do this, you can either use the <code>Game.structures</code> object or search within the room\nwith the help of <code>Room.find(FIND_STRUCTURES)</code>. In both cases, you will need to filter the list of\nitems on the condition <code>structure.structureType == STRUCTURE_EXTENSION</code> (or, alternatively, <code>structure instanceof StructureExtension</code>)\nand also check them for energy load, as before.':
    '想要维护 extension，您需要教会您的采集单位把能量运输到 extension 而不仅仅是 spawn。为此，您需要使用 <code>Game.structures</code> 对象或者在对应的房间执行 <code>Room.find(FIND_STRUCTURES)</code> 方法进行搜索。无论使用哪种方式，您都需要用判断条件 <code>structure.structureType == STRUCTURE_EXTENSION</code>（或者 <code>structure\n instanceof StructureExtension</code>）对结果列表进行筛选，还有别忘了检查它们存有多少能量（就像之前检查 creep 一样）。',

    'To know the total amount of energy in the room, you can use the property <code>Room.energyAvailable</code>.\nLet’s add the output of this property into the console in order to track it during the filling of extensions.':
    '想要了解房间里总共有多少能量可以用于孵化，您可以使用 <code>Room.energyAvailable</code> 属性。让我们把这个属性输出到控制台中以便在 extension 填充期间对其进行追踪。',

    'Excellent, all the structures are filled with energy. It’s time to build somebody large!':
    '非常好，所有的建筑都填满了能量。是时候建造一些大家伙了！',

    'In total, we have 550 energy units in our spawn and extensions. It is enough to build a creep with the body\n<code>[WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE]</code>. This creep will work 4 times faster than a regular worker\ncreep. Its body is heavier, so we’ll add another <code>MOVE</code> to it. However, two parts are still not\nenough to move it at the speed of a small fast creep which would require 4x<code>MOVEs</code> or building a road.':
    '现在我们的 spawn 和 extension 中总共有 550 点能量。这已经足够建造一个身体部件为 <code>[WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE]</code> 的 creep 了。这个 creep 的效率是普通工作单位的 4 倍。但是这也让它变得更重，所以我们给它添加了额外的 <code>MOVE</code> 部件。但是，两个 <code>MOVE</code> 也没办法让它跑得像小 creep 那样快，除非我们给他添加 4 个 <code>MOVE</code> 或者修一条路。',

    'Building this creep took energy from all storages and completely drained them.':
    '孵化这个 creep 会把所有存储的能量完全耗尽。',

    'Now let’s select our creep and watch it work.':
    '现在，选中我们的 creep 然后看着它努力的工作（<i>译者注：没有人不喜欢看蚂蚁搬家</i>）。',

    'As you can see on the right panel, this powerful creep harvests 8 energy units per tick.\nA few such creeps can completely drain an energy source before it refills thus giving your colony a\nmaximum energy boost.':
    '你可以在右边的这个面板中看到，这个超强的 creep 每 tick 能采集 8 点能量。两三个这样的 creep 就可以在一个 source 恢复能量之前将其完全采干，并由此为您的殖民地带来最大化的能量收益。',

    'Hence, by upgrading your Controller, constructing new extensions and more powerful creeps, you\nconsiderably improve the effectiveness of your colony work. Also, by replacing a lot of small creeps\nwith fewer large ones, you save CPU resources on controlling them which is an important prerequisite to\nplay in the online mode.':
    '因此，通过升级您的 controller，建造新的 extension 和更强大的 creep，您殖民地的效率将会被极大的提升。并且，您可以用大型的 creep 代替一群小型的 creep 来减少用于操控它们的 CPU，请记住它，这在多人游戏里非常重要。',

    'In the next section, we’ll talk about how to set up the automatic manufacturing of new creeps.':
    '在下一小节中，我们将介绍如何建立起新 creep 的自动孵化机制。'
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
    '找到全部的 5 个 extension 以及 spawn 并填充能量。',

    'Spawn a creep with the body <code>[WORK,WORK,WORK,CARRY,MOVE,MOVE]</code>, the name <code>HarvesterBig</code>, and\n<code>harvester</code> role.':
    '孵化一个身体部件为 <code>[WORK,WORK,WORK,CARRY,MOVE,MOVE]</code>，名称为 <code>HarvesterBig</code> 的 creep 并且设为 <code>harvester</code> 角色。',

    'Click on the creep Harvester2.':
    '点击 creep Harvester2'
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
        ...getBaseUIContent(),

        { 'en-US': 'Next section', 'zh-CN': '下一关', 'reuse': true },

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
