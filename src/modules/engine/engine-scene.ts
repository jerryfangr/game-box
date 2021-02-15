import Engine from './engine';
import { EngineElementInterface} from './engine-element';

class EngineScene {
  engine: Engine;
  elements: EngineElementInterface[];
  constructor() {
    this.engine = Engine.getInstance();
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
      this.elements.splice(index);
    }
  }

  removeElements(elements: EngineElementInterface[]) {
    elements.forEach(element => {
      this.removeElement(element);
    })
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
      if (element.isDead !== true) {
        element.update();
      } else {
        deadElements.push(element);
      }
    })
    this.removeElements(deadElements)
  }
}

export default EngineScene;