import Engine from './engine';
import { EngineElementInterface} from './engine-element';

class EngineScene implements EngineElementInterface {
  engine: Engine;
  isDead: boolean;
  elements: EngineElementInterface[];
  
  constructor() {
    this.engine = Engine.getInstance();
    this.isDead = false;
    this.elements = [];
  }

  addElement(element: EngineElementInterface) {
    this.elements.push(element);
  }

  addElements(elements: EngineElementInterface[]) {
    elements.forEach(element => {
      this.addElement(element);
    })
  }

  removeElement(element: EngineElementInterface) {
    let index = this.elements.indexOf(element);
    if (index !== -1) {
      this.elements.splice(index, 1);
      this.deleteElementCallback?.(element);
    }
  }

  removeElements(elements: EngineElementInterface[]) {
    if (elements.length > 0) {
      elements.forEach(element => {
        this.removeElement(element);
      })
    }
  }

  resetElement () {
    this.elements = [];
  }
  
  deleteElementCallback(element: EngineElementInterface) {}
  
  bindInputEvents () {
    this.engine.bindPause('p');
  }

  delete() {
    this.isDead = true;
  }

  render() {
    this.elements.forEach(element => {
      this.engine.ctx.save();
      element.render();
      this.engine.ctx.restore();
    })
  }

  update() {
    let deadElements: EngineElementInterface[] = [];
    this.elements.forEach(element => {
      if (element.isDead) {
        deadElements.push(element);
      } else {
        element.update();
      }
    })
    this.removeElements(deadElements)
  }
}

export default EngineScene;