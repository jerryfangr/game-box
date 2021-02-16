import  {EngineElement} from './engine-element';

type optionType = {
  x?: number,   // x coordinate in canvas
  y?: number,   // y coordinate in canvas
  text: string, // text content
  font?: string,// font size and family
  type?: 'stroke' | 'fill',
  style?: string | CanvasGradient | CanvasPattern,
}


class FontElement extends EngineElement {
  [props: string]: any;

  constructor(options: {
    x?: number,   // x coordinate in canvas
    y?: number,   // y coordinate in canvas
    text: string, // text content
    font?: string,// font size and family
    type?: 'stroke' | 'fill',
    style?: string | CanvasGradient | CanvasPattern,
  }) {
    super(options);
    this.init(options);
  }

  init (options: optionType) {
    this.text = options.text;
    this.font = options.font || '16px Microsoft YaHei';
    this.type = options.type || 'fill';
    this.style = options.style || '#000';
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
}

export default FontElement;