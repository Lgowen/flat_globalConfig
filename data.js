export const globalConfig = {
  "autoEndTime": 1,
  "playAgain": 2,
  "gameConfig": {
    "slider": {
      "title": "slider 提示信息",
      "type": "slider",
      "min": 0,
      "max": 10,
      "desc": "slider 提示信息",
      "value": 4
    },
    "input:text": {
      "title": "input:text 提示信息",
      "type": "input:text",
      "desc": "input:text 提示信息",
      "value": "value"
    },
    "switch": {
      "title": "switch 提示信息",
      "type": "switch",
      "value": true,
      "desc": "switch 提示信息"
    },
    "radio": {
      "title": "radio 提示信息",
      "type": "radio",
      "value": "a",
      "options": ["a", "b", "c", "d"],
      "desc": "radio 提示信息"
    },
    "checkbox": {
      "title": "checkbox 提示信息",
      "type": "checkbox",
      "value": ["a", "d"],
      "options": ["a", "b", "c", "d"],
      "desc": "checkbox 提示信息"
    },
    "select": {
      "title": "select 提示信息",
      "type": "select",
      "value": ["b", "c"],
      "options": ["a", "b", "c", "d"],
      "minItems": 2,
      "maxItems": 4,
      "addable": false,
      "removable": false,
      "unique": true,
      "desc": "select 提示信息"
    },
    "color-picker": {
      "title": "color-picker 提示信息",
      "type": "color-picker",
      "value": "#000000",
      "desc": "color-picker 提示信息"
    },
    "array": {
      "type": "array",
      "title": "array 提示信息",
      "desc": "位置",
      "items": [
        {
          "pl_key": "2a7a3390ff0ff",
          "type": "slider",
          "min": 0,
          "max": 20,
          "title": "x 轴",
          "desc": "x 轴",
          "value": 3
        },
        {
          "pl_key": "4705cabf72c78",
          "type": "radio",
          "options": ["低", "中", "高"],
          "title": "y 轴",
          "desc": "y 轴",
          "value": "低"
        },
        {
          "pl_key": "2d04f280f67a",
          "type": "slider",
          "min": 0,
          "max": 360,
          "title": "z 轴",
          "desc": "z 轴",
          "value": 36
        },
        {
          "type": "array",
          "items": [
            {
              "pl_key": "haoniubi",
              "type": "radio",
              "options": ["低", "中", "高"],
              "title": "y 轴",
              "desc": "y 轴",
              "value": "低"
            },
            {
              "pl_key": "niubia",
              "type": "slider",
              "min": 0,
              "max": 360,
              "title": "z 轴",
              "desc": "z 轴",
              "value": 36
            },
            {
              "type": "array",
              "items": [
                {
                  "pl_key": "zhentama",
                  "type": "radio",
                  "options": ["低", "中", "高"],
                  "title": "y 轴",
                  "desc": "y 轴",
                  "value": "低"
                },
                {
                  "pl_key": "niu",
                  "type": "slider",
                  "min": 0,
                  "max": 360,
                  "title": "z 轴",
                  "desc": "z 轴",
                  "value": 36
                },
              ]
            }
          ]
        }
      ]
    }
  }
}
