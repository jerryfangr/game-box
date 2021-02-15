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
    '0': 'playFemale'
  }
}

const OPTIONS_MAP: {
  [key: string]: {
    sx: number,
    sy: number,
    sWidth: number,
    sHeight: number,
    width?: number,
    height?: number;
  }
} = {
  // other
  nothing: { sx: -1, sy: -1, sWidth: 32, sHeight: 32 },
  // background
  stairsUp: { sx: 594, sy: 660, sWidth: 32, sHeight: 32 },
  floorGrey: { sx: 0, sy: 0, sWidth: 32, sHeight: 32 },
  floorGlass: { sx: 132, sy: 165, sWidth: 32, sHeight: 32 },
  // item
  wallYellow: { sx: 132, sy: 495, sWidth: 32, sHeight: 32 },
  doorYellow: { sx: 99, sy: 660, sWidth: 32, sHeight: 32 },
  smallBottleRed: { sx: 330, sy: 726, sWidth: 32, sHeight: 32 },
  gemRed: { sx: 495, sy: 726, sWidth: 32, sHeight: 32 },
  gemBlue: { sx: 528, sy: 726, sWidth: 32, sHeight: 32 },
  keyYellow: { sx: 231, sy: 660, sWidth: 32, sHeight: 32 },
  // enemy
  slimeGreen: { sx: 759, sy: 0, sWidth: 32, sHeight: 32 },
  slimeRed: { sx: 660, sy: 0, sWidth: 32, sHeight: 32 },
  slimeBlue: { sx: 660, sy: 0, sWidth: 32, sHeight: 32 },
  skullWhite: { sx: 891, sy: 66, sWidth: 32, sHeight: 32 },
  skullWhiteEquip: { sx: 693, sy: 132, sWidth: 32, sHeight: 32 },
  smallBatBlue: { sx: 924, sy: 0, sWidth: 32, sHeight: 32 },
  wizardBlue: { sx: 891, sy: 198, sWidth: 32, sHeight: 32 },
  // player
  playFemale: { sx: 792, sy: 858, sWidth: 32, sHeight: 32}
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

function getOptions (name:string) {
  return OPTIONS_MAP[name] || OPTIONS_MAP['nothing'];
}

export { getOptions, getTextures};