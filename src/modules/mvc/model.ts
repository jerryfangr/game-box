class Model {
  data: any;
  
  constructor(options: {
    data?: any,
    [k:string]: any
  }) {
    this.data = options.data || {};
  }
}

export default Model;
