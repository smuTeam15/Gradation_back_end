(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-626eca68"],{"13ea":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"fill-height":""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"page-body"},[a("v-card",[a("div",{staticClass:"story pa-3 pb-1"},[a("div",{staticClass:"pa-3"},[a("h1",[e._v("Weekly Topic Setting")])]),a("v-divider"),a("div",{staticClass:"pa-5"},[a("h2",[e._v("Post Weekly Topic")])]),a("div",{staticClass:"px-5"},[a("v-text-field",{attrs:{placeholder:"Input Weekly Topic","hide-details":"auto",solo:"",outlined:"",flat:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("v-btn",{staticClass:"my-2 white--text",attrs:{depressed:"",small:"",color:"blue"}},[e._v("Update")])]},proxy:!0}])})],1),a("v-divider",{staticClass:"mt-5"}),a("div",{staticClass:"pt-5 px-5 d-flex justify-space-between align-center"},[a("h2",{staticClass:"mt-2",attrs:{align:"left"}},[e._v("Recommend Topics")]),a("div",[a("v-text-field",{attrs:{placeholder:"(Option) Keyword","hide-details":"auto",solo:"",outlined:"",flat:""}})],1)]),a("div",{staticClass:"pt-4 px-2"},[a("v-chip-group",{attrs:{mandatory:"","active-class":"blue--text"}},e._l(e.category,(function(t){return a("v-chip",{key:e.category.indexOf(t),on:{click:function(t){e.asd=!0}}},[e._v(e._s(t))])})),1)],1),a("div",{staticClass:"pr-7 pt-1",attrs:{align:"right"}},[a("v-btn",{staticClass:"my-2 white--text",attrs:{depressed:"",small:"",color:"blue"}},[e._v("Update")])],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:e.asd,expression:"asd"}],staticClass:"mx-auto",attrs:{"max-width":"600"}},[a("v-list",[a("v-list-item-group",{attrs:{"active-class":"border",color:"indigo"}},e._l(e.science,(function(t){return a("v-list-item",{key:e.science.indexOf(t)},[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)})),1)],1)],1),a("v-divider",{staticClass:"mt-5"}),a("div",{staticClass:"px-5 d-flex justify-space-between align-center"},[a("h2",{attrs:{align:"left"}},[e._v("Auto Recommend")]),a("div",{staticClass:"pb-3"},[a("v-switch",{attrs:{"input-value":"true",color:"blue","hide-details":""}})],1)]),a("div",{staticClass:"text--disabled pl-5"},[e._v(" *해당 항목을 활성화하게 되면 뉴스 토픽이 매주 자동으로 업데이트됩니다! ")])],1)])],1)])],1)],1)},i=[],n=a("bc3a"),o=a.n(n),c=a("a889"),l=a("a2c0"),r={data:function(){return{DataString:null,selectionType:"leaf",selection:[],category:c["a"],science:l["a"],asd:!1,items:[{id:1,name:"스포츠",children:[{id:2,name:"농구"},{id:3,name:"축구"},{id:4,name:"배구"}]},{id:5,name:"여가",children:[{id:6,name:"여행"},{id:7,name:"독서"},{id:8,name:"영화"}]}]}},methods:{getData:function(){var e=this;o.a.get("http://169.63.212.7:8000/api/public").then((function(t){e.DataString=t.data,console.log(e.DataString)})).catch((function(e){console.log(e)}))}}},h=r,d=a("2877"),u=a("6544"),p=a.n(u),m=a("8336"),v=a("b0af"),f=a("cc20"),g=a("5530"),b=(a("8f5a"),a("7efd")),y=a("a9ad"),w=a("58df"),k=Object(w["a"])(b["a"],y["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object(g["a"])(Object(g["a"])({},b["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(e){e&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object(g["a"])({},b["a"].options.methods.genData.call(this)))}}}),C=a("62ad"),x=a("a523"),T=a("ce7e"),A=a("8860"),S=a("da13"),V=a("5d23"),_=a("1baa"),j=a("0fd9"),I=a("b73d"),N=a("8654"),O=Object(d["a"])(h,s,i,!1,null,null,null);t["default"]=O.exports;p()(O,{VBtn:m["a"],VCard:v["a"],VChip:f["a"],VChipGroup:k,VCol:C["a"],VContainer:x["a"],VDivider:T["a"],VList:A["a"],VListItem:S["a"],VListItemContent:V["a"],VListItemGroup:_["a"],VListItemTitle:V["b"],VRow:j["a"],VSwitch:I["a"],VTextField:N["a"]})},"8f5a":function(e,t,a){},a2c0:function(e,t,a){"use strict";t["a"]=[{source:{id:"",name:"Vosveteit.sk"},author:"",title:'Vedci našli "spínač", ktorý v myšiach vyvolá hibernáciu. Ide o objav, ktorý môže pomôcť ľuďom v mnohých oblastiach - Vosveteit.sk',description:"Vedci našli skupinu neurónov, ktoré dokážu v myši vyvolať stav hibernácie. Hibernácia je užitočná preto, lebo šetrí energiu živočícha.",url:"https://vosveteit.sk/vedci-nasli-spinac-ktory-v-mysiach-vyvola-hibernaciu-ide-o-objav-ktory-moze-pomoct-ludom-v-mnohych-oblastiach/",urlToImage:"https://i2.wp.com/vosveteit.sk/wp-content/uploads/2020/06/titulka-hibernácia.jpg?fit=1200%2C800&ssl=1",publishedAt:"2020-06-12T16:38:37Z",content:"Dve nezávislé túdie identifikovali v myom mozgu záhadný spína, ktorý v nich spustí stav hibernácie. Ide o objav, vaka ktorému by sme sa v budúcnosti mohli naui, ako tento stav vyvola aj u udí.\r\nKe zv… [+2213 chars]"},{source:{id:"ars-technica",name:"Ars Technica"},author:"Eric Berger",title:"NASA’s new chief of human spaceflight has a commercial background - Ars Technica",description:"“I’m a big fan of Kathy Lueders!”",url:"https://arstechnica.com/science/2020/06/nasas-new-chief-of-human-spaceflight-has-a-commercial-background/",urlToImage:"https://cdn.arstechnica.net/wp-content/uploads/2020/06/NHQ202005310018_large-760x380.jpg",publishedAt:"2020-06-12T16:34:00Z",content:"Enlarge/ NASA's Kathy Lueders celebrates Crew Dragon's hatch opening on May 31.\r\n7 with 7 posters participating\r\nOn Friday morning, NASA Administrator Jim Bridenstine announced that he had selected K… [+2854 chars]"},{source:{id:"",name:"Phys.Org"},author:"Science X staff",title:"Hot holes are key in a plasmon-induced reaction of oxygen molecules on silver surfaces - Phys.Org",description:"Chemists at RIKEN have discovered why shining light on silver nanoparticles causes oxygen molecules attached to their surfaces to break off. This insight will help researchers design new catalysts that harness light energy.",url:"https://phys.org/news/2020-06-hot-holes-key-plasmon-induced-reaction.html",urlToImage:"https://scx2.b-cdn.net/gfx/news/2020/hotholesarek.jpg",publishedAt:"2020-06-12T16:33:51Z",content:"Chemists at RIKEN have discovered why shining light on silver nanoparticles causes oxygen molecules attached to their surfaces to break off. This insight will help researchers design new catalysts th… [+3170 chars]"},{source:{id:"",name:"CNBC"},author:"Michael Sheetz",title:"NASA's Kathy Lueders, who oversaw the SpaceX astronaut launch, will lead agency's 2024 moon effort - CNBC",description:"The NASA official who oversaw the first SpaceX astronaut launch last month will now lead all the agency's human spaceflight efforts.",url:"https://www.cnbc.com/2020/06/12/nasas-kathy-lueders-will-lead-2024-moon-effort-after-spacex-success.html",urlToImage:"https://image.cnbcfm.com/api/v1/image/106575856-1591977367510ksc-20200522-ph-kls02_0001_large.jpg?v=1591977430",publishedAt:"2020-06-12T16:27:37Z",content:"The NASA official who oversaw the first SpaceX astronaut launch last month will now lead all the agency's human spaceflight efforts, including its goal to land astronauts on the moon by 2024.\r\nNASA c… [+1498 chars]"},{source:{id:"",name:"ZME Science"},author:"Fermin Koop",title:"Half the planet is still free from a significant human influence - and it should remain like that - ZME Science",description:"Conservationists call to expand the amount of land formally protected.",url:"https://www.zmescience.com/science/half-planet-free-human-influence-05232/",urlToImage:"https://cdn.zmescience.com/wp-content/uploads/2020/06/F1.large_.jpg",publishedAt:"2020-06-12T16:19:39Z",content:"About half of the Earths ice-free land remains free of significant influence from humans, according to a new study, which assessed the conversion of natural lands across the globe. The findings highl… [+3750 chars]"}]},a889:function(e,t,a){"use strict";t["a"]=["business","entertainment","general","health","science","sports","technology"]}}]);
//# sourceMappingURL=chunk-626eca68.2e33ae73.js.map