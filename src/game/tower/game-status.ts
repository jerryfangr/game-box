import {
  EngineElement,
  ImageElement,
  RectElement,
  FontElement
} from '@/modules/engine'

import { getTextureOption } from './level-load';

class GameStatus extends EngineElement {

  constructor(player: EngineElement, options: {
    x?: number,
    y?: number,
    width?: number;
    height?: number;
  }) {
    super({
      x: 0,
      y: 0
    })
  }
}