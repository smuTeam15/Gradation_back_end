(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35e75d36"],{1681:function(e,t,a){},"8ce9":function(e,t,a){},"99d9":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return c}));var s=a("b0af"),o=a("80d2"),n=Object(o["g"])("v-card__actions"),i=Object(o["g"])("v-card__subtitle"),r=Object(o["g"])("v-card__text"),c=Object(o["g"])("v-card__title");s["a"]},a2c0:function(e,t,a){"use strict";t["a"]=[{source:{id:"",name:"Vosveteit.sk"},author:"",title:'Vedci našli "spínač", ktorý v myšiach vyvolá hibernáciu. Ide o objav, ktorý môže pomôcť ľuďom v mnohých oblastiach - Vosveteit.sk',description:"Vedci našli skupinu neurónov, ktoré dokážu v myši vyvolať stav hibernácie. Hibernácia je užitočná preto, lebo šetrí energiu živočícha.",url:"https://vosveteit.sk/vedci-nasli-spinac-ktory-v-mysiach-vyvola-hibernaciu-ide-o-objav-ktory-moze-pomoct-ludom-v-mnohych-oblastiach/",urlToImage:"https://i2.wp.com/vosveteit.sk/wp-content/uploads/2020/06/titulka-hibernácia.jpg?fit=1200%2C800&ssl=1",publishedAt:"2020-06-12T16:38:37Z",content:"Dve nezávislé túdie identifikovali v myom mozgu záhadný spína, ktorý v nich spustí stav hibernácie. Ide o objav, vaka ktorému by sme sa v budúcnosti mohli naui, ako tento stav vyvola aj u udí.\r\nKe zv… [+2213 chars]"},{source:{id:"ars-technica",name:"Ars Technica"},author:"Eric Berger",title:"NASA’s new chief of human spaceflight has a commercial background - Ars Technica",description:"“I’m a big fan of Kathy Lueders!”",url:"https://arstechnica.com/science/2020/06/nasas-new-chief-of-human-spaceflight-has-a-commercial-background/",urlToImage:"https://cdn.arstechnica.net/wp-content/uploads/2020/06/NHQ202005310018_large-760x380.jpg",publishedAt:"2020-06-12T16:34:00Z",content:"Enlarge/ NASA's Kathy Lueders celebrates Crew Dragon's hatch opening on May 31.\r\n7 with 7 posters participating\r\nOn Friday morning, NASA Administrator Jim Bridenstine announced that he had selected K… [+2854 chars]"},{source:{id:"",name:"Phys.Org"},author:"Science X staff",title:"Hot holes are key in a plasmon-induced reaction of oxygen molecules on silver surfaces - Phys.Org",description:"Chemists at RIKEN have discovered why shining light on silver nanoparticles causes oxygen molecules attached to their surfaces to break off. This insight will help researchers design new catalysts that harness light energy.",url:"https://phys.org/news/2020-06-hot-holes-key-plasmon-induced-reaction.html",urlToImage:"https://scx2.b-cdn.net/gfx/news/2020/hotholesarek.jpg",publishedAt:"2020-06-12T16:33:51Z",content:"Chemists at RIKEN have discovered why shining light on silver nanoparticles causes oxygen molecules attached to their surfaces to break off. This insight will help researchers design new catalysts th… [+3170 chars]"},{source:{id:"",name:"CNBC"},author:"Michael Sheetz",title:"NASA's Kathy Lueders, who oversaw the SpaceX astronaut launch, will lead agency's 2024 moon effort - CNBC",description:"The NASA official who oversaw the first SpaceX astronaut launch last month will now lead all the agency's human spaceflight efforts.",url:"https://www.cnbc.com/2020/06/12/nasas-kathy-lueders-will-lead-2024-moon-effort-after-spacex-success.html",urlToImage:"https://image.cnbcfm.com/api/v1/image/106575856-1591977367510ksc-20200522-ph-kls02_0001_large.jpg?v=1591977430",publishedAt:"2020-06-12T16:27:37Z",content:"The NASA official who oversaw the first SpaceX astronaut launch last month will now lead all the agency's human spaceflight efforts, including its goal to land astronauts on the moon by 2024.\r\nNASA c… [+1498 chars]"},{source:{id:"",name:"ZME Science"},author:"Fermin Koop",title:"Half the planet is still free from a significant human influence - and it should remain like that - ZME Science",description:"Conservationists call to expand the amount of land formally protected.",url:"https://www.zmescience.com/science/half-planet-free-human-influence-05232/",urlToImage:"https://cdn.zmescience.com/wp-content/uploads/2020/06/F1.large_.jpg",publishedAt:"2020-06-12T16:19:39Z",content:"About half of the Earths ice-free land remains free of significant influence from humans, according to a new study, which assessed the conversion of natural lands across the globe. The findings highl… [+3750 chars]"}]},a844:function(e,t,a){"use strict";a("a9e3");var s=a("5530"),o=(a("1681"),a("8654")),n=a("58df"),i=Object(n["a"])(o["a"]);t["a"]=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"}},genInput:function(){var e=o["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){o["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},acd0:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"page-body"},[a("div",{staticClass:"story pb-1"},[a("v-card",[a("div",{staticClass:"pa-3"},[a("h1",[e._v("Weekly 6 Topic")]),a("v-spacer"),a("h2",{staticClass:"blue--text"},[e._v("Science")])],1),a("v-divider"),a("div",{staticClass:"pa-3"},[a("h2",[e._v(e._s(e.science[3].title))])]),a("div",{staticClass:"px-3 pt-1"},[a("h4",{staticClass:"grey--text"},[e._v(" "+e._s(e.science[3].description)+" ")])]),a("div",{staticClass:"pa-3"},[e._v(" "+e._s(e.science[3].content)+" "),a("div",{staticClass:"blue--text"},[a("a",{staticClass:"blue--text",attrs:{href:e.science[3].url,target:"_blank"}},[e._v("...view more")])])]),a("div",{staticClass:"mt-1"},[a("v-divider",{staticClass:"mb-1 py-2"}),e._l(e.articleComments,(function(t){return a("v-card-text",{key:e.articleComments.indexOf(t),staticClass:"py-0 mb-2 font-weight-bold"},[a("span",{domProps:{textContent:e._s(t.username+" ")}}),a("span",{staticClass:"font-weight-regular",domProps:{textContent:e._s(""+t.comment)}})])})),a("v-divider"),a("v-textarea",{staticClass:"mb-1 py-2",attrs:{name:"input",rows:"1",flat:"","auto-grow":"",dense:"",solo:"",placeholder:"댓글 달기...","hide-details":""},scopedSlots:e._u([{key:"append",fn:function(){return[a("v-btn",{staticClass:"pb-1",attrs:{icon:"",depressed:"",small:""},on:{click:function(t){return e.leaveComment({username:e.username,userImage:e.userImage,comment:e.comment})}}},[a("v-icon",[e._v("mdi-send")])],1)]},proxy:!0}]),model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}})],2)],1)],1)])])],1)},o=[],n=[{source:{id:null,name:"New York Times"},author:"Adam Nossiter, Constant Méheut",title:"George Floyd Protests Inspire Fresh Scrutiny of Policing in Europe, Too - The New York Times",description:"A history of discrimination has been brought to the surface. But so far, charges of systemic racism have been met mostly with official denial.",url:"https://www.nytimes.com/2020/06/12/world/europe/george-floyd-protests-europe-police.html",urlToImage:"https://static01.nyt.com/images/2020/06/11/world/11FRANCE-POLICE-RACISM01sub/11FRANCE-POLICE-RACISM01sub-facebookJumbo.jpg",publishedAt:"2020-06-12T10:33:15Z",content:"Justice for Adama! shouted the crowd of some 20,000 people who gathered to hear Ms. Traoré speak, filling the sprawling plaza in numbers that surprised the French government, which had sought a ban.\r… [+1425 chars]"},{source:{id:null,name:"Atlanta Journal Constitution"},author:"ArLuther Lee",title:"Starbucks warns employees not to support Black Lives Matter at work - Atlanta Journal Constitution",description:"Starbucks has warned employees in a memo not to wear accessories or clothes that specifically express support for Black Lives Matter, the American social justice movement at the forefront of protests over the police killing of George Floyd.",url:"https://www.ajc.com/news/starbucks-warns-employees-not-support-black-lives-matter-work/5VdFM92hS3WrDFBufakalM/",urlToImage:"https://www.ajc.com/rf/image_large/Pub/p11/AJC/2020/06/11/Videos/4921306.vpx",publishedAt:"2020-06-12T09:29:37Z",content:"Starbucks has warned employees in a memo not to wear accessories or clothes that specifically express support for Black Lives Matter, the American social justice movement at the forefront of protests… [+6733 chars]"}],i=a("a2c0"),r=[{username:"socleansofreshh",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",comment:"Hello"},{username:"soclean",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",comment:"Hi"},{username:"freshh",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",comment:"asdada"}],c={data:function(){return{articles:n,articleComments:r,science:i["a"],username:"woosteelz",userImage:"",comment:""}},methods:{leaveComment:function(e){var t=e.username,a=e.userImage,s=e.comment;this.articleComments.push({username:t,userImage:a,comment:s}),this.comment=""}}},l=c,h=a("2877"),u=a("6544"),m=a.n(u),d=a("8336"),p=a("b0af"),f=a("99d9"),v=a("62ad"),g=a("a523"),w=a("ce7e"),b=a("132d"),y=a("2fa4"),k=a("a844"),C=Object(h["a"])(l,s,o,!1,null,null,null);t["default"]=C.exports;m()(C,{VBtn:d["a"],VCard:p["a"],VCardText:f["b"],VCol:v["a"],VContainer:g["a"],VDivider:w["a"],VIcon:b["a"],VSpacer:y["a"],VTextarea:k["a"]})},ce7e:function(e,t,a){"use strict";var s=a("5530"),o=(a("8ce9"),a("7560"));t["a"]=o["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-35e75d36.e6b00808.js.map