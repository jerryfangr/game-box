import imageUrl from '@/assets/tower.jpg';
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
import levels from './level';


class GameScene extends EngineScene {
  [key: string]: any;

  constructor() {
    super();
    this.bgSize = { rowNumber: 13, columnNumber: 13 };
    this.levels = levels;
    this.levelNumber = 0;
    this.init();
  }

  init() {
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
    let bg = new GameBackground(this.texture, this.bgSize, this.levels[this.levelNumber][0])
    this.addElement(bg);
  }

  initElements () {
    let ge = new GameElements(this.texture, this.levels[this.levelNumber][1]);
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