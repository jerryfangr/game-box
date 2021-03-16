/**
 * a pc input event listener (listen mouse and keyboard event)
 * use "on" function to add event, it will auto trigger when event happened
 */
export default class InputListener {
  // Key usage record(keyboard and mouse)
  inputs: { [key: string]: string };
  // the functions thich bind with inputs 
  events: { [key: string]: Function[] };
  // false: do nothing
  needListen: boolean;

  constructor() {
    this.inputs = {};
    this.events = {};
    this.listenInputs();
    this.needListen = true;
  }

  /**
   * * listen keyboard and mouse input
   */
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

  /**
   * * open or close the Listener
   * @param value true | false
   */
  toggle (value?: boolean) {
    if (value !== undefined) {
      this.needListen = value;
    } else {
      this.needListen = !this.needListen;
    }
  }

  /**
   * * Make the keyName uniform
   * @param keyName such as A|B|SPACE...
   * @returns a normalized keyName
   */
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

  /**
   * * bind event
   * @param keyName such as A|B|SPACE...
   * @param callback callback function
   */
  on(keyName: string, callback: (keyState: string, event: Event) => void) {
    keyName = keyName.toUpperCase();
    this.events[keyName] = this.events[keyName] || [];
    this.events[keyName].push(callback);
  }

  /**
   * * trigger event
   * @param keyName such as A|B|SPACE...
   * @param keyState 'down' | 'up'
   * @param event event from brower
   */
  emit(keyName: string, keyState: string, event: Event) {
    if (this.events[keyName] !== undefined) {
      this.events[keyName].forEach(callback => {
        callback(keyState, event);
      })
    }
  }
}