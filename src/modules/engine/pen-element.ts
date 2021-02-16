import  Engine from './engine';
import {EngineElementInterface} from './engine-element';

type optionType = {
  lineWidth?: number,   // x coordinate in canvas
  type?: 'stroke' | 'fill',
  style?: string | CanvasGradient | CanvasPattern,
}


class PenElement implements EngineElementInterface {
  engine: Engine;
  isDead: boolean;
  hasDraw: boolean;
  [props: string]: any;

  constructor(options: {
    lineWidth?: number,   // x coordinate in canvas
    type?: 'stroke' | 'fill',
    style?: string | CanvasGradient | CanvasPattern,
  }) {
    this.engine = Engine.getInstance();
    this.hasDraw = false;
    this.isDead = false;
    this.init(options);
  }

  init (options: optionType) {
    this.lineWidth = options.lineWidth || 2;
    this.type = options.type || 'fill';
    this.style = options.style || '#000';
  }

  changeStyle (style?: string | CanvasGradient | CanvasPattern, lineWidth?: number) {
    this.style = style || this.style;
    this.lineWidth = lineWidth || this.lineWidth;
  }

  draw (callback: (ctx: CanvasRenderingContext2D)=>void) {
    this.hasDraw = true;
    this.engine.ctx.beginPath();
    callback.call(this, this.engine.ctx);
    this.engine.ctx.closePath();
  }

  render(): void {
    if (this.hasDraw) {
      this.engine.ctx.lineWidth = this.lineWidth;
      if (this.type === 'fill') {
        this.engine.ctx.fillStyle = this.style;
        this.engine.ctx.fill();
      } else {
        this.engine.ctx.strokeStyle = this.style;
        this.engine.ctx.stroke();
      }
    }
  }

  update(): void {}
}

export default PenElement;