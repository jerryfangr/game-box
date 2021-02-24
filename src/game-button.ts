import InputListener from './input-listener';
import { View, Model, Controller } from '@/modules/mvc';

class ButtonView extends View {
  buttons: {
    [k:string]: Element
  };

  constructor(options: {
    el: string;
    els: string;
  }) {
    super(options);
    this.buttons = {};
    let buttons = document.querySelectorAll(options.els);
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i] as HTMLElement;
      let keyName = button.dataset.key;
      if (keyName !== undefined) {
        keyName = keyName.toUpperCase();
        this.buttons[keyName] = button;
      }
    }
  }

  activeButton(keyName: string) {
    this.editClass(this.buttons[keyName], 'add', 'active');
  }

  deActiveButton(keyName: string) {
    this.editClass(this.buttons[keyName], 'remove', 'active');
  }

  deActiveAll() {
    for (const key in this.buttons) {
      this.editClass(this.buttons[key], 'remove', 'active');
    }
  }
}

class ButtonController extends Controller {
  view: ButtonView;
  _listener: InputListener;

  constructor(view: ButtonView, model: Model) {
    super(view, model);
    this.view = view;
    this._listener = new InputListener();
    this.bindEvents();
  }

  bindEvents() {
    this.bindKeys(['w', 'a', 's', 'd', 'j', 'k']);
  }

  bindKeys(keys: string[]) {
    keys.forEach(key => {
      this._listener.on(key, keyState => {
        this.toggleButton(key, keyState);
      });
    })
  }

  toggleButton(keyName: string, keyState:string) {
    keyName = keyName.toUpperCase();
    if (keyState === 'down') {
      this.view.activeButton(keyName);
    } else {
      this.view.deActiveButton(keyName);
    }
  }
}


let view = new ButtonView({
  el: '#gameBox',
  els: '.game-joy>button.joy-button'
})
new ButtonController(view, new Model({}));