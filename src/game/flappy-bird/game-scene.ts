import imageUrl from './assets/resource.png';
import { 
  EngineElement, 
  EngineScene, 
  ImageElement,
} from '@/modules/engine';
import Background from './bakground';
import Player from './player';
import Panel from './panel';

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
    this.initPlayer();
    this.initPanel();
  }

  loadTexture (callback: Function) {
    this.texture.src = imageUrl;
    this.texture.onload = () => {
      callback.call(this);
    }
  }

  initBackground() {
    this.bg = new Background(this.texture, { x: 0, y: 0 });
    this.addElement(this.bg);
  }

  initPlayer() {
    this.player = new Player(this.texture, {x: 100, y:230});
    this.addElement(this.player);
  }

  initPanel() {
    let panel = new Panel({
      x: this.bg.width,
      y: 0,
      width: this.engine.width-this.bg.width,
      height: this.engine.height
    }, );
    this.addElement(panel);
  }

  bindInputEvents () {
    super.bindInputEvents();
    this.engine.bindEvent('j', (keyState) => {
      if (keyState === 'down') {
        this.bg.toggle(true);
        this.player.fly()
      } else {
        this.player.setStatus('dropping');
      }
    });
    this.engine.bindEvent('k', (keyState) => {
      // end game, back to game choose page
    });
  }
}

export default GameScene;