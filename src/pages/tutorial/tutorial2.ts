import { DOCUMENT_CN } from 'setting'
import { translateMultiple } from 'utils'
import { getObjectiveTranslationContent } from './utils'

/**
 * 教程正文
 */
const TUTORIAL_CONTENT = {
    'In this Tutorial section we’ll talk about a key strategic object in your room: <strong>Room Controller</strong>.\nBy controlling this invincible structure you can build facilities in the room.\nThe higher the controller level, the more structures available to build.':
    '',

    'You will need a new worker creep to upgrade your controller level. Let\'s call it "Upgrader1".\nIn following sections we\'ll discuss how to create creeps automatically, but for now let\'s send a\ncommand manually to the console.':
    '',

    'Creep "Upgrader1" went to perform the same task as the harvester, but we don\'t want it to. We need to differentiate creep roles.':
    '',

    'To do that, we need to utilize the <code>memory</code> property of each creep that allows writing custom information\ninto the creep\'s "memory". Let\'s do this to assign different roles to our creeps.':
    '',

    'All your stored memory is accessible via the global <code>Memory</code> object. You can use it any way you like.':
    '',

    'You can check your creeps\' memory in either the creep information panel on the left or on the "Memory" tab.':
    '',

    'Now let\'s define the behavior of the new creep. Both creeps should harvest energy, but the creep with the role\n<code>harvester</code> should bring it to the spawn, while the creep with the role <code>upgrader</code>\nshould go to the Controller and apply the function <code>upgradeController</code> to it (you can get the\nController object with the help of the <code>Creep.room.controller</code> property).':
    '',

    'In order to do this, we’ll create a new module called <code>role.upgrader</code>.':
    ''
}

/**
 * 行动目标文本
 */
const OBJECTIVE_CONTENT = {
    'Spawn a creep with the body <code>[WORK,CARRY,MOVE]</code> and the name <code>Upgrader1</code>.':
    '',

    'Write a property <code>role=\'harvester\'</code> into the memory of the harvester creep and <code>role=\'upgrader\'</code>\n— to the upgrader creep with the help of the console.':
    '',

    'Create a new module <code>role.upgrader</code> with the behavior logic of your new creep.':
    ''
}

/**
 * 帮助文档更换
 */
const OBJECTIVE_LINK = {
    'http://docs.screeps.com/introduction.html#Game-world':
    `${DOCUMENT_CN}/introduction.html#%E6%B8%B8%E6%88%8F%E4%B8%96%E7%95%8C`
}


const content: PageContent = {
    hashs: ['#!/sim/tutorial/2'],

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
