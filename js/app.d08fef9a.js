(function(t){function e(e){for(var n,r,l=e[0],c=e[1],s=e[2],u=0,d=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function l(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"e3cc050a","chunk-3597eec6":"c99da3cc","chunk-b786b316":"f9456a49"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-3597eec6":1,"chunk-b786b316":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-3597eec6":"df9d9a7c","chunk-b786b316":"8ce09b7a"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var s=i[l],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){s=d[l],u=s.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],p.parentNode.removeChild(p),a(i)},p.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(p)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=l(t);var d=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/mslearn-catalog-dashboard/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",clippedLeft:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-avatar",{staticClass:"shrink mr-2",attrs:{width:"40"}},[a("v-img",{attrs:{alt:"Logo",src:"https://github.com/yoshikawaa.png",contain:"",transition:"scale-transition"}})],1),a("span",{staticClass:"text-h4"},[t._v("Microsoft Learn Catalog Dashboard")])],1)]),a("v-navigation-drawer",{attrs:{app:"","expand-on-hover":"",clipped:""}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.$router.push("/catalog")}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-magnify")])],1),a("v-list-item-title",[t._v("Catalog")])],1),a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.$router.push("/starred")}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-star")])],1),a("v-list-item-title",[t._v("Starred")])],1),a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.$router.push("/")}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-cog-outline")])],1),a("v-list-item-title",[t._v("Configuration")])],1),a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.$router.push("/about")}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-information-variant")])],1),a("v-list-item-title",[t._v("About")])],1)],1)],1),a("v-main",[a("router-view")],1),a("v-footer",{attrs:{app:"",inset:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"text-center"},[a("v-btn",{attrs:{block:"",href:"https://yoshikawaa.github.io/",target:"_blank"}},[t._v("@yoshikawaa")])],1)],1)],1)],1)},o=[],i={name:"App",data:function(){return{}}},l=i,c=a("2877"),s=a("6544"),u=a.n(s),d=a("7496"),p=a("40dc"),v=a("8212"),f=a("8336"),h=a("62ad"),m=a("553a"),g=a("132d"),b=a("adda"),k=a("8860"),y=a("da13"),w=a("34c3"),_=a("5d23"),V=a("f6c4"),C=a("f774"),x=a("0fd9"),j=Object(c["a"])(l,r,o,!1,null,null,null),O=j.exports;u()(j,{VApp:d["a"],VAppBar:p["a"],VAvatar:v["a"],VBtn:f["a"],VCol:h["a"],VFooter:m["a"],VIcon:g["a"],VImg:b["a"],VList:k["a"],VListItem:y["a"],VListItemIcon:w["a"],VListItemTitle:_["b"],VMain:V["a"],VNavigationDrawer:C["a"],VRow:x["a"]});a("d3b7"),a("3ca3"),a("ddb0");var L=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("locale-dialog",{attrs:{dialog:!0},on:{closed:t.closed}})],1)],1)},E=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({},"v-btn",r,!1),n),[t._v(" Open Dialog ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Change Locale")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"1"}},[a("v-radio-group",{attrs:{mandatory:""},on:{change:t.changed},model:{value:t.locale,callback:function(e){t.locale=e},expression:"locale"}},t._l(t.locales,(function(t){return a("v-radio",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")])],1)],1)],1)},$=[],T={name:"LocaleDialog",props:["dialog"],data:function(){return{locales:[{label:"English",value:"en-us"},{label:"Japanese",value:"ja-jp"}],locale:""}},mounted:function(){this.locale=this.$store.state.locale},watch:{dialog:function(t,e){!t&&e&&this.$emit("closed")}},methods:{changed:function(){this.$store.commit("locale",this.locale),this.dialog=!1}}},P=T,D=a("b0af"),I=a("99d9"),B=a("a523"),M=a("169a"),N=a("67b6"),R=a("43a6"),H=a("2fa4"),J=Object(c["a"])(P,S,$,!1,null,null,null),q=J.exports;u()(J,{VBtn:f["a"],VCard:D["a"],VCardActions:I["a"],VCardText:I["c"],VCardTitle:I["d"],VCol:h["a"],VContainer:B["a"],VDialog:M["a"],VRadio:N["a"],VRadioGroup:R["a"],VRow:x["a"],VSpacer:H["a"]});var F={components:{LocaleDialog:q},name:"Home",data:function(){return{}},methods:{closed:function(){this.$router.push("/catalog")}}},G=F,K=Object(c["a"])(G,A,E,!1,null,null,null),U=K.exports;u()(K,{VContainer:B["a"],VRow:x["a"]}),n["a"].use(L["a"]);var z=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}},{path:"/catalog",name:"Catalog",component:function(){return a.e("chunk-b786b316").then(a.bind(null,"247d"))}},{path:"/*",name:"404",component:function(){return a.e("chunk-3597eec6").then(a.bind(null,"8cdb"))}}],Q=new L["a"]({routes:z}),W=Q,X=a("2f62");n["a"].use(X["a"]);var Y=new X["a"].Store({state:{locale:"en-us",catalog:[]},mutations:{locale:function(t,e){t.locale=e},catalog:function(t,e){t.catalog=e}}}),Z=Y,tt=a("f309");n["a"].use(tt["a"]);var et=new tt["a"]({theme:{dark:!0}});n["a"].config.productionTip=!1,new n["a"]({router:W,store:Z,vuetify:et,render:function(t){return t(O)}}).$mount("#app")}});
//# sourceMappingURL=app.d08fef9a.js.map