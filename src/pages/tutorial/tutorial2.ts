import { DOCUMENT_CN } from 'setting'
import { translateMultiple } from 'utils'
import { getBaseUIContent, getObjectiveTranslationContent } from './utils'

/**
 * 教程正文
 */
const TUTORIAL_CONTENT = {
    'In this Tutorial section we’ll talk about a key strategic object in your room: <strong>Room Controller</strong>.\nBy controlling this invincible structure you can build facilities in the room.\nThe higher the controller level, the more structures available to build.':
    '在本教程部分中，我们将来介绍您房间中的重要战略目标：<strong>房间控制器</strong>（controller）。控制这个不可摧毁的小东西将允许您在房间中建造建筑。控制器的等级越高，允许建造的建筑就越多。',

    'You will need a new worker creep to upgrade your controller level. Let\'s call it "Upgrader1".\nIn following sections we\'ll discuss how to create creeps automatically, but for now let\'s send a\ncommand manually to the console.':
    '您将需要一个新 creep 工作单位去升级您的控制器等级，让我们称其为 “Upgrader1”。在接下来的章节中我们将介绍如何自动创建 creep，但是现在让我们还是和之前一样在控制器里输入下面的命令。',

    'Creep "Upgrader1" went to perform the same task as the harvester, but we don\'t want it to. We need to differentiate creep roles.':
    'creep “Upgrader1” 将执行和 harvester 相同的任务，但是我们并不想让它这么做。我们需要一个不同的 creep 角色（role）。',

    'To do that, we need to utilize the <code>memory</code> property of each creep that allows writing custom information\ninto the creep\'s "memory". Let\'s do this to assign different roles to our creeps.':
    '为此，我们需要利用每个 creep 都有的 <code>memory</code> 属性，该属性允许在 creep 的“内存”中写入自定义信息。这样，我们就可以给 creep 分配不同的角色。',

    'All your stored memory is accessible via the global <code>Memory</code> object. You can use it any way you like.':
    '您储存的所有内存信息可以通过全局对象 <code>Memory</code> 访问。这两种方式您想用哪种都可以。',

    'You can check your creeps\' memory in either the creep information panel on the left or on the "Memory" tab.':
    '您可以在左侧的 creep 信息面板或者 “内存” 面板中查看您 creep 的内存。',

    'Now let\'s define the behavior of the new creep. Both creeps should harvest energy, but the creep with the role\n<code>harvester</code> should bring it to the spawn, while the creep with the role <code>upgrader</code>\nshould go to the Controller and apply the function <code>upgradeController</code> to it (you can get the\nController object with the help of the <code>Creep.room.controller</code> property).':
    '现在，让我们来定义新 creep 的行为逻辑。两种 creep 都需要采集能量，但是角色为 <code>harvester</code> 的 creep 需要把能量带回到 spawn，而角色为 <code>upgrader</code> 的 creep 需要走到 controller 旁然后对其执行 <code>upgradeController</code> 方法（您可以通过 <code>Creep.room.controller</code> 属性获取到 creep 所在房间的 controller 对象）。',

    'In order to do this, we’ll create a new module called <code>role.upgrader</code>.':
    '为此，我们需要创建一个名为 <code>role.upgrader</code> 的新模块。',

    'In our main module, all creeps run the same role. We need to divide their behavior depending on the previously\ndefined property <code>Creep.memory.role</code> by connecting the new module.':
    '在我们的 main 模块中，所有的 creep 都在扮演相同的角色。我们需要使用先前定义的 <code>Creep.memory.role</code> 属性区分它们的行为，注意不要忘记导入新模块哦。',

    'Perfect, you have upgraded your Controller level!':
    '干得好，您已经成功升级了您控制器的等级！',

    '<strong>Important:</strong> If you don’t upgrade your Controller within 20,000 game ticks, it loses one level.\nOn reaching level 0, you will lose control over the room, and another player will be able to capture it freely.\nMake sure that at least one of your creeps regularly performs the function <code>upgradeController</code>.':
    '<strong>重要：</strong>如果您在 20,000 游戏 tick 内都没有升级您的控制器的话，它将会损失一个等级。当降至 0 级时，您将失去对房间的控制权，并且其他的玩家可以毫无代价的将其占领。请确保至少有一个 creep 定期执行 <code>upgradeController</code> 方法。'
}

/**
 * 行动目标文本
 */
const OBJECTIVE_CONTENT = {
    'Spawn a creep with the body <code>[WORK,CARRY,MOVE]</code> and the name <code>Upgrader1</code>.':
    '孵化一个身体为 <code>[WORK,CARRY,MOVE]</code> 且名称为 <code>Upgrader1</code> 的 creep。',

    'Write a property <code>role=\'harvester\'</code> into the memory of the harvester creep and <code>role=\'upgrader\'</code>\n— to the upgrader creep with the help of the console.':
    '使用控制台将属性 <code>role=\'harvester\'</code> 写入采集单位的内存，将 <code>role=\'upgrader\'</code> 写入升级单位的内存。',

    'Create a new module <code>role.upgrader</code> with the behavior logic of your new creep.':
    '创建名为 <code>role.upgrader</code> 的新模块，并写入您新 creep 的行为逻辑。',

    'Apply the logic from the module <code>role.upgrader</code> to the creep with the role <code>upgrader</code>\nand check how it performed.':
    '将 <code>role.upgrader</code> 模块中的逻辑应用到拥有 <code>upgrader</code> 角色的 creep 身上并检查其表现。'
}

/**
 * 帮助文档更换
 */
const OBJECTIVE_LINK = {
    'http://docs.screeps.com/control.html':
    `${DOCUMENT_CN}/control.html`,

    'http://docs.screeps.com/api/#Game.spawns':
    `${DOCUMENT_CN}/control`,

    'http://docs.screeps.com/api/#StructureSpawn.spawnCreep':
    `${DOCUMENT_CN}/api/#StructureSpawn.spawnCreep`,

    'http://docs.screeps.com/global-objects#Memory-object':
    `${DOCUMENT_CN}/global-objects.html#Memory-%E5%AF%B9%E8%B1%A1`,

    'http://docs.screeps.com/api/#Creep.memory':
    `${DOCUMENT_CN}/api/#Creep.memory`,

    'http://docs.screeps.com/api/#RoomObject.room':
    `${DOCUMENT_CN}/api/#RoomObject.room`,

    'http://docs.screeps.com/api/#Room.controller':
    `${DOCUMENT_CN}/api/#Room.controller`,

    'http://docs.screeps.com/api/#Creep.upgradeController':
    `${DOCUMENT_CN}/api/#Creep.upgradeController`
}


const content: PageContent = {
    hashs: ['#!/sim/tutorial/2'],

    content: [
        ...getBaseUIContent(),

        { 'en-US': 'Next section', 'zh-CN': '下一关', 'reuse': true },
        { 'en-US': 'Control', 'zh-CN': '控制', 'reuse': true },
        { 'en-US': 'Memory object', 'zh-CN': 'Memory 对象', 'reuse': true },

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
