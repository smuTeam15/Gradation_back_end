(function(e){function n(n){for(var a,c,r=n[0],s=n[1],u=n[2],l=0,d=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);h&&h(n);while(d.length)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,c=1;c<t.length;c++){var r=t[c];0!==o[r]&&(a=!1)}a&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},c={app:0},o={app:0},i=[];function r(e){return s.p+"js/"+({setting:"setting"}[e]||e)+"."+{"chunk-07e2dbd5":"062e597d","chunk-07c9f058":"0558176d","chunk-15e3d32a":"dc374bd3","chunk-e61c1e02":"d9ed511c","chunk-6c9253a7":"a5b73d49","chunk-7d0b30d6":"80c06eea","chunk-51ce56ee":"5f6c16d3",setting:"dda081bd","chunk-f62de7ce":"41b6c13d","chunk-20f58a5f":"4af5c35f","chunk-18b69522":"2ee20673","chunk-3078b9a7":"7044ff15","chunk-8827b29a":"f33de518","chunk-19e9a39e":"4a7a72f8"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-07e2dbd5":1,"chunk-15e3d32a":1,"chunk-e61c1e02":1,"chunk-6c9253a7":1,"chunk-7d0b30d6":1,"chunk-51ce56ee":1,setting:1,"chunk-f62de7ce":1,"chunk-20f58a5f":1,"chunk-18b69522":1,"chunk-3078b9a7":1,"chunk-8827b29a":1,"chunk-19e9a39e":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({setting:"setting"}[e]||e)+"."+{"chunk-07e2dbd5":"80bd7f89","chunk-07c9f058":"31d6cfe0","chunk-15e3d32a":"fba5bb1e","chunk-e61c1e02":"427541b5","chunk-6c9253a7":"9d21c0d7","chunk-7d0b30d6":"84fd84dd","chunk-51ce56ee":"b1012b12",setting:"c371a780","chunk-f62de7ce":"a200cb6d","chunk-20f58a5f":"fdc5b796","chunk-18b69522":"07a87f9f","chunk-3078b9a7":"849b7eb6","chunk-8827b29a":"3ccac605","chunk-19e9a39e":"b9bb3b7e"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var u=i[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return n()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===a||l===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var a=n&&n.target&&n.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete c[e],h.parentNode.removeChild(h),t(i)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var i=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(e);var d=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,t[1](d)}o[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var h=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-app-bar",{attrs:{app:"","max-height":"48px",color:"#fafafa",dense:""}},[t("v-toolbar-title",{on:{click:function(n){return n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:e.$router.push({name:"Home"})}}},[t("span",{attrs:{id:"title"}},[e._v("GRADATION")])]),t("v-spacer"),t("v-btn",{attrs:{icon:""}},[t("v-icon",[e._v("mdi-magnify")])],1),e.Flag.isSigned?t("v-menu",{attrs:{tile:"","offset-y":"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var a=n.on,c=n.attrs;return[t("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",c,!1),a),[null!=e.User.userPicture?t("v-img",{attrs:{src:e.User.userPicture}}):t("v-icon",{attrs:{"x-large":""}},[e._v("mdi-account-circle")])],1)]}}],null,!1,243100087)},[t("v-list",[t("v-list-item",{on:{click:function(n){return e.logOut()}}},[t("v-list-item-title",[e._v("로그아웃")])],1)],1)],1):t("v-btn",{attrs:{icon:"",disabled:""}},[t("v-icon",{attrs:{"x-large":""}},[e._v("mdi-account-circle")])],1),e.Flag.isSigned?t("span",{staticClass:"body-2"},[e._v(e._s(e.User.userName)+" 님 환영합니다.")]):t("span",{staticClass:"body-2"},[e._v("로그인이 필요합니다.")])],1),t("v-content",[t("router-view")],1)],1)},o=[],i=t("5530"),r=t("2f62"),s={data:function(){return{baseURL:"/"}},computed:Object(i["a"])({},Object(r["c"])(["User","Flag"])),methods:Object(i["a"])({},Object(r["b"])(["logOut"]))},u=s,l=(t("621e"),t("2877")),d=t("6544"),h=t.n(d),p=t("7496"),f=t("40dc"),m=t("8336"),g=t("a75b"),v=t("132d"),b=t("adda"),k=t("8860"),_=t("da13"),y=t("5d23"),C=t("e449"),w=t("2fa4"),P=t("2a7f"),S=Object(l["a"])(u,c,o,!1,null,"76366236",null),O=S.exports;h()(S,{VApp:p["a"],VAppBar:f["a"],VBtn:m["a"],VContent:g["a"],VIcon:v["a"],VImg:b["a"],VList:k["a"],VListItem:_["a"],VListItemTitle:y["b"],VMenu:C["a"],VSpacer:w["a"],VToolbarTitle:P["a"]});var U=t("a18c"),I=(t("a4d3"),t("e01a"),t("99af"),t("7db0"),t("c975"),t("bc3a")),F=t.n(I);t("b383");a["a"].use(r["a"]);var T={headers:{"Access-Control-Allow-Origin":"*"}},A=new r["a"].Store({state:{User:{userId:"",userName:"",userPicture:null,Channel:[],currentChannel:null},Posts:[],DailyMission:[],Topics:[],Flag:{isSigned:!1}},mutations:{loginSuccess:function(e,n){e.User.userId=n.data.userId,e.User.userName=n.data.userName,e.User.picture=n.data.picture,e.User.Channel=n.data.channelList,e.Flag.isSigned=!0,U["a"].push({name:"Home"})},logOut:function(e){e.User.userId="",e.User.userName="",e.User.picture="",e.User.Channel=[],e.Flag.isSigned=!1},read_channel:function(e,n){e.User.Channel=n.data},read_post:function(e,n){e.Posts=n.data},read_dailyMission:function(e,n){e.DailyMission=n.data},read_topic:function(e,n){e.Topics=n.data},read_like:function(e,n){var t=e.Posts.find((function(e){return e.id===n.input})),a=e.Posts.indexOf(t);e.Posts[a].likesId=n.res},read_comment:function(e,n){var t=e.Posts.find((function(e){return e.id===n.input})),a=e.Posts.indexOf(t);e.Posts[a].comments=n.res}},actions:{logOut:function(e){var n=e.commit;window.open("/logout","_self"),n("logout")},loading:function(e){var n=e.commit;e.dispatch;F.a.get("/v1/login",T).then((function(e){null!=e.data.userName?n("loginSuccess",e):U["a"].push({name:"SignIn"})})).catch((function(e){console.log(e)}))},create_channel:function(e,n){var t=e.dispatch,a=new FormData;a.append("firstSchool",n.first_school),a.append("secondSchool",n.second_school),a.append("firstPicture",n.first_picture),a.append("secondPicture",n.second_picture),a.append("description",n.description),a.append("category",n.category),F.a.post("/api/v1/channel",a,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}}).then((function(e){200==e.status&&(console.log(e.data),t("read_channel"))})).catch((function(e){console.log(e)}))},read_channel:function(e){var n=e.commit;F.a.get("/api/v1/channel1",T).then((function(e){200==e.status?n("read_channel",e):204==e.status||e.status})).catch((function(e){console.log(e)}))},update_channel:function(e,n){var t=e.dispatch,a={firstSchool:n.first_school,secondSchool:n.second_school,firstPicture:n.first_picture,secondPicture:n.second_picture,description:n.description,category:n.category};F.a.put("/api/v1/channel/".concat(channel_id),a,T).then((function(e){200==e.status&&t("read_channel")})).catch((function(e){console.log(e)}))},delete_channel:function(e){var n=e.dispatch;F.a.delete("/api/v1/channel/".concat(channel_id),T).then((function(e){200==e.status&&n("read_channel")})).catch((function(e){console.log(e)}))},create_post:function(e,n){var t=e.state,a=e.dispatch,c=new FormData;c.append("channelId",t.User.currentChannel),c.append("picture",n.picture),c.append("content",n.content),F.a.post("/api/v1/post",c,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}}).then((function(e){200==e.status?(console.log(e.data),a("read_post")):204==e.status||e.status})).catch((function(e){console.log(e)}))},read_post:function(e){var n=e.state,t=e.commit;F.a.get("/api/v1/post/".concat(n.User.currentChannel),T).then((function(e){200==e.status&&t("read_post",e)})).catch((function(e){console.log(e)}))},update_post:function(e,n){var t=e.dispatch,a=new FormData;a.append("channelId",state.User.currentChannel),a.append("picture",n.picture),a.append("content",n.content),F.a.put("/api/v1/post/".concat(channel_id),a,T).then((function(e){200==e.status&&t("read_channel")})).catch((function(e){console.log(e)}))},delete_post:function(e){var n=e.dispatch;F.a.delete("/api/v1/post/".concat(channel_id),T).then((function(e){200==e.status&&n("read_channel")})).catch((function(e){console.log(e)}))},create_dailyMission:function(e,n){var t=e.state,a=e.dispatch,c=new FormData;c.append("channelId",t.User.currentChannel),c.append("picture",n.picture),c.append("content",n.content),F.a.post("/api/v1/dailymission",c,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}}).then((function(e){200==e.status?(console.log(e.data),a("read_dailyMission")):204==e.status||e.status})).catch((function(e){console.log(e)}))},read_dailyMission:function(e){var n=e.state,t=e.commit;F.a.get("/api/v1/dailymission/".concat(n.User.currentChannel),T).then((function(e){200==e.status&&t("read_dailyMission",e)})).catch((function(e){console.log(e)}))},update_dailyMission:function(e,n){var t=e.dispatch,a=new FormData;a.append("channelId",state.User.currentChannel),a.append("picture",n.picture),a.append("content",n.content),F.a.put("/api/v1/dailymission/".concat(state.User.currentChannel),a,T).then((function(e){200==e.status&&t("read_channel")})).catch((function(e){console.log(e)}))},delete_dailyMission:function(e){var n=e.dispatch;F.a.delete("/api/v1/dailymission/".concat(state.User.currentChannel),T).then((function(e){200==e.status&&n("read_channel")})).catch((function(e){console.log(e)}))},create_topic:function(e,n){var t=e.state,a=e.dispatch,c={title:n.title,content:n.content,category:n.category};F.a.post("/api/v1/weeklytopic/".concat(t.User.currentChannel),c,T).then((function(e){200==e.status?(console.log(e.data),a("read_topic")):204==e.status||e.status})).catch((function(e){console.log(e)}))},read_topic:function(e){var n=e.state,t=e.commit;F.a.get("/api/v1/weeklytopic/".concat(n.User.currentChannel),T).then((function(e){200==e.status&&t("read_topic",e)})).catch((function(e){console.log(e)}))},update_topic:function(e,n){var t=e.dispatch,a={channelId:state.User.currentChannel,content:n.content,title:n.title,category:n.category};F.a.put("/api/v1/dailymission/".concat(channel_id),a,T).then((function(e){200==e.status&&t("read_channel")})).catch((function(e){console.log(e)}))},delete_topic:function(e){var n=e.dispatch;F.a.delete("/api/v1/dailymission/".concat(channel_id,"/").concat(weeklyTopic_id),T).then((function(e){200==e.status&&n("read_channel")})).catch((function(e){console.log(e)}))},create_like:function(e,n){var t=e.dispatch;F.a.post("/api/v1/post/likes/".concat(n.id),T).then((function(e){200==e.status?(console.log(e.data),t("read_like",n.id)):204==e.status||e.status})).catch((function(e){console.log(e)}))},read_like:function(e,n){var t=e.commit;F.a.get("/api/v1/post/likes/".concat(n),T).then((function(e){200==e.status&&(console.log("--------------------------"),console.log(e.data),t("read_like",{input:n,res:e.data}))})).catch((function(e){console.log(e)}))},delete_like:function(e,n){var t=e.state,a=e.dispatch,c=n.likesId.find((function(e){return e.userId===t.User.userId}));console.log(c);var o=c.id;console.log(o),F.a.delete("/api/v1/post/likes/".concat(o),T).then((function(e){200==e.status&&a("read_like",n.id)})).catch((function(e){console.log(e)}))},create_comment:function(e,n){var t=e.dispatch,a={comment:n.comment};F.a.post("/api/v1/post/comment/".concat(n.postId),a,T).then((function(e){200==e.status?(console.log(e.data),t("read_comment",n.postId)):204==e.status||e.status})).catch((function(e){console.log(e)}))},read_comment:function(e,n){e.state;var t=e.commit;F.a.get("/api/v1/post/comment/".concat(n),T).then((function(e){200==e.status&&t("read_comment",{input:n,res:e.data})})).catch((function(e){console.log(e)}))},delete_comment:function(e){var n=e.dispatch;F.a.delete("/api/v1/post/comment/".concat(postId,"/").concat(postCommentId),T).then((function(e){200==e.status&&n("read_comment")})).catch((function(e){console.log(e)}))}},modules:{}}),j=t("f309");a["a"].use(j["a"]);var x=new j["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});t("d5e8"),t("5363");a["a"].config.productionTip=!1,new a["a"]({router:U["a"],store:A,vuetify:x,render:function(e){return e(O)}}).$mount("#app")},"621e":function(e,n,t){"use strict";var a=t("7234"),c=t.n(a);c.a},7234:function(e,n,t){},a18c:function(e,n,t){"use strict";t("d3b7");var a=t("2b0e"),c=t("8c4f");a["a"].use(c["a"]);var o="/v1";n["a"]=new c["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/v1"},{path:"/index.html",redirect:"/v1"},{path:"/index",redirect:"/v1"},{name:"Loading",path:"/v1",component:function(){return t.e("chunk-19e9a39e").then(t.bind(null,"45d6"))}},{name:"SignIn",path:o+"/signIn",component:function(){return Promise.all([t.e("chunk-07e2dbd5"),t.e("chunk-15e3d32a")]).then(t.bind(null,"54e2"))}},{name:"Home",path:o+"/home",component:function(){return Promise.all([t.e("chunk-07e2dbd5"),t.e("chunk-e61c1e02"),t.e("chunk-f62de7ce"),t.e("chunk-20f58a5f"),t.e("chunk-3078b9a7")]).then(t.bind(null,"bb51"))}},{name:"MainPage",path:o+"/channel",component:function(){return Promise.all([t.e("chunk-07e2dbd5"),t.e("chunk-e61c1e02"),t.e("chunk-f62de7ce"),t.e("chunk-8827b29a")]).then(t.bind(null,"4385"))}},{name:"StorySetting",path:o+"/storysetting",component:function(){return Promise.all([t.e("chunk-07e2dbd5"),t.e("chunk-e61c1e02"),t.e("chunk-7d0b30d6"),t.e("setting")]).then(t.bind(null,"3067"))}},{name:"MainSetting",path:o+"/mainsetting",component:function(){return Promise.all([t.e("chunk-07e2dbd5"),t.e("chunk-07c9f058")]).then(t.bind(null,"ed5b"))}},{name:"TopicSetting",path:o+"/topicsetting",component:function(){return Promise.all([t.e("chunk-07e2dbd5"),t.e("chunk-e61c1e02"),t.e("chunk-7d0b30d6"),t.e("chunk-51ce56ee")]).then(t.bind(null,"13ea"))}},{name:"ChannelSetting",path:o+"/channelsetting",component:function(){return Promise.all([t.e("chunk-07e2dbd5"),t.e("chunk-e61c1e02"),t.e("chunk-f62de7ce"),t.e("chunk-20f58a5f"),t.e("chunk-18b69522")]).then(t.bind(null,"203a"))}},{path:o+"/detailtopic",name:"DetailTopic",component:function(){return Promise.all([t.e("chunk-07e2dbd5"),t.e("chunk-e61c1e02"),t.e("chunk-6c9253a7")]).then(t.bind(null,"acd0"))}}]})}});
//# sourceMappingURL=app.7a431a40.js.map