

import imageUrl from './assets/game.jpg';
import { Engine, FontElement, PenElement, RectElement, ImageElement } from '@/modules/engine'
import StartScene from './start-scene';



let canvas = document.querySelector('#canvas');
let engine = Engine.getInstance(canvas as HTMLCanvasElement, 30);

let image = new Image();
image.src = imageUrl;

let img = new ImageElement(image, {
  width: 30,
  height: 30,
  sWidth: 32,
  sHeight: 32
});

    // let title = new FontElement({
    //   text: 'Magic Tower 5',
    //   font: '50px yehei',
    //   x: 150,
    //   y: 160,
    //   style: '#f0f'
    // })
    // this.addElements([title]);

