import {
  ImageElement,
  PenElement,
  RectElement,
  FontElement,
  EngineScene
} from '@/modules/engine'

import Enemy from './element/enemy';
import GameElement from './element/game-element';
import Background from './element/background';
import { getTextureOption } from './level/level-load';

type elementType = {
  code: string,
  property: {
    ak: number,
    df: number,
    hp: number
  }
}

class FightScene extends EngineScene {
  x: number;
  y: number;
  width: number;
  height: number;
  updateCounter: number;
  updateNumber: number;
  attackCount: number;
  player: elementType;
  enemy: elementType;
  [k: string]: any;

  constructor(texture: HTMLImageElement, options: {
    x?: number,
    y?: number,
    width?: number,
    height?:number
    player: GameElement,
    enemy: GameElement,
    [k: string]: number | GameElement | undefined
  }) {
    super();
    this.updateCounter = 0;
    this.updateNumber = 12;
    this.attackCount = 0;
    this.texture = texture;
    this.x = options.x || 32 * 0.5;
    this.y = options.y || 32 * 0.5;
    this.width = options.width || 32 * 12;
    this.height = options.height || 32 * 5;
    this.enemy = this.copyOptionFrom(options.enemy);
    this.player = this.copyOptionFrom(options.player);
    this.init();
  }

  copyOptionFrom (element: GameElement): elementType {
    return {
      code: element.code,
      property: {
        hp: element.property!.hp,
        ak: element.property!.ak,
        df: element.property!.df,
      }
    }
  }

  init() {
    this.engine.toggleListener(false);
    this.initBackground();
    this.initElement();
    this.initProperty();
  }

  initBackground() {
    let bgOption = {
      x: this.x,
      y: this.y,
      width: 12 * 32,
      height: 5 * 32,
      bgCode: 'b1'
    }
    this.addElement(new Background(this.texture, bgOption));

    let bgBorderOption: {
      type: 'stroke' | 'fill',
      [k: string]: any
    } = {
      x: this.x,
      y: this.y,
      width: bgOption.width,
      height: bgOption.height,
      style: '#CF6C00',
      type: 'stroke',
      lineWidth: 3
    }
    this.addElement(new RectElement(bgBorderOption));
  }

  initElement () {
    let commonOptions = { x: this.x + 32*0.5, y: this.y + 32*0.5};
    let bgBorderOption: { type: 'stroke' | 'fill', [k: string]: any } = {
      x: commonOptions.x,
      y: commonOptions.y,
      width: 32*2.5,
      height: 32*2.5,
      style: '#CF6C00',
      type: 'stroke',
      lineWidth: 2
    }
    this.addElement(new RectElement(bgBorderOption));
    let enemyOption = getTextureOption(this.enemy.code);
    enemyOption.width = enemyOption.height = 32 * 1.5;
    enemyOption.x = commonOptions.x + 32*0.5;
    enemyOption.y = commonOptions.y + 32 * 0.4;
    this.addElement(new Enemy(this.texture, enemyOption));
    this.addElement(new FontElement({ 
      x: enemyOption.x, y: bgBorderOption.y+32*3+10,
      font: '25px cursive',style: '#fff',text: '怪物'}));

    bgBorderOption.x = bgBorderOption.x + 32*8.5;
    this.addElement(new RectElement(bgBorderOption));
    let playerOption:{[k:string]: any} = getTextureOption(this.player.code).texture.down;
    playerOption.width = playerOption.height = 32 * 1.5;
    playerOption.x = bgBorderOption.x + 32*0.5;
    playerOption.y = this.y + 32 * 0.9;
    this.addElement(new ImageElement(this.texture, playerOption));
    this.addElement(new FontElement({
      x: playerOption.x, y: bgBorderOption.y + 32 * 3 + 10,
      font: '25px cursive', style: '#fff', text: '勇者'
    }));
  }

  initProperty() {
    this.initPropertyIcon(this.x, 'left');
    this.initPropertyIcon(this.x+32*4-10, 'right');
    this.initPropertyText(this.x, 'left');
    this.initPropertyText(this.x + 32 * 2.5+10, 'right');
  }

  initPropertyIcon(x: number, position: 'left' | 'right') {
    let options = {
      x: x + 32 * 3.15,
      y: this.y,
      font: '12px Arial',
      style: '#fff',
      text: '',
    }
    let penOption: {type: 'stroke' | 'fill', [k:string]: any } = {
      lineWidth: 2,
      type: 'stroke',
      style: '#fff'
    }
    let baseX = x + 32 * 3.15;
    options.x = position === 'left' ? options.x : options.x + 36;
    let lineRange = 32 * 1.2;

    options.y += lineRange;
    options.text = position === 'left' ? '生命:' : ':生命';
    this.loadLineText(options, penOption, baseX, 32 * 2 - 5);
    options.y += lineRange;
    options.text = position === 'left' ? '攻击:' : ':攻击';
    this.loadLineText(options, penOption, baseX, 32 * 2 - 5 + lineRange);
    options.y += lineRange;
    options.text = position === 'left' ? '防御:' : ':防御';
    this.loadLineText(options, penOption, baseX, 32 * 2 - 5 + lineRange*2);
  }

  loadLineText (textOptions: any, lineOptions: any, x: number, y: number) {
    this.addElement(new FontElement(textOptions));
    let p = new PenElement(lineOptions);
    p.draw((ctx) => {
      ctx.moveTo(x, y);
      ctx.lineTo(x + 32 * 2, y);
    })
    this.addElement(p);
  }

  initPropertyText(x: number, position: 'left' | 'right') {
    let options = {
      font: '12px yehei',
      x: x + 32 * 4+5,
      y: this.y + 32*2-8,
      style: '#fff',
      text: '',
    }
    let property = position === 'left' ? this.enemy.property : this.player.property;
    options.text = property.hp.toString();
    if (position === 'left') {
      this.enemyLifeText = new FontElement(options);
      this.addElement(this.enemyLifeText);
    } else {
      this.playerLifeText = new FontElement(options);
      this.addElement(this.playerLifeText);
    }

    let lineRange = 32 * 1.2;
    options.y += lineRange;
    options.text = property.ak.toString();
    this.addElement(new FontElement(options));
    options.y += lineRange;
    options.text = property.df.toString();
    this.addElement(new FontElement(options));
  }

  delete() {
    super.delete();
    this.texture = undefined;
  }

  fight () {
    this.playerInjure = this.playerInjure || this.player.property.ak - this.enemy.property.df;
    this.enemyInjure = this.enemyInjure || this.enemy.property.ak - this.player.property.df;
    this.enemyInjure = this.enemyInjure < 0 ? 0 : this.enemyInjure;

    if (this.attackCount % 2 === 0) {
      this.enemy.property.hp -= this.playerInjure;
    } else {
      this.player.property.hp -= this.enemyInjure;
    }
    this.attackCount++;
    if (this.enemy.property.hp < 0) {
      this.enemy.property.hp = 0;
      return false;
    }
    return true;
  }

  update() {
    super.update();
    this.updateCounter++;
    if (this.updateCounter >= this.updateNumber) {
      this.updateCounter = 0;
      let result = this.fight();
      this.enemyLifeText.changeTexture(this.enemy.property.hp);
      this.playerLifeText.changeTexture(this.player.property.hp);
      if (!result) {
        this.engine.toggleListener(true);
        this.delete();
      }
    }
  }
}

export default FightScene;