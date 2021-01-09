import { translateMultiple } from 'utils'

const TIP_CONTENT = {
    'Inscreasing the <code>reusePath</code> option in the <code>Creep.moveTo</code> method helps saving CPU.':
    '提高 <code>Creep.moveTo</code> 方法中的 <code>reusePath</code> 参数有助于节省 CPU。',

    'Set up a grunt task to write scripts on your local machine and commit them to Screeps.':
    '设置一个 grunt（或者 rollup）任务来在本地编辑你的代码并将其提交到 Screep。',

    'Each game action has a constant cost of 0.2 CPU.':
    '每个会影响游戏世界的动作都有 0.2 CPU 的固定成本。',

    'Towers can aim at any object in a room even through walls and obstacles.':
    'tower 可以透过墙壁和障碍物瞄准同房间中的任何对象。',

    'Power banks appear only in neutral rooms that divide living sectors on the map.':
    'power bank 仅出现在过道房间中，过道房是指分隔不同区块的空旷中立房间。',

    'Modular architecture of a script will allow easy testing of individual functions in the simulator.':
    '脚本的模块化架构使得你可以在模拟器中轻松测试单个函数。',

    'Test various game scenarios in the simulator in order to be prepared for surprises.':
    '在模拟器中测试各种游戏场景，以应对随时可能发生的意外。',

    'Sources in neutral rooms have reduced capacity. Reserve or claim the room to restore it to full capacity.':
    '中立房间矿的能量矿（Source）上限只有1500。预订（reserve）或占领（claim）房间可以使其恢复到最大容量。',

    'To save your CPU, use less creeps of a larger size.':
    '生成数量更少、身体部件更多的 creep 来节省你的 CPU。',

    'Spawn extensions capacity increases on room levels 7 and 8.':
    'RCL7 和 RCL8 将提升 extension 的容量。',

    'Use towers to set up automatic defense of your room.':
    '使用 tower 来建立你房间的自动防御。',

    'If CPU limit raises, your script will execute only partially.':
    '如果运算量超过 CPU 限制，未执行的脚本将会被强行终止。',

    'Walking over swamps is 5 times slower compared to plain land.':
    '在沼泽上行走比平原慢 5 倍。',

    'Use loop architecture to save CPU on the logic you do not have to run each tick.':
    '可以把不需要每个 tick 都运行的逻辑放在 loop 之外执行。',

    'A tower’s effectiveness depends on the distance to the target.':
    'tower 的工作效率取决于该 tower 到目标的距离。',

    'You can create any objects in the simulator to test your script.':
    '你可以在模拟器中创建任何对象来测试脚本。',

    'Unless you use up your CPU limit each tick, it is stored for future use.':
    '除非你每 tick 都用光了你的 CPU，不然没有用掉的部分会被存起来以备后续使用。',

    'Your CPU Limit depends on your Global Control Level.':
    '你的 CPU 上线取决于您的全局控制级别（GCL）。',

    'You can use more CPU than your CPU limit allows in short bursts.':
    '你的 CPU 使用量可以在短时间内使用超过你的 CPU 上限。（“短时间”取决于 cpu 桶中的余额）',

    'Energy in a storage can not be used to spawn creeps. Transfer it to a spawn or extensions instead.':
    'storage 里储存的能量不能直接用来孵化 creep，要先将能量转移到一个 spawn 或 extension 中。',

    'The more body parts of one type a creep has, the greater its productivity.':
    '一个 creep 的身体部件越多，其效率也就越高。',

    'More spawns in a room allows building more creeps at a time.':
    '一个房间中存在的 spawn 越多，能同时孵化的 creep 也就越多。',

    'The more spawn extensions in a room, the more energy you can spend on building one creep.':
    '一个房间中的 spawn 和 extension 越多，可以用来孵化单个 creep 的能量也就越多。',

    'You can address from your script only those rooms that contain your creeps or structures.':
    '只有房间中存在你的 creep 或者建筑时，你的代码才可以访问到它。',

    'Ramparts can be built not just on empty squares but on existing structures too.':
    'Rampart 不仅可以在空旷的地块上建造，还可以建造在已有的建筑上。',

    'Ramparts and walls initially have 1 hit point. Repair them after construction.':
    'rampart 和 wall 最初仅有 1 点生命值（hit），记得在建筑好后及时进行维修（repair）。',

    'It is too costly and senseless to maintain an army of military creeps in the peacetime.':
    '在和平时期维持一支由战斗 creep 组成的军队代价太高且毫无意义。',

    'Links can pass energy to other links at any point inside the same room.':
    'link 可以将能量传递到同一房间内任何位置的其他 link。',

    'A good way to save CPU is caching often-used paths.':
    '缓存常用路径是节省 CPU 的好方法。',

    'While not destroyed, a rampart protects a creep or building on its square from any type of attack.':
    '只要一个 rampart 没有被摧毁，它就可以保护同地块上的 creep 或者建筑免受任何形式的攻击。',

    'The game is fully recorded, so you can see replay of any room for the past several days.':
    '游戏已经被完整录制，所以你可以随时回放过去几天发生的事情。',

    'The more small objects in the Memory, the more CPU spent on its parsing.':
    'Memory 中的对象越简单，解析它所花费的 CPU 也就越少。',

    'Use try/catch blocks in right places to avoid a complete halt of your script due to errors.':
    '在适当的位置使用 try/catch 代码块，以避免由异常导致的脚本崩溃。',

    'Respawning in a chosen room would automatically destroy all structures except walls and roads.':
    '在选定的房间重生会自动摧毁房间内除墙和道路以外的所有建筑。',

    'Creeps can miss each other if they walk towards each other simultaneously or follow step by step.':
    '两个相邻的 creep 可以无视彼此的存在进行面对面移动或者紧随移动。',

    'If you want to play from scratch, you can always Respawn in a new room.':
    '如果你想从头开始玩，你可以随时在一个新房间里重生。',

    'You can output HTML content to the console, like links to rooms.':
    '你可以将 HTML 内容输出到控制台，例如一个跳转到指定房间的超链接。',

    'You can have as many rooms under your control as your Global Control Level.':
    '你可以控制的房间数与全局控制等级（GCL）一样多。',

    'You can apply <code>transfer</code> and <code>heal</code> to another player’s creep, and <code>transfer,</code> <code>build</code> and <code>repair</code> to others’ structures.':
    '你可以 <code>transfer</code> 和 <code>heal</code> 另一个玩家的 creep，以及 <code>transfer</code>，<code>build</code> 和 <code>repair</code> 其他玩家的建筑。',

    '<code>require</code> spends CPU depending on the size and complexity of the module loaded.':
    '<code>require</code> 所花费的 CPU 取决于要加载模块的大小及复杂度。',

    'Spawn extensions do not have to be placed near spawns, their range is the whole room.':
    'extension 不用放在 spawn 的边上，它们的有效范围是整个房间。',

    'You can speed up downgrading of hostile room controller by using <code>Creep.attackController</code> on it.':
    '你可以通过使用 <code>Creep.attackController</code> 方法来加速敌对房间控制器的降级。',

    'To output an object content into the console, use <code>JSON.stringify</code>.':
    '要将对象内容输出到控制台，请使用 <code>JSON.stringify</code>。',

    'Build roads to save on <code>MOVE</code> body parts of your creeps.':
    '建造道路可以让你的 creep 使用更少的 <code>MOVE</code> 部件。',

    'Always try to control as many rooms as your GCL allows. It will allow your colony to develop at the maximum speed.':
    '始终尝试控制 GCL 所允许的房间数量，这将可以使你的殖民地以最大的速率发展。',

    'A resource abandoned on the ground eventually vanishes.':
    '丢弃在地面上的资源最终将会消失。',

    'A creep can execute some commands simultaneously in one tick, for example <code>move</code>+<code>build</code>+<code>dropEnergy</code>.':
    '一个 creep 可以在同 tick 内同时执行多个不冲突命令，例如 <code>move</code>+<code>build</code>+<code>dropEnergy</code>。',

    'Walls, roads, and containers don’t belong to any player, so they should be searched with the help of <code>FIND_STRUCTURES</code>, not <code>FIND_MY_STRUCTURES</code>.':
    'wall，road 和 container 不属于任何玩家，所以搜索它们需要使用 <code>FIND_STRUCTURES</code> 而不是 <code>FIND_MY_STRUCTURES</code> 常量。',

    'The <code>RANGED_ATTACK</code> body part is 3 times weaker than <code>ATTACK</code> and 2 times costlier at that.':
    '<code>RANGED_ATTACK</code> 身体部件的相对伤害是 <code>ATTACK</code> 部件的 1/3，但是其造价却是 <code>ATTACK</code> 的两倍。',

    'Use <code>Room.energyAvailable</code> and <code>Room.energyCapacityAvailable</code> to determine how much energy all the spawns and extensions in the room contain.':
    '使用 <code>Room.energyAvailable</code> 和 <code>Room.energyCapacityAvailable</code> 来确定房间中所有 spawn 和 extensions 包含多少能量及能量上限是多少。',

    'Observers allow to get the <code>Room</code> object for the rooms that have no objects of yours.':
    'Observer 允许获取那些没有你单位存在的 <code>Room</code> 对象。',

    'To control a room continuously, you need to upgrade your controller from time to time.':
    '想要持续控制一个房间，你需要经常的升级（upgrade）你的房间控制器（controller）。',

    'The <code>Game.notify</code> function automatically groups identical messages using the specified interval.':
    '<code>Game.notify</code> 方法将把信息按照指定的时间间隔分组并发送。',

    'Dead body parts have weight and generate fatigue as well.':
    '一个坏掉的身体部件也会产生疲劳。',

    'Use branches to test and debug your temporary code and also do backups.':
    '使用分支（branch）来测试和调试您的临时代码，并记得时刻进行备份。',

    'There is a keyword <code>debugger</code> in the simulator that stops your script in the browser.':
    '模拟器中有一个关键字 <code>debugger</code>，可以用于在浏览器中暂停脚本。',

    'Roads wear out as they are used, so don’t forget to repair them.':
    '道路（road）在使用中会逐渐磨损，因此请不要忘记对其进行修复（repair）。',

    'You can build and repair roads and containers in any rooms, even neutral ones.':
    '你可以在任何房间，哪怕是是中立房间中建造和维修 road 和 container。',

    'To prevent other players from seizing a neutral room you want, use <code>Creep.reserveController</code>.':
    '使用 <code>Creep.reserveController</code> 可以防止其他玩家占领你想要的中立房间。',

    'Creeps cannot move faster than 1 square per tick.':
    'creep 的速度上限是 1 格/秒',

    'Send emails to yourself with the function <code>Game.notify</code> to be aware of everything happening in the game.':
    '使用 <code>Game.notify</code> 方法向自己发送 email 来了解游戏中发生的一切。',

    'The <code>console.log</code> function of the simulator displays a live expandable object in the browser console.':
    '<code>console.log</code> 方法（在模拟器中）将在浏览器的控制台中同步显示可展开的 object 对象。',

    'Every creep dies after 1500 ticks, however you can prolong its life using the <code>Spawn.renewCreep</code> method.':
    '每个 creep 都会在 1500 tick 后死亡，然而你通过对其调用 <code>Spawn.renewCreep</code> 方法来延长它们的生命。',

    'The creep memory is saved upon death, so clear <code>Memory.creeps.*</code> to prevent overflowing.':
    'creep 死亡后其内存依旧存在，所以请清除 <code>Memory.creeps.*</code> 以避免内存溢出。',

    'A creep with an <code>ATTACK</code> part automatically strikes back at every attacker by <code>ATTACK</code>.':
    '一个带有 <code>ATTACK</code> 身体部件的 creep 将会对敌方 <code>ATTACK</code> 进行自动反击。',

    'A spawn automatically replenishes itself with power until the energy in the room reaches 300 units.':
    '当房间中用于孵化的能量小于 300 时，spawn 将会自动开始恢复能量，直到其能量等于 300 点。',

    'Leaderboards reset to zero each month, while your game process continues.':
    '排行榜每个月都会进行重置，你的游戏进度并不会受到影响。',

    'Use links to save on creep building and CPU.':
    '使用 link 来节省要孵化的 creep 以及 CPU',

    'Use storage to not lose surplus of mined resources.':
    '使用 storage 来存储开采出来的过量资源。'
}

const tips: TranslationContent[] = [
    { 'en-US': 'Do you want to turn off tips of the day?', 'zh-CN': '你想要关闭每日 TIP 么？', 'reuse': true },

    { 'en-US': 'Tip of the day:', 'zh-CN': '每日 TIP：' },
    { 'en-US': 'Don\'t show tips', 'zh-CN': '不再显示' },
    { 'en-US': 'Next tip', 'zh-CN': '下个 tip' },

    {
        'selector': '.tutorial-content > section > p > span',
        'zh-CN': translateMultiple(TIP_CONTENT),
        'reuse': true
    },

    {
        // 后面这个奇葩的"3个房间"是因为在 sidebar 中会有一个 /\d+ rooms/ 正则先将其翻译为中文，所以这里需要调整一下
        'en-US': /You cannot have more than 3 (rooms|个房间) in the Novice Area./,
        'zh-CN': '在新手区（Novice Area）中你最多可以控制 3 个房间。',
        'reuse': true
    }
]

/**
 * 添加每日提示
 * 因为每日提示内容较多，并且不是每次都能看到，所以这里做成动态引入以提高性能
 */
const getTips = function (): TranslationContent[] {
    const tipTipOfTheDay = localStorage.getItem('tipTipOfTheDay')

    // 已经禁用了每日提示
    if (Number(tipTipOfTheDay) === -1) return []

    // 如果还没看过每日提示，或者提示显示日期已经过了一天了，就添加每日提示内容
    if (!tipTipOfTheDay || Number(tipTipOfTheDay) + (24 * 60 * 60 * 1000) < new Date().getDate()) {
        return tips
    }

    return []
}

export default getTips
