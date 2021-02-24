import imageUrl from './assets/resource.png';
import { 
  EngineElement, 
  EngineScene, 
  ImageElement,
} from '@/modules/engine'
import getResourceBy from './config/resource';
import Background from './bakground';

class GameScene extends EngineScene {
  texture: HTMLImageElement;
  status: string;
  gameElements: EngineElement[];
  [key: string]: any;

  constructor() {
    super();
    this.texture = new Image();
    this.status = 'wait';
    this.gameElements = [];
    this.loadTexture(() => {
      this.init();
      this.bindInputEvents();
    });
  }

  init() {
    this.initBackground();
    // this.initPipes();
    // this.initPlayer();
    // this.initStatusBar();
  }

  loadTexture (callback: Function) {
    this.texture.src = imageUrl;
    this.texture.onload = () => {
      callback.call(this);
    }
  }

  initBackground() {
    this.addElement(new Background(this.texture, {x: 0, y: 0}));
  }

  bindInputEvents () {
    super.bindInputEvents();
    this.engine.bindEvent('j', (keyState) => {
      // player fly
    });
    this.engine.bindEvent('k', (keyState) => {
      // end game, back to game choose page
    });
  }
}

export default GameScene;