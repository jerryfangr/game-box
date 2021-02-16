import EngineScene from './engine-scene';
import EngineEvent from './engine-event';

/**
 * engine
 * draw scene to canvas 
 */
class Engine {
  static instance: Engine;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D ;
  maxFps:number;
  _listener: EngineEvent;
  [props: string]: any;

  constructor(canvas: HTMLCanvasElement, maxFps:number = 60) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.maxFps = maxFps;
    this._listener = new EngineEvent();
    this.init();
  }

  static getInstance (canvas?: HTMLCanvasElement, maxFps?: number) {
    if (this.instance) {
      return this.instance;
    }
    if (!this.instance && canvas) {
      return this.instance = new this(canvas, maxFps);
    }
    throw new Error('You have to create at least one instance')
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

  bindEvent(keyName: string, callback: (keyState: string, event: Event) => void, delay?: number): Function {
    return this._listener.bindEvent(keyName, callback, delay);
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
    // console.log('pause', this._pause);
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

  togglePause () {
    this._pause = !this._pause;
  }

  bindPause (keyName: string) {
    window.addEventListener('keydown', e => {
      if (e.key === keyName) {
        this.togglePause();
      }
    })
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