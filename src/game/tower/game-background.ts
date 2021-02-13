import {
  EngineElement,
  ImageElement,
  EngineScene
} from '@/modules/engine'

type optionType = {
  options: {
    sx: number;
    sy: number;
    sWidth: number;
    sHeight: number;
    width?: number;
    height?:number;
  },
  counts: number
};

class GameBackGround implements EngineElement {
  element: ImageElement;
  texture: HTMLImageElement;
  size: { rowNumber: number, columnNumber: number };
  config: optionType;
  [key: string]: any;
  constructor(texture: HTMLImageElement, size: {rowNumber: number, columnNumber: number}, bgOptions: optionType[]) {
    this.element = {} as ImageElement;
    this.texture = texture;
    this.size = size;
    this.config = bgOptions[0];
    this.init();
  }

  init () {
    this.elementDistance = 32;
    this.element = this.createElementsBy(this.config);
  }

  createElementsBy(config: optionType): ImageElement {
      let options = {
        x: 0,
        y: 0,
        width: config.options.width,
        height: config.options.height,
        sx: config.options.sx, 
        sy: config.options.sy, 
        sWidth: config.options.sWidth, 
        sHeight: config.options.sHeight,
      }
      return new ImageElement(this.texture, options);
  }

  render () {
    for (let rowIndex = 0; rowIndex < this.size.rowNumber; rowIndex++) {
      for (let colIndex = 0; colIndex < this.size.columnNumber; colIndex++) {
        this.element.move(colIndex * this.elementDistance, rowIndex * this.elementDistance);
        this.element.render();
      }
    }
  }

  update () {
    this.element.update();
  }
}

export default GameBackGround;