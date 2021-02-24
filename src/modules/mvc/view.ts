class View {
  el: string;
  template: string;
  dom: Element;
  
  constructor(options: {
    el: string;
    template?: string;
    [k: string]: any
  }) {
    this.el = options.el;
    this.dom = document.querySelector(options.el)!;
    if (this.dom === null) {
      throw new Error('Can not get element ' + this.el);
    }
    this.template = options.template || '';
  }

  render(data: any) {}

  editClass(element: Element | null, method: 'add' | 'remove', className: string) {
    if (element === null) {
      return;
    }
    if (element.classList !== undefined) {
      element.classList[method](className);
    } else { // to suport ie
      let classList = element.className.split(' ');
      let index = classList.indexOf(className);
      if (method === 'add' && index === -1) {
        classList.push(className);
      }
      if (method === 'remove' && index !== -1) {
        classList.splice(index, 1);
      }
      element.className = classList.join(' ');
    }
  }
}

export default View;
