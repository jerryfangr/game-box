import  Engine from './engine';
import  EngineElement from './engine-element';

type optionType = {
  text: string, // text content
  x?: number,   // x coordinate in canvas
  y?: number,   // y coordinate in canvas
  font?: string,// font size and family
  type?: 'stroke' | 'fill',
  style?: string | CanvasGradient | CanvasPattern,
}


class FontElement implements EngineElement {
  engine: Engine;
  [props: string]: any;

  constructor(options: optionType) {
    this.engine = Engine.getInstance();
    this.init(options);
  }

  init (options: optionType) {
    this.text = options.text;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.font = options.font || '16px Microsoft YaHei';
    this.type = options.type || 'fill';
    this.style = options.style || '#000';
  }

  move (x?: number, y?:number) {
    this.x = x === undefined ? this.x : x;
    this.y = y === undefined ? this.y : y;
  }

  changeTexture (text?: string, font?: string, style?: string | CanvasGradient | CanvasPattern) {
    this.text = text || this.text;
    this.engine.ctx.font = font || this.engine.ctx.font;
    this.style = style || this.style;
  }

  render(): void {
    this.engine.ctx.font = this.font;
    if (this.type === 'fill') {
      this.engine.ctx.fillStyle = this.style;
      this.engine.ctx.fillText(this.text, this.x, this.y);
    } else {
      this.engine.ctx.strokeStyle = this.style;
      this.engine.ctx.strokeText(this.text, this.x, this.y);
    }
  }

  update(): void {}
}

export default FontElement;