import { globalConfig } from './data.js'

function flatObj(gameConfig) {
    let GAME_CFG = {}
    for (let uniqueKey in gameConfig) {
        // 获取每一个对象
        const configItem = gameConfig[uniqueKey]
        // 如果不是数组类型，直接取值，否则做数组处理
        configItem.type !== 'array' ? GAME_CFG[uniqueKey] = configItem.value : Object.assign(GAME_CFG, flatArr(configItem))
    }
    return GAME_CFG
}

function flatArr(typeArr) {
    let GAME_CFG = {}
    const arrItems = typeArr.items
    const len = arrItems.length
    // 遍历items
    for (let i = 0; i < len; i++) {
        // 如果不是数组类型，直接取值
        arrItems[i].type !== 'array' ? GAME_CFG[arrItems[i]['pl_key']] = arrItems[i].value : Object.assign(GAME_CFG, flatArr(arrItems[i]))
    }
    return GAME_CFG
}

function flatGlobalConfig ({autoEndTime, playAgain, gameConfig}) {
    return {
        autoEndTime,
        playAgain,
        ...flatObj(gameConfig)
    }
}

const GAME_CFG = flatGlobalConfig(globalConfig)
console.log(GAME_CFG)