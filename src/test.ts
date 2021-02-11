import StartScene from '@/game/tower/start-scene';
import { Engine } from '@/modules/engine'

let canvas = document.querySelector('#canvas');
let engine = Engine.getInstance(canvas as HTMLCanvasElement, 30);
let scene = new StartScene();
engine.startWith(scene);