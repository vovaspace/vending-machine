!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){e.exports=n(4)},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){function n(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(i,o){var a=e.apply(t,r);function u(e){n(a,i,o,u,s,"next",e)}function s(e){n(a,i,o,u,s,"throw",e)}u(void 0)})}}},function(e,t,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(5),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",c="object"==typeof e,l=t.regeneratorRuntime;if(l)c&&(e.exports=l);else{(l=t.regeneratorRuntime=c?e.exports:{}).wrap=b;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",v={},_={};_[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(M([])));y&&y!==r&&i.call(y,a)&&(_=y);var g=k.prototype=x.prototype=Object.create(_);w.prototype=g.constructor=k,k.constructor=w,k[s]=w.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(g),e},l.awrap=function(e){return{__await:e}},L(T.prototype),T.prototype[u]=function(){return this},l.AsyncIterator=T,l.async=function(e,t,n,r){var i=new T(b(e,t,n,r));return l.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},L(g),g[s]="Generator",g[a]=function(){return this},g.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=M,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return u.type="throw",u.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:M(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(e,t,n,r){var i=t&&t.prototype instanceof x?t:x,o=Object.create(i.prototype),a=new j(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return S()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var u=O(a,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=E(e,t,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(e,n,a),o}function E(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function x(){}function w(){}function k(){}function L(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function T(e){var t;this._invoke=function(n,r){function o(){return new Promise(function(t,o){!function t(n,r,o,a){var u=E(e[n],e,r);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"==typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,o,a)},function(e){t("throw",e,o,a)}):Promise.resolve(c).then(function(e){s.value=e,o(s)},function(e){return t("throw",e,o,a)})}a(u.arg)}(n,r,t,o)})}return t=t?t.then(o,o):o()}}function O(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=E(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,v;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function M(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(3),a=n.n(o),u=n(1),s=n.n(u),c=n(2),l=n.n(c);function d(e,t,n){var r=e.toString().split("");r.length>0&&(n(r[0]),delete r[0],setTimeout(function(){d(r.join(""),t,n)},t))}var h=function(){function e(t,n){s()(this,e),this._text=t,this._currentText=t,this._tag=n||"div"}return l()(e,[{key:"prerender",value:function(){var e=document.createElement(this._tag);e.classList.add("text-board"),e.classList.add("text-board_disable");var t=document.createElement("span");return t.classList.add("text-board__text"),this._textEl=t,e.appendChild(t),this._textBoadrEl=e,e}},{key:"render",value:function(){this._textBoadrEl.classList.remove("text-board_disable"),this._textEl.innerHTML="."}},{key:"turnOn",value:function(){var e=this;this._textEl.innerHTML="",d(this._text,10,function(t){var n=e._textEl.innerHTML;n+=t,e._textEl.innerHTML=n})}},{key:"turnOff",value:function(){this._textEl.innerHTML=".",this._currentText=this._text}},{key:"changeText",value:function(e){this._currentText=e,this._textEl.innerHTML=e}},{key:"resetText",value:function(){this._currentText=this._text,this._textEl.innerHTML=this._currentText}},{key:"showMessage",value:function(e){var t=this;return new Promise(function(n){var r=t._currentText;t._textEl.innerHTML=e,setTimeout(function(){t._currentText&&t._currentText!==r||(t._textEl.innerHTML=r,n())},2e3)})}}]),e}(),f=function(){function e(t,n){s()(this,e),this._labelText=t,this._descText=n||null,this._isOn=!1}return l()(e,[{key:"prerender",value:function(){var e=document.createElement("form");e.classList.add("form");var t=new h(this._labelText,"label"),n=t.prerender();n.classList.add("form__label"),e.appendChild(n),this._label=t,this._labelEl=n;var r=document.createElement("div");r.classList.add("form__input-container"),r.classList.add("form__input-container_off");var i=document.createElement("input");if(i.classList.add("form__input"),i.classList.add("form__input_disable"),i.setAttribute("type","text"),i.disabled=!0,r.appendChild(i),this._inputContainerEl=r,this._inputEl=i,e.appendChild(r),this._descText){var o=document.createElement("span");o.classList.add("form__desc"),o.innerHTML=this._descText,e.appendChild(o),this._descEl=o}return this._formEl=e,e}},{key:"render",value:function(){this._inputContainerEl.classList.remove("form__input-container_off"),this._label.render(),this._inputEl.setAttribute("placeholder",".")}},{key:"turnOn",value:function(){var e=this;this._isOn||(this._isOn=!0,this._inputEl.classList.remove("form__input_disable"),this._inputEl.disabled=!1,this._inputEl.setAttribute("placeholder",""),d("...",40,function(t){var n=e._inputEl.getAttribute("placeholder");n+=t,e._inputEl.setAttribute("placeholder",n)}),this._label.turnOn())}},{key:"turnOff",value:function(){this._isOn=!1,this.disable(),this._label.turnOff(),this._inputEl.setAttribute("placeholder","."),this._inputEl.value=""}},{key:"disable",value:function(){this._inputEl.classList.add("form__input_disable"),this._inputEl.disabled=!0}},{key:"changeLabelText",value:function(e){this._label.changeText(e)}},{key:"showMessage",value:function(e){this._label.showMessage(e)}},{key:"addSubmitListener",value:function(e){this._inputEl.addEventListener("keypress",function(t){"Enter"===t.key&&(t.preventDefault(),e())})}},{key:"value",get:function(){return this._inputEl.value}}]),e}(),p=function(){function e(t,n,r,i,o){s()(this,e),this._id=t,this._name=n,this._desc=r,this._price=i,this._count=o}return l()(e,[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=document.createElement("div");t.classList.add("product");var n=document.createElement("span");n.classList.add("product__name"),n.innerHTML=this._name;var r=document.createElement("span");r.classList.add("product__desc"),r.innerHTML=this._desc;var i=document.createElement("span");i.classList.add("product__price"),i.innerHTML="".concat(this._price," R");var o=document.createElement("span");return o.classList.add("product__id"),o.innerHTML=this._id,t.appendChild(n),t.appendChild(r),t.appendChild(i),t.appendChild(o),e?t:(this._productEl=t,t)}},{key:"coldRender",value:function(){return this._productEl}},{key:"setActive",value:function(){this._productEl.classList.add("product_active")}},{key:"unsetActive",value:function(){this._productEl.classList.remove("product_active")}},{key:"decreaseCount",value:function(e){this._count-=e}},{key:"id",get:function(){return this._id}},{key:"price",get:function(){return this._price}},{key:"count",get:function(){return this._count}}]),e}(),v=function(){function e(t){var n=this;s()(this,e),this._products={},t.forEach(function(e){n._products[e.id]=e})}return l()(e,[{key:"render",value:function(e){this._nodeEl=e;var t=document.createElement("ul");function n(e){return new Promise(function(t){var n=document.createElement("li");n.classList.add("product-list__item"),n.appendChild(e.render()),setTimeout(function(){t(n)},80)})}t.classList.add("product-list"),this._listEl=t,e.appendChild(t);var r=this;!function(){var e=a()(i.a.mark(function e(){var t,o,a,u,s,c,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=!0,o=!1,a=void 0,e.prev=3,u=r.arr[Symbol.iterator]();case 5:if(t=(s=u.next()).done){e.next=14;break}return c=s.value,e.next=9,n(c);case 9:l=e.sent,r._listEl.appendChild(l);case 11:t=!0,e.next=5;break;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(3),o=!0,a=e.t0;case 20:e.prev=20,e.prev=21,t||null==u.return||u.return();case 23:if(e.prev=23,!o){e.next=26;break}throw a;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}},e,null,[[3,16,20,28],[21,,23,27]])}));return function(){return e.apply(this,arguments)}}()()}},{key:"deleteEmpty",value:function(){var e=this;return new Promise(function(t){var n=!1;Object.keys(e._products).forEach(function(t){0===e._products[t].count&&(delete e._products[t],n=!0)}),t(n)})}},{key:"rerender",value:function(){this._listEl.parentNode.removeChild(this._listEl),this.render(this._nodeEl)}},{key:"unSetActiveAll",value:function(){Object.values(this._products).forEach(function(e){return e.unsetActive()})}},{key:"arr",get:function(){return Object.values(this._products).sort()}}]),e}(),_=function(){function e(t,n,r,i,o){s()(this,e),this._b50=t||0,this._b100=n||0,this._b200=r||0,this._b500=i||0,this._b1000=o||0}return l()(e,[{key:"add",value:function(e){var t=this;return new Promise(function(n,r){var i=parseInt(e,10);switch(Number.isNaN(i)&&r(new Error("Bankote must be a number!")),i){case 50:t._b50+=1;break;case 100:t._b100+=1;break;case 200:t._b200+=1;break;case 500:t._b500+=1;break;case 1e3:t._b1000+=1;break;default:r(new Error("Unknown banknote!"))}n(t.sum)})}},{key:"merge",value:function(e){var t=this;return new Promise(function(n){t._b50+=e._b50,t._b100+=e._b100,t._b200+=e._b200,t._b500+=e._b500,t._b1000+=e._b1000,n()})}},{key:"reset",value:function(){var e=this;return new Promise(function(t){e._b50=0,e._b100=0,e._b200=0,e._b500=0,e._b1000=0,t()})}},{key:"sum",get:function(){return 50*this._b50+100*this._b100+200*this._b200+500*this._b500+1e3*this._b1000}}]),e}();var m=function(){function e(t,n,r,i){s()(this,e),this._c1=t,this._c2=n,this._c5=r,this._c10=i}return l()(e,[{key:"decreaseBy",value:function(e){var t=this;return new Promise(function(n){var r=function(e,t){var n=Object.keys(t);n.sort(function(e,t){return t-e});var r=t,i=e,o=0,a={};return n.forEach(function(e){a[e]=0}),function e(){return 0===r[n[o]]&&(n.splice(o,1),e()),i-n[o]>=0&&i>0?(i-=n[o],r[n[o]]-=1,a[n[o]]+=1,o=0,e()):o!==n.length&&(o+=1,e()),0===i}()?{response:!0,change:a}:{response:!1,change:a}}(e,t.obj);Object.keys(r).forEach(function(e){t["_c".concat(e)]-=r[e]}),r.response&&n({response:!0,change:r.change}),n({response:!1,change:r.change})})}},{key:"obj",get:function(){var e=this,t=Object.keys(this).filter(function(e){return/^_c\d+$/.test(e)}),n={};return t.forEach(function(t){n[t.match(/\d+/)]=e[t]}),n}}]),e}(),y=function(){function e(){s()(this,e)}return l()(e,[{key:"prerender",value:function(){var e=document.createElement("div");e.classList.add("output");var t=new h(""),n=t.prerender();n.classList.add("output__text-board"),e.appendChild(n),this._textBoard=t,this._textBoardEl=n;var r=document.createElement("div");r.classList.add("output__bottom");var i=document.createElement("div");i.classList.add("output__output"),i.classList.add("output__output_disable"),i.id="changeOutput",this._changeEl=i;var o=document.createElement("div");return o.classList.add("output__output"),o.classList.add("output__output_product"),o.id="productOutput",this._productEl=o,r.appendChild(i),r.appendChild(o),e.appendChild(r),this._outputEl=e,e}},{key:"render",value:function(){this._textBoard.render(),this._changeEl.classList.remove("output__output_disable")}},{key:"turnOn",value:function(){this._textBoard.turnOn()}},{key:"turnOff",value:function(){var e=a()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._changeEl.innerHTML="",this._productEl.innerHTML="",e.next=4,this._textBoard.showMessage("Thank you!");case 4:this._textBoard.turnOff();case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"outputChange",value:function(e){var t=Object.keys(e.change),n=[];if(t.forEach(function(t){if(e.change[t]>0){var r="".concat(t," R: <br>").concat(e.change[t]," coins"),i=document.createElement("span");i.classList.add("output__change-item"),i.innerHTML=r,n.push(i)}}),n.length>0)for(var r=n,i=0;i<r.length;i++){var o=r[i];this._changeEl.appendChild(o)}else{var a=document.createElement("span");switch(a.classList.add("output__change-item"),e.response){case!0:a.innerHTML="No change.";break;default:a.innerHTML="¯\\_(ツ)_/¯"}this._changeEl.appendChild(a)}}},{key:"outputProduct",value:function(e){var t=document.createElement("div");t.classList.add("output__product-item"),t.appendChild(e.render(!0)),this._productEl.appendChild(t),this._productItemEl=t}},{key:"changeText",value:function(e){this._textBoard.changeText(e)}},{key:"addPickingUpProductListener",value:function(e){this._productItemEl.addEventListener("click",function(t){t.preventDefault(),e()})}}]),e}();function g(e,t){return new Promise(function(n,r){var i=parseInt(e,10);Number.isNaN(i)&&r(new Error("Choice must be a number!"));var o=[];t.forEach(function(e){e.id===i&&n(e),o.push(e.id)}),o.some(function(e){return e===i})||r(new Error("Enter the correct number!")),r(new Error("Not enough money!"))})}function b(e,t,n,r,i,o){return new Promise(function(a){var u=o.render();u.classList.add("page__preloader"),e.appendChild(u),t.appendChild(n.prerender()),t.appendChild(r.prerender()),t.appendChild(i.prerender()),a()})}var E=function(){function e(){s()(this,e)}return l()(e,[{key:"render",value:function(){var e=document.createElement("div");e.classList.add("preloader");var t=document.createElement("div");return t.classList.add("preloader__progressbar"),this._progressBarEl=t,e.appendChild(t),this._preloaderEl=e,e}},{key:"delete",value:function(){this._preloaderEl.parentNode.removeChild(this._preloaderEl)}},{key:"setProgress",value:function(e){this._progressBarEl.style.width="".concat(e,"%")}}]),e}();function x(e){return new Promise(function(){var t=a()(i.a.mark(function t(n){var r,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setProgress(20),t.next=3,new Promise(function(t){setTimeout(function(){e.setProgress(40),t()},600)});case 3:return r=new FontFace("Monaco","url(/!#{PRODUCTION-PATH}fonts/Monaco.woff)"),t.next=6,r.load();case 6:return document.fonts.add(r),e.setProgress(60),o=new FontFace("PT Sans","url(/!#{PRODUCTION-PATH}fonts/PTSans-Regular.woff)"),t.next=11,o.load();case 11:return document.fonts.add(o),e.setProgress(80),t.next=15,new Promise(function(t){setTimeout(function(){e.setProgress(100),t()},600)});case 15:n();case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}function w(e,t,n,r,i,o,a){return new Promise(function(t){n.render(),r.render(),i.render(),o.delete(),a.render(e),t()})}var k=new v([new p(1,"Cola","Cold drink",130,50),new p(2,"Evian","Water",90,50),new p(3,"Durex","Condoms",400,50),new p(4,"Shickers","Choco",105,50),new p(5,"Wagon Wheels","Choco",155,50),new p(6,"WTF, Alice?","I don't know",100,1),new p(7,"Fanta","Cold drink",130,50)]),L=new _,T=new _,O=new m(200,200,500,1e3),P=document.getElementById("showcase"),C=document.getElementById("control-panel"),j=new f("Insert banknotes...","Available banknotes: 50, 100,  <br>200, 500 or 1000 R. <br>The machine gives change <br>in 1, 2, 5 and 10 R coins."),M=new f("Choice product..."),S=new y,N=new E;function H(){return(H=a()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(P,C,j,M,S,N);case 2:return e.next=4,x(N);case 4:return e.next=6,w(P,0,j,M,S,N,k);case 6:j.turnOn();case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){H.apply(this,arguments)}(),j.addSubmitListener(a()(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.add(j.value);case 3:t=e.sent,k.arr.forEach(function(e){e.price<=T.sum&&(M.turnOn("Choice product","..."),e.setActive())}),j.changeLabelText("Inserted money: ".concat(t," R")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j.showMessage(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[0,8]])}))),M.addSubmitListener(a()(i.a.mark(function e(){var t,n,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(M.value,k.arr);case 3:return(t=e.sent).decreaseCount(1),n=T.sum-t.price,e.next=8,O.decreaseBy(n);case 8:return r=e.sent,e.next=11,L.merge(T);case 11:return e.next=13,T.reset();case 13:M.changeLabelText("Success!"),o=r.response?"Take your product and change!":"Not enough change. Sorry!",j.disable(),M.disable(),S.outputChange(r),S.outputProduct(t),S.changeText(o),S.addPickingUpProductListener(a()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return j.turnOff(),M.turnOff(),S.turnOff(),k.unSetActiveAll(),e.next=6,k.deleteEmpty();case 6:e.sent&&k.rerender(),j.turnOn();case 9:case"end":return e.stop()}},e)}))),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),M.showMessage(e.t0.message);case 26:case"end":return e.stop()}},e,null,[[0,23]])})))}]);
//# sourceMappingURL=app.js.map