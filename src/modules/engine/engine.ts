import EngineScene from './engine-scene';
import EngineEvent from './engine-event';

/**
 * * engine
 * * draw scene to canvas 
 */
class Engine {
  // the Engine instance
  static instance: Engine;
  // canvas element
  canvas: HTMLCanvasElement;
  // Context2D from canvas element
  ctx: CanvasRenderingContext2D;
  // max fps
  maxFps:number;
  // input listener
  private _listener: EngineEvent;
  // scene
  private _scene: EngineScene | null;
  // true: stop this Engine
  private _pause: boolean;
  // The _listener switch, false: input will be ignore
  private _listenInput :boolean;

  private constructor(canvas: HTMLCanvasElement, maxFps:number = 60) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.maxFps = maxFps;
    this._listener = new EngineEvent();
    this._pause = false;
    this._scene = null;
    this._listenInput = true;
  }

  /**
   * * get the single instance of Engine
   * @param canvas canvas element
   * @param maxFps max fps
   * @returns Engine instance
   */
  static getInstance (canvas?: HTMLCanvasElement, maxFps?: number) {
    if (this.instance) {
      return this.instance;
    }
    if (!this.instance && canvas) {
      return this.instance = new this(canvas, maxFps);
    }
    throw new Error('You have to create at least one instance')
  }

  /**
   * * canvas width
   */
  get width ():number {
    return this.canvas.width;
  }

  /**
 * * canvas height
 */
  get height ():number {
    return this.canvas.height;
  }

  /**
   * bind event
   * @param keyName such as A|B|C|SPACE...
   * @param callback callback function
   * @param delay the delay time of function execution
   * @returns the bind function
   */
  bindEvent(keyName: string, callback: (keyState: string, event: Event) => void, delay?: number): Function {
    return this._listener.on(keyName, callback, delay);
  }

  /**
   * delete event
   * @param keyName such as A|B|C|SPACE...
   * @param callback which return by bindEvent
   */
  cancelEvent (keyName: string, callback: Function) {
    this._listener.off(keyName, callback);
  }

  /**
   * input key
   * @param keyName such as A|B|C|SPACE...
   * @param keyState 'down' | 'up'
   * @param event the event from brower
   */
  setInput(keyName: string, keyState: 'up' | 'down', event: MouseEvent | KeyboardEvent) {
    this._listener.setInput(keyName, keyState, event);
  }

  /**
   * clear all input and binded events
   */
  clearEvents () {
    this._listener.clear();
  }

  /**
   * clear screen by clearRect full screen
   */
  clearScreen() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  private _render () {
    this._scene?.render?.()
  }

  private _update () {
    this._scene?.update?.() 
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

  /**
   * stop or continue the enigne
   * @param value true | false
   */
  togglePause (value?: boolean) {
    if (value !== undefined) {
      this._pause = value;
    } else {
      this._pause = !this._pause;
    }
  }

  /**
   * ignore or listen input
   * @param value true | false
   */
  toggleListener(value?: boolean) {
    if (value !== undefined) {
      this._listenInput = value;
    } else {
      this._listenInput = !this._listenInput;
    }
  }

  /**
   * use a key to controll this engine pause status
   * @param keyName any key in keyboards
   */
  bindPause (keyName: string) {
    window.addEventListener('keydown', e => {
      if (e.key === keyName) {
        this.togglePause();
      }
    })
  }

  /**
   * run this engine
   * @param scene EngineScene
   */
  startWith (scene: EngineScene) {
    this.clearEvents();
    if (this._scene === null) {
      this._scene = scene;
      this._run();
    } else {
      this._scene = scene;
    }
  }
}

export default Engine;