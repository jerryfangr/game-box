import EngineScene from './engine-scene';
import EngineEvent from './engine-event';

/**
 * engine
 * draw scene to canvas 
 */
class Engine {
  static instance: Engine;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  maxFps:number;
  private _listener: EngineEvent;
  private _scene: EngineScene;
  private _pause: boolean;
  private _listenInput :boolean;

  private constructor(canvas: HTMLCanvasElement, maxFps:number = 60) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.maxFps = maxFps;
    this._listener = new EngineEvent();
    this._pause = false;
    this._scene = {} as EngineScene;
    this._listenInput = true;
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

  get width ():number {
    return this.canvas.width;
  }

  get height ():number {
    return this.canvas.height;
  }

  bindEvent(keyName: string, callback: (keyState: string, event: Event) => void, delay?: number): Function {
    return this._listener.on(keyName, callback, delay);
  }

  cancelEvent (keyName: string, callback: Function) {
    this._listener.off(keyName, callback);
  }

  setInput(keyName: string, keyState: 'up' | 'down', event: MouseEvent | KeyboardEvent) {
    this._listener.setInput(keyName, keyState, event);
  }

  clearEvents () {
    this._listener.clear();
  }

  clearScreen() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  private _render () {
    this._scene.render?.()
  }

  private _update () {
    this._scene.update?.() 
  }

  private _run () {
    if (!this._pause) {
      this.clearScreen();
      this._listenInput && this._listener.emitEvents();
      this._render();
      this._update();
    }
    setTimeout(() => {
      this._run();
    }, 1000 / this.maxFps);
  }

  togglePause (value?: boolean) {
    if (value !== undefined) {
      this._pause = value;
    } else {
      this._pause = !this._pause;
    }
  }

  toggleListener(value?: boolean) {
    if (value !== undefined) {
      this._listenInput = value;
    } else {
      this._listenInput = !this._listenInput;
    }
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
    this.clearEvents();
    this._scene = scene;
  }
}

export default Engine;