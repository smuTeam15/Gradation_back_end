(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18b69522"],{"0c18":function(e,t,a){},"203a":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"fill-height":""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"page-body"},[a("v-card",[a("div",{staticClass:"story pa-3 pb-1"},[a("div",{staticClass:"pa-3"},[a("h1",[e._v("Channel Setting")])]),a("v-divider"),a("div",{staticClass:"pa-5 d-flex justify-space-between align-center"},[a("h2",{attrs:{align:"left"}},[e._v("Update Channel")]),a("v-btn",{staticClass:"my-2 white--text",attrs:{depressed:"",small:"",color:"blue"},on:{click:function(t){e.uDialog=!e.uDialog}}},[e._v("Update")])],1),a("v-divider"),a("div",{staticClass:"pa-5 d-flex justify-space-between align-center"},[a("h2",{attrs:{align:"left"}},[e._v("Delete Channel")]),a("v-btn",{staticClass:"my-2 white--text",attrs:{depressed:"",small:"",color:"blue"},on:{click:function(t){e.dDialog=!e.dDialog}}},[e._v("Delete")])],1),a("div",{staticClass:"text--disabled pl-5"},[e._v("*채널 관리자가 아니면 Update Channel, Delete Channel은 불가합니다!")])],1)])],1),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.uDialog,callback:function(t){e.uDialog=t},expression:"uDialog"}},[a("v-card",[a("v-card-title",[a("strong",[e._v("채널 수정")])]),a("v-divider"),a("v-card-text",[a("div",{staticClass:"pt-3"},[a("v-text-field",{attrs:{label:"Solo",placeholder:"1st School",solo:"","append-outer-icon":"mdi-ampersand"},model:{value:e.first_school,callback:function(t){e.first_school=t},expression:"first_school"}}),a("v-text-field",{attrs:{label:"Solo",placeholder:"2nd School",solo:""},model:{value:e.second_school,callback:function(t){e.second_school=t},expression:"second_school"}}),a("v-text-field",{attrs:{label:"Solo",placeholder:"Description",solo:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),a("div",{staticClass:"pb-3"},[a("v-file-input",{attrs:{label:"1st School logo",accept:"image/*",chips:"","prepend-icon":"mdi-camera"},model:{value:e.first_picture,callback:function(t){e.first_picture=t},expression:"first_picture"}}),a("v-file-input",{attrs:{label:"2nd School logo",accept:"image/*",chips:"","prepend-icon":"mdi-camera"},model:{value:e.second_picture,callback:function(t){e.second_picture=t},expression:"second_picture"}})],1),a("div",{staticClass:"pt-3"},[a("v-select",{attrs:{items:e.categories,label:"Category",solo:""},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}})],1)]),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"grey darken-1"},on:{click:function(t){return e.cancel()}}},[e._v("Cancel")]),a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.update_channel({first_school:e.first_school,second_school:e.second_school,first_picture:e.first_picture,second_picture:e.second_picture,description:e.description,category:e.category}),e.cancel()}}},[e._v("Update")])],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.dDialog,callback:function(t){e.dDialog=t},expression:"dDialog"}},[a("v-card",[a("v-card-title",{staticClass:"pa-0"},[a("v-alert",{attrs:{tile:"",prominent:"",type:"error",width:"100%"}},[a("h3",[e._v("채널 삭제")])])],1),a("v-card-text",[a("div",{staticClass:"pt-3"},[a("p",[e._v("채널을 삭제하면 채널 가입자들이 더 이상 채널을 이용할 수 없게됩니다.")]),a("p",[e._v("신중히 결정하세요.")])])]),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"grey darken-1"},on:{click:function(t){return e.cancel()}}},[e._v("Cancel")]),a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.delete_channel(),e.cancel()}}},[e._v("Delete")])],1)],1)],1)],1)],1)],1)},s=[],o=(a("a4d3"),a("e01a"),a("5530")),n=(a("bc3a"),a("5121")),c=(a("a2c0"),a("2f62")),r={data:function(){return{fab:!1,uDialog:!1,dDialog:!1,first_school:"",second_school:"",first_picture:null,second_picture:null,description:"",category:"",categories:n["a"]}},computed:Object(o["a"])({},Object(c["c"])(["User"])),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["create_channel","read_channel","update_channel","delete_channel"])),{},{cancel:function(){this.first_school="",this.second_school="",this.first_picture=null,this.second_picture=null,this.category="",this.description="",this.uDialog=!1,this.dDialog=!1}})},l=r,d=a("2877"),h=a("6544"),u=a.n(h),p=(a("caad"),a("ade3")),v=(a("0c18"),a("10d2")),f=a("afdd"),m=a("9d26"),g=a("f2e7"),b=a("7560"),_=a("f40d"),y=a("58df"),w=a("d9bd"),C=Object(y["a"])(v["a"],g["a"],_["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var e={staticClass:"v-alert__border",class:Object(p["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(f["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(m["a"],{props:{color:t}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(m["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=Object(o["a"])(Object(o["a"])({},v["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||b["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(w["a"])("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var e={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}}),k=a("8336"),x=a("b0af"),A=a("99d9"),S=a("62ad"),D=a("a523"),j=a("169a"),B=a("ce7e"),T=a("23a7"),V=a("0fd9"),I=a("b974"),$=a("2fa4"),E=a("8654"),O=Object(d["a"])(l,i,s,!1,null,null,null);t["default"]=O.exports;u()(O,{VAlert:C,VBtn:k["a"],VCard:x["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:A["c"],VCol:S["a"],VContainer:D["a"],VDialog:j["a"],VDivider:B["a"],VFileInput:T["a"],VRow:V["a"],VSelect:I["a"],VSpacer:$["a"],VTextField:E["a"]})},a2c0:function(e,t,a){"use strict";t["a"]=[{source:{id:"",name:"Vosveteit.sk"},author:"",title:'Vedci našli "spínač", ktorý v myšiach vyvolá hibernáciu. Ide o objav, ktorý môže pomôcť ľuďom v mnohých oblastiach - Vosveteit.sk',description:"Vedci našli skupinu neurónov, ktoré dokážu v myši vyvolať stav hibernácie. Hibernácia je užitočná preto, lebo šetrí energiu živočícha.",url:"https://vosveteit.sk/vedci-nasli-spinac-ktory-v-mysiach-vyvola-hibernaciu-ide-o-objav-ktory-moze-pomoct-ludom-v-mnohych-oblastiach/",urlToImage:"https://i2.wp.com/vosveteit.sk/wp-content/uploads/2020/06/titulka-hibernácia.jpg?fit=1200%2C800&ssl=1",publishedAt:"2020-06-12T16:38:37Z",content:"Dve nezávislé túdie identifikovali v myom mozgu záhadný spína, ktorý v nich spustí stav hibernácie. Ide o objav, vaka ktorému by sme sa v budúcnosti mohli naui, ako tento stav vyvola aj u udí.\r\nKe zv… [+2213 chars]"},{source:{id:"ars-technica",name:"Ars Technica"},author:"Eric Berger",title:"NASA’s new chief of human spaceflight has a commercial background - Ars Technica",description:"“I’m a big fan of Kathy Lueders!”",url:"https://arstechnica.com/science/2020/06/nasas-new-chief-of-human-spaceflight-has-a-commercial-background/",urlToImage:"https://cdn.arstechnica.net/wp-content/uploads/2020/06/NHQ202005310018_large-760x380.jpg",publishedAt:"2020-06-12T16:34:00Z",content:"Enlarge/ NASA's Kathy Lueders celebrates Crew Dragon's hatch opening on May 31.\r\n7 with 7 posters participating\r\nOn Friday morning, NASA Administrator Jim Bridenstine announced that he had selected K… [+2854 chars]"},{source:{id:"",name:"Phys.Org"},author:"Science X staff",title:"Hot holes are key in a plasmon-induced reaction of oxygen molecules on silver surfaces - Phys.Org",description:"Chemists at RIKEN have discovered why shining light on silver nanoparticles causes oxygen molecules attached to their surfaces to break off. This insight will help researchers design new catalysts that harness light energy.",url:"https://phys.org/news/2020-06-hot-holes-key-plasmon-induced-reaction.html",urlToImage:"https://scx2.b-cdn.net/gfx/news/2020/hotholesarek.jpg",publishedAt:"2020-06-12T16:33:51Z",content:"Chemists at RIKEN have discovered why shining light on silver nanoparticles causes oxygen molecules attached to their surfaces to break off. This insight will help researchers design new catalysts th… [+3170 chars]"},{source:{id:"",name:"CNBC"},author:"Michael Sheetz",title:"NASA's Kathy Lueders, who oversaw the SpaceX astronaut launch, will lead agency's 2024 moon effort - CNBC",description:"The NASA official who oversaw the first SpaceX astronaut launch last month will now lead all the agency's human spaceflight efforts.",url:"https://www.cnbc.com/2020/06/12/nasas-kathy-lueders-will-lead-2024-moon-effort-after-spacex-success.html",urlToImage:"https://image.cnbcfm.com/api/v1/image/106575856-1591977367510ksc-20200522-ph-kls02_0001_large.jpg?v=1591977430",publishedAt:"2020-06-12T16:27:37Z",content:"The NASA official who oversaw the first SpaceX astronaut launch last month will now lead all the agency's human spaceflight efforts, including its goal to land astronauts on the moon by 2024.\r\nNASA c… [+1498 chars]"},{source:{id:"",name:"ZME Science"},author:"Fermin Koop",title:"Half the planet is still free from a significant human influence - and it should remain like that - ZME Science",description:"Conservationists call to expand the amount of land formally protected.",url:"https://www.zmescience.com/science/half-planet-free-human-influence-05232/",urlToImage:"https://cdn.zmescience.com/wp-content/uploads/2020/06/F1.large_.jpg",publishedAt:"2020-06-12T16:19:39Z",content:"About half of the Earths ice-free land remains free of significant influence from humans, according to a new study, which assessed the conversion of natural lands across the globe. The findings highl… [+3750 chars]"}]},afdd:function(e,t,a){"use strict";var i=a("8336");t["a"]=i["a"]}}]);
//# sourceMappingURL=chunk-18b69522.b9bf6f62.js.map