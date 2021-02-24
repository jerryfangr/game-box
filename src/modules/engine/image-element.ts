import { EngineElement} from './engine-element';

class ImageElement extends EngineElement {
  image: CanvasImageSource;
  sx: number; // clipe x coordinates
  sy: number; // clipe x coordinates
  sWidth: number; // clipe width
  sHeight: number;// clipe height

  constructor(image: CanvasImageSource, options: {
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    sx?: number, // clipe x coordinates
    sy?: number, // clipe x coordinates
    sWidth?: number, // clipe width
    sHeight?: number,// clipe height
    [k:string]:any
  }) {
    super(options);
    this.image = image;
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

  rotateRender(angle: number) {
    this.engine.ctx.translate(this.x + this.width/2, this.y + this.height/2);
    this.engine.ctx.rotate(Math.PI/180 * angle);
    this.engine.ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x-this.width/2, this.y-this.height/2, this.width, this.height);
  }
}

export default ImageElement;