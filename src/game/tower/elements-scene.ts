import {
  EngineScene
} from '@/modules/engine'

import GameElement from './element/game-element';
import Block from './element/block';
import Item from './element/item';
import LevelItem from './element/level-item';
import Enemy from './element/enemy';

import { elementsCodeToOptions } from './level/level-load';

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
  x: number;
  y: number;
  elements: GameElement[];
  elementsCode: string[][];
  elementsOption: optionType[][];
  elementDistance: number;
  texture: HTMLImageElement;

  constructor(texture: HTMLImageElement, options: {
    x?: number,
    y?: number,
    elementsCode: string[][]
  }) {
    super();
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.elementsCode = options.elementsCode;
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
      tempOptions.x = this.x + columIndex * this.elementDistance;
      tempOptions.y = this.y + rowIndex * this.elementDistance;
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
      } else if (options.type === 'levelItem') {
        this.addElement(new LevelItem(this.texture, tempOptions));
      }
      // this.addElement(new ImageElement(this.texture, tempOptions));
    }
  }

  deleteElementCallback(element: GameElement) {
    if (element.position !== undefined) {
      this.elementsCode[element.position.rIndex][element.position.cIndex] = 'o0';
    }
  }
}

export default ElementsScene;