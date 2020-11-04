import { DOCUMENT_CN } from 'setting'
import { translateMultiple } from 'utils'
import { getObjectiveTranslationContent } from './utils'

/**
 * 教程正文
 */
const TUTORIAL_CONTENT = {
    'This tutorial will help you learn basic game concepts step by step.\nYou can take it later, but we strongly advise you to do it now, before you start a real game.':
    '这个教程将帮助您一步步地了解这个游戏的基础概念。您可以稍后再进行这个教程，但是我们强烈建议您在开始真正的游戏前先来试试手。',

    'If you experience any performance issues, please note that Screeps is best played in Chrome browser.':
    '如果您遇到了任何异常的问题，请记住，Screeps 在 Chrome 浏览器上可以带来最佳的表现。',

    'Screeps is a game for programmers. If you don\'t know how to code in JavaScript, check out this&nbsp;<a app-nw-external-link="" href="https://codecademy.com/learn/javascript" target="_blank">free interactive course</a>.':
    'Screeps 是一个为程序员们设计的游戏，如果您不知道如何编写 JavaScript 代码，来试试这个 <a app-nw-external-link="" href="https://codecademy.com/learn/javascript" target="_blank">免费的交互式课程</a>',

    'Remember that if you accidentally close a hint window in the tutorial, you can always open it again with this button.':
    '请记住，如果您不小心关闭了教程中的提示窗口，只需要点一下这个按钮就能重新打开它。',

    'Let\'s begin. This is a playing field called a "room". In the real game, rooms are connected to each other with\nexits, but in the simulation mode only one room is available to you.':
    '让我们开始吧！这是一个被称为 “房间（room）” 的游戏窗口，在实际游戏中，房间会通过出口（exit）与其他房间相连，但是在模拟模式下，只有一个房间可以供您使用。',

    'The object in the center of the screen is your first spawn, your colony center.':
    '屏幕中心的这个小东西是您的第一个 Spawn，它是您的殖民地核心。',

    'You play by writing code in the panel in the bottom of the screen.':
    '您将通过在屏幕底部的面板中编写代码来进行游戏',

    'You can enter your code in this field. It will run once.':
    '您可以在这个输入框中执行您的代码，它们只会被执行一次。',

    'Your command returns a response (or execution error) in the console below. All output is duplicated into your browser console (<strong>Ctrl+Shift+J</strong>) where you can expand objects for debugging purposes.\nYou can open and close the bottom panel by pressing <strong>Alt+Enter</strong>.':
    '您的命令在下面的控制台中返回响应（或执行错误）。所有日志都同步复制到了浏览器的控制台中（<strong>Ctrl+Shift+J</strong>）中，您可以在其中展开对象以更好的进行调试。您可以通过按下 <strong>Alt+Enter</strong> 打开和关闭底部面板。',

    'Now we\'ll write something real.':
    '现在，让我们写点真正的代码。',

    'Your spawn creates new units called "creeps" by its method <code>spawnCreep</code>.\nUsage of this method is described in the <a href="http://docs.screeps.com" app-nw-external-link="" target="_blank">documentation</a>. Each creep has a name and certain body parts that give it\nvarious skills.':
    '您的 Spawn 可以通过 <code>spawnCreep</code> 方法创建名为 “creep” 的新单位。可以在 <a href="https://screeps-cn.gitee.io/index.html" app-nw-external-link="" target="_blank">本文档</a> 中找到该方法的介绍。每个 creep 都有一个名字（name）和一定量的身体部件（body part），不同的身体部件会带来不同的能力。',

    'You can address your spawn by its name the following way: <code>Game.spawns[\'Spawn1\']</code>.':
    '您可以使用您 spawn 的名字来获取到它，就像这样：<code>Game.spawns[\'Spawn1\']</code>。',

    'Great! You now have a creep with the name "Harvester1" that you can control.':
    '棒极了！您现在拥有了一个名为 “Harvester1” 的 creep，您可以控制它做很多事情。',

    'You can see all the characteristics of your creep (or other objects) by utilizing the "View" action.':
    '通过 “查看” 功能，您可以看到您 creep（或者其他任何对象）的所有属性。',

    'Here you can see the characteristics of the object you are now looking at.\nValues of each characteristic and functions of body parts are described in the documentation.':
    '在这里您可以看到选中对象的属性。每个属性的值和身体部件的功能都可以在文档中找到相关介绍。',

    'It is time to put the creep to work! This yellow square is an energy source — a valuable game resource.\nIt can be harvested by creeps with one or more <code>WORK</code> body parts and transported to the spawn by creeps with <code>CARRY</code> parts.':
    '现在是时候让这个 creep 去工作了！这个黄色小方块是一个能量源（Source） —— 一种宝贵的游戏资源。它可以被带有一个或多个 <code>WORK</code> 身体部件的 creep 采集，并由带有 <code>CARRY</code> 部件的 creep 运送到 spawn。',

    'To give your creep a permanently working command, the console is not enough, since we want the creep to work all the time.\nSo we\'ll be using the Script tab rather than the console.':
    '要给您的 creep 设置一个永久工作指令光靠控制台是不够的，因为我们更希望 creep 可以一直工作下去。所以我们将使用脚本面板而不是控制台。',

    'Here you can write scripts that will run on a permanent basis, each game tick in a loop.\nIt allows writing constantly working programs to control behaviour of your creeps which will work even while you\nare offline (in the real game only, not the Simulation Room mode).':
    '您在这里写下的代码每个游戏 tick 都会执行一遍。所以您可以编写一段持续工作的程序来让 creep 一直干活，哪怕您已经离线了（仅就实际游戏而言，对于模拟模式并不生效）。',

    'To commit a script to the game so it can run, use this button or <strong>Ctrl+Enter</strong>.':
    '使用 <strong>Ctrl+Enter</strong> 来向游戏提交代码，这样就可以让代码开始运行。',

    'The code for each Tutorial section is created in its own branch. You can view code from these branches for\nfurther use in your scripts.':
    '每个教程章节的代码都会创建并保存到独有的分支中。您可以从这些分支中查看代码以便以后使用。',

    'To send a creep to harvest energy, you need to use the methods described in the documentation section below.\nCommands will be passed each game tick. The <code>harvest</code> method requires that the energy source is adjacent to the creep.':
    '想让 creep 去采集能量，您需要使用下面 “文档” 小节中介绍的方法，这些指令每个游戏 tick 都会被执行。而 <code>harvest</code> 方法则需要在 creep 相邻的位置上有一个能量源。',

    'You give orders to a creep by its name this way: <code>Game.creeps[\'Harvester1\']</code>.\nUse the <code>FIND_SOURCES</code> constant as an argument to the <code>Room.find</code> method.':
    '您可以通过 creep 的名字来获取到它并对其下达命令，就像这样：<code>Game.creeps[\'Harvester1\']</code>。把 <code>FIND_SOURCES</code> 常量作为参数传递给 <code>Room.find</code> 方法可以房间中的能量源。',

    'A bubbling yellow spot inside the creep means that it has started collecting energy from the source.':
    'creep 身体里逐渐变大的黄色圆点代表它已经开始从能量源中采集能量了。',

    'To make the creep transfer energy back to the spawn, you need to use the method\n<code>Creep.transfer</code>.\nHowever, remember that it should be done when the creep is next to the spawn, so the creep needs to walk back.':
    '想要让 creep 把能量运送回 spawn，您需要使用 <code>Creep.transfer</code> 方法。但是请记住，这个方法只有在 creep 和 spawn 相邻的时候才能正确执行，所以需要让 creep 先走回来。',

    'If you modify the code by adding the check <code>.store.getFreeCapacity()&nbsp;&gt;&nbsp;0</code> to the creep,\nit will be able to go back and forth on its own, giving energy to the spawn and returning to the source.':
    '当您把 <code>.store.getFreeCapacity()&nbsp;&gt;&nbsp;0</code> 作为检查条件添加到代码里时，creep 应该就可以自己一步步的把能量搬运回 spawn 然后走回能量源。',

    'Great! This creep will now work as a harvester until it dies. Remember that almost any creep has a life cycle of 1500\ngame ticks, then it "ages" and dies (this behavior is disabled in the Tutorial).':
    'Nice！现在这个 creep 将会一直作为采集者（harvester）工作直到去世。请记住，几乎所有的 creep 都有 1500 游戏 tick 的生命周期，在此之后它就会 “老去” 然后死掉（这个设定在本教程中并不生效）。',

    'Let\'s create another worker creep to help the first one. It will cost another 200 energy units, so you may\nneed to wait until your harvester collects enough energy. The <code>spawnCreep</code> method will return an\nerror code <code>ERR_NOT_ENOUGH_ENERGY</code> (-6) until then.':
    '让我们孵化新的 creep 来帮助第一个。这会消耗掉 200 点能量，所以您可能需要等到采集单位收集到足够的能量。<code>spawnCreep</code> 方法会返回错误码 <code>ERR_NOT_ENOUGH_ENERGY</code>（-6）直到您能量足够为止。',

    'Remember: to execute code once just type it in the "Console" tab.':
    '请记住：想要执行一次性的代码的话，直接在 “控制台” 面板中输入就可以了。',

    'The second creep is ready, but it won\'t move until we include it into the program.':
    '第二个 creep 已经就绪了，但是它现在还不会动，所以我们需要将其添加进我们的程序。',

    'To set the behavior of both creeps we could just duplicate the entire script for the second one,\nbut it\'s much better to use the <code>for</code> loop against all the screeps in <code>Game.creeps</code>.':
    '想要给所有的 creep 都设置行为，只需要把整个脚本为新的 creep 复制一遍就好了，但是更好的做法是使用 <code>for</code> 循环来遍历 <code>Game.creeps</code> 中的所有 creep。',

    'Now let\'s improve our code by taking the workers\' behavior out into a separate <em>module</em>. Create a module called <code>role.harvester</code>\nwith the help of the Modules section on the left of the script editor and define a <code>run</code> function inside the <code>module.exports</code> object,\ncontaining the creep behavior.':
    '现在，让我们把工作单位的行为逻辑封装到一个单独的 <em>module</em> 里来改善我们的代码。使用模块功能创建一个名为 <code>role.harvester</code> 的模块，您可以在脚本编辑器的左侧找到它。然后在 <code>module.exports</code> 对象中定义一个 <code>run</code> 函数来存放 creep 的行为逻辑。',

    'Now you can rewrite the main module code, leaving only the loop and a call to your new module by the method\n<code>require(\'role.harvester\')</code>.':
    '现在，您可以重写 main 模块的代码，只留下 loop 函数，并通过 <code>require(\'role.harvester\')</code> 方法调用您的新模块。',

    'It\'s much better now!':
    '现在看起来好多了！',

    'By adding new roles and modules to your creeps this way, you can control and manage the work of many creeps.\nIn the next Tutorial section, we’ll develop a new creep role.':
    '通过这种方法向您的 creep 添加新的角色和模块，由此控制和管理众多 creep 的工作。在下一关里，我们将开发一个新的 creep 角色。',
}

/**
 * 行动目标文本
 */
const OBJECTIVE_CONTENT = {
    'Game world': '游戏世界',
    'Your colony': '您的殖民地',
    'Game object': '游戏对象',
    'Scripting basics': '脚本基础',

    'Create a worker creep with the body array <code>[WORK,CARRY,MOVE]</code> and name <code>Harvester1</code> (the name is important for the tutorial!).\nYou can type the code in the console yourself or copy&nbsp;&amp;&nbsp;paste the hint below.':
    '创建一个身体部件为 <code>[WORK,CARRY,MOVE]</code> 并且名字叫做 <code>Harvester1</code>（这个名字对本教程来说非常重要！）的工人 creep。你可以自己在控制台中输入这些代码，或者复制&nbsp;&amp;&nbsp;粘贴下面的提示。',

    'Hide the editor panel with <strong>Alt+Enter</strong> and select your creep with the help of the "View" action.':
    '按下 <strong>Alt+Enter</strong> 键来隐藏编辑器面板并在 “查看” 功能下选中您的 creep',

    'Click the "Console" tab.':
    '点击 “控制台” 面板。',

    'Type anything in this field and press Enter.':
    '在这里随便输点什么然后按回车键。',

    'Click the "Script" tab.':
    '点击 “脚本” 面板。',

    'Send your creep to harvest energy by typing code in the "Script" tab.':
    '通过在 “脚本” 面板中键入代码来让您的 creep 前去采集能量。',

    'Extend the creep program so that it can transfer harvested energy to the spawn and return back to work.':
    '拓展您的 creep 程序，使其可以将采集到的能量运送（transfer）回 spawn 中并重新开始工作。',

    'Spawn a second creep with the body <code>[WORK,CARRY,MOVE]</code> and name <code>Harvester2</code>.':
    '孵化第二个 creep，其身体部件为 <code>[WORK,CARRY,MOVE]</code> 并命名为 <code>Harvester2</code>。',

    'Expand your program to both the creeps.':
    '拓展您的程序，使其可以适用到所有 creep 上。',

    'Create a <code>role.harvester</code> module.':
    '创建 <code>role.harvester</code> 模块。',

    'Organizing scripts using modules':
    '使用模块组织代码',

    'Include the <code>role.harvester</code> module in the main module.':
    '将 <code>role.harvester</code> 模块引入到 main 模块中。',
}

/**
 * 帮助文档更换
 */
const OBJECTIVE_LINK = {
    'http://docs.screeps.com/introduction.html#Game-world':
    `${DOCUMENT_CN}/introduction.html#%E6%B8%B8%E6%88%8F%E4%B8%96%E7%95%8C`,

    'http://docs.screeps.com/introduction.html#Your-colony':
    `${DOCUMENT_CN}/introduction.html#%E5%B1%9E%E5%9C%B0%EF%BC%88Colony%EF%BC%89`,

    'http://docs.screeps.com/creeps.html':
    `${DOCUMENT_CN}/creeps.html`,

    'http://docs.screeps.com/global-objects.html#Game-object':
    `${DOCUMENT_CN}/global-objects.html#Game-%E5%AF%B9%E8%B1%A1`,

    'http://docs.screeps.com/api/#StructureSpawn.spawnCreep':
    `${DOCUMENT_CN}/api/#StructureSpawn.spawnCreep`,

    'http://docs.screeps.com/scripting-basics.html':
    `${DOCUMENT_CN}/scripting-basics.html`,

    'http://docs.screeps.com/api/#Game.creeps':
    `${DOCUMENT_CN}/api/#Game.creeps`,

    'http://docs.screeps.com/api/#RoomObject.room':
    `${DOCUMENT_CN}/api/#RoomObject.room`,

    'http://docs.screeps.com/api/#Room.find':
    `${DOCUMENT_CN}/api/#Room.find`,

    'http://docs.screeps.com/api/#Creep.moveTo':
    `${DOCUMENT_CN}/api/#Creep.moveTo`,

    'http://docs.screeps.com/api/#Creep.harvest':
    `${DOCUMENT_CN}/api/#Creep.harvest`,

    'http://docs.screeps.com/modules.html':
    `${DOCUMENT_CN}/modules.html`,

    'http://docs.screeps.com/api/#Creep.store':
    `${DOCUMENT_CN}/api/#Creep.store`,

    'http://docs.screeps.com/api/#Creep.transfer':
    `${DOCUMENT_CN}/api/#Creep.transfer`,
}


const content: PageContent = {
    hashs: ['#!/sim/tutorial/1'],

    content: [
        { 'en-US': 'Back', 'zh-CN': '返回', reuse: true },
        { 'en-US': 'Start', 'zh-CN': '开始', reuse: true },
        { 'en-US': 'Next', 'zh-CN': '下一步', reuse: true },
        { 'en-US': 'Got it', 'zh-CN': '明白了', reuse: true },
        { 'en-US': 'Code', 'zh-CN': '代码', reuse: true },
        { 'en-US': 'Next section', 'zh-CN': '下一关', reuse: true },
        { 'en-US': 'Stay', 'zh-CN': '再待会', reuse: true },
        { 'en-US': 'Documentation:', 'zh-CN': '文档：', reuse: true },

        { 'en-US': 'Welcome to Screeps!', 'zh-CN': '欢迎来到 Screeps！', reuse: true },
        { 'en-US': 'JavaScript Reference:', 'zh-CN': 'JavaScript 参考：', reuse: true },

        // 翻译所有教程文本
        {
            selector: 'body > div.top-content.ng-scope > .ng-scope > div > div.tutorial-content.ng-scope > section > p',
            'zh-CN': translateMultiple(TUTORIAL_CONTENT),
            reuse: true
        },
        // 翻译所有目标文本
        ...getObjectiveTranslationContent(OBJECTIVE_CONTENT, OBJECTIVE_LINK)
    ]
}

export default content
