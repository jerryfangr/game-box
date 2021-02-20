import imageUrl from './assets/game.jpg';
import { 
  Engine, 
  EngineElement, 
  EngineScene, 
  FontElement, 
  RectElement, 
  ImageElement 
} from '@/modules/engine'

class StartScene extends EngineScene {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.initBackground();
    this.initTitle();
    this.bindEvents();
  }

  initBackground () {
    let bg = new RectElement({
      lineWidth: 100,
      type: 'fill'
    })

    this.addElement(bg);
  }

  initTitle () {
    let title = new FontElement({
      text: 'Magic Tower 5',
      font: '50px yehei',
      x: 150,
      y: 160,
      style: '#f0f'
    })

    let author = new FontElement({
      text: '本大爷',
      x: 200,
      y: 210,
      style: '#ff0',
      font: '20px Arial'
    })

    let tips = new FontElement({
      text: 'press k to continue',
      x: 200,
      y: 260,
      style: '#fff',
      font: '14px Arial'
    })

    this.addElements([title, author, tips]);
  }

  bindEvents () {}
}

export default StartScene;