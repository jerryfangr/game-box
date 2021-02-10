import './index.less';
import Engine from './base/engine';
import ImageElement from './base/image-element';
import imageUrl from './assets/cat.jpg';

let canvas = document.querySelector('#canvas');
let engine = Engine.getInstance(canvas as HTMLCanvasElement, 30);

let image = new Image();
image.src = imageUrl;

setTimeout(() => {
  let img = new ImageElement(image);
  engine.addElement(img);
  engine.run();
  
}, 1000);