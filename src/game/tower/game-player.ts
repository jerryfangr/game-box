import {
  EngineElement,
  ImageElement
} from '@/modules/engine'

import { getTextureOption } from './level-load';

type optionType = {
  sx: number;
  sy: number;
  sWidth: number;
  sHeight: number;
  width?: number;
  height?: number;
};

class GamePlayer extends EngineElement {
  element: ImageElement;
  texture: HTMLImageElement;
  [key: string]: any;

  constructor(texture: HTMLImageElement, playerCode: string) {
    let options = getTextureOption(playerCode);
    super(options);
    this.texture = texture;
    this.element = new ImageElement(this.texture, options);
    this.init();
  }

  init() {
    this.setCoordinates(32*6, 32*11);
  }

  setCoordinates(x?: number, y?: number) {
    super.setCoordinates(x, y);
    this.element.setCoordinates(x, y);
  }

  move(x?: number, y?: number) {
    super.move(x, y);
    this.element.move(x, y);
  }

  moveByDirection (keyState: string, direction: string) {
    if (keyState === 'down') {
      switch (direction) {
        case 'left':
          this.move(-32);
          break;
        case 'right':
          this.move(32);
          break;
        case 'top':
          this.move(0, -32);
          break;
        case 'bottom':
          this.move(0, 32);
          break;
        default:
          break;
      }
    }
  }

  replacePlayer(playerCode: string) {
    let options = getTextureOption(playerCode);
    this.element = new ImageElement(this.texture, {
      x: this.x,
      y: this.y,
      ...options
    });
  }

  render() {
    this.element.render();
  }

  update() {
    this.element.update();
  }
}

export default GamePlayer;