import { EngineElement} from './engine-element';

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

class ImageElement extends EngineElement {
  image: CanvasImageSource;
  [props: string]: any;

  constructor(image: CanvasImageSource, options: optionType) {
    super(options);
    this.image = image;
    this.init(options);
  }

  init(options: optionType) {
    this.sx = options.sx || 0;
    this.sy = options.sy || 0;
    this.sWidth = options.sWidth || this.image.width as number;
    this.sHeight = options.sHeight || this.image.height as number;
    this.width = this.width || this.sWidth;
    this.height = this.height || this.sHeight;
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
}

export default ImageElement;