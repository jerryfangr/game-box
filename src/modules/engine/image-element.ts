import  Engine from './engine';
import  EngineElement from './engine-element';

type optionType = {
  x?: number,
  y?: number,
  width?: number,
  height?: number,
  sx?: number, // clipe x coordinates
  sy?: number, // clipe x coordinates
  sWidth?: number, // clipe width
  sHeight?: number,// clipe height
}

class ImageElement implements EngineElement {
  engine: Engine;
  image: CanvasImageSource;
  options: optionType;
  [props: string]: any;

  constructor(image: CanvasImageSource, options: optionType) {
    this.engine = Engine.getInstance();
    this.image = image;
    this.options = options;
    this.init();
  }

  init () {
    this.x = this.options.x || 0;
    this.y = this.options.y || 0;
    this.sx = this.options.sx || 0;
    this.sy = this.options.sy || 0;
    this.sWidth = this.options.sWidth || this.image.width as number;
    this.sHeight = this.options.sHeight || this.image.height as number;
    this.width = this.options.width || this.sWidth;
    this.height = this.options.height || this.sHeight;
  }

  move (x?: number, y?:number) {
    this.x = x === undefined ? this.x : x;
    this.y = y === undefined ? this.y : y;
  }

  changeTexture (sx?: number, sy?:number, sWidth?: number, sHeight?: number) {
    this.sx = sx || this.sx;
    this.sy = sy || this.sy;
    if (sWidth !== undefined) { // 修改雪碧图素材一般只改坐标
      this.sWidth = sWidth || this.sWidth;
      this.sHeight = sHeight || this.sHeight;      
    }
  }

  render(): void {
    this.engine.ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height);
  }

  update(): void {}
}

export default ImageElement;