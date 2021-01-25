import { globalConfig } from './data.js'

function isArr(gameConfig) {
    let GAME_CFG = {}
    for (let uniqueKey in gameConfig) {
        const configItem = gameConfig[uniqueKey]
        if (configItem.type !== 'array') {
            GAME_CFG[uniqueKey] = configItem.value
        }else {
            const arrItems = configItem.items
            const len = arrItems.length
            for (let i = 0; i < len; i++) {
                if (arrItems[i].type !== 'array') {
                    const key = arrItems[i]['pl_key']
                    GAME_CFG[key] = arrItems[i].value
                } else {
                    const NEW_GAME_CFG = isArr(arrItems[i])
                    GAME_CFG = { ...GAME_CFG, ...NEW_GAME_CFG }
                }
            }
        }
    }
    return GAME_CFG
}

function changeConfig ({autoEndTime, playAgain, gameConfig}) {
    let GAME_CFG = {autoEndTime, playAgain}
    const ARR_GAME_CFG = isArr(gameConfig)
    GAME_CFG = {...GAME_CFG, ...ARR_GAME_CFG}
    return GAME_CFG
}

const GAME_CFG = changeConfig(globalConfig)
console.log(GAME_CFG)