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

  replaceInfo(options?: { level: number }, player?: GameElement) {
    this.level = options?.level === undefined ? this.level : options.level;
    this.player = player || this.player;
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
    let playerOption: { [k: string]: any } = getTextureOption(this.player!.code).texture.down;
    playerOption.x = commonOptions.x-5;
    playerOption.y = this.y + 10;
    this.addElement(new ImageElement(this.texture!, playerOption));

    this.loadKeyElement('i4', commonOptions.x, commonOptions.y + 32 * 5 + this.lineRange + 10, 25);
    this.loadKeyElement('i7', commonOptions.x, commonOptions.y + 32 * 5 + this.lineRange * 2.5 + 5, 25);
    this.loadKeyElement('i6', commonOptions.x, commonOptions.y + 32 * 5 + this.lineRange*4 , 25);
  }

  loadKeyElement (code:string, x:number, y:number, borderLength: number) {
    let options: { [k: string]: any } = getTextureOption(code).texture.default;
    options.x = x;
    options.y = y;
    options.width = options.height = borderLength;
    this.addElement(new ImageElement(this.texture!, options));
  }

  initPropertyText () {
    let options = {
      x: this.x + 32 * 1.2, y: 0,
      font: '13px yehei',
      style: '#fff',
      text: '',
    }
    let property = this.player!.property!;
    this.levelText = this.createTextElement(options, this.x + 32 * 2.59, this.y + 13 + 4 + 32 * 0.5, 
      '第 ' + (this.level + 1) + ' 层');
      
    let baseX = this.x + 32 * 1.2;
    let baseY = this.y + 32 * 2.1;
    this.lifeText = this.createTextElement(options, baseX, baseY,
      '生命     ' + (property.hp || 0));
    this.attackText = this.createTextElement(options, baseX, baseY + this.lineRange * 1,
      '攻击     ' + (property.ak || 0));
    this.defenseText = this.createTextElement(options, baseX, baseY + this.lineRange * 2,
      '防御     ' + (property.df || 0));

    this.yellowKeyText = this.createTextElement(options, baseX, this.y + 32 * 5 + this.lineRange * 2 + 4,
      '            ' + (property.key?.yk || 0));
    this.blueKeyText = this.createTextElement(options, baseX, this.y + 32 * 5 + this.lineRange * 3 + 9,
      '            ' + (property.key?.bk || 0));
    this.redKeyText = this.createTextElement(options, baseX, this.y + 32 * 5 + this.lineRange * 4 + 15,
      '            ' + (property.key?.rk || 0));

    this.addElements([
      this.levelText, this.lifeText, this.attackText, this.defenseText, 
      this.yellowKeyText, this.blueKeyText, this.redKeyText])
  }

  createTextElement (options: any, x:number, y: number, text: string) {
    options.x = x;
    options.y = y;
    options.text = text;
    return new FontElement(options);
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
      this.blueKeyText.changeTexture('            ' + property.key.bk);
      this.redKeyText.changeTexture('            ' + property.key.rk);
    }
  }
}

export default StatusScene;