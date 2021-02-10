import  Engine from './engine';
import  EngineElement from './engine-element';

class ImageElement implements EngineElement {
  engine: Engine;
  image: CanvasImageSource;
  x: number;
  y: number;

  constructor(image: CanvasImageSource) {
    this.engine = Engine.getInstance();
    this.image = image;
    this.x = 0;
    this.y = 0;
    this.init();
  }

  init () { // 设置属性，画出第一张图片

  }

  render(): void {
    this.engine.ctx.drawImage(this.image, this.x, this.y)
    // void ctx.drawImage(image, dx, dy);
    // void ctx.drawImage(image, dx, dy, dWidth, dHeight);
    // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  }

  update(): void {
    // throw new Error('Method not implemented.');
  }
}

export default ImageElement;