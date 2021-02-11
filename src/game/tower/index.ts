

import imageUrl from './assets/game.jpg';
import { Engine, FontElement, PenElement, RectElement, ImageElement } from '@/modules/engine'

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

let message = new FontElement({
  text: 'Magic Tower 5',
  x: 200,
  y: 160,
  style: '#f0f'
})

let rect = new RectElement({
  x: 200,
  y: 200,
  lineWidth: 2,
  width: 100,
  height: 100,
  style: '#000',
  radius: 50,
  type: 'fill'
});

// engine.addElement(rect);
// engine.addElements([img, message]);
// engine.run();


// setTimeout(() => {
//   img.changeTexture(66);
//   message.move(100, 200)
// }, 1000);