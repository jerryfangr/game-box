import getGameBy from './game/index'
import { Engine} from '@/modules/engine'
import InputListener from './input-listener';
import towerImageUrl from './assets/cover-tower.png';
import flappyImageUrl from './assets/cover-flappy.png';
import { View, Model, Controller} from '@/modules/mvc';

class ChooseView extends View {
  activeIndex: number;

  constructor(options: {
    el: string;
    template: string;
  }) {
    super(options);
    this.activeIndex = 0;
  }

  render(data: { [k: string]: any }[]) {
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
}


class ChooseModel extends Model {
  data: {
    coverUrl: string,
    title: string,
    name: string
  }[];

  constructor(options: {}) {
    super(options);
    this.data = [
      { coverUrl: towerImageUrl, title: 'Magic Tower', name: 'tower' },
      { coverUrl: flappyImageUrl, title: 'Flappy Bird', name: 'flappyBird' },
      { coverUrl: '#', title: 'Foo', name: 'tower' },
    ]
  }
}


class ChooseController extends Controller {
  view: ChooseView;
  engine: Engine;
  _listener: InputListener;
  game: string;

  constructor(view: ChooseView, model: ChooseModel) {
    super(view, model);
    this.view = view;
    this._listener = new InputListener();
    let canvas = document.querySelector('#canvas');
    if (canvas === null) {
      throw new Error('can not find canvas element')
    }
    this.engine = Engine.getInstance(document.querySelector('#canvas') as HTMLCanvasElement, 30);
    this.game = '';
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
    this._listener.on('j', (keyState) => {
      if (keyState === 'up') {
        this.engine.togglePause(false);
        this._listener.toggle(false)
        this.startGame();
      }
    });
    window.addEventListener('keydown', e => {
      if (e.key === 'k') {
        this._listener.toggle(true)
        this.engine.togglePause(true);
        this.view.toggleClose(false);
      }
    });
  }

  chooseGame (gameIndex: number) {
    gameIndex = gameIndex >= this.model.data.length ? 0 : gameIndex;
    gameIndex = gameIndex < 0 ? this.model.data.length-1 : gameIndex;
    this.view.activeItem(gameIndex);
  }

  startGame(gameName?:string) {
    if (gameName === undefined) {
      gameName = this.model.data[this.view.activeIndex].name;
    }
    if (gameName === this.game) {
      this.view.toggleClose(true);
      return;
    }
    getGameBy(<string>gameName)?.then(game => {
      this.engine.startWith(game);
      this.view.toggleClose(true);
      this.game = gameName || 'error';
    }, error => {
      console.log('error-->', error);
    })
  }
}


let view = new ChooseView({
  el: '#gameChoose',
  template: `
  <li class="game-item" data-number="{{gameIndex}}">
    <img class="cover" src="{{coverUrl}}" alt="" srcset="">
    <span class="error">Error: can't load cover image</span>
    <span class="game-title">{{title}}</span>
  </li>
  `,
})
let model = new ChooseModel({});
new ChooseController(view, model);