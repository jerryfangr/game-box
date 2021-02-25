import {
  EngineElement,
  RectElement,
  FontElement,
  EngineScene,
} from '@/modules/engine';


class Panel extends EngineScene {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(options: {
    x?: number,  
    y?: number,
    width?: number;
    height?: number;
    [key: string]: any
  }) {
    super();
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || 0;
    this.height = options.height ||0;
    this.init();
  }

  init() {
    this.initBackground();
    this.initScore();
  }

  initBackground() {
    let bgOption: {
      type: 'stroke' | 'fill',
      [k: string]: any
    } = {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      style: '#DDD894',
      type: 'fill',
    }
    this.addElement(new RectElement(bgOption));

    let bgBorderOption: {
      type: 'stroke' | 'fill',
        [k: string]: any
    } = {
      x: this.x+4,
      y: this.y,
      width: this.width-5,
      height: this.height-2,
      style: '#4B3C47',
      type: 'stroke',
      lineWidth: 10
    }
    this.addElement(new RectElement(bgBorderOption));
  }

  initScore() {}
}

export default Panel;