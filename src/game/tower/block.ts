import {
  ImageElement
} from '@/modules/engine'

import GameElement from './game-element';

class Block extends GameElement {

  constructor(texture: HTMLImageElement, options: {
    
    [k:string]:any
  }) {
    super(options);
    this.element = new ImageElement(texture, options);
  }

  touchWith () {
    return false;
  }
}

export default Block;