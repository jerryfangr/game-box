// import imageUrl from '@/assets/tower.jpg';
import imageUrl from '@/assets/tower.png';
import { 
  Engine, 
  EngineElement, 
  EngineScene, 
  FontElement, 
  RectElement, 
  ImageElement 
} from '@/modules/engine'
import GameBackground from './game-background';
import ItemScene from './item-scene';
import GamePlayer from './game-player';
import { getLevelCode, getTextureOption } from './level-load';

type rectType = {
  x: number,
  y: number,
  width: number,
  height: number,
  [key: string]: any
}

class GameScene extends EngineScene {
  levelsCode: { bg: string, elements: string[][]}[];
  levelNumber: number;
  gameWindowSize: {
    rowNumber: number,
    columnNumber: number
  }
  gameElements: EngineElement[];
  [key: string]: any;

  constructor() {
    super();
    this.gameWindowSize = { rowNumber: 13, columnNumber: 13 };
    this.gameElements = [];
    this.levelsCode = [];
    this.levelNumber = 0;
    this.init();
  }

  init() {
    if (this.levelsCode[this.levelNumber] === undefined) {
      let levelCode: null | { bg: string, elements: string[][] } = getLevelCode(this.levelNumber);
      if (levelCode === null) {
        throw new Error('Level config error, content is null')
      }
      this.levelsCode[this.levelNumber] = levelCode;      
    }
    this.loadTexture(() => {
      this.initBackground();
      this.initItemScene();
      this.initStatusBar();
      this.initPlayer();
      this.bindEvents();
    });
  }

  loadTexture (callback: Function) {
    this.texture = new Image();
    this.texture.src = imageUrl;
    this.texture.onload = () => {
      callback.call(this);
    }
  }

  initBackground () {
    let gbg = new GameBackground(this.texture, this.gameWindowSize, this.levelsCode[this.levelNumber].bg)
    this.addElement(gbg);
  }

  initItemScene () {
    let ge = new ItemScene(this.texture, this.levelsCode[this.levelNumber].elements);
    this.gameElements = ge.elements as EngineElement[];
    this.addElement(ge);
  }

  initPlayer () {
    this.player = new GamePlayer(this.texture, 'p0');
    this.addElement(this.player);
  }

  initStatusBar () {
    let barBg = new RectElement({
      x: this.gameWindowSize.columnNumber*32,
      y: 0,
      width: 5*32,
      height: this.gameWindowSize.rowNumber*32,
      style: '#ddd',
      type: 'fill'
    });
    this.addElement(barBg);

  }

  // move 
  // 1. 以地图数组移动
  // 2. 以循环判断移动 -- choosed
  move(keyState: string, direction: string) {
    let nextPlayer = this.player.nextStatus(keyState, direction)
    if (nextPlayer === null) {
      return;
    }
    let touchedItem = this.getTouchedItem(nextPlayer, this.gameElements);
    this.player.moveWidth(keyState, direction, touchedItem);
  }

  getTouchedItem(nextPlayer: EngineElement, items: EngineElement[]) {
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      if (nextPlayer.x === element.x && nextPlayer.y === element.y) {
        return element;
      }
    }
    return null;
  }

  // isIntersection(box1: rectType, box2: rectType) {
  //   if (box1.x < (box2.x + box2.width) && (box1.x + box1.width) > box2.x) {
  //     if (box1.y < (box2.y + box2.height) && (box1.y + box1.height) > box2.y) {
  //       console.log('In box 1--> ', box1);
  //       console.log('In box2 --> ', box2);
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  bindEvents () {
    this.engine.bindPause('p');

    this.engine.bindEvent('d', (keyState, event) => {
        this.move(keyState, 'right');
    }, 50);
    this.engine.bindEvent('a', (keyState, event) => {
      this.move(keyState, 'left');
    }, 50);
    this.engine.bindEvent('w', (keyState, event) => {
      this.move(keyState, 'top');
    }, 50);
    this.engine.bindEvent('s', (keyState, event) => {
      this.move(keyState, 'bottom');
    }, 50);
  }
}

export default GameScene;