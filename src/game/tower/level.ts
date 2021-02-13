// type levelType = {
//   width?: number,
//   height?: number,
//   sx: number, // clipe x coordinates
//   sy: number, // clipe y coordinates
//   sWidth: number, // clipe width
//   sHeight: number,// clipe height
// }

const RESOURCE_MAP: { 
  [key: string]: {
    sx: number,
    sy: number,
    sWidth: number,
    sHeight: number,
    width?: number,
    height?: number;
  }
} = {
  // none
  nothing: { sx: -1, sy: -1, sWidth: 32, sHeight: 32},
  // background
  stairsUp: { sx: 594, sy: 660, sWidth: 32, sHeight: 32},
  floorGrey: { sx: 0, sy: 0, sWidth: 32, sHeight: 32},
  floorGlass: { sx: 132, sy: 165, sWidth: 32, sHeight: 32},
  wallYellow: { sx: 132, sy: 495, sWidth: 32, sHeight: 32},
  // items
  doorYellow: { sx: 99, sy: 660, sWidth: 32, sHeight: 32},
  smallBottleRed: { sx: 330, sy: 726, sWidth: 32, sHeight: 32},
  gemRed: { sx: 495, sy: 726, sWidth: 32, sHeight: 32},
  gemBlue: { sx: 528, sy: 726, sWidth: 32, sHeight: 32},
  keyYellow: { sx: 231, sy: 660, sWidth: 32, sHeight: 32},
  // enemy
  slimeGreen: { sx: 759, sy: 0, sWidth: 32, sHeight: 32}, 
  slimeRed: { sx: 660, sy: 0, sWidth: 32, sHeight: 32},
  slimeBlue: { sx: 660, sy: 0, sWidth: 32, sHeight: 32},
  skullWhite: { sx: 891, sy: 66, sWidth: 32, sHeight: 32},
  smallBatBlue: { sx: 924, sy: 0, sWidth: 32, sHeight: 32 },
  wizardBlue: { sx: 891, sy: 198, sWidth: 32, sHeight: 32 },
  // player
}

function getConfig (elementName: string, counts?: number) {
  let options = RESOURCE_MAP[elementName] || RESOURCE_MAP.nothing;
  counts = counts || 1;
  return {
    options: options,
    counts: counts
  }
}

let level = [
  [ // level 1
    [ // level 1 bg
      // getConfig('floorGlass', 1),
      getConfig('floorGrey', 1),
    ],
    [ // level 1 elements
      [ // row 1
        getConfig('wallYellow', 13),
      ],
      [ // row 2 ...
        getConfig('wallYellow', 1),
        getConfig('stairsUp', 1),
        getConfig('nothing', 1),
        getConfig('slimeGreen', 1),
        getConfig('slimeRed', 1),
        getConfig('slimeGreen', 1),
        getConfig('nothing', 6),
        getConfig('wallYellow', 1),
      ],
      [
        getConfig('wallYellow', 11),
        getConfig('nothing', 1),
        getConfig('wallYellow', 1),
      ],
      [
        getConfig('wallYellow', 1),
        getConfig('smallBottleRed', 1),
        getConfig('nothing', 2),
        getConfig('doorYellow', 1),
        getConfig('nothing', 1),
        getConfig('wallYellow', 1),
        getConfig('gemRed', 1),
        getConfig('keyYellow', 1),
        getConfig('nothing', 1),
        getConfig('wallYellow', 1),
        getConfig('nothing', 1),
        getConfig('wallYellow', 1),
      ],
      [
        getConfig('wallYellow', 1),
        getConfig('nothing', 1),
        getConfig('skullWhite', 1),
        getConfig('nothing', 1),
        getConfig('wallYellow', 1),
        getConfig('nothing', 1),
        getConfig('wallYellow', 1),
        getConfig('gemBlue', 1),
        getConfig('smallBottleRed', 1),
        getConfig('nothing', 1),
        getConfig('wallYellow', 1),
        getConfig('nothing', 1),
        getConfig('wallYellow', 1),
      ],
      [
        getConfig('wallYellow', 2),
        getConfig('doorYellow', 1),
        getConfig('wallYellow', 2),
        getConfig('nothing', 1),
        getConfig('wallYellow', 3),
        getConfig('doorYellow', 1),
        getConfig('wallYellow', 1),
        getConfig('nothing', 1),
        getConfig('wallYellow', 1),
      ],
      [
        getConfig('wallYellow', 1),
        getConfig('keyYellow', 1),
        getConfig('nothing', 2),
        getConfig('wallYellow', 1),
        getConfig('nothing', 1),
        getConfig('doorYellow', 1),
        getConfig('smallBatBlue', 1),
        getConfig('wizardBlue', 1),
        getConfig('smallBatBlue', 1),
        getConfig('wallYellow', 1),
        getConfig('nothing', 1),
        getConfig('wallYellow', 1),
      ],
      [
        getConfig('wallYellow', 1),

      ]
    ]
  ],
  [] // level 2
]

export default level;