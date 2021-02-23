import './index.less';
import { Engine} from '@/modules/engine'
import InputListener from './input-listener';
import getGameBy from './game/index'

type ObjType = { [k: string]: any };
type InputEvent = MouseEvent | KeyboardEvent;


class View {
  el: string;
  template: string;
  dom: Element;
  activeIndex: number;

  constructor(options: {
    el: string;
    template: string;
  }) {
    this.el = options.el;
    this.dom = document.querySelector(options.el)!;
    if (this.dom === null) {
      throw new Error('Can not get element ' + this.el);
    }
    this.template = options.template || '';
    this.activeIndex = 0;
  }

  render(data: ObjType[]) {
    let regexp = /\{\{([a-zA-Z0-9_ ]{1,})\}\}/g;
    let html = '';
    data.forEach((d, index) => {
      let content = this.template;
      content = content.replace('{{gameIndex}}', index.toString());
      content.match(regexp)?.forEach(str => {
        let key = str.replace(/[\{\}]/g, '').trim();
        if (d[key] !== undefined) {
          content = content.replace(new RegExp(str, 'g'), d[key]);
        }
      });
      html += content;
    })
    this.dom.innerHTML = html;
    this.activeItem(0);
  }

  toggleClose(value: boolean) {
    let method: 'add' | 'remove' = value ? 'add' : 'remove';
    this.editClass(this.dom, method, 'close');
  }

  activeItem(gameIndex: number) {
    this.deActiveAll();
    this.activeIndex = gameIndex;
    let element = this.dom.querySelector('li.game-item[data-number="' + gameIndex.toString() + '"]');
    this.editClass(element, 'add', 'active');
  }

  deActiveAll() {
    this.dom.querySelectorAll('.active').forEach(ele => {
      this.editClass(ele, 'remove', 'active');
    })
  }

  editClass(element: Element | null, method: 'add' | 'remove', className: string) {
    if (element === null) {
      return;
    }
    if (element.classList !== undefined) {
      element.classList[method](className);
    } else { // to suport ie
      let classList = element.className.split(' ');
      let index = classList.indexOf(className);
      if (method === 'add' && index === -1) {
        classList.push(className);
      }
      if (method === 'remove' && index !== -1) {
        classList.splice(index, 1);
      }
      element.className = classList.join(' ');
    }
  }
}


class Model {
  data: {
    coverUrl: string,
    title: string,
    name: string
  }[];

  constructor(options: {}) {
    this.data = [
      { coverUrl: '#', title: 'Magic Tower', name: 'tower' },
      { coverUrl: '#', title: 'Flappy Bird', name: 'tower' },
      { coverUrl: '#', title: 'Foo', name: 'tower' },
    ]
  }
}


class Controller {
  view: View;
  model: Model;
  engine: Engine;
  _listener: InputListener;

  constructor(view: View, model: Model) {
    this.view = view;
    this.model = model;
    this._listener = new InputListener();

    let canvas = document.querySelector('#canvas');
    if (canvas === null) {
      throw new Error('can not find canvas element')
    }
    this.engine = Engine.getInstance(document.querySelector('#canvas') as HTMLCanvasElement, 30);
    this.view.render(this.model.data);
    this.bindEvents();
  }

  bindEvents() {
    this._listener.on('d', (keyState) => {
      if (keyState === 'down') {
        this.chooseGame(this.view.activeIndex + 1);
      }
    });
    this._listener.on('a', (keyState) => {
      if (keyState === 'down') {
        this.chooseGame(this.view.activeIndex - 1);
      }
    });
    this._listener.on('space', (keyState) => {
      if (keyState === 'down') {
        this._listener.toggle(false)
        this.startGame();
      }
    });
    setTimeout(() => {
      
    }, 1000);


    this.bindEvent(this.view.dom, 'click', (e: Event, element: Element) => {
      console.log(element);
    }, 'li');
  }

  chooseGame (gameIndex: number) {
    gameIndex = gameIndex >= this.model.data.length ? 0 : gameIndex;
    this.view.activeItem(gameIndex);
  }

  startGame() {
    let gameName = this.model.data[this.view.activeIndex].name;
    console.log('gameName', gameName);
    getGameBy(gameName)?.then(game => {
      console.log(game);
      this.engine.startWith(game);
      this.view.toggleClose(true);
    }, error => {
      console.log('error-->', error);
    })
  }

  bindEvent(element: Element, eventName: string, callback: (event: Event, element: Element) => any, tagName?: string) {
    element.addEventListener(eventName, e => {
      let element = e.target;
      if (tagName !== undefined) {
        while (true) {
          if (element === e.currentTarget || element === null) {
            element = null;
            break;
          }
          if ((element as Element).tagName === 'li') {
            break;
          }
          element = (element as Element).parentNode;
        }
      }
      if (element !== null) {
        callback.call(this, e, element as Element);
      }
    });
  }
}


let view = new View({
  el: '#gameChoose',
  template: `
  <li class="game-item" data-number="{{gameIndex}}">
    <img class="cover" src="{{coverUrl}}" alt="" srcset="">
    <span>{{title}}</span>
  </li>
  `,
})

let model = new Model({});
new Controller(view, model);