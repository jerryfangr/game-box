import {
  EngineElementInterface,
  ImageElement,
  EngineScene
} from '@/modules/engine'

import { elementsCodeToOptions } from './level-load';

class ItemScene extends EngineScene {
  elements: EngineElementInterface[];
  elementsCode: string[][];
  texture: HTMLImageElement;
  [key: string]: any;

  constructor(texture: HTMLImageElement, elementsCode: string[][]) {
    super();
    this.elementsCode = elementsCode;
    this.elements = [];
    this.texture = texture;
    this.init();
  }

  init() {
    this.elementsOption = elementsCodeToOptions(this.elementsCode);
    this.elementDistance = 32;
    this.loadElements();
  }

  loadElements () {
    for (let r = 0; r < this.elementsOption.length; r++) {
      let rowOptions = this.elementsOption[r];
      let columIndex = 0;
      for (let i = 0; i < rowOptions.length; i++) {
        columIndex = this.createElement(rowOptions[i], r, columIndex);
      }
    }
  }

  createElement (option: { [k: string]: any }, rowIndex: number, columIndex: number): number {
    if (option.sx >= 0 && option.sy >= 0) {
      let tempOptions = {
        x: columIndex * this.elementDistance,
        y: rowIndex * this.elementDistance,
        width: option.width,
        height: option.height,
        sx: option.sx, // clipe x coordinates
        sy: option.sy, // clipe x coordinates
        sWidth: option.sWidth, // clipe width
        sHeight: option.sHeight,// clipe height
      }
      this.addElement(new ImageElement(this.texture, tempOptions))
    }
    return ++columIndex;
  }
}

export default ItemScene;