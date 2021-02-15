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
import GameElements from './game-elements';
import GamePlayer from './game-player';
import { getLevelCode, getTextureOption } from './level-load';


class GameScene extends EngineScene {
  levelsCode: { bg: string, elements: string[][]}[];
  levelNumber: number;
  gameWindowSize: {
    rowNumber: number,
    columnNumber: number
  }
  [key: string]: any;

  constructor() {
    super();
    this.gameWindowSize = { rowNumber: 13, columnNumber: 13 };
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
      this.initElements();
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

  initElements () {
    let ge = new GameElements(this.texture, this.levelsCode[this.levelNumber].elements);
    this.addElement(ge);
  }

  initPlayer () {
    this.player = new GamePlayer(this.texture, 'p0');
    this.addElement(this.player);
  }

  // move 
  // 1. 以地图数组移动
  // 2. 以循环判断移动
  move(keyState: string, direction: string) {
    
    this.move(keyState, direction);
  }

  bindEvents () {
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
    this.engine.bindPause('p');
  }
}

export default GameScene;