import './index.less';
import {Engine} from '@/modules/engine'
import getGameBy from './game/index'

type ObjType = { [k: string]: any };
type viewType = {
  el: string,
  template: string;
  dom: Element;
  init: Function;
  render: (data: ObjType[]) => void;
  editClass: (element: Element|null, method: 'add' | 'remove', className: string) => void;
  [k: string]: any;
}
type modelType = {
  data: { [k: string]: any } [],
  init: Function,
  [k: string]: any
}

let view: viewType = {
  el: '#gameChoose',
  engine: Engine,
  template: `
  <li data-number="{{gameNumber}}">
    <img class="cover" src="{{coverUrl}}" alt="" srcset="">
    <span>{{name}}</span>
  </li>
  `,
  dom: document.body,
  init() {
    this.engine = Engine.getInstance(document.querySelector('#canvas') as HTMLCanvasElement, 30);
    let dom = document.querySelector(this.el);
    if (dom === null) {
      throw new Error('Can not get element ' + this.el);
    }
    this.dom = dom;
  },
  render(data: ObjType[]) {
    let regexp = /\{\{([a-zA-Z0-9_ ]{1,})\}\}/g;
    let html = '';
    data.forEach((d, index) => {
      let content = this.template;
      content = content.replace('{{gameNumber}}', index.toString());
      content.match(regexp)?.forEach(str => {
        let key = str.replace(/[\{\}]/g, '').trim();
        if (d[key] !== undefined) {
          content = content.replace(new RegExp(str, 'g'), d[key]);
        }
      });
      html += content;
    })
    this.dom.innerHTML = html;
  },
  openGame(gameName: string) {
    getGameBy(gameName)?.then(game => {
      this.engine.startWith(game);
    }, error => {
      console.log(error);
    })
  },
  active(gameNumber: number) {
    let element = this.dom.querySelector('li[data-number="' + gameNumber + '"');
    this.editClass(element, 'add', 'active');
  },
  deActiveAll () {
    this.dom.querySelectorAll('.active').forEach(ele => {
      this.editClass(ele, 'remove', 'active');
    })
  },
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

let model: modelType = {
  data:[],
  init() {
    // this.axios = axios.create(baseURL: 127.0.0.1:6666)
    this.data = [
      {coverUrl: '#', name: 'Magic Tower'}
    ]
  },
  fetch () {}
}

let controller: {
  view: viewType,
  model: modelType,
  init: Function,
  replaceGame: (gameName: string)=>void;
  [k: string]: any
} = { // TODO: use class View and Model to replace any type
  view: {} as viewType,
  model: {} as modelType,
  init(view: viewType, model: modelType) {
    this.view = view; 
    this.model = model;
    this.view.init();
    this.model.init();
    this.view.render(this.model.data);
    this.bindEvents();
    this.replaceGame('tower');

  },
  bindEvents() {
    this.bindEvent(this.view.dom, 'click', (e: MouseEvent, element: Element) => {
      console.log(element);
    }, 'li');
  },
  replaceGame (gameName: string) {
    this.view.openGame(gameName);
  },
  bindEvent(element: Element, eventName:string, callback: (event: Event, element: Element) => any, tagName?: string) {
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

controller.init(view, model);