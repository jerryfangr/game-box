import {
  ImageElement
} from '@/modules/engine'

import GameElement from './game-element';
import GameScene from '../game-scene';

class LevelItem extends GameElement {
  level: number;

  constructor(texture: HTMLImageElement, options: {
    [k: string]: any
  }) {
    super(options);
    this.element = new ImageElement(texture, options);
    this.level = this.property!.level as number || 0;
  }

  touchWith(player: GameElement, gameScene: GameScene) {
    gameScene.replaceLevel(gameScene.levelNumber + this.level)
    return true;
  }
}

export default LevelItem;