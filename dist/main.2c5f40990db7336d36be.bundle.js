(self.webpackChunkgame_box=self.webpackChunkgame_box||[]).push([[179],{4865:function(t,e,n){"use strict";function i(t){return t.then((function(t){return new(0,t.default)}),(function(t){throw new Error("An error occurred while loading the tower game")}))}n(8309),n(8304),n(1539),n(4603),n(4916),n(9714),n(4723),n(5306),n(3210),n(4747),n(8674),n(6992);var o,s=n(7754),r=function(){function t(){this.inputs={},this.events={},this.listenInputs(),this.needListen=!0}return t.prototype.listenInputs=function(){var t=this;window.addEventListener("keydown",(function(e){var n=t.normalize(e.key);t.needListen&&t.emit(n,"down",e)})),window.addEventListener("keyup",(function(e){var n=t.normalize(e.key);t.needListen&&t.emit(n,"up",e)})),window.addEventListener("mousedown",(function(e){t.needListen&&t.emit("MOUSE","down",e)})),window.addEventListener("mouseup",(function(e){t.needListen&&t.emit("MOUSE","up",e)}))},t.prototype.toggle=function(t){this.needListen=void 0!==t?t:!this.needListen},t.prototype.normalize=function(t){return" "===t||"Spacebar"===t?t="SPACE":"Up"===t?t="ARROWUP":"Down"===t?t="ARROWDOWN":"Left"===t?t="ARROWLEFT":"Right"===t&&(t="ARROWRIGHT"),t.toUpperCase()},t.prototype.on=function(t,e){t=t.toUpperCase(),this.events[t]=this.events[t]||[],this.events[t].push(e)},t.prototype.emit=function(t,e,n){void 0!==this.events[t]&&this.events[t].forEach((function(t){t(e,n)}))},t}(),h=n(6386),a=n(3797),c=(n(9600),n(561),n(3123),function(){function t(t){if(this.el=t.el,this.dom=document.querySelector(t.el),null===this.dom)throw new Error("Can not get element "+this.el);this.template=t.template||""}return t.prototype.render=function(t){},t.prototype.editClass=function(t,e,n){if(null!==t)if(void 0!==t.classList)t.classList[e](n);else{var i=t.className.split(" "),o=i.indexOf(n);"add"===e&&-1===o&&i.push(n),"remove"===e&&-1!==o&&i.splice(o,1),t.className=i.join(" ")}},t}()),u=function(t){this.data=t.data||{}},l=function(){function t(t,e){this.view=t,this.model=e,this.view.render(this.model.data)}return t.prototype.bindEvent=function(t,e,n,i){var o=this;t.addEventListener(e,(function(t){var e=t.target;if(void 0!==i)for(;;){if(e===t.currentTarget||null===e){e=null;break}if("li"===e.tagName)break;e=e.parentNode}null!==e&&n.call(o,t,e)}))},t}(),p=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),d=function(t){function e(e){var n=t.call(this,e)||this;return n.activeIndex=0,n}return p(e,t),e.prototype.render=function(t){var e=this,n=/\{\{([a-zA-Z0-9_ ]{1,})\}\}/g,i="";t.forEach((function(t,o){var s,r=e.template;null===(s=(r=r.replace("{{gameIndex}}",o.toString())).match(n))||void 0===s||s.forEach((function(e){var n=e.replace(/[\{\}]/g,"").trim();void 0!==t[n]&&(r=r.replace(new RegExp(e,"g"),t[n]))})),i+=r})),this.dom.innerHTML=i,this.activeItem(0)},e.prototype.toggleClose=function(t){var e=t?"add":"remove";this.editClass(this.dom,e,"close")},e.prototype.activeItem=function(t){this.deActiveAll(),this.activeIndex=t;var e=this.dom.querySelector('li.game-item[data-number="'+t.toString()+'"]');this.editClass(e,"add","active")},e.prototype.deActiveAll=function(){var t=this;this.dom.querySelectorAll(".active").forEach((function(e){t.editClass(e,"remove","active")}))},e}(c),f=function(t){function e(e){var n=t.call(this,e)||this;return n.data=[{coverUrl:h,title:"Magic Tower",name:"tower"},{coverUrl:a,title:"Flappy Bird",name:"flappyBird"},{coverUrl:"#",title:"Foo",name:"tower"}],n}return p(e,t),e}(u);new(function(t){function e(e,n){var i=t.call(this,e,n)||this;if(i.view=e,i._listener=new r,null===document.querySelector("#canvas"))throw new Error("can not find canvas element");return i.engine=s.D4.getInstance(document.querySelector("#canvas"),30),i.game="",i.bindEvents(),i}return p(e,t),e.prototype.bindEvents=function(){var t=this;this._listener.on("d",(function(e){"down"===e&&t.chooseGame(t.view.activeIndex+1)})),this._listener.on("a",(function(e){"down"===e&&t.chooseGame(t.view.activeIndex-1)})),this._listener.on("j",(function(e){"up"===e&&(t.engine.togglePause(!1),t._listener.toggle(!1),t.startGame())})),window.addEventListener("keydown",(function(e){"k"===e.key&&(t._listener.toggle(!0),t.engine.togglePause(!0),t.view.toggleClose(!1))}))},e.prototype.chooseGame=function(t){t=(t=t>=this.model.data.length?0:t)<0?this.model.data.length-1:t,this.view.activeItem(t)},e.prototype.startGame=function(t){var e,o=this;void 0===t&&(t=this.model.data[this.view.activeIndex].name),t!==this.game?null===(e=function(t){switch(t){case"tower":return i(Promise.all([n.e(736),n.e(915)]).then(n.bind(n,5915)));case"flappyBird":return i(n.e(957).then(n.bind(n,4957)));default:throw new Error("game "+t+" is not exist")}}(t))||void 0===e||e.then((function(e){o.engine.startWith(e),o.view.toggleClose(!0),o.game=t||"error"}),(function(t){console.log("error--\x3e",t)})):this.view.toggleClose(!0)},e}(l))(new d({el:"#gameChoose",template:'\n  <li class="game-item" data-number="{{gameIndex}}">\n    <img class="cover" src="{{coverUrl}}" alt="" srcset="">\n    <span class="error">Error: can\'t load cover image</span>\n    <span class="game-title">{{title}}</span>\n  </li>\n  '}),new f({}));var y=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),v=function(t){function e(e){var n=t.call(this,e)||this;n.buttons={};for(var i=document.querySelectorAll(e.els),o=0;o<i.length;o++){var s=i[o],r=s.dataset.key;void 0!==r&&(r=r.toUpperCase(),n.buttons[r]=s)}return n}return y(e,t),e.prototype.activeButton=function(t){this.editClass(this.buttons[t],"add","active")},e.prototype.deActiveButton=function(t){this.editClass(this.buttons[t],"remove","active")},e.prototype.deActiveAll=function(){for(var t in this.buttons)this.editClass(this.buttons[t],"remove","active")},e}(c);new(function(t){function e(e,n){var i=t.call(this,e,n)||this;return i.view=e,i._listener=new r,i.bindEvents(),i}return y(e,t),e.prototype.bindEvents=function(){this.bindKeys(["w","a","s","d","j","k"])},e.prototype.bindKeys=function(t){var e=this;t.forEach((function(t){e._listener.on(t,(function(n){e.toggleButton(t,n)}))}))},e.prototype.toggleButton=function(t,e){t=t.toUpperCase(),"down"===e?this.view.activeButton(t):this.view.deActiveButton(t)},e}(l))(new v({el:"#gameBox",els:".game-joy>button.joy-button"}),new u({}))},7754:function(t,e,n){"use strict";n.d(e,{D4:function(){return s},Ap:function(){return r},oJ:function(){return h},yL:function(){return c},Kn:function(){return f},zo:function(){return u},ev:function(){return p}}),n(2564),n(561),n(4747);var i,o=function(){function t(){this.inputs={},this.events={},this.listenInputs()}return t.prototype.listenInputs=function(){var t=this;window.addEventListener("keydown",(function(e){var n=t.normalize(e.key);t.inputs[n]=["down",e]})),window.addEventListener("keyup",(function(e){var n=t.normalize(e.key);t.inputs[n]=["up",e]})),window.addEventListener("mousedown",(function(e){t.inputs.MOUSE=["down",e]})),window.addEventListener("mouseup",(function(e){t.inputs.MOUSE=["up",e]}))},t.prototype.setInput=function(t,e,n){t=this.normalize(t),this.inputs.MOUSE=[e,n]},t.prototype.normalize=function(t){return" "===t||"Spacebar"===t?t="SPACE":"Up"===t?t="ARROWUP":"Down"===t?t="ARROWDOWN":"Left"===t?t="ARROWLEFT":"Right"===t&&(t="ARROWRIGHT"),t.toUpperCase()},t.prototype.on=function(t,e,n){t=t.toUpperCase();var i=e;return void 0!==n&&(i=function(t,e){var n=!0;return function(){var i=arguments;n&&(n=!1,t.apply(void 0,i),setTimeout((function(){n=!0}),e))}}(e,n)),this.events[t]=this.events[t]||[],this.events[t].push(i),i},t.prototype.off=function(t,e){var n;t=t.toUpperCase();var i=null===(n=this.events[t])||void 0===n?void 0:n.indexOf(e);i&&-1!==i&&this.events[t].splice(i)},t.prototype.emit=function(t){if(void 0!==this.events[t]){var e=this.inputs[t][0],n=this.inputs[t][1];this.events[t].forEach((function(t){t(e,n)})),"up"===e&&(this.inputs[t]=void 0)}},t.prototype.emitEvents=function(){for(var t in this.inputs)void 0!==this.inputs[t]&&this.emit(t)},t.prototype.clear=function(){this.inputs={},this.events={}},t}(),s=function(){function t(t,e){void 0===e&&(e=60),this.canvas=t,this.ctx=t.getContext("2d"),this.maxFps=e,this._listener=new o,this._pause=!1,this._scene=null,this._listenInput=!0}return t.getInstance=function(t,e){if(this.instance)return this.instance;if(!this.instance&&t)return this.instance=new this(t,e);throw new Error("You have to create at least one instance")},Object.defineProperty(t.prototype,"width",{get:function(){return this.canvas.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.canvas.height},enumerable:!1,configurable:!0}),t.prototype.bindEvent=function(t,e,n){return this._listener.on(t,e,n)},t.prototype.cancelEvent=function(t,e){this._listener.off(t,e)},t.prototype.setInput=function(t,e,n){this._listener.setInput(t,e,n)},t.prototype.clearEvents=function(){this._listener.clear()},t.prototype.clearScreen=function(){this.ctx.clearRect(0,0,this.width,this.height)},t.prototype._render=function(){var t,e;null===(e=null===(t=this._scene)||void 0===t?void 0:t.render)||void 0===e||e.call(t)},t.prototype._update=function(){var t,e;null===(e=null===(t=this._scene)||void 0===t?void 0:t.update)||void 0===e||e.call(t)},t.prototype._run=function(){var t=this;this._pause||(this.clearScreen(),this._listenInput&&this._listener.emitEvents(),this._render(),this._update()),setTimeout((function(){t._run()}),1e3/this.maxFps)},t.prototype.togglePause=function(t){this._pause=void 0!==t?t:!this._pause},t.prototype.toggleListener=function(t){this._listenInput=void 0!==t?t:!this._listenInput},t.prototype.bindPause=function(t){var e=this;window.addEventListener("keydown",(function(n){n.key===t&&e.togglePause()}))},t.prototype.startWith=function(t){this.clearEvents(),null===this._scene?(this._scene=t,this._run()):this._scene=t},t}(),r=function(){function t(t){this.engine=s.getInstance(),this.isDead=!1,this.x=t.x||0,this.y=t.y||0,this.width=t.width||0,this.height=t.height||0}return t.prototype.delete=function(){this.isDead=!0},t.prototype.setCoordinates=function(t,e){this.x=void 0===t?this.x:t,this.y=void 0===e?this.y:e},t.prototype.move=function(t,e){this.x+=void 0===t?0:t,this.y+=void 0===e?0:e},t.prototype.render=function(){},t.prototype.update=function(){},t}(),h=function(){function t(){this.engine=s.getInstance(),this.isDead=!1,this.elements=[]}return t.prototype.addElement=function(t){this.elements.push(t)},t.prototype.addElements=function(t){var e=this;t.forEach((function(t){e.addElement(t)}))},t.prototype.removeElement=function(t){var e,n=this.elements.indexOf(t);-1!==n&&(this.elements.splice(n,1),null===(e=this.deleteElementCallback)||void 0===e||e.call(this,t))},t.prototype.removeElements=function(t){var e=this;t.length>0&&t.forEach((function(t){e.removeElement(t)}))},t.prototype.resetElement=function(){this.elements=[]},t.prototype.deleteElementCallback=function(t){},t.prototype.bindInputEvents=function(){this.engine.bindPause("p")},t.prototype.delete=function(){this.isDead=!0},t.prototype.render=function(){this.elements.forEach((function(t){t.render()}))},t.prototype.update=function(){var t=[];this.elements.forEach((function(e){e.isDead?t.push(e):e.update()})),this.removeElements(t)},t}(),a=(n(8304),i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t){function e(e){var n=t.call(this,e)||this;return n.text=e.text,n.font=e.font||"16px Microsoft YaHei",n.type=e.type||"fill",n.style=e.style||"#000",n}return a(e,t),e.prototype.changeTexture=function(t,e,n){this.text=void 0===t?this.text:t,this.engine.ctx.font=e||this.engine.ctx.font,this.style=n||this.style},e.prototype.render=function(){this.engine.ctx.save(),this.engine.ctx.font=this.font,"fill"===this.type?(this.engine.ctx.fillStyle=this.style,this.engine.ctx.fillText(this.text,this.x,this.y)):(this.engine.ctx.strokeStyle=this.style,this.engine.ctx.strokeText(this.text,this.x,this.y)),this.engine.ctx.restore()},e}(r),u=(n(3290),function(){function t(t){this.engine=s.getInstance(),this.hasDraw=!1,this.isDead=!1,this.lineWidth=t.lineWidth||2,this.type=t.type||"fill",this.style=t.style||"#000",this.drawCallback=function(){}}return t.prototype.changeStyle=function(t,e){this.style=t||this.style,this.lineWidth=e||this.lineWidth},t.prototype.draw=function(t){this.hasDraw=!0,this.drawCallback=t},t.prototype.render=function(){this.hasDraw&&(this.engine.ctx.save(),this.engine.ctx.beginPath(),this.drawCallback.call(this,this.engine.ctx),this.engine.ctx.lineWidth=this.lineWidth,"fill"===this.type?(this.engine.ctx.fillStyle=this.style,this.engine.ctx.fill()):(this.engine.ctx.strokeStyle=this.style,this.engine.ctx.stroke()),this.engine.ctx.closePath(),this.engine.ctx.restore())},t.prototype.update=function(){},t}()),l=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),p=function(t){function e(e){var n=t.call(this,e)||this;if(n.width=e.width||n.engine.width,n.height=e.height||n.engine.height,n.radius=e.radius||0,n.lineWidth=e.lineWidth||1,n.type=e.type||"stroke",n.style=e.style||"#000",2*n.radius>n.width||2*n.radius>n.height)throw new Error("radius is too big, the diameter should small than width and height");return n.pen=new u({lineWidth:n.lineWidth,type:n.type,style:n.style}),n.draw(),n}return l(e,t),e.prototype.changeStyle=function(t,e){this.style=t||this.style,this.lineWidth=e||this.lineWidth,this.pen.changeStyle(this.style,this.lineWidth)},e.prototype.draw=function(){var t=this;this.pen.draw((function(e){var n=t.x+t.radius,i=t.y+t.radius,o=t.x+t.width-t.radius,s=t.y+t.height-t.radius;e.moveTo(t.x,i),e.arc(n,i,t.radius,Math.PI,3*Math.PI/2),e.lineTo(n,t.y),e.arc(o,i,t.radius,3*Math.PI/2,2*Math.PI),e.lineTo(t.x+t.width,s),e.arc(o,s,t.radius,0,Math.PI/2),e.lineTo(n,t.y+t.height),e.arc(n,s,t.radius,Math.PI/2,Math.PI),e.lineTo(t.x,i)}))},e.prototype.render=function(){this.pen.render()},e}(r),d=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),f=function(t){function e(e,n){var i=t.call(this,n)||this;return i.image=e,i.sx=n.sx||0,i.sy=n.sy||0,i.sWidth=n.sWidth||i.image.width,i.sHeight=n.sHeight||i.image.height,i.width=i.width||i.sWidth,i.height=i.height||i.sHeight,i}return d(e,t),e.prototype.changeTexture=function(t,e,n,i){this.sx=t||this.sx,this.sy=e||this.sy,void 0!==n&&(this.sWidth=n||this.sWidth,this.sHeight=i||this.sHeight)},e.prototype.render=function(){this.engine.ctx.drawImage(this.image,this.sx,this.sy,this.sWidth,this.sHeight,this.x,this.y,this.width,this.height)},e.prototype.rotateRender=function(t){this.engine.ctx.save(),this.engine.ctx.translate(this.x+this.width/2,this.y+this.height/2),this.engine.ctx.rotate(Math.PI/180*t),this.engine.ctx.translate(-this.x-this.width/2,-this.y-this.height/2),this.engine.ctx.drawImage(this.image,this.sx,this.sy,this.sWidth,this.sHeight,this.x,this.y,this.width,this.height),this.engine.ctx.restore()},e}(r)},3797:function(t,e,n){"use strict";t.exports=n.p+"3bc11a32a114b79403d3.png"},6386:function(t,e,n){"use strict";t.exports=n.p+"09aa8cfbced2ba7197da.png"}},0,[[4865,666,736]]]);