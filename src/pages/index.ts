import overview from './overview'
import sidebar from './sidebar'
import simTab from './simTab'
import room from './room'
import tutorial from './tutorial'
import power from './power'
import market from './market'
import profile from './profile'
import rank from './rank'
import account from './account'

export default [
    overview,
    sidebar,
    simTab,
    ...tutorial,
    room,
    power,
    room,
    ...market,
    profile,
    rank,
    ...account
]
