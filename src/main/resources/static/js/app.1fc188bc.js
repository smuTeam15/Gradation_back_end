(function(e){function t(t){for(var a,c,r=t[0],s=t[1],u=t[2],l=0,d=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},c={app:0},o={app:0},i=[];function r(e){return s.p+"js/"+({setting:"setting"}[e]||e)+"."+{"chunk-07e2dbd5":"062e597d","chunk-07c9f058":"0558176d","chunk-15e3d32a":"dc374bd3","chunk-e61c1e02":"d9ed511c","chunk-6c9253a7":"a5b73d49","chunk-7d0b30d6":"80c06eea","chunk-51ce56ee":"5f6c16d3",setting:"dda081bd","chunk-f62de7ce":"41b6c13d","chunk-20f58a5f":"4af5c35f","chunk-18b69522":"2ee20673","chunk-3078b9a7":"7044ff15","chunk-8827b29a":"c9f5ae37","chunk-19e9a39e":"4a7a72f8"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-07e2dbd5":1,"chunk-15e3d32a":1,"chunk-e61c1e02":1,"chunk-6c9253a7":1,"chunk-7d0b30d6":1,"chunk-51ce56ee":1,setting:1,"chunk-f62de7ce":1,"chunk-20f58a5f":1,"chunk-18b69522":1,"chunk-3078b9a7":1,"chunk-8827b29a":1,"chunk-19e9a39e":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({setting:"setting"}[e]||e)+"."+{"chunk-07e2dbd5":"80bd7f89","chunk-07c9f058":"31d6cfe0","chunk-15e3d32a":"fba5bb1e","chunk-e61c1e02":"427541b5","chunk-6c9253a7":"9d21c0d7","chunk-7d0b30d6":"84fd84dd","chunk-51ce56ee":"b1012b12",setting:"c371a780","chunk-f62de7ce":"a200cb6d","chunk-20f58a5f":"fdc5b796","chunk-18b69522":"07a87f9f","chunk-3078b9a7":"849b7eb6","chunk-8827b29a":"3ccac605","chunk-19e9a39e":"b9bb3b7e"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var u=i[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete c[e],h.parentNode.removeChild(h),n(i)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"","max-height":"48px",color:"#fafafa",dense:""}},[n("v-toolbar-title",{on:{click:function(t){return t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.$router.push({name:"Home"})}}},[n("span",{attrs:{id:"title"}},[e._v("GRADATION")])]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-magnify")])],1),e.Flag.isSigned?n("v-menu",{attrs:{tile:"","offset-y":"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,c=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",c,!1),a),[null!=e.User.userPicture?n("v-img",{attrs:{src:e.User.userPicture}}):n("v-icon",{attrs:{"x-large":""}},[e._v("mdi-account-circle")])],1)]}}],null,!1,243100087)},[n("v-list",[n("v-list-item",{on:{click:function(t){return e.logOut()}}},[n("v-list-item-title",[e._v("로그아웃")])],1)],1)],1):n("v-btn",{attrs:{icon:"",disabled:""}},[n("v-icon",{attrs:{"x-large":""}},[e._v("mdi-account-circle")])],1),e.Flag.isSigned?n("span",{staticClass:"body-2"},[e._v(e._s(e.User.userName)+" 님 환영합니다.")]):n("span",{staticClass:"body-2"},[e._v("로그인이 필요합니다.")])],1),n("v-content",[n("router-view")],1)],1)},o=[],i=n("5530"),r=n("2f62"),s={data:function(){return{baseURL:"/"}},computed:Object(i["a"])({},Object(r["c"])(["User","Flag"])),methods:Object(i["a"])({},Object(r["b"])(["logOut"]))},u=s,l=(n("621e"),n("2877")),d=n("6544"),h=n.n(d),p=n("7496"),f=n("40dc"),m=n("8336"),g=n("a75b"),v=n("132d"),b=n("adda"),k=n("8860"),_=n("da13"),y=n("5d23"),w=n("e449"),C=n("2fa4"),P=n("2a7f"),S=Object(l["a"])(u,c,o,!1,null,"76366236",null),O=S.exports;h()(S,{VApp:p["a"],VAppBar:f["a"],VBtn:m["a"],VContent:g["a"],VIcon:v["a"],VImg:b["a"],VList:k["a"],VListItem:_["a"],VListItemTitle:y["b"],VMenu:w["a"],VSpacer:C["a"],VToolbarTitle:P["a"]});var U=n("a18c"),I=(n("a4d3"),n("e01a"),n("99af"),n("7db0"),n("c975"),n("bc3a")),F=n.n(I);n("b383");a["a"].use(r["a"]);var T={headers:{"Access-Control-Allow-Origin":"*"}},A=new r["a"].Store({state:{User:{userId:"",userName:"",userPicture:null,Channel:[],currentChannel:null},Posts:[],DailyMission:[],Topics:[],Flag:{isSigned:!1}},mutations:{loginSuccess:function(e,t){e.User.userId=t.data.userId,e.User.userName=t.data.userName,e.User.picture=t.data.picture,e.User.Channel=t.data.channelList,e.Flag.isSigned=!0,U["a"].push({name:"Home"})},logOut:function(e){e.User.userId="",e.User.userName="",e.User.picture="",e.User.Channel=[],e.Flag.isSigned=!1},read_channel:function(e,t){e.User.Channel=t.data},read_post:function(e,t){e.Posts=t.data},read_dailyMission:function(e,t){e.DailyMission=t.data},read_topic:function(e,t){e.Topics=t.data},read_like:function(e,t){var n=e.Posts.find((function(e){return e.id===t.input})),a=e.Posts.indexOf(n);e.Posts[a].likesId=t.res},read_comment:function(e,t){var n=e.Posts.find((function(e){return e.id===t.input})),a=e.Posts.indexOf(n);e.Posts[a].comments=t.res}},actions:{logOut:function(e){var t=e.commit;window.open("/logout","_self"),t("logout")},loading:function(e){var t=e.commit;e.dispatch;F.a.get("/v1/login",T).then((function(e){null!=e.data.userName?t("loginSuccess",e):U["a"].push({name:"SignIn"})})).catch((function(e){console.log(e)}))},create_channel:function(e,t){var n=e.dispatch,a=new FormData;a.append("firstSchool",t.first_school),a.append("secondSchool",t.second_school),a.append("firstPicture",t.first_picture),a.append("secondPicture",t.second_picture),a.append("description",t.description),a.append("category",t.category),F.a.post("/api/v1/channel",a,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}}).then((function(e){200==e.status&&(console.log(e.data),n("read_channel"))})).catch((function(e){console.log(e)}))},read_channel:function(e){var t=e.commit;F.a.get("/api/v1/channel1",T).then((function(e){200==e.status?t("read_channel",e):204==e.status||e.status})).catch((function(e){console.log(e)}))},update_channel:function(e,t){var n=e.dispatch,a={firstSchool:t.first_school,secondSchool:t.second_school,firstPicture:t.first_picture,secondPicture:t.second_picture,description:t.description,category:t.category};F.a.put("/api/v1/channel/".concat(channel_id),a,T).then((function(e){200==e.status&&n("read_channel")})).catch((function(e){console.log(e)}))},delete_channel:function(e){var t=e.dispatch;F.a.delete("/api/v1/channel/".concat(channel_id),T).then((function(e){200==e.status&&t("read_channel")})).catch((function(e){console.log(e)}))},create_post:function(e,t){var n=e.state,a=e.dispatch,c=new FormData;c.append("channelId",n.User.currentChannel),c.append("picture",t.picture),c.append("content",t.content),F.a.post("/api/v1/post",c,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}}).then((function(e){200==e.status?(console.log(e.data),a("read_post")):204==e.status||e.status})).catch((function(e){console.log(e)}))},read_post:function(e){var t=e.state,n=e.commit;F.a.get("/api/v1/post/".concat(t.User.currentChannel),T).then((function(e){200==e.status&&n("read_post",e)})).catch((function(e){console.log(e)}))},update_post:function(e,t){var n=e.dispatch,a=new FormData;a.append("picture",t.picture),a.append("content",t.content),F.a.put("/api/v1/post/".concat(t),a,T).then((function(e){200==e.status&&n("read_channel")})).catch((function(e){console.log(e)}))},delete_post:function(e,t){var n=e.dispatch;F.a.delete("/api/v1/post/".concat(t),T).then((function(e){200==e.status&&n("read_channel")})).catch((function(e){console.log(e)}))},create_dailyMission:function(e,t){var n=e.state,a=e.dispatch,c=new FormData;c.append("channelId",n.User.currentChannel),c.append("picture",t.picture),c.append("content",t.content),F.a.post("/api/v1/dailymission",c,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}}).then((function(e){200==e.status?(console.log(e.data),a("read_dailyMission")):204==e.status||e.status})).catch((function(e){console.log(e)}))},read_dailyMission:function(e){var t=e.state,n=e.commit;F.a.get("/api/v1/dailymission/".concat(t.User.currentChannel),T).then((function(e){200==e.status&&n("read_dailyMission",e)})).catch((function(e){console.log(e)}))},update_dailyMission:function(e,t){var n=e.dispatch,a=new FormData;a.append("channelId",state.User.currentChannel),a.append("picture",t.picture),a.append("content",t.content),F.a.put("/api/v1/dailymission/".concat(state.User.currentChannel),a,T).then((function(e){200==e.status&&n("read_channel")})).catch((function(e){console.log(e)}))},delete_dailyMission:function(e){var t=e.dispatch;F.a.delete("/api/v1/dailymission/".concat(state.User.currentChannel),T).then((function(e){200==e.status&&t("read_channel")})).catch((function(e){console.log(e)}))},create_topic:function(e,t){var n=e.state,a=e.dispatch,c={title:t.title,content:t.content,category:t.category};F.a.post("/api/v1/weeklytopic/".concat(n.User.currentChannel),c,T).then((function(e){200==e.status?(console.log(e.data),a("read_topic")):204==e.status||e.status})).catch((function(e){console.log(e)}))},read_topic:function(e){var t=e.state,n=e.commit;F.a.get("/api/v1/weeklytopic/".concat(t.User.currentChannel),T).then((function(e){200==e.status&&n("read_topic",e)})).catch((function(e){console.log(e)}))},update_topic:function(e,t){var n=e.dispatch,a={channelId:state.User.currentChannel,content:t.content,title:t.title,category:t.category};F.a.put("/api/v1/dailymission/".concat(channel_id),a,T).then((function(e){200==e.status&&n("read_channel")})).catch((function(e){console.log(e)}))},delete_topic:function(e){var t=e.dispatch;F.a.delete("/api/v1/dailymission/".concat(channel_id,"/").concat(weeklyTopic_id),T).then((function(e){200==e.status&&t("read_channel")})).catch((function(e){console.log(e)}))},create_like:function(e,t){var n=e.dispatch;F.a.post("/api/v1/post/likes/".concat(t.id),T).then((function(e){200==e.status?(console.log(e.data),n("read_like",t.id)):204==e.status||e.status})).catch((function(e){console.log(e)}))},read_like:function(e,t){var n=e.commit;F.a.get("/api/v1/post/likes/".concat(t),T).then((function(e){200==e.status&&(console.log("--------------------------"),console.log(e.data),n("read_like",{input:t,res:e.data}))})).catch((function(e){console.log(e)}))},delete_like:function(e,t){var n=e.state,a=e.dispatch,c=t.likesId.find((function(e){return e.userId===n.User.userId}));console.log(c);var o=c.id;console.log(o),F.a.delete("/api/v1/post/likes/".concat(o),T).then((function(e){200==e.status&&a("read_like",t.id)})).catch((function(e){console.log(e)}))},create_comment:function(e,t){var n=e.dispatch,a={comment:t.comment};F.a.post("/api/v1/post/comment/".concat(t.postId),a,T).then((function(e){200==e.status?(console.log(e.data),n("read_comment",t.postId)):204==e.status||e.status})).catch((function(e){console.log(e)}))},read_comment:function(e,t){var n=e.commit;F.a.get("/api/v1/post/comment/".concat(t),T).then((function(e){200==e.status&&n("read_comment",{input:t,res:e.data})})).catch((function(e){console.log(e)}))},delete_comment:function(e,t){var n=e.dispatch;F.a.delete("/api/v1/post/comment/".concat(t.commentId),T).then((function(e){200==e.status&&n("read_comment",t.postId)})).catch((function(e){console.log(e)}))}},modules:{}}),j=n("f309");a["a"].use(j["a"]);var x=new j["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});n("d5e8"),n("5363");a["a"].config.productionTip=!1,new a["a"]({router:U["a"],store:A,vuetify:x,render:function(e){return e(O)}}).$mount("#app")},"621e":function(e,t,n){"use strict";var a=n("7234"),c=n.n(a);c.a},7234:function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var a=n("2b0e"),c=n("8c4f");a["a"].use(c["a"]);var o="/v1";t["a"]=new c["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/v1"},{path:"/index.html",redirect:"/v1"},{path:"/index",redirect:"/v1"},{name:"Loading",path:"/v1",component:function(){return n.e("chunk-19e9a39e").then(n.bind(null,"45d6"))}},{name:"SignIn",path:o+"/signIn",component:function(){return Promise.all([n.e("chunk-07e2dbd5"),n.e("chunk-15e3d32a")]).then(n.bind(null,"54e2"))}},{name:"Home",path:o+"/home",component:function(){return Promise.all([n.e("chunk-07e2dbd5"),n.e("chunk-e61c1e02"),n.e("chunk-f62de7ce"),n.e("chunk-20f58a5f"),n.e("chunk-3078b9a7")]).then(n.bind(null,"bb51"))}},{name:"MainPage",path:o+"/channel",component:function(){return Promise.all([n.e("chunk-07e2dbd5"),n.e("chunk-e61c1e02"),n.e("chunk-f62de7ce"),n.e("chunk-8827b29a")]).then(n.bind(null,"4385"))}},{name:"StorySetting",path:o+"/storysetting",component:function(){return Promise.all([n.e("chunk-07e2dbd5"),n.e("chunk-e61c1e02"),n.e("chunk-7d0b30d6"),n.e("setting")]).then(n.bind(null,"3067"))}},{name:"MainSetting",path:o+"/mainsetting",component:function(){return Promise.all([n.e("chunk-07e2dbd5"),n.e("chunk-07c9f058")]).then(n.bind(null,"ed5b"))}},{name:"TopicSetting",path:o+"/topicsetting",component:function(){return Promise.all([n.e("chunk-07e2dbd5"),n.e("chunk-e61c1e02"),n.e("chunk-7d0b30d6"),n.e("chunk-51ce56ee")]).then(n.bind(null,"13ea"))}},{name:"ChannelSetting",path:o+"/channelsetting",component:function(){return Promise.all([n.e("chunk-07e2dbd5"),n.e("chunk-e61c1e02"),n.e("chunk-f62de7ce"),n.e("chunk-20f58a5f"),n.e("chunk-18b69522")]).then(n.bind(null,"203a"))}},{path:o+"/detailtopic",name:"DetailTopic",component:function(){return Promise.all([n.e("chunk-07e2dbd5"),n.e("chunk-e61c1e02"),n.e("chunk-6c9253a7")]).then(n.bind(null,"acd0"))}}]})}});
//# sourceMappingURL=app.1fc188bc.js.map