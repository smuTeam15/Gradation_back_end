(function(e){function n(n){for(var r,a,u=n[0],i=n[1],s=n[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(d.length)d.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==c[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({setting:"setting"}[e]||e)+"."+{"chunk-2d0e6c44":"3d716da7","chunk-e807d586":"95c56e3e","chunk-43086178":"7aaea4fe","chunk-62147280":"3926cf63","chunk-9722edc2":"87083201","chunk-35e75d36":"e6b00808","chunk-46419358":"53900cf7","chunk-246f1d81":"62c1aeca","chunk-2f8c5e23":"57b47724",setting:"2e497c12"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-e807d586":1,"chunk-62147280":1,"chunk-9722edc2":1,"chunk-35e75d36":1,"chunk-46419358":1,"chunk-246f1d81":1,"chunk-2f8c5e23":1,setting:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({setting:"setting"}[e]||e)+"."+{"chunk-2d0e6c44":"31d6cfe0","chunk-e807d586":"732805c3","chunk-43086178":"31d6cfe0","chunk-62147280":"3106faaa","chunk-9722edc2":"28ed5d55","chunk-35e75d36":"ea9d0558","chunk-46419358":"96e7d6f7","chunk-246f1d81":"2a8d736d","chunk-2f8c5e23":"5a755803",setting:"ce386893"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],h.parentNode.removeChild(h),t(o)},h.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,t[1](d)}c[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var h=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"17d9":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-app-bar",{attrs:{app:"","max-height":"48px",color:"#fafafa",dense:""}},[t("v-toolbar-title",{on:{click:function(n){return e.$router.push({name:"Home"})}}},[t("span",{attrs:{id:"title"}},[e._v("GRADATION")])]),t("v-spacer"),t("v-btn",{attrs:{icon:""}},[t("v-icon",[e._v("mdi-magnify")])],1),t("v-btn",{attrs:{icon:""}},[t("v-icon",[e._v("mdi-heart")])],1),t("v-btn",{attrs:{icon:""}},[t("v-icon",[e._v("mdi-dots-vertical")])],1)],1),t("v-content",[t("router-view")],1)],1)},c=[],o={data:function(){return{}}},u=o,i=(t("c5c1"),t("2877")),s=t("6544"),l=t.n(s),d=t("7496"),h=t("40dc"),f=t("8336"),p=t("a75b"),m=t("132d"),g=t("2fa4"),v=t("2a7f"),k=Object(i["a"])(u,a,c,!1,null,"6a98890e",null),b=k.exports;l()(k,{VApp:d["a"],VAppBar:h["a"],VBtn:f["a"],VContent:p["a"],VIcon:m["a"],VSpacer:g["a"],VToolbarTitle:v["a"]});t("d3b7");var y=t("8c4f");r["a"].use(y["a"]);var w=new y["a"]({mode:"history",base:"/",routes:[{name:"Home",path:"/",component:function(){return Promise.all([t.e("chunk-e807d586"),t.e("chunk-62147280")]).then(t.bind(null,"bb51"))}},{path:"/storysetting",name:"StorySetting",component:function(){return Promise.all([t.e("chunk-e807d586"),t.e("chunk-9722edc2"),t.e("setting")]).then(t.bind(null,"3067"))}},{path:"/mainpage",name:"MainPage",component:function(){return Promise.all([t.e("chunk-e807d586"),t.e("chunk-9722edc2"),t.e("chunk-46419358"),t.e("chunk-2f8c5e23")]).then(t.bind(null,"4385"))}},{path:"/mainsetting",name:"MainSetting",component:function(){return Promise.all([t.e("chunk-e807d586"),t.e("chunk-43086178")]).then(t.bind(null,"ed5b"))}},{path:"/topicsetting",name:"TopicSetting",component:function(){return Promise.all([t.e("chunk-e807d586"),t.e("chunk-9722edc2"),t.e("chunk-46419358"),t.e("chunk-246f1d81")]).then(t.bind(null,"13ea"))}},{path:"/accountsetting",name:"AccountSetting",component:function(){return t.e("chunk-2d0e6c44").then(t.bind(null,"99c1"))}},{path:"/detailtopic",name:"DetailTopic",component:function(){return Promise.all([t.e("chunk-e807d586"),t.e("chunk-9722edc2"),t.e("chunk-35e75d36")]).then(t.bind(null,"acd0"))}}]}),S=t("2f62"),P=t("bc3a"),_=t.n(P);r["a"].use(S["a"]);var O=new S["a"].Store({state:{DataString:null},mutations:{},actions:{getData:function(){_.a.get("http://169.63.212.7:8000/api/public").then((function(e){DataString=e,console.log(DataString)})).catch((function(e){console.log(e)}))}},modules:{}}),T=t("f309");r["a"].use(T["a"]);var j=new T["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});t("d5e8"),t("5363");r["a"].config.productionTip=!1,new r["a"]({router:w,store:O,vuetify:j,render:function(e){return e(b)}}).$mount("#app")},c5c1:function(e,n,t){"use strict";var r=t("17d9"),a=t.n(r);a.a}});
//# sourceMappingURL=app.65dc850a.js.map