import {
  EngineElement,
  ImageElement,
  RectElement,
  FontElement
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
  texture: HTMLImageElement;
  element: ImageElement;
  [key: string]: any;

  constructor(texture: HTMLImageElement, playerCode: string) {
    let options = getTextureOption(playerCode);
    super(options);
    this.texture = texture;
    this.element = new ImageElement(this.texture, options);
    this.width = this.element.width;
    this.height = this.element.height;
    this.init(options);
  }

  init(options: optionType) {
    this.setDebugElement(new ImageElement(this.texture, options));
    this.setCoordinates(32*6, 32*11);
  }

  setDebugElement(element: EngineElement) {
    this.debugElement = element;
    this.debugElement.setCoordinates(32 * 15, 32 * 10)
  }

  setCoordinates(x?: number, y?: number) {
    super.setCoordinates(x, y);
    this.element.setCoordinates(x, y);
  }

  move(x?: number, y?: number) {
    super.move(x, y);
    this.element.move(x, y);
  }

  nextStatus(keyState: string,direction: string) {
    if (keyState !== 'down') {
      return null;
    }
    let distance = this.getMoveDistance(direction);
    return {
      x: this.x + distance.x,
      y: this.y + distance.y,
      width: this.width,
      height: this.height
    }
  }

  moveWidth (keyState: string, direction: string, element?:EngineElement) {
    if (keyState === 'down') {
      this.touchElement(element);
      let distance = this.getMoveDistance(direction);
      this.move(distance.x, distance.y);
    }
  }

  touchElement(element?: EngineElement) {
    element && element.delete();
    element && this.setDebugElement(element);
  }

  getMoveDistance(direction: string): {x: number, y: number} {
    switch (direction) {
      case 'left':
        return {x: -32, y:0};
      case 'right':
        return { x: 32, y: 0 };
      case 'top':
        return { x: 0, y: -32 };
      case 'bottom':
        return { x: 0, y: 32 };
      default:
        return { x: 0, y: 0 };
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
    this.debugElement.render()
  }

  update() {
    this.element.update();
  }
}

export default GamePlayer;