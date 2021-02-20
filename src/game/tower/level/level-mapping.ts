const TEXTURE_NAME: {
  [key: string]: {
    [key: string]: string
  }
} = {
  other: {
    '0': 'nothing',
  },
  background: {
    '0': 'stairsUp',
    '1': 'floorGrey',
    '2': 'floorGlass',
    '3': 'wallYellow',
    '4': 'floorBlue',
    '5': 'stairsDown',
  },
  item: {
    '0': 'doorYellow',
    '1': 'smallBottleRed',
    '2': 'gemRed',
    '3': 'gemBlue',
    '4': 'keyYellow',
  },
  enemy: {
    '0': 'slimeGreen',
    '1': 'slimeRed',
    '2': 'slimeBlue',
    '3': 'skullWhite',
    '4': 'skullWhiteEquip',
    '5': 'smallBatBlue',
    '6': 'wizardBlue',
  },
  player: {
    '0': 'playerFemale'
  }
}

const OPTIONS_MAP: {
  [key: string]: {
    code?: string,
    type?: 'block' | 'item' | 'sceneItem' | 'levelItem' | 'enemy' | 'player' | 'none';
    property?: { 
      // item or enemy or player property
      ak?: number, // attack value
      df?: number, // defense value
      hp?: number, // health value
      // key or door property
      key?: {
        yk?: number, // yellow 
        bk?: number, // blue
        rk?: number // red 
      },
      // Only 'sceneItem&levelItem have following property
      // some item: jump level
      level?: number,
      // some item destory block
      destoryBlock?: number,
      // once tool or other times
      counts?: number
    },
    width?: number,
    height?: number;
    texture:{
      default: {
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number,
      },
      [k:string]: {
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number,
      }
    }
  }
} = {
  // other
  nothing: { texture: { default: {sx: -1, sy: -1, sWidth: 32, sHeight: 32}} },
  // background
  stairsUp: {
    type: 'levelItem',
    property: { level: 1, },
    texture: { default: { sx: 594, sy: 660, sWidth: 32, sHeight: 32 } }
  },
  stairsDown: {
    type: 'levelItem',
    property: { level: -1, },
    texture: { default: { sx: 594, sy: 628, sWidth: 32, sHeight: 32 } }
  },
  floorGrey: { type: 'none', texture: { default: { sx: 0, sy: 0, sWidth: 32, sHeight: 32 } } },
  floorBlue: { type: 'none', texture: { default: {sx: 33, sy: 0, sWidth: 32, sHeight: 32}} },
  floorGlass: { type: 'none', texture: { default: {sx: 132, sy: 165, sWidth: 32, sHeight: 32}} },
  // item 200  500
  wallYellow: { type: 'block', texture: { default: {sx: 132, sy: 495, sWidth: 32, sHeight: 32}} },
  doorYellow: { type: 'item', property: { key: { yk: -1 } }, texture: { default: {sx: 99, sy: 660, sWidth: 32, sHeight: 32}} },
  keyYellow: { type: 'item', property: { key: { yk: 1 } }, texture: { default: {sx: 231, sy: 660, sWidth: 32, sHeight: 32}} },
  smallBottleRed: { type: 'item', property: { hp: 100}, texture: { default: {sx: 330, sy: 726, sWidth: 32, sHeight: 32}} },
  gemRed: { type: 'item', property: { ak: 3 }, texture: { default: {sx: 495, sy: 726, sWidth: 32, sHeight: 32}} },
  gemBlue: { type: 'item', property: { df: 3 }, texture: { default: {sx: 528, sy: 726, sWidth: 32, sHeight: 32}} },
  // enemy
  slimeGreen: { 
    type: 'enemy',
    property: {hp: 50, ak: 20, df: 1,}, 
    texture: { 
      default: { sx: 759, sy: 0, sWidth: 32, sHeight: 32 },
      active: { sx: 759, sy: 32, sWidth: 32, sHeight: 32 },
    } },
  slimeRed: { 
    type: 'enemy',
    property: {hp: 70, ak: 15, df: 2,}, 
    texture: { 
      default: {sx: 660, sy: 0, sWidth: 32, sHeight: 32},
      active: { sx: 660, sy: 33, sWidth: 32, sHeight: 32 },
    } },
  slimeBlue: { 
    type: 'enemy',
    property: {hp: 1000, ak: 5, df: 5,}, 
    texture: { 
      default: { sx: 660, sy: 0, sWidth: 32, sHeight: 32 },
      active: { sx: 660, sy: 33, sWidth: 32, sHeight: 32 },
    } },
  skullWhite: { 
    type: 'enemy',
    property: {hp: 110, ak: 25, df: 5,}, 
    texture: { 
      default: { sx: 891, sy: 66, sWidth: 32, sHeight: 32 },
      active: { sx: 891, sy: 99, sWidth: 32, sHeight: 32 },
    } },
  skullWhiteEquip: { 
    type: 'enemy',
    property: {hp: 1000, ak: 5, df: 5,}, 
    texture: { 
      default: { sx: 693, sy: 132, sWidth: 32, sHeight: 32 },
      active: { sx: 693, sy: 165, sWidth: 32, sHeight: 32 },
    } },
  smallBatBlue: { 
    type: 'enemy',
    property: {hp: 100, ak: 20, df: 5,}, 
    texture: { 
      default: { sx: 924, sy: 0, sWidth: 32, sHeight: 32 },
      active: { sx: 924, sy: 33, sWidth: 32, sHeight: 32 },
    } },
  wizardBlue: { 
    type: 'enemy',
    property: {hp: 1000, ak: 5, df: 5,},
      texture: { 
      default: { sx: 891, sy: 198, sWidth: 32, sHeight: 32 },
      active: { sx: 891, sy: 231, sWidth: 32, sHeight: 32 },
    } },
  // player
  playerFemale: { 
    type: 'item', 
    property: { 
      hp: 1000, 
      ak: 10, 
      df: 10,
      key: {
        yk: 2,
        bk: 0,
        rk: 0
      },
      level: 1 
    },
    texture: {
      default: {
        sx: 825, sy: 726, sWidth: 32, sHeight: 32
      },
      up: {
        sx: 825, sy: 726, sWidth: 32, sHeight: 32
      },
      down: {
        sx: 858, sy: 726, sWidth: 32, sHeight: 32
      },
      left: {
        sx: 759, sy: 726, sWidth: 32, sHeight: 32
      },
      right: {
        sx: 792, sy: 726, sWidth: 32, sHeight: 32
      }
    },
  }
}

function getTextures(type: string) {
  switch (type) {
    case 'o':
      return TEXTURE_NAME.other;
    case 'b':
      return TEXTURE_NAME.background;
    case 'i':
      return TEXTURE_NAME.item;
    case 'e':
      return TEXTURE_NAME.enemy;
    case 'p':
      return TEXTURE_NAME.player;
    default:
      return TEXTURE_NAME.other;;
  }
}

function getOptions (name:string): {
  width?: number,
  height?: number,
  texture: {
    default: {
      sx: number,
      sy: number,
      sWidth: number,
      sHeight: number,
    },
    [k: string]: {
      sx: number,
      sy: number,
      sWidth: number,
      sHeight: number,
    }
  },
  [k:string]: any
} {
  return OPTIONS_MAP[name] || OPTIONS_MAP['nothing'];
}

export { getOptions, getTextures};