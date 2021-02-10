import Engine from './engine/engine';
import ImageElement from './engine/image-element';
import FontElement from './engine/font-element';
import imageUrl from './assets/game.jpg';

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

engine.addElements([img, message]);
engine.run();

setTimeout(() => {
  img.changeTexture(66);
  message.move(100, 200)
}, 1000);