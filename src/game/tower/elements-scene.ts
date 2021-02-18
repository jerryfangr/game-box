import {
  EngineScene
} from '@/modules/engine'

import GameElement from './game-element';
import Block from './block';
import Item from './item';
import Enemy from './enemy';

import { elementsCodeToOptions } from './level-load';

type optionType = {
  width?: number;
  height?: number;
  texture: {
    default: {
      sx: number,
      sy: number,
      sWidth: number,
      sHeight: number
    },
    [k: string]: any
  }
  [k: string]: any
};

class ElementsScene extends EngineScene {
  elements: GameElement[];
  elementsCode: string[][];
  elementsOption: optionType[][];
  elementDistance: number;
  texture: HTMLImageElement;

  constructor(texture: HTMLImageElement, elementsCode: string[][]) {
    super();
    this.elementsCode = elementsCode;
    this.elements = [];
    this.texture = texture;
    this.elementsOption = elementsCodeToOptions(this.elementsCode);
    this.elementDistance = 32;
    this.loadElements();
  }

  loadElements () {
    for (let r = 0; r < this.elementsOption.length; r++) {
      let rowOptions = this.elementsOption[r];
      for (let c = 0; c < rowOptions.length; c++) {
        this.createElement(rowOptions[c], r, c);
      }
    }
  }

  createElement (options: { [k: string]: any }, rowIndex: number, columIndex: number) {
    if (options.type !== undefined && options.type !== 'none') {
      let tempOptions = options;
      tempOptions.x = columIndex * this.elementDistance;
      tempOptions.y = rowIndex * this.elementDistance;
      tempOptions.position = {
        rIndex: rowIndex,
        cIndex: columIndex
      };
      
      if (options.type === 'block') {
        this.addElement(new Block(this.texture, tempOptions));
      } else if (options.type === 'item') {
        this.addElement(new Item(this.texture, tempOptions));
      } else if (options.type === 'enemy') {
        this.addElement(new Enemy(this.texture, tempOptions));
      }
      // this.addElement(new ImageElement(this.texture, tempOptions));
    }
  }
}

export default ElementsScene;