import './index.less';
import {Engine} from '@/modules/engine'
import getGameBy from './game/index'

let canvas = document.querySelector('#canvas');
let engine = Engine.getInstance(canvas as HTMLCanvasElement, 30);

getGameBy('tower')?.then(game => {
  engine.startWith(game);
}, error => {
  console.log(error);
})
