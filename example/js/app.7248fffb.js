(function(e){function t(t){for(var r,o,s=t[0],i=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(_,o)&&_[o]&&d.push(_[o][0]),_[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==_[i]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},_={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"199c":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("13d5"),core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fb6a"),core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("a434"),core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("b0c0"),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("1276"),core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__),_components_HelloWorld_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("fdab");__webpack_exports__["a"]={name:"App",data:function(){return{defaultTreeDataCode:JSON.stringify([{iconClass:"iconfont icon-layout",name:"node1",desc:".node1",isLeaf:!1,children:[{iconClass:"iconfont icon-layout",name:"node1-1",desc:".node1-1",isLeaf:!1,children:[{iconClass:"iconfont icon-picture",name:"node1-1-1",desc:".node1-1-1",isLeaf:!0},{iconClass:"iconfont icon-text",name:"node1-1-2",desc:".node1-1-2",isLeaf:!0}]},{name:"node2",desc:".node2",isLeaf:!1}]}],"",4),defaultTreeData:[{iconClass:"iconfont icon-layout",name:"node1",desc:".node1",isLeaf:!1,children:[{iconClass:"iconfont icon-layout",name:"node1-1",desc:".node1-1",isLeaf:!1,children:[{iconClass:"iconfont icon-picture",name:"node1-1-1",desc:".node1-1-1",isLeaf:!0},{iconClass:"iconfont icon-text",name:"node1-1-2",desc:".node1-1-2",isLeaf:!0}]},{name:"node2",desc:".node2",isLeaf:!1}]}],newNodeIndex:360,showAppendBox:!1,currentPos:"",newNodeName:"",newNodeDesc:""}},methods:{handleDefaultTreeChange:function handleDefaultTreeChange(event){this.defaultTreeData=eval(event.target.value)},handleSelect:function(e){alert("you have click at:"+e)},handleModify:function(e){this.currentPos=e,this.showAppendBox=!0,this.newNodeName=this.newNodeDesc=""},updateNode:function(){this.showAppendBox=!1;var e=this.currentPos.split("-"),t=JSON.parse(JSON.stringify(this.defaultTreeData));if(1===e.length)t[e[0]].name=this.newNodeName,t[e[0]].desc=this.newNodeDesc;else{var n=e.reduce((function(e,t,n){return 0===n?e[t]:e.children[t]}),t);n.name=this.newNodeName,n.desc=this.newNodeDesc}this.defaultTreeData=t,this.defaultTreeDataCode=JSON.stringify(t,"",4)},handleDefaultDelete:function(e){var t=e.split("-"),n=JSON.parse(JSON.stringify(this.defaultTreeData));if(1===t.length)n.splice(t[0],1);else{var r=t.slice(0,t.length-1).reduce((function(e,t,n){return 0===n?e[t]:e.children[t]}),n);r.children.splice(t[t.length-1],1)}this.defaultTreeData=n,this.defaultTreeDataCode=JSON.stringify(n,"",4)},handleAppend:function(e){var t=e.split("-"),n=JSON.parse(JSON.stringify(this.defaultTreeData));if(1===t.length)!n[t[0]].children&&(n[t[0]].children=[]),n[t[0]].children.push({name:"randomNode"+this.newNodeIndex++,desc:"too much random!"});else{var r=t.reduce((function(e,t,n){return 0===n?e[t]:e.children[t]}),n);!r.children&&(r.children=[]),r.children.push({name:"randomNode"+this.newNodeIndex++,desc:"too much random!"})}this.defaultTreeData=n,this.defaultTreeDataCode=JSON.stringify(n,"",4)}}}},2395:function(e,t,n){},4011:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",[n("h2",[e._v("Vue.js Tree Plugin")]),e._m(0),n("div",{staticStyle:{display:"flex"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.defaultTreeDataCode,expression:"defaultTreeDataCode"}],attrs:{cols:"70",rows:"30"},domProps:{value:e.defaultTreeDataCode},on:{change:e.handleDefaultTreeChange,input:function(t){t.target.composing||(e.defaultTreeDataCode=t.target.value)}}}),n("vue-tree-plugin",{attrs:{data:e.defaultTreeData},on:{onNodeClick:e.handleSelect,onModifyBtnClick:e.handleModify,onAppendBtnClick:e.handleAppend,onDeleteBtnClick:e.handleDefaultDelete}})],1)]),e.showAppendBox?n("div",{staticClass:"tipbox"},[n("div",{staticClass:"close",on:{click:function(t){e.showAppendBox=!1}}},[e._v("X")]),n("h4",{staticClass:"title"},[e._v("modify node information")]),n("div",{staticClass:"form-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newNodeName,expression:"newNodeName"}],attrs:{type:"text",placeholder:"new node name"},domProps:{value:e.newNodeName},on:{input:function(t){t.target.composing||(e.newNodeName=t.target.value)}}})]),n("div",{staticClass:"form-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newNodeDesc,expression:"newNodeDesc"}],attrs:{type:"text",placeholder:"new node description"},domProps:{value:e.newNodeDesc},on:{input:function(t){t.target.composing||(e.newNodeDesc=t.target.value)}}})]),n("div",{staticClass:"form-item"},[n("button",{on:{click:e.updateNode}},[e._v("Ok")])])]):e._e()])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("if you feel it useful or like it please give a star @ "),n("a",{attrs:{href:"https://github.com/anderlaw/vue-tree-plugin"}},[e._v("Github")]),e._v(" Thanks")])}],o=n("199c"),s=o["a"],i=(n("7c55"),n("2877")),l=Object(i["a"])(s,_,a,!1,null,null,null),c=l.exports,u=n("2f62");r["a"].use(u["a"]);var d=new u["a"].Store({state:{},mutations:{},actions:{},modules:{}}),p=n("73d4");r["a"].config.productionTip=!1,r["a"].use(p["a"]),new r["a"]({store:d,render:function(e){return e(c)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";n("2395")},a67a:function(e,t,n){"use strict";n("4011")},fdab:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],a={name:"HelloWorld",props:{msg:String}},o=a,s=(n("a67a"),n("2877")),i=Object(s["a"])(o,r,_,!1,null,"123b6ac2",null);i.exports}});
//# sourceMappingURL=app.7248fffb.js.map