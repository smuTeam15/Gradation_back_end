(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51ce56ee"],{"13ea":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"page-body"},[a("v-card",[a("div",{staticClass:"story pa-3 pb-1"},[a("div",{staticClass:"pa-3"},[a("h1",[t._v("Weekly Topic Setting")])]),a("v-divider"),a("div",{staticClass:"pa-5"},[a("h2",[t._v("Post Weekly Topic")])]),a("div",{staticClass:"px-5"},[a("v-text-field",{attrs:{placeholder:"Input Weekly Topic","hide-details":"auto",solo:"",outlined:"",flat:""},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{staticClass:"my-2 white--text",attrs:{depressed:"",small:"",color:"blue"}},[t._v("Update")])]},proxy:!0}])})],1),a("v-divider",{staticClass:"mt-5"}),a("div",{staticClass:"pt-5 px-5 d-flex justify-space-between align-center"},[a("h2",{staticClass:"mt-2",attrs:{align:"left"}},[t._v("Recommend Topics")]),a("div",[a("v-text-field",{attrs:{placeholder:"(Option) Keyword","hide-details":"auto",solo:"",outlined:"",flat:""}})],1)]),a("div",{staticClass:"pt-4 px-2"},[a("v-chip-group",{attrs:{mandatory:"","active-class":"blue--text"}},t._l(t.categories,(function(e){return a("v-chip",{key:t.categories.indexOf(e),on:{click:function(e){t.asd=!0}}},[t._v(t._s(e))])})),1)],1),a("div",{staticClass:"pr-7 pt-1",attrs:{align:"right"}},[a("v-btn",{staticClass:"my-2 white--text",attrs:{depressed:"",small:"",color:"blue"}},[t._v("Update")])],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.asd,expression:"asd"}],staticClass:"mx-auto",attrs:{"max-width":"600"}},[a("v-list",[a("v-list-item-group",{attrs:{"active-class":"border",color:"indigo"}},t._l(t.science,(function(e){return a("v-list-item",{key:t.science.indexOf(e)},[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)],1),a("v-divider",{staticClass:"mt-5"}),a("div",{staticClass:"pt-5 px-5 d-flex justify-space-between align-center"},[a("h2",{staticClass:"mt-2",attrs:{align:"left"}},[t._v("Create Topics")])]),a("div",{staticClass:"pt-4 px-2"},[a("v-text-field",{attrs:{placeholder:"제목...","hide-details":"auto"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("div",{staticClass:"pt-4 px-2"},[a("v-textarea",{attrs:{outlined:"",name:"input-7-4",placeholder:"내용..."},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),a("div",{staticClass:"pt-4 px-2"},[a("v-chip-group",{attrs:{mandatory:"","active-class":"blue--text"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},t._l(t.categories,(function(e){return a("v-chip",{key:t.categories.indexOf(e)},[t._v(t._s(e))])})),1)],1),a("div",{staticClass:"pr-7 pt-1",attrs:{align:"right"}},[a("v-btn",{staticClass:"my-2 white--text",attrs:{depressed:"",small:"",color:"blue"},on:{click:function(e){return t.create_topic({title:t.title,content:t.content,item:t.item})}}},[t._v("Create")])],1),a("v-divider",{staticClass:"mt-5"}),a("div",{staticClass:"px-5 d-flex justify-space-between align-center"},[a("h2",{attrs:{align:"left"}},[t._v("Auto Recommend")]),a("div",{staticClass:"pb-3"},[a("v-switch",{attrs:{"input-value":"true",color:"blue","hide-details":""}})],1)]),a("div",{staticClass:"text--disabled pl-5"},[t._v(" *해당 항목을 활성화하게 되면 뉴스 토픽이 매주 자동으로 업데이트됩니다! ")])],1)])],1)])],1)],1)},s=[],n=a("5530"),o=(a("bc3a"),a("5121")),c=a("a2c0"),l=a("2f62"),r={data:function(){return{DataString:null,selectionType:"leaf",selection:[],title:"",content:"",category:null,categories:o["a"],science:c["a"],asd:!1,items:[{id:1,name:"스포츠",children:[{id:2,name:"농구"},{id:3,name:"축구"},{id:4,name:"배구"}]},{id:5,name:"여가",children:[{id:6,name:"여행"},{id:7,name:"독서"},{id:8,name:"영화"}]}]}},methods:Object(n["a"])({},Object(l["b"])(["create_topic","read_topic","update_topic","delete_topic"]))},h=r,u=a("2877"),d=a("6544"),p=a.n(d),m=a("8336"),v=a("b0af"),f=a("cc20"),g=(a("8f5a"),a("7efd")),w=a("a9ad"),y=a("58df"),b=Object(y["a"])(g["a"],w["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},g["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object(n["a"])({},g["a"].options.methods.genData.call(this)))}}}),x=a("62ad"),k=a("a523"),C=a("ce7e"),T=a("8860"),_=a("da13"),I=a("5d23"),A=a("1baa"),j=a("0fd9"),S=a("b73d"),V=a("8654"),N=a("a844"),O=Object(u["a"])(h,i,s,!1,null,null,null);e["default"]=O.exports;p()(O,{VBtn:m["a"],VCard:v["a"],VChip:f["a"],VChipGroup:b,VCol:x["a"],VContainer:k["a"],VDivider:C["a"],VList:T["a"],VListItem:_["a"],VListItemContent:I["a"],VListItemGroup:A["a"],VListItemTitle:I["b"],VRow:j["a"],VSwitch:S["a"],VTextField:V["a"],VTextarea:N["a"]})},1681:function(t,e,a){},5121:function(t,e,a){"use strict";e["a"]=["Business","Entertainment","General","Health","Science","Sports","Technology"]},"8f5a":function(t,e,a){},a2c0:function(t,e,a){"use strict";e["a"]=[{source:{id:"",name:"Vosveteit.sk"},author:"",title:'Vedci našli "spínač", ktorý v myšiach vyvolá hibernáciu. Ide o objav, ktorý môže pomôcť ľuďom v mnohých oblastiach - Vosveteit.sk',description:"Vedci našli skupinu neurónov, ktoré dokážu v myši vyvolať stav hibernácie. Hibernácia je užitočná preto, lebo šetrí energiu živočícha.",url:"https://vosveteit.sk/vedci-nasli-spinac-ktory-v-mysiach-vyvola-hibernaciu-ide-o-objav-ktory-moze-pomoct-ludom-v-mnohych-oblastiach/",urlToImage:"https://i2.wp.com/vosveteit.sk/wp-content/uploads/2020/06/titulka-hibernácia.jpg?fit=1200%2C800&ssl=1",publishedAt:"2020-06-12T16:38:37Z",content:"Dve nezávislé túdie identifikovali v myom mozgu záhadný spína, ktorý v nich spustí stav hibernácie. Ide o objav, vaka ktorému by sme sa v budúcnosti mohli naui, ako tento stav vyvola aj u udí.\r\nKe zv… [+2213 chars]"},{source:{id:"ars-technica",name:"Ars Technica"},author:"Eric Berger",title:"NASA’s new chief of human spaceflight has a commercial background - Ars Technica",description:"“I’m a big fan of Kathy Lueders!”",url:"https://arstechnica.com/science/2020/06/nasas-new-chief-of-human-spaceflight-has-a-commercial-background/",urlToImage:"https://cdn.arstechnica.net/wp-content/uploads/2020/06/NHQ202005310018_large-760x380.jpg",publishedAt:"2020-06-12T16:34:00Z",content:"Enlarge/ NASA's Kathy Lueders celebrates Crew Dragon's hatch opening on May 31.\r\n7 with 7 posters participating\r\nOn Friday morning, NASA Administrator Jim Bridenstine announced that he had selected K… [+2854 chars]"},{source:{id:"",name:"Phys.Org"},author:"Science X staff",title:"Hot holes are key in a plasmon-induced reaction of oxygen molecules on silver surfaces - Phys.Org",description:"Chemists at RIKEN have discovered why shining light on silver nanoparticles causes oxygen molecules attached to their surfaces to break off. This insight will help researchers design new catalysts that harness light energy.",url:"https://phys.org/news/2020-06-hot-holes-key-plasmon-induced-reaction.html",urlToImage:"https://scx2.b-cdn.net/gfx/news/2020/hotholesarek.jpg",publishedAt:"2020-06-12T16:33:51Z",content:"Chemists at RIKEN have discovered why shining light on silver nanoparticles causes oxygen molecules attached to their surfaces to break off. This insight will help researchers design new catalysts th… [+3170 chars]"},{source:{id:"",name:"CNBC"},author:"Michael Sheetz",title:"NASA's Kathy Lueders, who oversaw the SpaceX astronaut launch, will lead agency's 2024 moon effort - CNBC",description:"The NASA official who oversaw the first SpaceX astronaut launch last month will now lead all the agency's human spaceflight efforts.",url:"https://www.cnbc.com/2020/06/12/nasas-kathy-lueders-will-lead-2024-moon-effort-after-spacex-success.html",urlToImage:"https://image.cnbcfm.com/api/v1/image/106575856-1591977367510ksc-20200522-ph-kls02_0001_large.jpg?v=1591977430",publishedAt:"2020-06-12T16:27:37Z",content:"The NASA official who oversaw the first SpaceX astronaut launch last month will now lead all the agency's human spaceflight efforts, including its goal to land astronauts on the moon by 2024.\r\nNASA c… [+1498 chars]"},{source:{id:"",name:"ZME Science"},author:"Fermin Koop",title:"Half the planet is still free from a significant human influence - and it should remain like that - ZME Science",description:"Conservationists call to expand the amount of land formally protected.",url:"https://www.zmescience.com/science/half-planet-free-human-influence-05232/",urlToImage:"https://cdn.zmescience.com/wp-content/uploads/2020/06/F1.large_.jpg",publishedAt:"2020-06-12T16:19:39Z",content:"About half of the Earths ice-free land remains free of significant influence from humans, according to a new study, which assessed the conversion of natural lands across the globe. The findings highl… [+3750 chars]"}]},a844:function(t,e,a){"use strict";a("a9e3");var i=a("5530"),s=(a("1681"),a("8654")),n=a("58df"),o=Object(n["a"])(s["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(i["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},s["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=chunk-51ce56ee.89c5f626.js.map