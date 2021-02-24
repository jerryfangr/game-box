import View from './view';
import Model from './model';

class Controller {
  view: View;
  model: Model;

  constructor(view: View, model: Model) {
    this.view = view;
    this.model = model;
    this.view.render(this.model.data);
  }

  bindEvent(element: Element, eventName: string, callback: (event: Event, element: Element) => any, tagName?: string) {
    element.addEventListener(eventName, e => {
      let element = e.target;
      if (tagName !== undefined) {
        while (true) {
          if (element === e.currentTarget || element === null) {
            element = null;
            break;
          }
          if ((element as Element).tagName === 'li') {
            break;
          }
          element = (element as Element).parentNode;
        }
      }
      if (element !== null) {
        callback.call(this, e, element as Element);
      }
    });
  }
}

export default Controller;
