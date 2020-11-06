import { DOCUMENT_CN } from 'setting'
import { translateMultiple } from 'utils'
import { getObjectiveTranslationContent } from './utils'

/**
 * 教程正文
 */
const TUTORIAL_CONTENT = {
    'Until now, we have created new creeps directly in the console. It’s not a good idea to do it constantly since\nthe very idea of Screeps is making your colony control itself. You will do well if you teach your spawn to\nproduce creeps in the room on its own.':
    '',

    'This is a rather complicated topic and many players spend months perfecting and refining their auto-spawning\ncode. But let’s try at least something simple and master some basic principles to start with.':
    '',

    'You will have to create new creeps when old ones die from age or some other reasons. Since there are no\nevents in the game to report death of a particular creep, the easiest way is to just count the number of\nrequired creeps, and if it becomes less than a defined value, to start spawning.':
    '',

    'There are several ways to count the number of creeps of the required type. One of them is filtering\n<code>Game.creeps</code> with the help of the <code>_.filter</code> function and using the role in\ntheir memory. Let’s try to do that and bring the number of creeps into the console.':
    '',

    'Let’s say we want to have at least two harvesters at any time. The easiest way to achieve this is to run\n<code>StructureSpawn.spawnCreep</code> each time we discover it’s less than this number. You may not define its\nname (it will be given automatically in this case), but don’t forget to define the needed role.':
    '',

    'We may also add some new <code>RoomVisual</code> call in order to visualize what creep is being spawned.':
    '',

    'Now let’s try to emulate a situation when one of our harvesters dies. You can now give the command\n<code>suicide</code> to the creep via the console or its properties panel on the right.':
    '',

    'As you can see from the console, after we lacked one harvester, the spawn instantly started building a new\none with a new name.':
    '',

    'An important point here is that the memory of dead creeps is not erased but kept for later reuse.\nIf you create creeps with random names each time it may lead to memory overflow, so you should clear\nit in the beginning of each tick (prior to the creep creation code).':
    '',

    'Now the memory of the deceased is relegated to oblivion which saves us resources.':
    '',

    'Apart from creating new creeps after the death of old ones, there is another way to maintain the needed number\nof creeps: the method <code>StructureSpawn.renewCreep</code>. Creep aging is disabled in the Tutorial, so we recommend\nthat you familiarize yourself with it on your own.':
    ''
}

/**
 * 行动目标文本
 */
const OBJECTIVE_CONTENT = {
    'Add the output of the number of creeps with the role <code>harvester</code> into the console.':
    '',

    'Add the logic for <code>StructureSpawn.spawnCreep</code> in your main module.':
    '',

    'Make one of the harvesters suicide.':
    '',

    'Add code to clear the memory.':
    ''
}

/**
 * 帮助文档更换
 */
const OBJECTIVE_LINK = {
    'http://docs.screeps.com/api/#Game.creeps':
    `${DOCUMENT_CN}/api/#Game.creeps`,

    'https://lodash.com/docs#filter':
    '',

    'http://docs.screeps.com/api/#StructureSpawn.spawnCreep':
    '',

    'http://docs.screeps.com/api/#RoomVisual':
    '',

    'http://docs.screeps.com/api/#Creep.suicide':
    '',

    'http://docs.screeps.com/api/#StructureSpawn.renewCreep':
    ''
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
