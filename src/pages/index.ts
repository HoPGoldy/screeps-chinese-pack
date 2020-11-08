import overview from './overview'
import sidebar from './sidebar'
import simTab from './simTab'
import room from './room'
import tutorial from './tutorial'
import market from './market'
import profile from './profile'
import rank from './rank'

export default [
    overview,
    sidebar,
    simTab,
    ...tutorial,
    room,
    ...market,
    profile,
    rank
]
