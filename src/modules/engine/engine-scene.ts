import Engine from './engine';
import EnginElement from './engine-element';

class EngineScene {
  engine: Engine;
  elements: EnginElement[];
  constructor() {
    this.engine = Engine.getInstance();
    this.elements = [];
  }

  addElement(element: EnginElement) {
    this.elements.push(element);
  }

  addElements(elements: EnginElement[]) {
    elements.forEach(element => {
      this.addElement(element);
    })
  }

  removeElement(element: EnginElement) {
    let index = this.elements.indexOf(element);
    if (index !== -1) {
      this.elements.splice(index);
    }
  }

  removeElements(elements: EnginElement[]) {
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
    this.elements.forEach(element => {
      element.update();
    })
  }
}

export default EngineScene;