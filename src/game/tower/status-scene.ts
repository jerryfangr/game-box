import {
  EngineElement,
  ImageElement,
  RectElement,
  FontElement,
  EngineScene
} from '@/modules/engine'

import GameElement from './element/game-element';
import Background from './element/background';
import { getTextureOption } from './level/level-load';


class StatusScene extends EngineScene {
  x: number;
  y: number;
  width: number;
  height: number;
  lineRange: number;
  level: number;
  texture?: HTMLImageElement;
  player?: GameElement;
  [k: string]: any;

  constructor(texture: HTMLImageElement, player: GameElement, options: {
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    level?: number,
    [k:string]: number | undefined
  }) {
    super();
    this.texture = texture;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || 32*5;
    this.height = options.height || 32*13;
    this.level = options.level || 0;
    this.lineRange = options.lineRange || 25;
    this.player = player;
    this.init();
  }

  init () {
    this.updateCounter = 0;
    this.updateNumber = 10;
    this.initBackground();
    this.initProperty();
  }

  replaceInfo (player?: GameElement, options?: {level: number}) {
    this.player = player || this.player;
    this.level = options?.level || this.level;
  }

  delete () {
    super.delete();
    this.texture = undefined;
    this.player = undefined;
  }

  initBackground() {
    let bgOption = {
      x: this.x + 20,
      y: this.y,
      width: 3.9 * 32,
      height: 5 * 32,
      bgCode: 'b1'
    }
    this.addElement(new Background(this.texture!, bgOption));
    bgOption.y = bgOption.y + bgOption.height + 17;
    this.addElement(new Background(this.texture!, bgOption));

    let bgBorderOption:{
      type: 'stroke' | 'fill',
      [k:string]: any
    } = {
      x: this.x + 20,
      y: this.y + 2,
      width: 3.9 * 32,
      height: 5 * 32 - 4,
      style: '#CF6C00',
      type: 'stroke',
      lineWidth: 4
    }
    this.addElement(new RectElement(bgBorderOption));
    bgBorderOption.y = bgBorderOption.y + bgBorderOption.height + 17 + bgBorderOption.lineWidth;
    this.addElement(new RectElement(bgBorderOption));
  }

  initProperty() {
    this.initPropertyIcon();
    this.initPropertyText();
  }

  initPropertyIcon() {
    let commonOptions = {
      x: this.x + 32 * 1.2,
      y: this.y,
    }
    console.log(this.player);
    let playerOption: { [k: string]: any } = getTextureOption(this.player!.code).texture.down;
    playerOption.x = commonOptions.x-5;
    playerOption.y = this.y + 10;

    let ykOptions: { [k: string]: any } = getTextureOption('i4').texture.default;
    ykOptions.x = commonOptions.x;
    ykOptions.y = commonOptions.y + 32 * 5 + this.lineRange + 10;
    ykOptions.width = ykOptions.height = 25;
    
    let p = new ImageElement(this.texture!, playerOption);
    let yk = new ImageElement(this.texture!, ykOptions);
    this.addElements([p, yk]);
  }

  initPropertyText () {
    let options = {
      x: this.x + 32 * 1.2, y: 0,
      font: '13px yehei',
      style: '#fff',
      text: '',
    }
    let property = this.player!.property!;
    options.y = this.y + 13 + 4 + 32*0.5;
    options.x = this.x + 32 * 2.59;
    options.text = '第 ' + (this.level+1) + ' 层';
    this.levelText = new FontElement(options)

    options.x = this.x + 32 * 1.2;
    options.y = this.y + 32 * 2.1 + this.lineRange * 0;
    options.text = '生命     ' + (property.hp || 0);
    this.lifeText = new FontElement(options);

    options.y = this.y + 32 * 2.1 + this.lineRange * 1;
    options.text = '攻击     ' + (property.ak || 0);
    this.attackText = new FontElement(options);

    options.y = this.y + 32 * 2.1 + this.lineRange * 2;
    options.text = '防御     ' + (property.df || 0);
    this.defenseText = new FontElement(options);

    options.y = this.y + 32 * 5 + this.lineRange*2 + 4;
    options.text = '            ' + (property.key?.yk || 0);
    this.yellowKeyText = new FontElement(options);

    this.addElements([this.levelText, this.lifeText, this.attackText, this.defenseText, this.yellowKeyText])
  }

  update () {
    this.updateCounter++;
    if (this.updateCounter >= this.updateNumber) {
      this.updateCounter = 0;
      let property = this.player!.property!;
      this.levelText.changeTexture('第 ' + (this.level+1) + ' 层');
      this.lifeText.changeTexture('生命     ' + property.hp);
      this.attackText.changeTexture('攻击     ' + property.ak);
      this.defenseText.changeTexture('防御     ' + property.df);
      this.yellowKeyText.changeTexture('            ' + property.key.yk);
    }
  }
}

export default StatusScene;