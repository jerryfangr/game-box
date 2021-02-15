import Engine from './engine';

interface EngineElementInterface {
  isDead?: boolean;
  render ():void;
  update ():void;
}

type optionType = {
  x?: number,   // x coordinate in canvas
  y?: number,
  [key: string]: any
}

class EngineElement implements EngineElementInterface {
  engine: Engine;
  isDead: boolean;
  x: number;
  y: number;

  constructor(options: optionType) {
    this.engine = Engine.getInstance();
    this.isDead = false;
    this.x = options.x || 0;
    this.y = options.y || 0;
  }

  setCoordinates(x?: number, y?: number) {
    this.x = x === undefined ? this.x : x;
    this.y = y === undefined ? this.y : y;
  }

  move(x?: number, y?: number) {
    this.x += x === undefined ? 0 : x;
    this.y += y === undefined ? 0 : y;
  }

  render() { }
  update() { }
}

export { EngineElement, EngineElementInterface};