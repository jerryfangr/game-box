(self.webpackChunkgame_box=self.webpackChunkgame_box||[]).push([[41],{4041:function(t,e,i){"use strict";i.r(e),i.d(e,{GameScene:function(){return D},StartScene:function(){return s}}),i(8304);var n,o=i(7754),r=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),s=function(t){function e(){var e=t.call(this)||this;return e.init(),e}return r(e,t),e.prototype.init=function(){this.initBackground(),this.initTitle(),this.bindEvents()},e.prototype.initBackground=function(){var t=new o.ev({lineWidth:100,type:"fill"});this.addElement(t)},e.prototype.initTitle=function(){var t=new o.yL({text:"Magic Tower 5",font:"50px yehei",x:150,y:160,style:"#f0f"}),e=new o.yL({text:"故事......",x:200,y:210,style:"#ff0",font:"20px Arial"}),i=new o.yL({text:"press k to continue",x:200,y:260,style:"#fff",font:"14px Arial"});this.addElements([t,e,i])},e.prototype.bindEvents=function(){},e}(o.oJ),h=i(878),u=(i(2222),i(4916),i(3123),{0:"nothing"}),l={0:"stairsUp",1:"floorGrey",2:"floorGlass",3:"wallYellow",4:"floorBlue",5:"stairsDown",6:"blockDoor"},p={0:"doorYellow",1:"smallBottleRed",2:"gemRed",3:"gemBlue",4:"keyYellow",5:"doorRed",6:"keyRed",7:"keyBlue",8:"doorBlue",9:"smallBottleBlue"},a={0:"slimeGreen",1:"slimeRed",2:"slimeBlue",3:"skullWhite",4:"skullWhiteEquip",5:"smallBatBlue",6:"wizardBlue",7:"slimeBlack",8:"orcish"},y={0:"playerFemale"},c={nothing:{texture:{default:{sx:-1,sy:-1,sWidth:32,sHeight:32}}},stairsUp:{type:"levelItem",property:{level:1},texture:{default:{sx:594,sy:660,sWidth:32,sHeight:32}}},stairsDown:{type:"levelItem",property:{level:-1},texture:{default:{sx:594,sy:628,sWidth:32,sHeight:32}}},floorGrey:{type:"none",texture:{default:{sx:0,sy:0,sWidth:32,sHeight:32}}},floorBlue:{type:"none",texture:{default:{sx:33,sy:0,sWidth:32,sHeight:32}}},floorGlass:{type:"none",texture:{default:{sx:132,sy:165,sWidth:32,sHeight:32}}},wallYellow:{type:"block",texture:{default:{sx:132,sy:495,sWidth:32,sHeight:32}}},blockDoor:{type:"block",texture:{default:{sx:132,sy:660,sWidth:32,sHeight:32}}},doorYellow:{type:"item",property:{key:{yk:-1}},texture:{default:{sx:99,sy:660,sWidth:32,sHeight:32}}},doorBlue:{type:"item",property:{key:{bk:-1}},texture:{default:{sx:66,sy:660,sWidth:32,sHeight:32}}},doorRed:{type:"item",property:{key:{rk:-1}},texture:{default:{sx:33,sy:660,sWidth:32,sHeight:32}}},keyYellow:{type:"item",property:{key:{yk:1}},texture:{default:{sx:231,sy:660,sWidth:32,sHeight:32}}},keyBlue:{type:"item",property:{key:{bk:1}},texture:{default:{sx:198,sy:660,sWidth:32,sHeight:32}}},keyRed:{type:"item",property:{key:{rk:1}},texture:{default:{sx:165,sy:660,sWidth:32,sHeight:32}}},smallBottleRed:{type:"item",property:{hp:200},texture:{default:{sx:330,sy:726,sWidth:32,sHeight:32}}},smallBottleBlue:{type:"item",property:{hp:500},texture:{default:{sx:363,sy:726,sWidth:32,sHeight:32}}},gemRed:{type:"item",property:{ak:3},texture:{default:{sx:495,sy:726,sWidth:32,sHeight:32}}},gemBlue:{type:"item",property:{df:3},texture:{default:{sx:528,sy:726,sWidth:32,sHeight:32}}},slimeGreen:{type:"enemy",property:{hp:50,ak:20,df:1},texture:{default:{sx:759,sy:0,sWidth:32,sHeight:32},active:{sx:759,sy:32,sWidth:32,sHeight:32}}},slimeRed:{type:"enemy",property:{hp:70,ak:15,df:2},texture:{default:{sx:660,sy:0,sWidth:32,sHeight:32},active:{sx:660,sy:33,sWidth:32,sHeight:32}}},slimeBlue:{type:"enemy",property:{hp:1e3,ak:5,df:5},texture:{default:{sx:660,sy:0,sWidth:32,sHeight:32},active:{sx:660,sy:33,sWidth:32,sHeight:32}}},slimeBlack:{type:"enemy",property:{hp:50,ak:5,df:5},texture:{default:{sx:858,sy:0,sWidth:32,sHeight:32},active:{sx:858,sy:33,sWidth:32,sHeight:32}}},skullWhite:{type:"enemy",property:{hp:110,ak:25,df:5},texture:{default:{sx:891,sy:66,sWidth:32,sHeight:32},active:{sx:891,sy:99,sWidth:32,sHeight:32}}},skullWhiteEquip:{type:"enemy",property:{hp:50,ak:5,df:5},texture:{default:{sx:693,sy:132,sWidth:32,sHeight:32},active:{sx:693,sy:165,sWidth:32,sHeight:32}}},smallBatBlue:{type:"enemy",property:{hp:100,ak:20,df:5},texture:{default:{sx:924,sy:0,sWidth:32,sHeight:32},active:{sx:924,sy:33,sWidth:32,sHeight:32}}},wizardBlue:{type:"enemy",property:{hp:50,ak:5,df:5},texture:{default:{sx:891,sy:198,sWidth:32,sHeight:32},active:{sx:891,sy:231,sWidth:32,sHeight:32}}},orcish:{type:"enemy",property:{hp:50,ak:5,df:5},texture:{default:{sx:858,sy:132,sWidth:32,sHeight:32},active:{sx:858,sy:165,sWidth:32,sHeight:32}}},playerFemale:{type:"item",property:{hp:1e3,ak:10,df:10,key:{yk:2,bk:0,rk:0},level:1},texture:{default:{sx:825,sy:726,sWidth:32,sHeight:32},up:{sx:825,sy:726,sWidth:32,sHeight:32},down:{sx:858,sy:726,sWidth:32,sHeight:32},left:{sx:759,sy:726,sWidth:32,sHeight:32},right:{sx:792,sy:726,sWidth:32,sHeight:32}}}},d=[[["b1"],[["b3-13"],["b3","b0","o0","i4","e0","e1","e0","o0-5","b3"],["b3-11","o0","b3"],["b3","i1","o0","e3","i0","o0","b3","i1","i4","i1","b3","o0","b3"],["b3","i4","e3","i2","b3","o0","b3","i1","i4","i1","b3","o0","b3"],["b3-2","i0","b3-2","o0","b3-3","e7","b3","o0","b3"],["b3","i4","e4","o0","b3","o0","i0","e6","e0","e5","b3","o0","b3"],["b3","i3","o0","i7","b3","o0","b3-5","o0","b3"],["b3-2","i0","b3-2","o0-7","b3"],["b3","o0-3","b3-2","i5","b3-3","i0","b3-2"],["b3","i1","i9","i4","b3","i6","o0-2","b3","i4","e8","i7","b3"],["b3","i1","圣杖","i4","b3","o0-3","b3","i4-3","b3"],["b3-13"]]],[["b1"],[["b3-13"],["b3","b5","b3","o0","红骑士","o0","b3","i2","i3","i4","i6","b3-2"],["b3","o0","b3","i3","b3","i9","b3","i2","i3","i4","i7","b3-2"],["b3","o0","b3","i4","b3","i4","b3","i2","i3","i4","黄骑士","b3-2"],["b3","o0","b3","i4","b3","i4","b3-4","i0","b3-2"],["b3","o0","b3","o0","b3","o0-3","i0","o0-2","b3-2"],["b3","o0","b3","i0","b3-2","i0","b3-2","i0","b3-3"],["b3","o0","b6","o0-4","b3"],["b3","o0","b3","i0","b3-2","i8","b3"],["b3","o0","b3","i4","b3","i9","i1","b3"],["b3","o0","b3","i4","b3","i9","i1","b3"],["b3","b0","b3","i2","b3","i9","i1","b3"],["b3-13"]]],[["b1"],[["b3-13"],["b3"],["b3"],["b3"],["b3"],["b3"],["b3","e0","b3"],["b3","e0","b3-5"],["b3","o0-5","b3-2"],["b3","b3-4","e5","b3"],["b3","b3","o0-4","b3"],["b3","b5","o0","b3-4"],["b3-13"]]]];function f(t){var e=t.split("-");return{textureName:e[0],counts:e[1]||1}}function m(t){var e=f(t),i=function(t){switch(t){case"o":return u;case"b":return l;case"i":return p;case"e":return a;case"p":return y;default:return u}}(e.textureName[0])[e.textureName[1]],n=JSON.parse(JSON.stringify(c[i]||c.nothing));return n.code=t,n}function x(t){for(var e=f(t),i=[],n=0;n<e.counts;n++)i.push(e.textureName);return i}var b=function(){function t(t,e){this.texture=t,this.isDead=!1,this.needCut={row:!0,column:!0},this.x=e.x||0,this.y=e.y||0,this.size={rowNumber:0,columnNumber:0},this.elementLength=e.elementLength||0;var i=this.createElementsBy(e);this.element=i.element,this.rowCutElement=i.rowCutElement,this.columnCutElement=i.columnCutElement,this.rcCutElement=i.rcCutElement}return t.prototype.delete=function(){this.texture=void 0,this.isDead=!0},t.prototype.createElementsBy=function(t){var e=m(t.bgCode);e.x=t.x||0,e.y=t.y||0;var i,n,o,r=this.createElementBy(e);this.elementLength=this.elementLength||r.width,this.checkDrawRange(t);var s,h=t.width%this.elementLength,u=t.height%this.elementLength;return this.needCut.column&&((s=m(t.bgCode)).texture.default.sWidth=h,s.width=h,n=this.createElementBy(s)),this.needCut.row&&((s=m(t.bgCode)).texture.default.sHeight=u,s.height=u,i=this.createElementBy(s)),this.needCut.row&&this.needCut.column?((s=m(t.bgCode)).texture.default.sHeight=u,s.texture.default.sWidth=h,s.width=h,s.height=u,o=this.createElementBy(s)):(this.needCut.row||this.needCut.column)&&(o=i||n),{element:r,rowCutElement:i=i||r,columnCutElement:n=n||r,rcCutElement:o=o||r}},t.prototype.checkDrawRange=function(t){t.width%this.elementLength==0&&(this.needCut.column=!1),t.height%this.elementLength==0&&(this.needCut.row=!1),this.size.rowNumber=Math.ceil(t.height/this.elementLength),this.size.columnNumber=Math.ceil(t.width/this.elementLength)},t.prototype.createElementBy=function(t){var e={x:0,y:0,width:t.width,height:t.height,sx:t.texture.default.sx,sy:t.texture.default.sy,sWidth:t.texture.default.sWidth,sHeight:t.texture.default.sHeight};return new o.Kn(this.texture,e)},t.prototype.draw=function(t,e,i){t.setCoordinates(this.x+e,this.y+i),t.render()},t.prototype.render=function(){for(var t=0;t<this.size.rowNumber-1;t++)for(var e=0;e<this.size.columnNumber-1;e++)this.draw(this.element,e*this.elementLength,t*this.elementLength);for(t=0,e=this.size.columnNumber-1;t<this.size.rowNumber-1;t++)this.draw(this.columnCutElement,e*this.elementLength,t*this.elementLength);for(e=0,t=this.size.rowNumber-1;e<this.size.columnNumber-1;e++)this.draw(this.rowCutElement,e*this.elementLength,t*this.elementLength);this.draw(this.rcCutElement,(this.size.columnNumber-1)*this.elementLength,(this.size.rowNumber-1)*this.elementLength)},t.prototype.update=function(){var t,e,i;this.element.update(),this.rowCutElement!==this.element&&(null===(t=this.rowCutElement)||void 0===t||t.update()),this.columnCutElement!==this.element&&(null===(e=this.columnCutElement)||void 0===e||e.update()),this.rcCutElement!==this.element&&(null===(i=this.rcCutElement)||void 0===i||i.update())},t}(),v=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),g=function(t){function e(e){var i=t.call(this,e)||this;return i.code=e.code||"o0",void 0!==e.position&&(i.position={rIndex:e.position.rIndex,cIndex:e.position.cIndex}),void 0!==e.property&&(i.property=e.property),void 0!==e.texture&&(e.sx=e.texture.default.sx,e.sy=e.texture.default.sy,e.sWidth=e.texture.default.sWidth,e.sHeight=e.texture.default.sHeight),i}return v(e,t),e.prototype.render=function(){var t,e;null===(e=null===(t=this.element)||void 0===t?void 0:t.render)||void 0===e||e.call(t)},e.prototype.update=function(){var t,e;null===(e=null===(t=this.element)||void 0===t?void 0:t.update)||void 0===e||e.call(t)},e}(o.Ap),w=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),E=function(t){function e(e,i){var n=t.call(this,i)||this;return n.element=new o.Kn(e,i),n}return w(e,t),e.prototype.touchWith=function(){return!1},e}(g);function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i(2526),i(1817),i(2165),i(6992),i(1539),i(8783),i(3948);var _=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),C=function(t){function e(e,i){var n=t.call(this,i)||this;return n.element=new o.Kn(e,i),n}return _(e,t),e.prototype.touchWith=function(t){return!t||void 0===this.property||void 0===t.property||!!this.canTouch(this.property,t.property)&&(t.touchWith(this,"item"),this.delete(),!0)},e.prototype.canTouch=function(t,e){for(var i in t){var n=t[i],o=e[i];if("number"==typeof n&&o+n<0)return!1;if("object"===k(n)&&!this.canTouch(n,o))return!1}return!0},e}(g),W=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),O=function(t){function e(e,i){var n=t.call(this,i)||this;return n.element=new o.Kn(e,i),n.level=n.property.level||0,n}return W(e,t),e.prototype.touchWith=function(t,e){return e.replaceLevel(e.levelNumber+this.level),!0},e}(g),T=(i(9714),function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}()),j=function(t){function e(e,i){var n=t.call(this)||this;return n.updateCounter=0,n.updateNumber=8,n.attackCount=0,n.texture=e,n.x=i.x||16,n.y=i.y||16,n.width=i.width||384,n.height=i.height||160,n.enemy=n.copyOptionFrom(i.enemy),n.player=n.copyOptionFrom(i.player),n.init(),n}return T(e,t),e.prototype.copyOptionFrom=function(t){return{code:t.code,property:{hp:t.property.hp,ak:t.property.ak,df:t.property.df}}},e.prototype.init=function(){this.engine.toggleListener(!1),this.initBackground(),this.initElement(),this.initProperty()},e.prototype.initBackground=function(){var t={x:this.x,y:this.y,width:384,height:160,bgCode:"b1"};this.addElement(new b(this.texture,t));var e={x:this.x,y:this.y,width:t.width,height:t.height,style:"#CF6C00",type:"stroke",lineWidth:3};this.addElement(new o.ev(e))},e.prototype.initElement=function(){var t={x:this.x+16,y:this.y+16},e={x:t.x,y:t.y,width:80,height:80,style:"#CF6C00",type:"stroke",lineWidth:2};this.addElement(new o.ev(e));var i=m(this.enemy.code);i.width=i.height=48,i.x=t.x+16,i.y=t.y+12.8,this.addElement(new H(this.texture,i)),this.addElement(new o.yL({x:i.x,y:e.y+96+10,font:"25px cursive",style:"#fff",text:"怪物"})),e.x=e.x+272,this.addElement(new o.ev(e));var n=m(this.player.code).texture.down;n.width=n.height=48,n.x=e.x+16,n.y=this.y+28.8,this.addElement(new o.Kn(this.texture,n)),this.addElement(new o.yL({x:n.x,y:e.y+96+10,font:"25px cursive",style:"#fff",text:"勇者"}))},e.prototype.initProperty=function(){this.initPropertyIcon(this.x,"left"),this.initPropertyIcon(this.x+128-10,"right"),this.initPropertyText(this.x,"left"),this.initPropertyText(this.x+80+10,"right")},e.prototype.initPropertyIcon=function(t,e){var i={x:t+100.8,y:this.y,font:"12px Arial",style:"#fff",text:""},n={lineWidth:2,type:"stroke",style:"#fff"},o=t+100.8;i.x="left"===e?i.x:i.x+36;var r=38.4;i.y+=r,i.text="left"===e?"生命:":":生命",this.loadLineText(i,n,o,59),i.y+=r,i.text="left"===e?"攻击:":":攻击",this.loadLineText(i,n,o,97.4),i.y+=r,i.text="left"===e?"防御:":":防御",this.loadLineText(i,n,o,135.8)},e.prototype.loadLineText=function(t,e,i,n){this.addElement(new o.yL(t));var r=new o.zo(e);r.draw((function(t){t.moveTo(i,n),t.lineTo(i+64,n)})),this.addElement(r)},e.prototype.initPropertyText=function(t,e){var i={font:"12px yehei",x:t+128+5,y:this.y+64-8,style:"#fff",text:""},n="left"===e?this.enemy.property:this.player.property;i.text=n.hp.toString(),"left"===e?(this.enemyLifeText=new o.yL(i),this.addElement(this.enemyLifeText)):(this.playerLifeText=new o.yL(i),this.addElement(this.playerLifeText)),i.y+=38.4,i.text=n.ak.toString(),this.addElement(new o.yL(i)),i.y+=38.4,i.text=n.df.toString(),this.addElement(new o.yL(i))},e.prototype.delete=function(){t.prototype.delete.call(this),this.texture=void 0},e.prototype.fight=function(){return this.playerInjure=this.playerInjure||this.player.property.ak-this.enemy.property.df,this.enemyInjure=this.enemyInjure||this.enemy.property.ak-this.player.property.df,this.enemyInjure=this.enemyInjure<0?0:this.enemyInjure,this.attackCount%2==0?this.enemy.property.hp-=this.playerInjure:this.player.property.hp-=this.enemyInjure,this.attackCount++,!(this.enemy.property.hp<0&&(this.enemy.property.hp=0,1))},e.prototype.update=function(){if(t.prototype.update.call(this),this.updateCounter++,this.updateCounter>=this.updateNumber){this.updateCounter=0;var e=this.fight();this.enemyLifeText.changeTexture(this.enemy.property.hp),this.playerLifeText.changeTexture(this.player.property.hp),e||(this.engine.toggleListener(!0),this.delete())}},e}(o.oJ),P=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),H=function(t){function e(e,i){var n=t.call(this,i)||this;return n.texture=e,n.activeAnimation=0,n.updateCounter=0,n.updateNumber=10,n.animationElements=[],n.element=new o.Kn(e,i),n.createAnimations(e,i),n}return P(e,t),e.prototype.createAnimations=function(t,e){for(var i in e.texture){var n=e.texture[i];n.x=this.x,n.y=this.y,n.width=this.width,n.height=this.height,this.animationElements.push(new o.Kn(t,n))}},e.prototype.touchWith=function(t,e){return!(!this.property||!t.property||!this.canFight(this.property,t.property)||(this.fightWidth(t,e),t.touchWith(this,"enemy"),this.delete(),0))},e.prototype.canFight=function(t,e){var i=e.ak-t.df;if(i<=0)return!1;var n=t.ak-e.df;return n<=0||Math.ceil(t.hp/i)<=Math.ceil(e.hp/n)},e.prototype.fightWidth=function(t,e){e.addElement(new j(this.texture,{player:t,enemy:this}))},e.prototype.update=function(){this.updateCounter++,this.updateCounter>=this.updateNumber&&(this.updateCounter=0,this.activeAnimation++,this.activeAnimation=this.activeAnimation>=this.animationElements.length?0:this.activeAnimation,this.element=this.animationElements[this.activeAnimation])},e}(g),L=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),B=function(t){function e(e,i){var n=t.call(this)||this;return n.x=i.x||0,n.y=i.y||0,n.elementsCode=i.elementsCode,n.elements=[],n.texture=e,n.elementsOption=function(t){for(var e=[],i=0;i<t.length;i++){var n=t[i];e[i]=[];for(var o=0;o<n.length;o++)e[i][o]=m(n[o])}return e}(n.elementsCode),n.elementDistance=32,n.loadElements(),n}return L(e,t),e.prototype.loadElements=function(){for(var t=0;t<this.elementsOption.length;t++)for(var e=this.elementsOption[t],i=0;i<e.length;i++)this.createElement(e[i],t,i)},e.prototype.createElement=function(t,e,i){if(void 0!==t.type&&"none"!==t.type){var n=t;n.x=this.x+i*this.elementDistance,n.y=this.y+e*this.elementDistance,n.position={rIndex:e,cIndex:i},"block"===t.type?this.addElement(new E(this.texture,n)):"item"===t.type?this.addElement(new C(this.texture,n)):"enemy"===t.type?this.addElement(new H(this.texture,n)):"levelItem"===t.type&&this.addElement(new O(this.texture,n))}},e.prototype.deleteElementCallback=function(t){void 0!==t.position&&(this.elementsCode[t.position.rIndex][t.position.cIndex]="o0")},e}(o.oJ),I=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),N=function(t){function e(e,i,n){var o=t.call(this)||this;return o.texture=e,o.x=n.x||0,o.y=n.y||0,o.width=n.width||160,o.height=n.height||416,o.level=n.level||0,o.lineRange=n.lineRange||25,o.player=i,o.init(),o}return I(e,t),e.prototype.init=function(){this.updateCounter=0,this.updateNumber=10,this.initBackground(),this.initProperty()},e.prototype.replaceInfo=function(t,e){this.level=void 0===(null==t?void 0:t.level)?this.level:t.level,this.player=e||this.player},e.prototype.delete=function(){t.prototype.delete.call(this),this.texture=void 0,this.player=void 0},e.prototype.initBackground=function(){var t={x:this.x+20,y:this.y,width:124.8,height:160,bgCode:"b1"};this.addElement(new b(this.texture,t)),t.y=t.y+t.height+17,this.addElement(new b(this.texture,t));var e={x:this.x+20,y:this.y+2,width:124.8,height:156,style:"#CF6C00",type:"stroke",lineWidth:4};this.addElement(new o.ev(e)),e.y=e.y+e.height+17+e.lineWidth,this.addElement(new o.ev(e))},e.prototype.initProperty=function(){this.initPropertyIcon(),this.initPropertyText()},e.prototype.initPropertyIcon=function(){var t={x:this.x+38.4,y:this.y},e=m(this.player.code).texture.down;e.x=t.x-5,e.y=this.y+10,this.addElement(new o.Kn(this.texture,e)),this.loadKeyElement("i4",t.x,t.y+160+this.lineRange+10,25),this.loadKeyElement("i7",t.x,t.y+160+2.5*this.lineRange+5,25),this.loadKeyElement("i6",t.x,t.y+160+4*this.lineRange,25)},e.prototype.loadKeyElement=function(t,e,i,n){var r=m(t).texture.default;r.x=e,r.y=i,r.width=r.height=n,this.addElement(new o.Kn(this.texture,r))},e.prototype.initPropertyText=function(){var t,e,i,n={x:this.x+38.4,y:0,font:"13px yehei",style:"#fff",text:""},o=this.player.property;this.levelText=this.createTextElement(n,this.x+82.88,this.y+13+4+16,"第 "+(this.level+1)+" 层");var r=this.x+38.4,s=this.y+67.2;this.lifeText=this.createTextElement(n,r,s,"生命     "+(o.hp||0)),this.attackText=this.createTextElement(n,r,s+1*this.lineRange,"攻击     "+(o.ak||0)),this.defenseText=this.createTextElement(n,r,s+2*this.lineRange,"防御     "+(o.df||0)),this.yellowKeyText=this.createTextElement(n,r,this.y+160+2*this.lineRange+4,"            "+((null===(t=o.key)||void 0===t?void 0:t.yk)||0)),this.blueKeyText=this.createTextElement(n,r,this.y+160+3*this.lineRange+9,"            "+((null===(e=o.key)||void 0===e?void 0:e.bk)||0)),this.redKeyText=this.createTextElement(n,r,this.y+160+4*this.lineRange+15,"            "+((null===(i=o.key)||void 0===i?void 0:i.rk)||0)),this.addElements([this.levelText,this.lifeText,this.attackText,this.defenseText,this.yellowKeyText,this.blueKeyText,this.redKeyText])},e.prototype.createTextElement=function(t,e,i,n){return t.x=e,t.y=i,t.text=n,new o.yL(t)},e.prototype.update=function(){if(this.updateCounter++,this.updateCounter>=this.updateNumber){this.updateCounter=0;var t=this.player.property;this.levelText.changeTexture("第 "+(this.level+1)+" 层"),this.lifeText.changeTexture("生命     "+t.hp),this.attackText.changeTexture("攻击     "+t.ak),this.defenseText.changeTexture("防御     "+t.df),this.yellowKeyText.changeTexture("            "+t.key.yk),this.blueKeyText.changeTexture("            "+t.key.bk),this.redKeyText.changeTexture("            "+t.key.rk)}},e}(o.oJ);function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i(9601);var K=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),A=function(){return(A=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},R=function(t){function e(e,i){var n=this,r=m(i);return(n=t.call(this,r)||this).texture=e,n.element=new o.Kn(n.texture,r),n.elements={},n.width=n.element.width,n.height=n.element.height,n.direction="up",n.init(r.texture),n}return K(e,t),e.prototype.init=function(t){for(var e in this.setCoordinates(192,352),t){var i=t[e];this.elements[e]=new o.Kn(this.texture,i)}},e.prototype.setCoordinates=function(e,i){t.prototype.setCoordinates.call(this,e,i),this.element.setCoordinates(e,i)},e.prototype.move=function(e,i){t.prototype.move.call(this,e,i),this.element.move(e,i)},e.prototype.nextPosition=function(t,e){if("down"!==t)return null;var i=this.getMoveDistance(e);return{x:this.x+i.x,y:this.y+i.y,width:this.width,height:this.height}},e.prototype.moveBy=function(t){var e=this.getMoveDistance(t);this.move(e.x,e.y)},e.prototype.touchWith=function(t,e){return"item"===e?this.eatItem(t.property,this.property):"enemy"===e&&this.injuredFrom(t.property,this.property),!0},e.prototype.eatItem=function(t,e){for(var i in t)"number"==typeof e[i]&&(e[i]=e[i]+t[i]),"object"===S(e[i])&&this.eatItem(t[i],e[i])},e.prototype.injuredFrom=function(t,e){var i=e.ak-t.df,n=t.ak-e.df;n=n<0?0:n;var o=(Math.ceil(t.hp/i)-1)*n;e.hp-=o},e.prototype.getMoveDistance=function(t){switch(t){case"left":return{x:-32,y:0};case"right":return{x:32,y:0};case"up":return{x:0,y:-32};case"down":return{x:0,y:32};default:return{x:0,y:0}}},e.prototype.turnDirection=function(t){return this.direction!==t&&-1!==["left","right","up","down"].indexOf(t)&&(this.direction=t,this.elements[t].setCoordinates(this.element.x,this.element.y),this.element=this.elements[t],!0)},e.prototype.replacePlayer=function(t){var e=m(t);this.element=new o.Kn(this.texture,A({x:this.x,y:this.y},e))},e}(g),z=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),D=function(t){function e(){var e=t.call(this)||this;return e.texture=new Image,e.direction="up",e.gameWindowSize={rowNumber:13,columnNumber:18},e.gameElements=[],e.levelsCode=[],e.levelNumber=0,e.lock=!1,e.loadLevelCode(e.levelNumber),e.loadTexture((function(){e.init(),e.bindInputEvents()})),e}return z(e,t),e.prototype.debug=function(){this.player.setCoordinates(64,352)},e.prototype.init=function(){this.resetElement(),this.initBackground(),this.initElementScene(),this.initPlayer(),this.initStatusBar()},e.prototype.loadLevelCode=function(t){if(void 0===this.levelsCode[t]){var e=function(t){if(t>=0&&t<d.length){for(var e=d[t],i=e[0][0],n=[],o=0;o<e[1].length;o++){var r=e[1][o];n[o]=[];for(var s=0;s<r.length;s++){var h=x(r[s]);n[o]=n[o].concat(h)}}return{bg:i,elements:n}}return null}(t);if(null===e)throw new Error("Level config error, level"+(this.levelNumber+1)+" is not exist");this.levelsCode[t]=e}},e.prototype.replaceLevel=function(t){this.loadLevelCode(t),this.levelNumber=t,this.init(),this.statusScene.replaceInfo({level:this.levelNumber}),this.updatePlayerPosition()},e.prototype.loadTexture=function(t){var e=this;this.texture.src=h,this.texture.onload=function(){t.call(e)}},e.prototype.updatePlayerPosition=function(){var t=this.findElement("stair");this.player.setCoordinates(null==t?void 0:t.x,null==t?void 0:t.y);var e=this.findElement("floor");this.player.setCoordinates(null==e?void 0:e.x,null==e?void 0:e.y)},e.prototype.findElement=function(t){if("stair"===t){var e=this.player.nextPosition("down",this.direction);return this.getTouchedItem(e,this.gameElements)}if("floor"===t)for(var i=["right","down","left","up"],n=0;n<i.length;n++){var o=i[n],r=this.player.nextPosition("down",o);if(null===this.getTouchedItem(r,this.gameElements))return r}},e.prototype.initBackground=function(){this.staticBg=this.staticBg||new b(this.texture,{x:416,height:32*this.gameWindowSize.rowNumber,width:160,bgCode:"b4"});var t=new b(this.texture,{height:416,width:32*this.gameWindowSize.rowNumber,bgCode:this.levelsCode[this.levelNumber].bg});this.addElements([this.staticBg,t])},e.prototype.initElementScene=function(){var t=new B(this.texture,{elementsCode:this.levelsCode[this.levelNumber].elements});this.gameElements=t.elements,this.addElement(t)},e.prototype.initPlayer=function(){this.player=this.player||new R(this.texture,"p0"),this.addElement(this.player)},e.prototype.initStatusBar=function(){this.statusScene=this.statusScene||new N(this.texture,this.player,{x:416,y:16}),this.addElement(this.statusScene)},e.prototype.move=function(t,e){if(!this.lock){if(this.lock=!0,this.direction=e,this.player.turnDirection(e))return this.lock=!1;var i=this.player.nextPosition(t,e);if(null===i)return this.lock=!1;var n=this.getTouchedItem(i,this.gameElements);if(null===n)return this.player.moveBy(e),this.lock=!1;n.touchWith(this.player,this),this.lock=!1}},e.prototype.getTouchedItem=function(t,e){for(var i=0;i<e.length;i++){var n=e[i];if(t.x===n.x&&t.y===n.y)return n}return null},e.prototype.bindInputEvents=function(){var e=this;t.prototype.bindInputEvents.call(this),this.engine.bindEvent("d",(function(t){e.move(t,"right")}),90),this.engine.bindEvent("a",(function(t){e.move(t,"left")}),90),this.engine.bindEvent("w",(function(t){e.move(t,"up")}),90),this.engine.bindEvent("s",(function(t){e.move(t,"down")}),90)},e}(o.oJ)},878:function(t,e,i){"use strict";t.exports=i.p+"fa0a3943edc62ae47f16.png"}}]);