import imageUrl from '@/assets/tower.jpg';
// import imageUrl from '@/assets/tower.png';
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
import { getLevelCode } from './level-load';


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
      // this.initTitle();
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
    let bg = new GameBackground(this.texture, this.gameWindowSize, this.levelsCode[this.levelNumber].bg)
    this.addElement(bg);
  }

  initElements () {
    let ge = new GameElements(this.texture, this.levelsCode[this.levelNumber].elements);
    console.log(ge);
    this.addElement(ge);
  }

  initTitle () {
    let title = new FontElement({
      text: 'Magic Tower 5',
      font: '50px yehei',
      x: 150,
      y: 160,
      style: '#f0f'
    })

    let tips = new FontElement({
      text: 'press k to continue',
      x: 200,
      y: 260,
      style: '#fff',
      font: '14px yahei'
    })

    this.addElements([title, tips]);
  }

  bindEvents () {}
}

export default GameScene;