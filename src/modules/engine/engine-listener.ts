class EngineListener {
  inputs: { [key: string]: (string | KeyboardEvent | MouseEvent)[] };
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
      let keyName = e.key === '' ? 'SPACE' : e.key.toUpperCase();
      this.inputs[keyName] = ['down', e];
    })
    window.addEventListener('keyup', e => {
      let keyName = e.key === '' ? 'SPACE' : e.key.toUpperCase();
      this.inputs[keyName] = ['up', e];
    })
    window.addEventListener('mousedown', e => {
      this.inputs['MOUSE'] = ['down', e];
    })
    window.addEventListener('mouseup', e => {
      this.inputs['MOUSE'] = ['up', e];
    })
  }

  bindEvent(keyName: string, callback: Function) {
    keyName = keyName.toUpperCase();
    this.events[keyName] = this.events[keyName] || [];
    this.events[keyName].push(callback);
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
      let type = this.inputs[keyName][0];
      let event = this.inputs[keyName][1];
      this.events[keyName].forEach(callback => {
        callback(type, event); // .call(undefined/this,type,event)
      })
    }
  }

  emitEvents() {
    for (const key in this.inputs) {
      this.emitEvent(key);
    }
  }

  clear () {
    this.inputs = {};
    this.events = {};
  }
}

export default EngineListener;