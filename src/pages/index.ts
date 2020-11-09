import overview from './overview'
import sidebar from './sidebar'
import simTab from './simTab'
import tutorialMenu from './tutorialMenu'
import room from './room'
import tutorial from './tutorial'
import market from './market'
import inventory from './inventory'

export default [
    overview,
    sidebar,
    simTab,
    tutorialMenu,
    ...tutorial,
    room,
    ...market,
    inventory
]
