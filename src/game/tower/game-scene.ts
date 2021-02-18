// import imageUrl from '@/assets/tower.jpg';
import imageUrl from './tower.png';
import { 
  EngineElement, 
  EngineScene, 
  FontElement, 
  RectElement, 
  ImageElement 
} from '@/modules/engine'
import BackGround from './background';
import ElementsScene from './elements-scene';
import StatusScene from './status-scene';
import GameElement from './game-element';
import GamePlayer from './game-player';
import { getLevelCode } from './level-load';

type rectType = {
  x: number,
  y: number,
  width: number,
  height: number,
  [key: string]: any
}

class GameScene extends EngineScene {
  texture: HTMLImageElement;
  lock: boolean;
  levelsCode: { bg: string, elements: string[][]}[];
  levelNumber: number;
  gameWindowSize: {
    rowNumber: number,
    columnNumber: number
  }
  gameElements: GameElement[];
  [key: string]: any;

  constructor() {
    super();
    this.texture = new Image();
    this.gameWindowSize = { rowNumber: 13, columnNumber: 18 };
    this.gameElements = [];
    this.levelsCode = [];
    this.levelNumber = 0;
    this.lock = false;
    this.loadLevelCode(this.levelNumber);
    this.loadTexture(() => {
      this.init();
    });
  }

  init() {
    this.initBackground();
    this.initElementScene();
    this.initPlayer();
    this.initStatusBar();
  }

  loadLevelCode (levelNumber: number) {
    if (this.levelsCode[levelNumber] === undefined) {
      let levelCode: null | { bg: string, elements: string[][] } = getLevelCode(levelNumber);
      if (levelCode === null) {
        throw new Error('Level config error, content is null')
      }
      this.levelsCode[levelNumber] = levelCode;
    }
  }

  replaceLevel (levelNumber: number) {
    this.loadLevelCode(levelNumber);
    this.levelNumber = levelNumber;
    this.init();
  }

  loadTexture (callback: Function) {
    this.texture.src = imageUrl;
    this.texture.onload = () => {
      callback.call(this);
    }
  }

  initBackground () {
    let gbg = new BackGround(this.texture, this.gameWindowSize, this.levelsCode[this.levelNumber].bg)
    this.addElement(gbg);
  }

  initElementScene () {
    let ge = new ElementsScene(this.texture, this.levelsCode[this.levelNumber].elements);
    this.gameElements = ge.elements;
    this.addElement(ge);
  }

  initPlayer () {
    this.player = new GamePlayer(this.texture, 'p0');
    this.addElement(this.player);
  }

  initStatusBar () {
    this.statusScene = new StatusScene(this.texture, this.player, { x: 32 * 13, y: 0 });
    this.addElement(this.statusScene);
  }

  deleteElementCallback(element: GameElement) {
    let level = this.levelsCode[this.levelNumber];
    if (element.position !== undefined) {
      level.elements[element.position.rIndex][element.position.cIndex] = 'o0';
    }
  }

  // 1. 以地图数组移动
  // 2. 以循环判断移动 -- choosed lock => 只允许单向移动
  move(keyState: string, direction: string) {
    if (this.lock) {return;}
    // locke this function
    this.lock = true;
    // need to turn to a new direction
    if (this.player.turnDirection(direction)) {
      return this.lock = false;
    }
    // get moved player position
    let nextPlayer = this.player.nextStatus(keyState, direction)
    if (nextPlayer === null) {
      return this.lock = false;
    }
    // if there are nothing, just move
    let element = this.getTouchedItem(nextPlayer, this.gameElements);
    if (element === null) {
      this.player.moveBy(direction);
      return this.lock = false;
    } 
    // if there are something, trigger touched event
    element.touchWith(this.player, this);
    this.lock = false;
  }

  getTouchedItem(nextPlayer: EngineElement, items: GameElement[]) {
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      if (nextPlayer.x === element.x && nextPlayer.y === element.y) {
        return element;
      }
    }
    return null;
  }

  bindInputEvents () {
    super.bindInputEvents();
    this.engine.bindEvent('d', (keyState) => {
      this.move(keyState, 'right');
    }, 90);
    this.engine.bindEvent('a', (keyState) => {
      this.move(keyState, 'left');
    }, 90);
    this.engine.bindEvent('w', (keyState) => {
      this.move(keyState, 'up');
    }, 90);
    this.engine.bindEvent('s', (keyState) => {
      this.move(keyState, 'down');
    }, 90);
  }
}

export default GameScene;