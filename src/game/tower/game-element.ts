import {
  EngineElement,
  EngineScene,
} from '@/modules/engine'

abstract class GameElement extends EngineElement {
  element?: EngineElement;
  position?: { // position ub levelCode Map rowIndex and columnIndex
    rIndex: number,
    cIndex: number
  };
  property?: {
    [k: string]: number | { [k: string]: number}
  }

  constructor(options: {
    type?: string;
    property?: {
      [k: string]: any
    },
    position?: {// position ub levelCode Map rowIndex and columnIndex
      rIndex: number,
      cIndex: number
    },
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    texture?: {
      default: {
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number,
      },
      [k: string]: {
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number,
      }
    },
    [k: string]: any
  }) {
    super(options);
    if (options.position !== undefined) {
      this.position = {
        rIndex: options.position.rIndex,
        cIndex: options.position.cIndex
      }
    }
    if (options.property !== undefined) {
      this.property = JSON.parse(JSON.stringify(options.property));
    }
    if (options.texture !== undefined) {
      options.sx = options.texture.default.sx;
      options.sy = options.texture.default.sy;
      options.sWidth = options.texture.default.sWidth;
      options.sHeight = options.texture.default.sHeight;
    }
  }

  abstract touchWith(...params: any[]): boolean | undefined

  render () {
    this.element?.render?.();
  }

  update () {
    this.element?.update?.();
  }
}

export default GameElement;