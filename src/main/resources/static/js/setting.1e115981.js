(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setting"],{"166a":function(t,e,i){},"16b7":function(t,e,i){"use strict";i("a9e3");var a=i("2b0e");e["a"]=a["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var a=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},a)}}})},"23a7":function(t,e,i){"use strict";i("99af"),i("a623"),i("4160"),i("caad"),i("d81d"),i("13d5"),i("fb6a"),i("a434"),i("b0c0"),i("a9e3"),i("159b");var a=i("2909"),n=i("5530"),s=i("53ca"),r=(i("5803"),i("2677")),l=i("cc20"),o=i("80d2"),c=i("d9bd");e["a"]=r["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(o["x"])(t).every((function(t){return null!=t&&"object"===Object(s["a"])(t)}))}}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,a=void 0===i?0:i;return t+a}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(o["p"])(e,1024===this.base))},internalArrayValue:function(){return Object(o["x"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var i=e.name,a=void 0===i?"":i,n=e.size,s=void 0===n?0:n,r=t.truncateText(a);return t.showSize?"".concat(r," (").concat(Object(o["p"])(s,1024===t.base),")"):r})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(c["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(o["h"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:void 0,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(l["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genInput:function(){var t=r["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,a){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[a],file:i,index:a}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=r["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(n["a"])(Object(n["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(a["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,i){"use strict";var a=i("8654");e["a"]=a["a"]},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var a=i("6b75");function n(t){if(Array.isArray(t))return Object(a["a"])(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=i("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t){return n(t)||s(t)||Object(r["a"])(t)||l()}},3067:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"page-body"},[i("v-card",[i("div",{staticClass:"story pa-3 pb-1"},[i("div",{staticClass:"pa-3"},[i("h1",[t._v("Daily Mission Setting")])]),i("v-divider"),i("div",{staticClass:"pa-5"},[i("h2",[t._v("Post Daily Mission")])]),i("div",{staticClass:"px-5"},[i("v-file-input",{attrs:{chips:"",accept:"image/*",placeholder:"Pick an image","prepend-icon":"mdi-camera",counter:"","show-size":""},model:{value:t.picture,callback:function(e){t.picture=e},expression:"picture"}}),i("v-text-field",{attrs:{label:"Input Daily Missoin","hide-details":"auto"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),i("div",{staticClass:"pa-5",attrs:{align:"end"}},[i("v-btn",{staticClass:"white--text",attrs:{color:"primary"},on:{click:function(e){return t.create_dailyMission({picture:t.picture,content:t.content})}}},[t._v("Update")])],1),i("v-divider"),i("div",{staticClass:"pa-3"},[i("h2",[t._v("Delete Daily Mission")])]),i("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"830",tile:"",outlined:""}},[i("v-slide-group",{staticClass:"mx-auto",attrs:{multiple:"","show-arrows":""}},t._l(t.allUsers,(function(e){return i("v-slide-item",{key:t.allUsers.indexOf(e),staticClass:"ma-3"},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var n=a.hover;return[i("div",{staticClass:"btn-wrapper"},[i("v-btn",{staticClass:"button",attrs:{fab:"",icon:""}},[i("v-avatar",{staticClass:"avatar",attrs:{size:"48"},on:{click:t.link}},[i("v-img",{attrs:{src:e.src}}),i("v-expand-transition",[n?i("div",{staticClass:"d-flex transition-fast-in-fast-out black v-card--reveal white--text",staticStyle:{height:"100%"}},[i("v-icon",[t._v("mdi-delete")])],1):t._e()])],1)],1)],1)]}}],null,!0)})],1)})),1)],1),i("v-divider"),i("div",{staticClass:"story pa-5 d-flex justify-space-between align-center"},[i("h2",[t._v("Auto Recommend")]),i("div",{staticClass:"pb-3"},[i("v-switch",{attrs:{"input-value":"true","hide-details":""}})],1)])],1),i("div",{staticClass:"text--disabled pl-5 pb-2"},[t._v(" *해당 항목을 활성화하게 되면 Daily Mission이 매일 자동으로 업데이트됩니다! ")])])],1)])],1)],1)},n=[],s=i("5530"),r=i("c390"),l=i("2f62"),o={props:{},computed:Object(s["a"])({},Object(l["c"])([])),methods:Object(s["a"])({},Object(l["b"])(["create_dailyMission","read_dailyMission","update_dailyMission","delete_dailyMission"])),data:function(){return{picture:null,content:"",overlay:!1,allUsers:r["a"]}}},c=o,u=(i("5ac3"),i("2877")),d=i("6544"),h=i.n(d),p=i("8212"),f=i("8336"),v=i("b0af"),m=i("62ad"),g=i("a523"),b=i("ce7e"),y=i("0789"),x=i("23a7"),V=i("16b7"),S=i("f2e7"),C=i("58df"),O=i("d9bd"),j=Object(C["a"])(V["a"],S["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(O["c"])("v-hover should only contain a single element",this),t)):(Object(O["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),w=i("132d"),A=i("adda"),I=i("0fd9"),_=i("7efd"),$=i("9dbe"),k=i("b73d"),z=i("8654"),M=Object(u["a"])(c,a,n,!1,null,null,null);e["default"]=M.exports;h()(M,{VAvatar:p["a"],VBtn:f["a"],VCard:v["a"],VCol:m["a"],VContainer:g["a"],VDivider:b["a"],VExpandTransition:y["a"],VFileInput:x["a"],VHover:j,VIcon:w["a"],VImg:A["a"],VRow:I["a"],VSlideGroup:_["b"],VSlideItem:$["a"],VSwitch:k["a"],VTextField:z["a"]})},3408:function(t,e,i){},5803:function(t,e,i){},"5ac3":function(t,e,i){"use strict";var a=i("60fe"),n=i.n(a);n.a},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i("4de4"),i("7db0"),i("c740"),i("4160"),i("caad"),i("c975"),i("fb6a"),i("a434"),i("a9e3"),i("2532"),i("159b");var a=i("5530"),n=(i("166a"),i("a452")),s=i("7560"),r=i("58df"),l=i("d9bd"),o=Object(r["a"])(n["a"],s["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(a["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(l["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var a=this.selectedValues.indexOf(i);if(!(a<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var a=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,a))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),a=i.findIndex((function(e){return e===t}));this.mandatory&&a>-1&&i.length-1<1||null!=this.max&&a<0&&i.length+1>this.max||(a>-1?i.splice(a,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});o.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"60fe":function(t,e,i){},8212:function(t,e,i){"use strict";i("a9e3");var a=i("5530"),n=(i("3408"),i("a9ad")),s=i("24b2"),r=i("80d2"),l=i("58df");e["a"]=Object(l["a"])(n["a"],s["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48},tile:Boolean},computed:{classes:function(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,"v-avatar--tile":this.tile}},styles:function(){return Object(a["a"])({height:Object(r["f"])(this.size),minWidth:Object(r["f"])(this.size),width:Object(r["f"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},"8adc":function(t,e,i){},"9dbe":function(t,e,i){"use strict";var a=i("ade3"),n=i("4e82"),s=i("58df"),r=i("d9bd"),l=i("2b0e"),o=l["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(a["a"])({},this.activeClass,this.isActive)}),t):(Object(r["c"])("v-item should only contain a single element",this),t)):(Object(r["c"])("v-item is missing a default scopedSlot",this),null);var t}});Object(s["a"])(o,Object(n["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e["a"]=Object(s["a"])(o,Object(n["a"])("slideGroup")).extend({name:"v-slide-item"})},a434:function(t,e,i){"use strict";var a=i("23e7"),n=i("23cb"),s=i("a691"),r=i("50c4"),l=i("7b0b"),o=i("65f0"),c=i("8418"),u=i("1dde"),d=i("ae40"),h=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,v=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!h||!p},{splice:function(t,e){var i,a,u,d,h,p,b=l(this),y=r(b.length),x=n(t,y),V=arguments.length;if(0===V?i=a=0:1===V?(i=0,a=y-x):(i=V-2,a=v(f(s(e),0),y-x)),y+i-a>m)throw TypeError(g);for(u=o(b,a),d=0;d<a;d++)h=x+d,h in b&&c(u,d,b[h]);if(u.length=a,i<a){for(d=x;d<y-a;d++)h=d+a,p=d+i,h in b?b[p]=b[h]:delete b[p];for(d=y;d>y-a+i;d--)delete b[d-1]}else if(i>a)for(d=y-a;d>x;d--)h=d+a-1,p=d+i-1,h in b?b[p]=b[h]:delete b[p];for(d=0;d<i;d++)b[d+x]=arguments[d+2];return b.length=y-a+i,u}})},c390:function(t,e,i){"use strict";e["a"]=[{id:1,src:"https://www.telegraph.co.uk/content/dam/news/2016/05/08/31287666_RESTRICTED_Lunch_Box.BY41GK_Lunch_Box_trans_NvBQzQNjv4BqK50_A0VF2YxpdgOboQIZiJeR-HbUxUaCQISm67V-V0Y.jpg?imwidth=450",detail:"What is your lunch today?",dialog:!1},{id:2,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFArFlOPfgiKiQ-GpPPrVgSMI49OYrymPV9xm2fL8YyuA358gM&usqp=CAU",detail:"Where is your favorite place in your town?",dialog:!1},{id:3,src:"https://mxtrianz.me/wp-content/uploads/2017/04/restaurant-exterior-design-ideas-3-exterior-restaurant-design.jpg",detail:"Where is your favorite restaurant in your town?",dialog:!1},{id:4,src:"https://d39l2hkdp2esp1.cloudfront.net/img/photo/174702/174702_00_2x.jpg",detail:"What did you do when hang out with your friends?",dialog:!1},{id:5,src:"https://zine.istyle24.com/FileUpload/WebEdit/636240482042650000.jpg",detail:"What is your favorite clothes?",dialog:!1},{id:6,src:"https://image.chosun.com/sitedata/image/201611/03/2016110301251_0.jpg",detail:"What is your favorite song?",dialog:!1}]},c740:function(t,e,i){"use strict";var a=i("23e7"),n=i("b727").findIndex,s=i("44d2"),r=i("ae40"),l="findIndex",o=!0,c=r(l);l in[]&&Array(1)[l]((function(){o=!1})),a({target:"Array",proto:!0,forced:o||!c},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s(l)},cc20:function(t,e,i){"use strict";i("4de4"),i("4160");var a=i("3835"),n=i("5530"),s=(i("8adc"),i("58df")),r=i("0789"),l=i("9d26"),o=i("a9ad"),c=i("4e82"),u=i("7560"),d=i("f2e7"),h=i("1c87"),p=i("af2b"),f=i("d9bd");e["a"]=Object(s["a"])(o["a"],p["a"],h["a"],u["a"],Object(c["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({"v-chip":!0},h["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(a["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(f["a"])(n,s,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(l["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r["b"],t)},genClose:function(){var t=this;return this.$createElement(l["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),a=i.tag,s=i.data;s.attrs=Object(n["a"])(Object(n["a"])({},s.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var r=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(r,s),e)}})},dc22:function(t,e,i){"use strict";function a(t,e){var i=e.value,a=e.options||{passive:!0};window.addEventListener("resize",i,a),t._onResize={callback:i,options:a},e.modifiers&&e.modifiers.quiet||i()}function n(t){if(t._onResize){var e=t._onResize,i=e.callback,a=e.options;window.removeEventListener("resize",i,a),delete t._onResize}}var s={inserted:a,unbind:n};e["a"]=s}}]);
//# sourceMappingURL=setting.1e115981.js.map