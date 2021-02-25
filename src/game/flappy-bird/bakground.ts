import {
  EngineElement,
  ImageElement,
} from '@/modules/engine'
import getResourceBy from './config/resource';


class Background extends EngineElement {
  bgElement: ImageElement;
  groundElement: ImageElement;
  isPlaying: boolean;

  constructor(texture: HTMLImageElement, options: {
    x?: number,   // x coordinate in canvas
    y?: number,
    width?: number;
    height?: number;
    [key: string]: any
  }) {
    super(options);
    let bgOption = this.formatOption(getResourceBy('bg'));
    let groundOption = this.formatOption(getResourceBy('ground'));
    groundOption.y = bgOption.height - groundOption.height + 5;
    this.bgElement = new ImageElement(texture, bgOption);
    this.groundElement = new ImageElement(texture, groundOption);
    this.width = this.bgElement.width;
    this.isPlaying = false;
  }

  formatOption(option: {[k:string]: any}) {
    return {
      x: this.x,
      y: this.y,
      width: option.width,
      height: option.height,
      sx: option.texture.default.sx,
      sy: option.texture.default.sy,
      sWidth: option.texture.default.sWidth,
      sHeight: option.texture.default.sHeight
    }
  }

  render () {
    this.bgElement.render();
    this.groundElement.render();
  }

  toggle(value?: boolean) {
    if (value !== undefined) {
      this.isPlaying = value;
    } else {
      this.isPlaying = !this.isPlaying;
    }
  }

  update() {
    if (this.isPlaying) {
      this.groundElement.x -= 4;
      if (this.groundElement.x + this.groundElement.width < this.bgElement.width) {
        this.groundElement.x = 0;
      }
    }
  }
}

export default Background;