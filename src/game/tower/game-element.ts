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