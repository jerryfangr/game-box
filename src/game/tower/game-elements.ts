import {
  EngineElement,
  ImageElement,
  EngineScene
} from '@/modules/engine'

type levelRowType = {
  options: {
    sx: number;
    sy: number;
    sWidth: number;
    sHeight: number;
    width?: number;
    height?: number;
  },
  counts: number
}[];

class GameElements extends EngineScene {
  elements: EngineElement[];
  level: levelRowType[];
  texture: HTMLImageElement;
  [key: string]: any;

  constructor(texture: HTMLImageElement, level: levelRowType[]) {
    super();
    this.elements = [];
    this.level = level;
    this.texture = texture;
    this.init();
  }

  init() {
    this.elementDistance = 32;
    this.loadLevel();
  }

  loadLevel() {
    for (let row = 0; row < this.level.length; row++) {
      let elementConfigs = this.level[row];
      let columIndex = 0;
      for (let i = 0; i < elementConfigs.length; i++) {
        let elementConfig = elementConfigs[i];
        let elements: EngineElement[] = [];
        columIndex = this.createElementsBy(elements, elementConfig, row, columIndex);
        this.addElements(elements);
      }
    }
  }

  createElementsBy(elements: EngineElement[], config: { [k: string]: any }, rowIndex: number, columIndex: number): number {
    let options = config.options;
    for (let i = 0; i < config.counts; i++) {
      if (options.sx >= 0 && options.sy >= 0) {
        let tempOptions = {
          x: columIndex * this.elementDistance,
          y: rowIndex * this.elementDistance,
          width: options.width,
          height: options.height,
          sx: options.sx, // clipe x coordinates
          sy: options.sy, // clipe x coordinates
          sWidth: options.sWidth, // clipe width
          sHeight: options.sHeight,// clipe height
        }
        elements.push(new ImageElement(this.texture, tempOptions))
      }
      columIndex++;
    }
    return columIndex;
  }
}

export default GameElements;