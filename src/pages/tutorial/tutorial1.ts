import { translateMultiple } from "utils"

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
    '您通过在屏幕底部的面板中编写代码来进行游戏',

    'You can enter your code in this field. It will run once.':
    '您可以在这个输入框中执行您的代码，它们只会被执行一次。',

    'Your command returns a response (or execution error) in the console below. All output is duplicated into your browser console (<strong>Ctrl+Shift+J</strong>) where you can expand objects for debugging purposes.\nYou can open and close the bottom panel by pressing <strong>Alt+Enter</strong>.':
    '您的命令在下面的控制台中返回响应（或执行错误）。所有日志都同步复制到了浏览器的控制台中（<strong>Ctrl+Shift+J</strong>）中，您可以在其中展开对象以更好的进行调试。您可以通过按下 <strong>Alt+Enter</strong> 打开和关闭底部面板。',

    'Now we\'ll write something real.':
    '现在，让我们写点真正的代码。',

    'Your spawn creates new units called "creeps" by its method <code>spawnCreep</code>.\nUsage of this method is described in the <a href="http://docs.screeps.com" app-nw-external-link="" target="_blank">documentation</a>. Each creep has a name and certain body parts that give it\nvarious skills.':
    '您的 Spawn 可以通过 <code>spawnCreep</code> 方法创建名为 “creeps” 的新单位。可以在 <a href="http://docs.screeps.com" app-nw-external-link="" target="_blank">本文档</a> 中找到该方法的介绍。每个 creep 都有一个名字（name）和一定量的身体部件（body part），不同的身体部件会带来不同的能力。',

    'You can address your spawn by its name the following way: <code>Game.spawns[\'Spawn1\']</code>.':
    '您可以使用您 spawn 的名字来获取到它，就像这样：<code>Game.spawns[\'Spawn1\']</code>。',

    'Great! You now have a creep with the name "Harvester1" that you can control.':
    '棒极了！您现在拥有了一个名为 “Harvester1” 的 creep，您可以控制它做很多事情。',

    'You can see all the characteristics of your creep (or other objects) by utilizing the "View" action.':
    '通过 “查看” 功能，您可以看到您 creep（或者其他任何对象）的所有属性。',

    'Here you can see the characteristics of the object you are now looking at.\nValues of each characteristic and functions of body parts are described in the documentation.':
    '在这里您可以看到选中对象的属性。每个属性的值和身体部件的功能都可以在文档中找到相关介绍。',

    'It is time to put the creep to work! This yellow square is an energy source — a valuable game resource.\nIt can be harvested by creeps with one or more <code>WORK</code> body parts and transported to the spawn by creeps with <code>CARRY</code> parts.':
    '现在是时候让这个 creep 去工作了！这个黄色小方块是一个能量源 —— 一种宝贵的游戏资源。它可以被带有一个或多个 <code>WORK</code> 身体部件的 creep 采集，并由带有 <code>CARRY</code> 部件的 creep 运送到 spawn。',
}

const OBJECTIVE_CONTENT = {
    '<div class="fa fa-caret-right"></div>\nCreate a worker creep with the body array <code>[WORK,CARRY,MOVE]</code> and name <code>Harvester1</code> (the name is important for the tutorial!).\nYou can type the code in the console yourself or copy&nbsp;&amp;&nbsp;paste the hint below.':
    '<div class="fa fa-caret-right"></div> 创建一个身体部件为 <code>[WORK,CARRY,MOVE]</code> 并且名字叫做 <code>Harvester1</code>（这个名字对本教程来说非常重要！）的工人 creep。你可以自己在控制台中输入这些代码，或者复制&nbsp;&amp;&nbsp;粘贴下面的提示。</div>',

    '<div class="fa fa-caret-right"></div>\nHide the editor panel with <strong>Alt+Enter</strong> and select your creep with the help of the "View" action.':
    '按下 <strong>Alt+Enter</strong> 键来隐藏编辑器面板并在 “查看” 功能下选中您的 creep',
}


const content: PageContent = {
    hashs: [ '#!/sim/tutorial/1' ],

    content: [
        { 'en-US': 'Back', 'zh-CN': '返回', reuse: true },
        { 'en-US': 'Start', 'zh-CN': '开始', reuse: true },
        { 'en-US': 'Next', 'zh-CN': '下一步', reuse: true },
        { 'en-US': 'Got it', 'zh-CN': '明白了', reuse: true },
        { 'en-US': 'Code', 'zh-CN': '代码', reuse: true },

        { 'en-US': 'Welcome to Screeps!', 'zh-CN': '欢迎来到 Screeps！', reuse: true },

        { 'en-US': 'Documentation:', 'zh-CN': '文档：', reuse: true },
        { 'en-US': 'Game world', 'zh-CN': '游戏世界', reuse: true },

        { 'en-US': 'Click the "Console" tab.', 'zh-CN': '点击 “控制台” 面板', reuse: true },
    
        { 'en-US': 'Type anything in this field and press Enter.', 'zh-CN': '在这个输入框中随便填点什么然后按回车键', reuse: true },

        { 'en-US': 'Your colony', 'zh-CN': '您的殖民地', reuse: true },
        { 'en-US': 'Game object', 'zh-CN': '游戏对象', reuse: true },

        {
            'selector': 'body > div.top-content.ng-scope > .ng-scope > div > div.tutorial-content.ng-scope > section > p',
            'zh-CN': translateMultiple(TUTORIAL_CONTENT),
            reuse: true
        },
        {
            'selector': 'body > div.top-content.ng-scope > .ng-scope > div > div.tutorial-content.ng-scope > section > div.objective:not(:last-child)',
            'zh-CN': translateMultiple(OBJECTIVE_CONTENT),
            reuse: true
        }
    ]
}

export default content