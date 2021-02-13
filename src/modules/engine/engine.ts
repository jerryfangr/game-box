import EngineScene from './engine-scene';
import EngineListener from './engine-listener';

/**
 * engine
 * draw scene to canvas 
 */
class Engine {
  static instance: Engine;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D ;
  maxFps:number;
  _listener: EngineListener;
  [props: string]: any;

  constructor(canvas: HTMLCanvasElement, maxFps:number = 60) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.maxFps = maxFps;
    this._listener = new EngineListener();
    this.init();
  }

  static getInstance (canvas?: HTMLCanvasElement, maxFps?: number) {
    if (this.instance) {
      return this.instance;
    }
    if (!this.instance && canvas) {
      return this.instance = new this(canvas, maxFps);
    }
    throw new Error('You need to create at least one instance')
  }

  init() {
    this._pause = false;
    this._scene = null;
  }

  get width ():number {
    return this.canvas.width;
  }

  get height ():number {
    return this.canvas.height;
  }

  bindEvent (keyName: string, callback: Function) {
    this._listener.bindEvent(keyName, callback);
  }

  cancelEvent (keyName: string, callback: Function) {
    this._listener.cancelEvent(keyName, callback);
  }

  clearEvents () {
    this._listener.clear();
  }

  clearScreen() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  _render () {
    this._scene.render?.()
  }

  _update () {
    this._scene.update?.() 
  }

  _run () {
    if (!this._pause) {
      this.clearScreen();
      this._listener.emitEvents();
      this._render();
      this._update();
    }
    setTimeout(() => {
      this._run();
    }, 1000 / this.maxFps);
  }

  pause () {
    this._pause = true;
  }

  continue () {
    this._pause = false;
  }
  startWith (scene: EngineScene) {
    this._scene = scene;
    this._run();
  }

  replace (scene: EngineScene) {
    this._scene = scene;
    this.clearEvents();
  }
}

export default Engine;