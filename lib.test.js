import { globalConfig } from './data.js'
import { getGameCFG } from './lib.js'

test('flatten globalConfig to GAME_CFG', () => {
    expect(getGameCFG(globalConfig)).toStrictEqual({
        autoEndTime: 1,
        playAgain: 2,
        slider: 4,
        'input:text': 'value',
        switch: true,
        radio: 'a',
        checkbox: ['a', 'd'],
        select: ['b', 'c'],
        'color-picker': '#000000',
        '2a7a3390ff0ff': 3,
        '4705cabf72c78': '低',
        '2d04f280f67a': 36,
        haoniubi: '低',
        niubia: 36,
        zhentama: '低',
        niu: 36
    })
})
