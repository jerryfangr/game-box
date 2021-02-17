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
  texture: HTMLImageElement;
  property: { [k: string]: any};
  [k: string]: any;

  constructor(texture: HTMLImageElement, property: {[k:string]:any}, options: {
    x: number,
    y: number,
    width?: number;
    height?: number;
  }) {
    super();
    this.texture = texture;
    this.x = options.x;
    this.y = options.y;
    this.width = options.width || 32*5;
    this.height = options.height || 32*13;
    this.property = property;
    this.init();
  }

  init () {
    this.updateCounter = 0;
    this.updateNumber = 10;
    this.initBackground();
    this.initProperty();
  }

  replaceProperty(property: { [k: string]: any }) {
    this.property = property;
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
    let playerOption: {[k:string]:any} = getTextureOption('p0').texture.default;
    playerOption.x = this.x + 32*2;
    playerOption.y = this.y + 32;
    this.addElement(new ImageElement(this.texture, playerOption));
  }

  initPropertyText () {
    let x = this.x + 32*1.2;
    let lineRannge = 25;
    let space = '     ';
    this.lifeText = new FontElement({
      text: '生命     ' + this.property.hp,
      font: '13px yehei',
      x: x,
      y: 32 * 3,
      style: '#fff'
    })
    this.attackText = new FontElement({
      text: '攻击     ' + this.property.ak,
      font: '13px yehei',
      x: x,
      y: 32 * 3 + lineRannge*1,
      style: '#fff'
    })
    this.defenseText = new FontElement({
      text: '防御     ' + this.property.ak,
      font: '13px yehei',
      x: x,
      y: 32 * 3 + lineRannge * 2,
      style: '#fff'
    })
    this.yellowKeyText = new FontElement({
      text: '            ' + this.property.key.yk,
      font: '13px yehei',
      x: x,
      y: 32 * 3 + lineRannge * 3,
      style: '#fff'
    })

    this.addElements([this.lifeText, this.attackText, this.defenseText, this.yellowKeyText]);
  }

  update () {
    this.updateCounter++;
    if (this.updateCounter >= this.updateNumber) {
      this.updateCounter = 0;
      this.lifeText.changeTexture('生命     ' + this.property.hp);
      this.attackText.changeTexture('攻击     ' + this.property.ak);
      this.defenseText.changeTexture('防御     ' + this.property.ak);
      this.yellowKeyText.changeTexture('            ' + this.property.key.yk);
    }
  }
}

export default StatusScene;