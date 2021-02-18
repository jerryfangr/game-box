class EngineEvent {
  inputs: { [key: string]: (string | KeyboardEvent | MouseEvent)[] | '' | undefined};
  events: { [key: string]: Function[] };

  constructor() {
    this.inputs = {};
    this.events = {};
    this.init();
  }

  init() {
    this.listenInputs();
  }

  listenInputs() {
    window.addEventListener('keydown', e => {
      let keyName = e.key === ' ' ? 'SPACE' : e.key.toUpperCase();
      this.inputs[keyName] = ['down', e];
    })
    window.addEventListener('keyup', e => {
      let keyName = e.key === ' ' ? 'SPACE' : e.key.toUpperCase();
      this.inputs[keyName] = ['up', e];
    })
    window.addEventListener('mousedown', e => {
      this.inputs['MOUSE'] = ['down', e];
    })
    window.addEventListener('mouseup', e => {
      this.inputs['MOUSE'] = ['up', e];
    })
  }

  bindEvent(keyName: string, callback: (keyState: string, event: Event) => void, delay?: number): Function {
    keyName = keyName.toUpperCase();
    let fn = callback;
    if (delay !== undefined) {
      fn = throttle(callback, delay);
    }
    this.events[keyName] = this.events[keyName] || [];
    this.events[keyName].push(fn);
    return fn;
  }

  cancelEvent(keyName: string, callback: Function) {
    keyName = keyName.toUpperCase();
    let index = this.events[keyName]?.indexOf(callback);
    if (index && index !== -1) {
      this.events[keyName].splice(index);
    }
  }

  emitEvent(keyName: string) {
    if (this.events[keyName] !== undefined) {
      let keyState = this.inputs[keyName]![0];
      let event = this.inputs[keyName]![1];
      this.events[keyName].forEach(callback => {
        callback(keyState, event);
      })
      if (keyState === 'up') {
        this.inputs[keyName] = undefined;
      }
      // delete this.inputs[keyName];
    }
  }

  emitEvents() {
    for (const key in this.inputs) {
      if (this.inputs[key] !== undefined) {
        this.emitEvent(key);
      }
    }
  }

  clear () {
    this.inputs = {};
    this.events = {};
  }
}

function throttle(callback: (keyState: string, event: Event) => void, delay: number) {
  let canUse = true;
  return function () {
    let args: any = arguments;
    if (canUse) {
      canUse = false;
      callback.apply(undefined, args);
      setTimeout(() => {
        canUse = true;
      }, delay);
    }
  }
}

export default EngineEvent;