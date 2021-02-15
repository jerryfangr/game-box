import {EngineElement} from './engine-element';
import PenElement from './pen-element';

type optionType = {
  x?: number,   // x coordinate in canvas
  y?: number,   // y coordinate in canvas
  lineWidth?: number,
  width?: number,
  height?: number,
  radius?: number,
  type?: 'stroke' | 'fill',
  style?: string | CanvasGradient | CanvasPattern,
}

class RectElement extends EngineElement {
  pen: PenElement;
  [props: string]: any;

  constructor(options: optionType) {
    super(options);
    this.init(options);
    this.pen = new PenElement({
      lineWidth: this.lineWidth,
      type: this.type,
      style: this.style
    })
  }

  init(options: optionType) {
    this.width = options.width || this.engine.width;
    this.height = options.height || this.engine.height;
    this.radius = options.radius || 0;
    this.lineWidth = options.lineWidth || 1;
    this.type = options.type || 'stroke';
    this.style = options.style || '#000';
    if (this.radius*2 > this.width || this.radius*2 > this.height) {
      throw new Error('radius is too big, the diameter should small than width and height');
    }
  }

  changeStyle(style?: string | CanvasGradient | CanvasPattern, lineWidth?: number) {
    this.style = style || this.style;
    this.lineWidth = lineWidth || this.lineWidth;
    this.pen.changeStyle(this.style, this.lineWidth);
  }

  draw () {
    this.pen.draw((ctx) => {
      let arcX = this.x + this.radius;
      let arcY = this.y + this.radius;
      let arcWidth = this.x + this.width - this.radius;
      let arcHeight = this.y + this.height - this.radius;
      ctx.moveTo(this.x, arcY);
      ctx.arc(arcX, arcY, this.radius, Math.PI, Math.PI * 3 / 2); //左上角，弧度从PI到3/2PI
      ctx.lineTo(arcX, this.y); //上边线
      ctx.arc(arcWidth, arcY, this.radius, Math.PI * 3 / 2, Math.PI * 2); //右上角圆弧
      ctx.lineTo(this.x + this.width, arcHeight); //右边线  
      ctx.arc(arcWidth, arcHeight, this.radius, 0, Math.PI / 2); //右下角，弧度从0到1/2PI
      ctx.lineTo(arcX, this.y + this.height); //下边线
      ctx.arc(arcX, arcHeight, this.radius, Math.PI / 2, Math.PI); //左下角，弧度从1/2PI到PI
      ctx.lineTo(this.x, arcY); //左边线
    });
  }

  render(): void {
    this.draw();
    this.pen.render();
  }
}

export default RectElement;