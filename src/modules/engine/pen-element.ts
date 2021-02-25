import  Engine from './engine';
import {EngineElementInterface} from './engine-element';

class PenElement implements EngineElementInterface {
  engine: Engine;
  isDead: boolean;
  hasDraw: boolean;
  lineWidth: number;
  type: 'stroke' | 'fill';
  drawCallback: (ctx: CanvasRenderingContext2D) => void;
  style: string | CanvasGradient | CanvasPattern;

  constructor(options: {
    lineWidth?: number,   // x coordinate in canvas
    type?: 'stroke' | 'fill',
    style?: string | CanvasGradient | CanvasPattern,
    [k: string]: any
  }) {
    this.engine = Engine.getInstance();
    this.hasDraw = false;
    this.isDead = false;
    this.lineWidth = options.lineWidth || 2;
    this.type = options.type || 'fill';
    this.style = options.style || '#000';
    this.drawCallback = () => {};
  }

  changeStyle (style?: string | CanvasGradient | CanvasPattern, lineWidth?: number) {
    this.style = style || this.style;
    this.lineWidth = lineWidth || this.lineWidth;
  }

  draw (callback: (ctx: CanvasRenderingContext2D)=>void) {
    this.hasDraw = true;
    this.drawCallback = callback;
  }

  render(): void {
    if (this.hasDraw) {
      this.engine.ctx.save();
      this.engine.ctx.beginPath();
      this.drawCallback.call(this, this.engine.ctx);
      this.engine.ctx.lineWidth = this.lineWidth;
      if (this.type === 'fill') {
        this.engine.ctx.fillStyle = this.style;
        this.engine.ctx.fill();
      } else {
        this.engine.ctx.strokeStyle = this.style;
        this.engine.ctx.stroke();
      }
      this.engine.ctx.closePath();
      this.engine.ctx.restore();
    }
  }

  update(): void {}
}

export default PenElement;