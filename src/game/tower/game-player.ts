import {
  ImageElement,
} from '@/modules/engine'
import GameElement from './game-element';
import { getTextureOption } from './level-load';

type propertyType = {
  [k: string]: number | { [k: string]: number }
}

class GamePlayer extends GameElement {
  element: ImageElement;
  texture: HTMLImageElement;
  [key: string]: any;

  constructor(texture: HTMLImageElement, playerCode: string) {
    let options = getTextureOption(playerCode);
    super(options);
    this.texture = texture;
    this.element = new ImageElement(this.texture, options);
    this.width = this.element.width;
    this.height = this.element.height;
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

  moveWidth(keyState: string, direction: string, element?: GameElement) {
    if (keyState === 'down') {
      let distance = this.getMoveDistance(direction);
      this.move(distance.x, distance.y);
    }
  }

  touchWith (element: GameElement, elementType: string) {
    if (elementType === 'item') {
      this.eatItem(element.property!, this.property!);
    }
    return true;
  }

  eatItem(property: propertyType, playerProperty: propertyType) {
    for (const key in property) {
      if (typeof playerProperty[key] === 'number') {
        playerProperty[key] = (playerProperty[key] as number) + (property[key] as number);
      }
      if (typeof playerProperty[key] === 'object') {
        this.eatItem(property[key] as propertyType, playerProperty[key] as propertyType);
      }
    }
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

  // render() {
  //   this.element.render();
  // }

}

export default GamePlayer;