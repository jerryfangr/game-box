import {
  EngineElement,
  EngineScene,
  ImageElement,
} from '@/modules/engine'

import GameElement from './game-element';
import GamePlayer from './game-player'

type propertyType = {
  [k: string]: number | { [k: string]: number }
}

class Item extends GameElement {
  
  constructor(texture: HTMLImageElement, options: {
    [k: string]: any
  }) {
    super(options);
    this.element = new ImageElement(texture, options);
  }

  touchWith(player?: GameElement) {
    if (!player) {
      return true;
    }
    if (this.property === undefined || player.property === undefined) {
      return true;
    }
    if (this.canTouch(this.property, player.property)) {
      player.touchWith(this, 'item');
      this.delete();
      return true;
    }
    return false;
  }

  canTouch (property: propertyType, playerProperty: propertyType): boolean {
    for (const key in property) {
      let props = property[key];
      let playerProps = playerProperty[key];
      if (typeof props === 'number' && (playerProps as number + props) < 0) {
        return false;
      }
      if (typeof props === 'object' && !this.canTouch(props, playerProps as propertyType)) {
        return false;
      }
    }
    return true;
  }
}

export default Item;