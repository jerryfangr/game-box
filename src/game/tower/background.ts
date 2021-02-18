import {
  EngineElementInterface,
  ImageElement
} from '@/modules/engine'

import { getTextureOption } from './level-load';

type optionType = {
  width?: number;
  height?:number;
  texture: {
    default: {
      sx: number,
      sy: number,
      sWidth: number,
      sHeight: number
    },
    [k:string]: any
  }
};

class BackGround implements EngineElementInterface {
  element: ImageElement;
  texture: HTMLImageElement;
  size: { rowNumber: number, columnNumber: number };
  elementDistance: number;

  constructor(texture: HTMLImageElement, size: { rowNumber: number, columnNumber: number }, bgCode: string) {
    this.texture = texture;
    this.size = size;
    let bgOptions: optionType = getTextureOption(bgCode);
    this.elementDistance = 32;
    this.element = this.createElementsBy(bgOptions);
  }

  createElementsBy(bgOptions: optionType): ImageElement {
      let options = {
        x: 0,
        y: 0,
        width: bgOptions.width,
        height: bgOptions.height,
        sx: bgOptions.texture.default.sx, 
        sy: bgOptions.texture.default.sy, 
        sWidth: bgOptions.texture.default.sWidth, 
        sHeight: bgOptions.texture.default.sHeight,
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