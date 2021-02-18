import {
  ImageElement
} from '@/modules/engine'

import GameElement from './game-element';

type propertyType = {
  hp: number,
  ak: number,
  df: number,
  [k: string]: number
}

class Enemy extends GameElement {
  animationElements: ImageElement[];
  activeAnimation: number;
  updateCounter: number;
  updateNumber: number;

  constructor(texture: HTMLImageElement, options: {
    [k: string]: any
  }) {
    super(options);
    this.activeAnimation = 0;
    this.updateCounter = 0;
    this.updateNumber = 10;
    this.animationElements = [];
    this.element = new ImageElement(texture, options);
    this.createAnimations(texture, options);
  }

  createAnimations(texture: HTMLImageElement, options: { [k: string]: any}) {
    for (const key in options.texture) {
      let tempOptions = options.texture[key];
      tempOptions.x = this.x;
      tempOptions.y = this.y;
      tempOptions.width = this.width;
      tempOptions.height = this.height;
      this.animationElements.push(new ImageElement(texture, tempOptions));
    }
  }

  touchWith(player?: GameElement) {
    if (!player || !this.property || !player.property) {
      console.log(player);
      console.log('this.property');
      return false;
    }
    if (this.canFight(this.property as propertyType, player.property as propertyType)) {
      player.touchWith(this, 'enemy');
      console.log('delete', this);
      this.delete();
      return true;
    }
    return false;
  }

  canFight(property: propertyType, playerProperty: propertyType): boolean {
    return true;
  }

  update () {
    this.updateCounter++;
    if (this.updateCounter >= this.updateNumber) {
      this.updateCounter = 0;
      this.activeAnimation++;
      this.activeAnimation = this.activeAnimation >= this.animationElements.length ? 0 : this.activeAnimation;
      this.element = this.animationElements[this.activeAnimation];
    }
  }
}

export default Enemy;