const RESOURCE:{
  [k:string]: {
    width: number,
    height: number,
    texture: {
      default: {
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number
      },
      [k:string]: {
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number
      }
    }
  }
} = {
  bg: {
    width: 436,
    height: 416,
    texture: {
      default: {
        sx: 0,
        sy: 0,
        sWidth: 767,
        sHeight: 767
      }
    }
  },
  ground: {
    width: 536,
    height: 15,
    texture: {
      default: {
        sx: 0,
        sy: 768,
        sWidth: 457,
        sHeight: 22
      }
    }
  },
  pipe: {
    width: 78,
    height: 446,
    texture: {
      default: {
        sx: 768,
        sy: 0,
        sWidth: 134,
        sHeight: 768
      }
    }
  },
  bird: {
    width: 50,
    height: 36,
    texture: {
      default: {
        sx: 902,
        sy: 0,
        sWidth: 120,
        sHeight: 85
      },
      fly1: {
        sx: 902,
        sy: 0,
        sWidth: 120,
        sHeight: 85
      },
      fly2: {
        sx: 902,
        sy: 85,
        sWidth: 120,
        sHeight: 85
      },
      fly3: {
        sx: 902,
        sy: 170,
        sWidth: 120,
        sHeight: 85
      },
    }
  },
  error: {
    width: 78,
    height: 446,
    texture: {
      default: {
        sx: 916,
        sy: 386,
        sWidth: 51,
        sHeight: 93
      }
    }
  }
}

function getResourceBy(name: string): {
  width: number,
  height: number,
  texture: {
    default: {
      sx: number,
      sy: number,
      sWidth: number,
      sHeight: number
    },
    [k: string]: {
      sx: number,
      sy: number,
      sWidth: number,
      sHeight: number
    }
  }
} {
  let options = RESOURCE[name] || RESOURCE['error'];
  return JSON.parse(JSON.stringify(options));
}

export default getResourceBy;