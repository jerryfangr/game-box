import {
  EngineElement,
  ImageElement,
  RectElement,
  FontElement,
  EngineScene
} from '@/modules/engine'

import GameElement from './game-element';

import { getTextureOption } from './level-load';


class StatusScene extends EngineScene {
  x: number;
  y: number;
  width: number;
  height: number;
  lineRange: number;
  level: number;
  texture: HTMLImageElement;
  property: { [k: string]: any};
  [k: string]: any;

  constructor(texture: HTMLImageElement, player: GameElement, options: {
    x: number,
    y: number,
    width?: number,
    height?: number,
    level?: number,
    [k:string]: number | undefined
  }) {
    super();
    this.texture = texture;
    this.x = options.x;
    this.y = options.y;
    this.width = options.width || 32*5;
    this.height = options.height || 32*13;
    this.level = options.level || 0;
    this.lineRange = options.lineRange || 25;
    this.property = player.property || {};
    this.init();
  }

  init () {
    this.updateCounter = 0;
    this.updateNumber = 10;
    this.initBackground();
    this.initProperty();
  }

  replaceInfo (player?: GameElement, options?: {level: number}) {
    this.property = player?.property || {};
    this.level = options?.level || this.level;
  }

  initBackground() {
    let barBorder = new RectElement({
      x: 13 * 32 + 4,
      y: 3,
      width: 5 * 32 - 7,
      height: 13 * 32 - 5,
      style: '#efefef',
      type: 'stroke',
      lineWidth: 6
    });
    this.addElement(barBorder);
  }

  initProperty() {
    this.initPropertyIcon();
    this.initPropertyText();
  }

  initPropertyIcon() {
    let commonOptions = {
      x: this.x + 32 * 1.2,
      y: 32 * 3,
    }

    let playerOption: { [k: string]: any } = getTextureOption('p0').texture.down;
    playerOption.x = commonOptions.x-5;
    playerOption.y = this.y + 32;

    let ykOptions: { [k: string]: any } = getTextureOption('i4').texture.default;
    ykOptions.x = commonOptions.x;
    ykOptions.y = commonOptions.y + this.lineRange*2 + 15;
    ykOptions.width = ykOptions.height = 25;
    
    let p = new ImageElement(this.texture, playerOption);
    let yk = new ImageElement(this.texture, ykOptions);
    this.addElements([p, yk]);
  }

  initPropertyText () {
    let options = {
      font: '13px yehei',
      x: this.x + 32 * 1.2,
      y: 0,
      style: '#fff',
      text: '',
    }

    options.y = this.y + 32*1.28 + 13;
    options.x = this.x + 32 * 2.59;
    options.text = '第 ' + (this.level+1) + ' 层';
    this.levelText = new FontElement(options)
    options.x = this.x + 32 * 1.2;
    options.y = 32 * 3 + this.lineRange * 0;
    options.text = '生命     ' + (this.property.hp || 0);
    this.lifeText = new FontElement(options)
    options.y = 32 * 3 + this.lineRange * 1;
    options.text = '攻击     ' + (this.property.ak || 0);
    this.attackText = new FontElement(options)
    options.y = 32 * 3 + this.lineRange*2;
    options.text = '防御     ' + (this.property.df || 0);
    this.defenseText = new FontElement(options)
    options.y = 32 * 3 + this.lineRange * 3 + 9;
    options.text = '            ' + (this.property.key?.yk || 0);
    this.yellowKeyText = new FontElement(options)

    this.addElements([this.levelText, this.lifeText, this.attackText, this.defenseText, this.yellowKeyText]);
  }

  update () {
    this.updateCounter++;
    if (this.updateCounter >= this.updateNumber) {
      this.updateCounter = 0;
      this.levelText.changeTexture('第 ' + (this.level+1) + ' 层');
      this.lifeText.changeTexture('生命     ' + this.property.hp);
      this.attackText.changeTexture('攻击     ' + this.property.ak);
      this.defenseText.changeTexture('防御     ' + this.property.ak);
      this.yellowKeyText.changeTexture('            ' + this.property.key.yk);
    }
  }
}

export default StatusScene;