import {
  EngineElementInterface,
  ImageElement
} from '@/modules/engine'

import { getTextureOption } from './level-load';

type optionType = {
  sx: number;
  sy: number;
  sWidth: number;
  sHeight: number;
  width?: number;
  height?:number;
};

class BackGround implements EngineElementInterface {
  element: ImageElement;
  texture: HTMLImageElement;
  size: { rowNumber: number, columnNumber: number };
  bgCode: string;
  [key: string]: any;

  constructor(texture: HTMLImageElement, size: { rowNumber: number, columnNumber: number }, bgCode: string) {
    this.element = {} as ImageElement;
    this.texture = texture;
    this.size = size;
    this.bgCode = bgCode;
    this.init();
  }

  init () {
    this.bgOptions = getTextureOption(this.bgCode);
    this.elementDistance = 32;
    this.element = this.createElementsBy(this.bgOptions);
  }

  createElementsBy(bgOptions: optionType): ImageElement {
      let options = {
        x: 0,
        y: 0,
        width: bgOptions.width,
        height: bgOptions.height,
        sx: bgOptions.sx, 
        sy: bgOptions.sy, 
        sWidth: bgOptions.sWidth, 
        sHeight: bgOptions.sHeight,
      }
      return new ImageElement(this.texture, options);
  }

  render () {
    for (let rowIndex = 0; rowIndex < this.size.rowNumber; rowIndex++) {
      for (let colIndex = 0; colIndex < this.size.columnNumber; colIndex++) {
        this.element.setCoordinates(colIndex * this.elementDistance, rowIndex * this.elementDistance);
        this.element.render();
      }
    }
  }

  update () {
    this.element.update();
  }
}

export default BackGround;