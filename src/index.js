import './scss/main.scss';
import { TabPlugin } from './js/tab-plugin.js'



const tab1 = new TabPlugin({
    rootSelector: "#tabs-plugin-1",
    activeControlClass: 'tabs_controls-item--active',
    firstActivCntrlID: 4
})

const tab2 = new TabPlugin({
    rootSelector: "#tabs-plugin-2",
    activeControlClass: 'tabs_controls-item--active',
    firstActivCntrlID: 3
})
