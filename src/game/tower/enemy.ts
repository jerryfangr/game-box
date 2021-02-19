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

  touchWith(player: GameElement) {
    if (!this.property || !player.property) {
      return false;
    }
    if (this.canFight(this.property as propertyType, player.property as propertyType)) {
      this.fightAnimation(player);
      player.touchWith(this, 'enemy');
      this.delete();
      return true;
    }
    return false;
  }

  // 改成勇者先攻击模式
  canFight(property: propertyType, playerProperty: propertyType): boolean {
    let playerInjure = playerProperty.ak - property.df;
    if (playerInjure <= 0) {
      return false;
    }
    let enemyInjure = property.ak - playerProperty.df;
    if (enemyInjure <= 0) {
      return true;
    }

    let playerAttackCount = property.hp / playerInjure;
    let enemyAttackCount = playerProperty.hp / enemyInjure;
    return playerAttackCount < enemyAttackCount;
  }

  fightAnimation(player: GameElement) {
    this.engine.toggleListener(false);
    // fight animation
    
    this.engine.toggleListener(true);
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