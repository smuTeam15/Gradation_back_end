(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-246f1d81"],{"0fd9":function(t,e,i){"use strict";i("99af"),i("4160"),i("caad"),i("13d5"),i("4ec9"),i("b64b"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("5319"),i("159b"),i("ddb0");var a=i("ade3"),n=i("5530"),s=(i("4b85"),i("2b0e")),o=i("d9f7"),l=i("80d2"),c=["sm","md","lg","xl"],r=["start","end","center"];function u(t,e){return c.reduce((function(i,a){return i[t+Object(l["u"])(a)]=e(),i}),{})}var h=function(t){return[].concat(r,["baseline","stretch"]).includes(t)},d=u("align",(function(){return{type:String,default:null,validator:h}})),p=function(t){return[].concat(r,["space-between","space-around"]).includes(t)},f=u("justify",(function(){return{type:String,default:null,validator:p}})),v=function(t){return[].concat(r,["space-between","space-around","stretch"]).includes(t)},m=u("alignContent",(function(){return{type:String,default:null,validator:v}})),g={align:Object.keys(d),justify:Object.keys(f),alignContent:Object.keys(m)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){var a=b[t];if(null!=i){if(e){var n=e.replace(t,"");a+="-".concat(n)}return a+="-".concat(i),a.toLowerCase()}}var w=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},d),{},{justify:{type:String,default:null,validator:p}},f),{},{alignContent:{type:String,default:null,validator:v}},m),render:function(t,e){var i=e.props,n=e.data,s=e.children,l="";for(var c in i)l+=String(i[c]);var r=w.get(l);return r||function(){var t,e;for(e in r=[],g)g[e].forEach((function(t){var a=i[t],n=y(e,t,a);n&&r.push(n)}));r.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(a["a"])(t,"align-".concat(i.align),i.align),Object(a["a"])(t,"justify-".concat(i.justify),i.justify),Object(a["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),w.set(l,r)}(),t(i.tag,Object(o["a"])(n,{staticClass:"row",class:r}),s)}})},"13ea":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"fill-height":""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"page-body"},[i("v-card",[i("div",{staticClass:"story pb-1"},[i("div",{staticClass:"pa-3"},[i("h1",[t._v("Weekly Topic Setting")])]),i("v-divider"),i("div",{staticClass:"pa-5"},[i("h2",[t._v("Post Weekly Topic")])]),i("div",{staticClass:"px-5"},[i("v-text-field",{attrs:{placeholder:"Input Weekly Topic","hide-details":"auto",solo:"",outlined:"",flat:""},scopedSlots:t._u([{key:"append",fn:function(){return[i("v-btn",{staticClass:"my-2 white--text",attrs:{depressed:"",small:"",color:"blue"}},[t._v(" Update ")])]},proxy:!0}])})],1),i("v-divider",{staticClass:"mt-5"}),i("div",{staticClass:"pt-5 px-5 d-flex justify-space-between"},[i("h2",{staticClass:"mt-2",attrs:{align:"left"}},[t._v("Recommend Topics")]),i("div",[i("v-text-field",{attrs:{placeholder:"(Option) Keyword","hide-details":"auto",solo:"",outlined:"",flat:""}})],1)]),i("div",{staticClass:"pt-4 px-2"},[i("v-chip-group",{attrs:{mandatory:"","active-class":"blue--text"}},t._l(t.category,(function(e){return i("v-chip",{key:t.category.indexOf(e),on:{click:function(e){t.asd=!0}}},[t._v(" "+t._s(e)+" ")])})),1)],1),i("div",{staticClass:"pr-7 pt-1",attrs:{align:"right"}},[i("v-btn",{staticClass:"my-2 white--text",attrs:{depressed:"",small:"",color:"blue"}},[t._v(" Update ")])],1),i("v-card",{directives:[{name:"show",rawName:"v-show",value:t.asd,expression:"asd"}],staticClass:"mx-auto",attrs:{"max-width":"600"}},[i("v-list",[i("v-list-item-group",{attrs:{"active-class":"border",color:"indigo"}},t._l(t.science,(function(e){return i("v-list-item",{key:t.science.indexOf(e)},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)],1),i("v-divider",{staticClass:"mt-5"}),i("div",{staticClass:"px-5 pt-5 d-flex justify-end"},[i("h2",[t._v("Auto Recommend")]),i("v-spacer"),i("div",{staticClass:"pb-3"},[i("v-switch",{attrs:{"input-value":"true",color:"blue"}})],1)],1),i("div",{staticClass:"text--disabled pl-5"},[t._v(" *해당 항목을 활성화하게 되면 뉴스 토픽이 매주 자동으로 업데이트됩니다! ")])],1)])],1)])],1)],1)},n=[],s=i("bc3a"),o=i.n(s),l=["business","entertainment","general","health","science","sports","technology"],c=i("a2c0"),r={data:function(){return{DataString:null,selectionType:"leaf",selection:[],category:l,science:c["a"],asd:!1,items:[{id:1,name:"스포츠",children:[{id:2,name:"농구"},{id:3,name:"축구"},{id:4,name:"배구"}]},{id:5,name:"여가",children:[{id:6,name:"여행"},{id:7,name:"독서"},{id:8,name:"영화"}]}]}},methods:{getData:function(){var t=this;o.a.get("http://169.63.212.7:8000/api/public").then((function(e){t.DataString=e.data,console.log(t.DataString)})).catch((function(t){console.log(t)}))}}},u=r,h=i("2877"),d=i("6544"),p=i.n(d),f=i("8336"),v=i("b0af"),m=i("cc20"),g=i("5530"),b=(i("8f5a"),i("7efd")),y=i("a9ad"),w=i("58df"),C=Object(w["a"])(b["a"],y["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object(g["a"])(Object(g["a"])({},b["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object(g["a"])({},b["a"].options.methods.genData.call(this)))}}}),k=i("62ad"),S=i("a523"),j=i("ce7e"),V=i("8860"),x=i("da13"),A=i("5d23"),O=i("1baa"),T=i("0fd9"),_=i("2fa4"),D=i("b73d"),I=i("8654"),E=Object(h["a"])(u,a,n,!1,null,null,null);e["default"]=E.exports;p()(E,{VBtn:f["a"],VCard:v["a"],VChip:m["a"],VChipGroup:C,VCol:k["a"],VContainer:S["a"],VDivider:j["a"],VList:V["a"],VListItem:x["a"],VListItemContent:A["a"],VListItemGroup:O["a"],VListItemTitle:A["b"],VRow:T["a"],VSpacer:_["a"],VSwitch:D["a"],VTextField:I["a"]})},"8f5a":function(t,e,i){},"9d01":function(t,e,i){},a2c0:function(t,e,i){"use strict";e["a"]=[{source:{id:"",name:"Vosveteit.sk"},author:"",title:'Vedci našli "spínač", ktorý v myšiach vyvolá hibernáciu. Ide o objav, ktorý môže pomôcť ľuďom v mnohých oblastiach - Vosveteit.sk',description:"Vedci našli skupinu neurónov, ktoré dokážu v myši vyvolať stav hibernácie. Hibernácia je užitočná preto, lebo šetrí energiu živočícha.",url:"https://vosveteit.sk/vedci-nasli-spinac-ktory-v-mysiach-vyvola-hibernaciu-ide-o-objav-ktory-moze-pomoct-ludom-v-mnohych-oblastiach/",urlToImage:"https://i2.wp.com/vosveteit.sk/wp-content/uploads/2020/06/titulka-hibernácia.jpg?fit=1200%2C800&ssl=1",publishedAt:"2020-06-12T16:38:37Z",content:"Dve nezávislé túdie identifikovali v myom mozgu záhadný spína, ktorý v nich spustí stav hibernácie. Ide o objav, vaka ktorému by sme sa v budúcnosti mohli naui, ako tento stav vyvola aj u udí.\r\nKe zv… [+2213 chars]"},{source:{id:"ars-technica",name:"Ars Technica"},author:"Eric Berger",title:"NASA’s new chief of human spaceflight has a commercial background - Ars Technica",description:"“I’m a big fan of Kathy Lueders!”",url:"https://arstechnica.com/science/2020/06/nasas-new-chief-of-human-spaceflight-has-a-commercial-background/",urlToImage:"https://cdn.arstechnica.net/wp-content/uploads/2020/06/NHQ202005310018_large-760x380.jpg",publishedAt:"2020-06-12T16:34:00Z",content:"Enlarge/ NASA's Kathy Lueders celebrates Crew Dragon's hatch opening on May 31.\r\n7 with 7 posters participating\r\nOn Friday morning, NASA Administrator Jim Bridenstine announced that he had selected K… [+2854 chars]"},{source:{id:"",name:"Phys.Org"},author:"Science X staff",title:"Hot holes are key in a plasmon-induced reaction of oxygen molecules on silver surfaces - Phys.Org",description:"Chemists at RIKEN have discovered why shining light on silver nanoparticles causes oxygen molecules attached to their surfaces to break off. This insight will help researchers design new catalysts that harness light energy.",url:"https://phys.org/news/2020-06-hot-holes-key-plasmon-induced-reaction.html",urlToImage:"https://scx2.b-cdn.net/gfx/news/2020/hotholesarek.jpg",publishedAt:"2020-06-12T16:33:51Z",content:"Chemists at RIKEN have discovered why shining light on silver nanoparticles causes oxygen molecules attached to their surfaces to break off. This insight will help researchers design new catalysts th… [+3170 chars]"},{source:{id:"",name:"CNBC"},author:"Michael Sheetz",title:"NASA's Kathy Lueders, who oversaw the SpaceX astronaut launch, will lead agency's 2024 moon effort - CNBC",description:"The NASA official who oversaw the first SpaceX astronaut launch last month will now lead all the agency's human spaceflight efforts.",url:"https://www.cnbc.com/2020/06/12/nasas-kathy-lueders-will-lead-2024-moon-effort-after-spacex-success.html",urlToImage:"https://image.cnbcfm.com/api/v1/image/106575856-1591977367510ksc-20200522-ph-kls02_0001_large.jpg?v=1591977430",publishedAt:"2020-06-12T16:27:37Z",content:"The NASA official who oversaw the first SpaceX astronaut launch last month will now lead all the agency's human spaceflight efforts, including its goal to land astronauts on the moon by 2024.\r\nNASA c… [+1498 chars]"},{source:{id:"",name:"ZME Science"},author:"Fermin Koop",title:"Half the planet is still free from a significant human influence - and it should remain like that - ZME Science",description:"Conservationists call to expand the amount of land formally protected.",url:"https://www.zmescience.com/science/half-planet-free-human-influence-05232/",urlToImage:"https://cdn.zmescience.com/wp-content/uploads/2020/06/F1.large_.jpg",publishedAt:"2020-06-12T16:19:39Z",content:"About half of the Earths ice-free land remains free of significant influence from humans, according to a new study, which assessed the conversion of natural lands across the globe. The findings highl… [+3750 chars]"}]},b73d:function(t,e,i){"use strict";i("0481"),i("4069");var a=i("5530"),n=(i("ec29"),i("9d01"),i("4de4"),i("45fc"),i("d3b7"),i("25f0"),i("c37a")),s=i("5607"),o=i("2b0e"),l=o["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),c=i("80d2"),r=o["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:c["h"]}}}),u=i("58df"),h=Object(u["a"])(n["a"],l,r).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=n["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),d=i("c3f0"),p=i("0789"),f=i("490a");e["a"]=h.extend({name:"v-switch",directives:{Touch:d["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.disabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(p["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(f["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===c["p"].left&&this.isActive||t.keyCode===c["p"].right&&!this.isActive)&&this.onChange()}}})},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-246f1d81.62c1aeca.js.map