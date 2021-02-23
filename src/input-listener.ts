/**
 * an pc input event listener (mouse and keyboard event)
 * use "on" function to add event, it will auto trigger when event happened
 */
export default class InputListener {
  inputs: { [key: string]: string };
  events: { [key: string]: Function[] };
  needListen: boolean;

  constructor() {
    this.inputs = {};
    this.events = {};
    this.listenInputs();
    this.needListen = true;
  }

  listenInputs() {
    window.addEventListener('keydown', e => {
      let keyName = this.normalize(e.key);
      this.needListen && this.emit(keyName, 'down', e);
    })
    window.addEventListener('keyup', e => {
      let keyName = this.normalize(e.key);
      this.needListen && this.emit(keyName, 'up', e);
    })
    window.addEventListener('mousedown', e => {
      this.needListen && this.emit('MOUSE', 'down', e);
    })
    window.addEventListener('mouseup', e => {
      this.needListen && this.emit('MOUSE', 'up', e);
    })
  }

  toggle (value?: boolean) {
    if (value !== undefined) {
      this.needListen = value;
    } else {
      this.needListen = !this.needListen;
    }
  }

  normalize(keyName: string): string {
    if (keyName === ' ' || keyName === 'Spacebar') {
      keyName = 'SPACE';
    } else if (keyName === 'Up') {
      keyName = 'ARROWUP';
    } else if (keyName === 'Down') {
      keyName = 'ARROWDOWN';
    } else if (keyName === 'Left') {
      keyName = 'ARROWLEFT';
    } else if (keyName === 'Right') {
      keyName = 'ARROWRIGHT';
    }
    return keyName.toUpperCase();
  }

  on(keyName: string, callback: (keyState: string, event: Event) => void) {
    keyName = keyName.toUpperCase();
    this.events[keyName] = this.events[keyName] || [];
    this.events[keyName].push(callback);
  }

  emit(keyName: string, keyState: string, event: Event) {
    if (this.events[keyName] !== undefined) {
      this.events[keyName].forEach(callback => {
        callback(keyState, event);
      })
    }
  }
}