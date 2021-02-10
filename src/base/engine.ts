import EnginElement from './engine-element';

/**
 * game engine
 * draw elements(image、rect、font...) on the canvas 
 */
class Engine {
  static instance: Engine;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D ;
  maxFps:number;
  elements: EnginElement[];
  inputs: {[key:string]: 'down' | 'up'};
  events: {[key:string]: Function[]};

  constructor(canvas: HTMLCanvasElement, maxFps:number = 60) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.maxFps = maxFps;
    this.elements = [];
    this.inputs = {};
    this.events = {};
    this.init();
  }

  static getInstance (canvas?: HTMLCanvasElement, maxFps?: number) {
    console.log('instance', this.instance);
    if (this.instance) {
      return this.instance;
    }

    if (!this.instance && canvas) {
      return this.instance = new this(canvas, maxFps);
    }

    throw new Error('You need to create at least one instance')
  }

  init() {
    this.listenerInput();
  }

  get width ():number {
    return this.canvas.width;
  }

  get height ():number {
    return this.canvas.height;
  }

  addElement (element: EnginElement) {
    this.elements.push(element);
  }

  addElements (elements: EnginElement[]) {
    elements.forEach(element => {
      this.addElement(element);
    })
  }

  removeElement (element: EnginElement) {
    let index = this.elements.indexOf(element);
    if (index !== -1) {
      this.elements.splice(index);
    }
  }

  removeElements (elements: EnginElement[]) {
    elements.forEach(element => {
      this.removeElement(element);
    })
  }

  listenerInput () {
    window.addEventListener('keydown', e => {
      let keyName = e.key === '' ? 'SPACE' : e.key.toUpperCase();
      this.inputs[keyName] = 'down';
    })
    window.addEventListener('keyup', e => {
      let keyName = e.key === '' ? 'SPACE' : e.key.toUpperCase();
      this.inputs[keyName] = 'up';
    })
    window.addEventListener('mousedown', e => {
      this.inputs['MOUSE'] = 'down';
    })
    window.addEventListener('mouseup', e => {
      this.inputs['MOUSE'] = 'up';
    })
  }

  bindEvent (keyName:string, callback:Function) {
    keyName = keyName.toUpperCase();
    this.events[keyName] = this.events[keyName] || [];
    this.events[keyName].push(callback);
  }

  cancelEvent (keyName:string, callback:Function) {
    keyName = keyName.toUpperCase();
    let index = this.events[keyName]?.indexOf(callback);
    if (index && index !== -1) {
      this.events[keyName].splice(index);
    }
  }

  emitEvents (keyName:string, event:Event) {
    this.events[keyName].forEach(callback => {
      callback(event); // .call(undefined/this, event)
    })
  }

  render () {
    this.elements.forEach(element => {
      element.render();
    })
  }

  update () {
    this.elements.forEach(element => {
      element.update();
    })
  }

  clearScreen () {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  run () {
    this.clearScreen();
    this.render();
    this.update();
    setTimeout(() => {
      this.run();
    }, 1000 / this.maxFps);
  }
}

export default Engine;