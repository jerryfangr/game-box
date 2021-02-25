import {
  EngineElement,
  ImageElement,
} from '@/modules/engine'
import getResourceBy from './config/resource';

class Player extends EngineElement {
  element: ImageElement;
  elements: ImageElement[];
  activeIndex: number;
  texture: HTMLImageElement;
  status: string;
  score: number;
  speed: number;
  acceleration: number;
  updateCounter: number;
  options: {
    x?: number, 
    y?: number,
    width?: number;
    height?: number;
    speed?: number;
    [key: string]: any
  }

  constructor(texture: HTMLImageElement, options: {
    x?: number,  
    y?: number,
    speed?: number;
    [key: string]: any
  }) {
    let playerOption = getResourceBy('bird');
    super(options);
    this.options = options;
    this.texture = texture;
    this.width = this.width || playerOption.width;
    this.height = this.height || playerOption.height;
    this.element = new ImageElement(this.texture, options);
    this.elements = [];
    this.activeIndex = 0;
    this.status = 'waitting';
    this.score = 0;
    this.speed = options.speed || 8;
    this.acceleration = 2;
    this.updateCounter = 0;
    this.init(playerOption.texture);
  }

  init(texture: { [k: string]: any }) {
    for (const key in texture) {
      let options = this.formatOption(texture[key]);
      this.elements.push(new ImageElement(this.texture, options));
    }
  }

  setCoordinates(x?: number, y?: number) {
    super.setCoordinates(x, y);
    this.element.setCoordinates(x, y);
  }

  formatOption(texture: { [k: string]: any }) {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      sx: texture.sx,
      sy: texture.sy,
      sWidth: texture.sWidth,
      sHeight: texture.sHeight
    }
  }

  fly() {
    this.setStatus('flying');
    let newYAxis = this.y - this.speed;
    if (newYAxis < 0) {
      newYAxis = 0;
    }
    this.setCoordinates(undefined, newYAxis);
  }

  drop() {
    let newYAxis = this.y - this.speed;
    if (newYAxis + this.height > (this.engine.height-20)) {
      newYAxis = this.engine.height - 20 - this.height;
    }
    this.setCoordinates(undefined, newYAxis);
    this.speed -= this.acceleration;
  }

  reset() {
    this.setStatus('waitting');
    this.setCoordinates(this.options.x, this.options.y);
  }

  setStatus(status: 'waitting' | 'flying' | 'dropping') {
    if (this.status !== status) {
      this.speed = this.options.speed || 8;
      if (status === 'dropping') {
        this.speed = -4;
      }
      this.status = status;
    }
  }

  get position() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    }
  }

  render() {
    if (this.status === 'waitting') {
      this.element.render();
    } else if (this.status === 'flying') {
      this.element.rotateRender(-45);
    } else {
      this.element.rotateRender(45);
    }
  }

  update() {
    if (this.status === 'dropping') {
      this.drop()
    }
    this.updateCounter++;
    if (this.updateCounter >= 2) {
      this.updateCounter = 0;
      this.activeIndex++;
      this.activeIndex = this.activeIndex >= this.elements.length ? 0 : this.activeIndex;
      this.element = this.elements[this.activeIndex];
      this.setCoordinates(this.x, this.y);
    }
  }

}

export default Player;