(function(){"use strict";var t={8143:function(t,e,o){var n=o(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("TodoHeader"),e("TodoInput"),e("TodoList"),e("TodoFooter")],1)},l=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"inputBox shadow"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text"},domProps:{value:t.newTodoItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}}),e("span",{staticClass:"addContainer",on:{click:t.addTodo}},[e("i",{staticClass:"fas fa-plus addBtn"})]),t.showModal?e("AlertModal",{on:{close:function(e){t.showModal=!1}},scopedSlots:t._u([{key:"header",fn:function(){return[e("h3",[t._v(" 경고! "),e("i",{staticClass:"closeModalBtn fas fa-times",on:{click:function(e){t.showModal=!1}}})])]},proxy:!0},{key:"body",fn:function(){return[e("h3",[t._v("무언가를 입력하세요")])]},proxy:!0},{key:"footer",fn:function(){return[e("h3",[t._v("copy right")])]},proxy:!0}],null,!1,3545673381)}):t._e()],1)},s=[],i=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v(" default header ")]}))],2),e("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v(" default body ")]}))],2),e("div",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t._v(" default footer "),e("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v(" OK ")])]}))],2)])])])])},c=[],d=o(1001),u={},f=(0,d.Z)(u,i,c,!1,null,null,null),m=f.exports,p={data:function(){return{newTodoItem:"",showModal:!1}},methods:{addTodo:function(){""!==this.newTodoItem?(this.$store.commit("addOneItem",this.newTodoItem),this.clearInput()):this.showModal=!this.showModal},clearInput:function(){this.newTodoItem=""}},components:{AlertModal:m}},v=p,h=(0,d.Z)(v,a,s,!1,null,"626d545e",null),I=h.exports,g=function(){var t=this;t._self._c;return t._m(0)},_=[function(){var t=this,e=t._self._c;return e("header",[e("h1",[t._v("TODO it!")])])}],y={},w=(0,d.Z)(y,g,_,!1,null,"182f1a19",null),T=w.exports,k=function(){var t=this,e=t._self._c;return e("div",[e("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(this.todoItems,(function(o,n){return e("li",{key:n,staticClass:"shadow"},[e("i",{staticClass:"checkBtn fas fa-check",class:{checkBtnCompleted:o.completed},on:{click:function(e){return t.toggleComplete({todoItem:o,index:n})}}}),e("span",{class:{textCompleted:o.completed}},[t._v(" "+t._s(o.item)+" ")]),e("span",{staticClass:"removeBtn",on:{click:function(e){return t.removeTodo({todoItem:o,index:n})}}},[e("i",{staticClass:"fas fa-trash-alt"})])])})),0)],1)},C=[],O=o(3822),x={methods:{...(0,O.OI)({removeTodo:"removeOneItem",toggleComplete:"toggleOneItem"})},computed:{...(0,O.Se)({todoItems:"storedTodoItems"})}},b=x,S=(0,d.Z)(b,k,C,!1,null,"0542f643",null),M=S.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"clearAllContainer"},[e("span",{staticClass:"clearAllBtn",on:{click:t.clearTodo}},[t._v(" Clear All ")])])},A=[],B={methods:{...(0,O.OI)({clearTodo:"clearAllItems"})}},P=B,j=(0,d.Z)(P,Z,A,!1,null,"434a62ae",null),N=j.exports,F={components:{TodoHeader:T,TodoInput:I,TodoList:M,TodoFooter:N}},J=F,$=(0,d.Z)(J,r,l,!1,null,null,null),E=$.exports;const H={fetch(){const t=[];if(localStorage.length>0)for(let e=0;e<localStorage.length;e++)"loglevel:webpack-dev-server"!==localStorage.key(e)&&t.push(JSON.parse(localStorage.getItem(localStorage.key(e))));return t}},L={todoItems:H.fetch()},D={storedTodoItems(t){return t.todoItems}},K={addOneItem(t,e){const o={completed:!1,item:e};t.todoItems.push(o),localStorage.setItem(t.todoItems.length-1,JSON.stringify(o))},removeOneItem(t,e){t.todoItems.splice(e.index,1),localStorage.removeItem(e.todoItem.item)},toggleOneItem(t,e){t.todoItems[e.index].completed=!t.todoItems[e.index].completed,localStorage.removeItem(e.todoItem.item),localStorage.setItem(e.todoItem.item,JSON.stringify(e.todoItem))},clearAllItems(t){localStorage.clear(),t.todoItems=[]}};var q={state:L,getters:D,mutations:K};n.ZP.use(O.ZP);const z=new O.ZP.Store({modules:{todoApp:q}});new n.ZP({render:t=>t(E),store:z}).$mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var l=e[n]={exports:{}};return t[n](l,l.exports,o),l.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,l){if(!n){var a=1/0;for(d=0;d<t.length;d++){n=t[d][0],r=t[d][1],l=t[d][2];for(var s=!0,i=0;i<n.length;i++)(!1&l||a>=l)&&Object.keys(o.O).every((function(t){return o.O[t](n[i])}))?n.splice(i--,1):(s=!1,l<a&&(a=l));if(s){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}l=l||0;for(var d=t.length;d>0&&t[d-1][2]>l;d--)t[d]=t[d-1];t[d]=[n,r,l]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,l,a=n[0],s=n[1],i=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(i)var d=i(o)}for(e&&e(n);c<a.length;c++)l=a[c],o.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return o.O(d)},n=self["webpackChunkto_do"]=self["webpackChunkto_do"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(8143)}));n=o.O(n)})();
//# sourceMappingURL=app.6665a940.js.map