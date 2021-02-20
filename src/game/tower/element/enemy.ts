import {
  EngineElement,
  ImageElement,
  EngineScene
} from '@/modules/engine'

import GameElement from './game-element';
import GameScene from '../game-scene';
import FightScene from '../fight-scene';

type propertyType = {
  hp: number,
  ak: number,
  df: number,
  [k: string]: number
}

class Enemy extends GameElement {
  texture?: HTMLImageElement;
  element: EngineElement | EngineScene;
  animationElements: ImageElement[];
  activeAnimation: number;
  updateCounter: number;
  updateNumber: number;

  constructor(texture: HTMLImageElement, options: {
    [k: string]: any
  }) {
    super(options);
    this.texture = texture;
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

  touchWith(player: GameElement, scene: GameScene) {
    if (!this.property || !player.property) {
      return false;
    }
    if (this.canFight(this.property as propertyType, player.property as propertyType)) {
      this.fightWidth(player, scene);
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

    let playerAttackCount = Math.ceil(property.hp / playerInjure);
    let enemyAttackCount = Math.ceil(playerProperty.hp / enemyInjure);
    return playerAttackCount <= enemyAttackCount;
  }

  fightWidth(player: GameElement, scene: GameScene) {
    scene.addElement(new FightScene(this.texture!, {
      player: player,
      enemy: this
    }));
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