import Engine from './engine';

interface EngineElementInterface {
  isDead?: boolean;
  render ():void;
  update ():void;
}

class EngineElement implements EngineElementInterface {
  engine: Engine;
  isDead: boolean;
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(options: {
    x?: number,   // x coordinate in canvas
    y?: number,
    width?: number;
    height?: number;
    [key: string]: any
  }) {
    this.engine = Engine.getInstance();
    this.isDead = false;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || 0;
    this.height = options.height || 0;
  }

  delete () {
    this.isDead = true;
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