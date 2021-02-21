import imageUrl from './assets/tower.png';
import { 
  EngineElement, 
  EngineScene, 
} from '@/modules/engine'
import BackGround from './element/background';
import ElementsScene from './elements-scene';
import StatusScene from './status-scene';
import GameElement from './element/game-element';
import GamePlayer from './game-player';
import { getLevelCode } from './level/level-load';

type rectType = {
  x: number,
  y: number,
  width: number,
  height: number,
  [key: string]: any
}

class GameScene extends EngineScene {
  texture: HTMLImageElement;
  lock: boolean;
  levelsCode: { bg: string, elements: string[][]}[];
  levelNumber: number;
  gameWindowSize: {
    rowNumber: number,
    columnNumber: number
  }
  direction: string;
  gameElements: GameElement[];
  [key: string]: any;

  constructor() {
    super();
    this.texture = new Image();
    this.direction = 'up';
    this.gameWindowSize = { rowNumber: 13, columnNumber: 18 };
    this.gameElements = [];
    this.levelsCode = [];
    this.levelNumber = 2;
    this.lock = false;
    this.loadLevelCode(this.levelNumber);
    this.loadTexture(() => {
      this.init();
      this.debug?.();
    });
  }

  debug() {
    this.player.setCoordinates(32*2, 32*11);
  }

  init() {
    this.resetElement();
    this.initBackground();
    this.initElementScene();
    this.initPlayer();
    this.initStatusBar();
  }

  loadLevelCode (levelNumber: number) {
    if (this.levelsCode[levelNumber] === undefined) {
      let levelCode: null | { bg: string, elements: string[][] } = getLevelCode(levelNumber);
      if (levelCode === null) {
        throw new Error('Level config error, level' + (this.levelNumber+1) + ' is not exist')
      }
      this.levelsCode[levelNumber] = levelCode;
    }
  }

  replaceLevel (levelNumber: number) {
    this.loadLevelCode(levelNumber);
    this.levelNumber = levelNumber;
    this.init();
    this.statusScene.replaceInfo({level: this.levelNumber});
    this.updatePlayerPosition();
  }

  loadTexture (callback: Function) {
    this.texture.src = imageUrl;
    this.texture.onload = () => {
      callback.call(this);
    }
  }

  updatePlayerPosition () {
    let stairElement = this.findElement('stair');
    this.player.setCoordinates(stairElement?.x, stairElement?.y);
    let nextPosition = this.findElement('floor');
    this.player.setCoordinates(nextPosition?.x, nextPosition?.y);
  }

  findElement (name: string) {
    if (name === 'stair') {
      let playerPosition = this.player.nextPosition('down', this.direction);
      return this.getTouchedItem(playerPosition, this.gameElements);
    } else if (name === 'floor') {
      let directions = ['right', 'down', 'left', 'up'];
      for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        let p = this.player.nextPosition('down', direction);
        if (this.getTouchedItem(p, this.gameElements) === null) {
          return p;
        }
      }
    }
  }

  initBackground () {
    this.staticBg = this.staticBg || new BackGround(this.texture, {
      x: 32*13,
      height: this.gameWindowSize.rowNumber * 32,
      width: 5 * 32,
      bgCode: 'b4'
    })

    let levelbg = new BackGround(this.texture, {
      height: 13 * 32,
      width: this.gameWindowSize.rowNumber * 32,
      bgCode: this.levelsCode[this.levelNumber].bg
    });

    this.addElements([this.staticBg, levelbg]);
  }

  initElementScene () {
    let ge = new ElementsScene(this.texture, {elementsCode: this.levelsCode[this.levelNumber].elements});
    this.gameElements = ge.elements;
    this.addElement(ge);
  }

  initPlayer () {
    this.player = this.player || new GamePlayer(this.texture, 'p0');
    this.addElement(this.player);
  }

  initStatusBar () {
    this.statusScene = this.statusScene || new StatusScene(this.texture, this.player, { x: 32 * 13, y: 32*0.5 });
    this.addElement(this.statusScene);
  }

  // 1. 以地图数组移动
  // 2. 以循环判断移动 -- choosed lock => 只允许单向移动
  move(keyState: string, direction: string) {
    if (this.lock) {return;}
    // locke this function
    this.lock = true;
    this.direction = direction;
    // need to turn to a new direction
    if (this.player.turnDirection(direction)) {
      return this.lock = false;
    }
    // get moved player position
    let nextPlayer = this.player.nextPosition(keyState, direction)
    if (nextPlayer === null) {
      return this.lock = false;
    }
    // if there are nothing, just move
    let element = this.getTouchedItem(nextPlayer, this.gameElements);
    if (element === null) {
      this.player.moveBy(direction);
      return this.lock = false;
    } 
    // if there are something, trigger touched event
    element.touchWith(this.player, this);
    this.lock = false;
  }

  getTouchedItem(nextPlayer: EngineElement, items: GameElement[]) {
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      if (nextPlayer.x === element.x && nextPlayer.y === element.y) {
        return element;
      }
    }
    return null;
  }

  bindInputEvents () {
    super.bindInputEvents();
    this.engine.bindEvent('d', (keyState) => {
      this.move(keyState, 'right');
    }, 90);
    this.engine.bindEvent('a', (keyState) => {
      this.move(keyState, 'left');
    }, 90);
    this.engine.bindEvent('w', (keyState) => {
      this.move(keyState, 'up');
    }, 90);
    this.engine.bindEvent('s', (keyState) => {
      this.move(keyState, 'down');
    }, 90);
  }
}

export default GameScene;