import StartScene from '@/game/tower/start-scene';
import GameScene from '@/game/tower/game-scene';
import { Engine } from '@/modules/engine'

let canvas = document.querySelector('#canvas');
let engine = Engine.getInstance(canvas as HTMLCanvasElement, 30);
let scene = new StartScene();
engine.startWith(new GameScene());

// setTimeout(() => {
//   engine.replace(new GameScene());
// }, 1500);