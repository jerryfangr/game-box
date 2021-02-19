import {
  EngineElementInterface,
  ImageElement
} from '@/modules/engine'

import { getTextureOption } from './level-load';

type optionType = {
  x?: number,
  y?: number,
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
  x: number;
  y: number;
  element: ImageElement;
  rowCutElement?: ImageElement;
  columnCutElement?: ImageElement;
  rcCutElement?: ImageElement;
  elementLength: number;
  isDead: boolean;
  texture: HTMLImageElement;
  needCut: {
    row: boolean,
    column: boolean
  };
  size: {
    rowNumber: number,
    columnNumber: number
  }

  constructor(
    texture: HTMLImageElement, 
    options: {
      x?: number,
      y?: number,
      width: number,
      height: number,
      elementLength?: number, 
      bgCode: string
    }) {
    this.texture = texture;
    this.isDead = false;
    this.needCut = {
      row: true,
      column: true
    };
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.size = {rowNumber: 0, columnNumber: 0};
    this.elementLength = options.elementLength || 0;
    let elements = this.createElementsBy(options);
    this.element = elements.element;
    this.rowCutElement = elements.rowCutElement;
    this.columnCutElement = elements.columnCutElement;
    this.rcCutElement = elements.rcCutElement;
  }


  createElementsBy (options: {
    x?: number,
    y?: number,
    width: number,
    height: number,
    bgCode: string,
    [k: string]: any
  }): {
    element: ImageElement,
    [k:string]: ImageElement | undefined
  } {
    let defaultBgOptions: optionType = getTextureOption(options.bgCode);
    defaultBgOptions.x = options.x || 0;
    defaultBgOptions.y = options.y || 0;
    let element = this.createElementBy(defaultBgOptions);
    this.elementLength = this.elementLength || element.width;
    this.checkDrawRange(options);

    let rowCutElement;
    let columnCutElement;
    let rcCutElement;
    let sWidth = options.width % this.elementLength;
    let sHeight = options.height % this.elementLength;

    if (this.needCut.column) {
      let tempOption: optionType = getTextureOption(options.bgCode);
      tempOption.texture.default.sWidth = sWidth;
      tempOption.width = sWidth;
      columnCutElement = this.createElementBy(tempOption);
    }
    if (this.needCut.row) {
      let tempOption: optionType = getTextureOption(options.bgCode);
      tempOption.texture.default.sHeight = sHeight;
      tempOption.height = sHeight;
      rowCutElement = this.createElementBy(tempOption);
    }
    if (this.needCut.row && this.needCut.column) {
      let tempOption: optionType = getTextureOption(options.bgCode);
      tempOption.texture.default.sHeight = sHeight;
      tempOption.texture.default.sWidth = sWidth;
      tempOption.width = sWidth;
      tempOption.height = sHeight;
      rcCutElement = this.createElementBy(tempOption);
    } else if (this.needCut.row || this.needCut.column) {
      rcCutElement = rowCutElement || columnCutElement;
    } 
    rowCutElement = rowCutElement || element;
    columnCutElement = columnCutElement || element;
    rcCutElement = rcCutElement || element;

    return {element, rowCutElement, columnCutElement, rcCutElement}
  }

  checkDrawRange(options: {
    width: number,
    height: number,
    [k: string]: any
  }) {
    if (options.width % this.elementLength === 0) {
      this.needCut.column = false;
    }
    if (options.height % this.elementLength === 0) {
      this.needCut.row = false;
    }
    this.size.rowNumber = Math.ceil(options.height / this.elementLength);
    this.size.columnNumber = Math.ceil(options.width / this.elementLength);
  }

  createElementBy (bgOptions: optionType): ImageElement {
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

  draw (element: ImageElement, x: number, y: number) {
    element.setCoordinates(this.x + x, this.y + y);
    element.render();
  }

  render () {
    // only the most right or bottom need use cut image
    for (let rIndex = 0; rIndex < this.size.rowNumber-1; rIndex++) {
      for (let cIndex = 0; cIndex < this.size.columnNumber-1; cIndex++) {
        this.draw(this.element, cIndex * this.elementLength, rIndex * this.elementLength);
      }
    }
    // the most right column(except the most bottom one) 
    for (let rIndex = 0, cIndex = this.size.columnNumber - 1; rIndex < this.size.rowNumber - 1; rIndex++) {
      this.draw(this.columnCutElement!, cIndex * this.elementLength, rIndex * this.elementLength);
    }
    // the most bottom row(except the most right one)
    for (let cIndex = 0, rIndex = this.size.rowNumber - 1; cIndex < this.size.columnNumber - 1; cIndex++) {
      this.draw(this.rowCutElement!, cIndex * this.elementLength, rIndex * this.elementLength);
    }
    // the most right and most bottom one
    this.draw(this.rcCutElement!, 
      (this.size.columnNumber - 1) * this.elementLength, 
      (this.size.rowNumber - 1) * this.elementLength);
  }

  update () {
    this.element.update();
    (this.rowCutElement !== this.element) && this.rowCutElement?.update();
    (this.columnCutElement !== this.element) && this.columnCutElement?.update();
    (this.rcCutElement !== this.element) && this.rcCutElement?.update();
  }
}

export default BackGround;