(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2d67"],{"268e":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-sheet",{attrs:{color:"transparent"}},[e("v-row",t._l(t.certifications,(function(a){return e("v-col",{key:a.uid,attrs:{cols:"12",lg:"2",md:"3",sm:"4"}},[e("v-card",{attrs:{shaped:"",height:"100%"}},[e("v-avatar",{staticClass:"ml-4 mt-4",attrs:{tile:"",size:"60"}},[e("v-img",{staticClass:"shrink",attrs:{alt:"Role Logo",contain:"",src:t.$store.state.constants.msUrl+a.iconUrl,transition:"scale-transition"}})],1),e("v-card-title",[t._v(" "+t._s(a.title)+" ")]),e("v-card-subtitle",[e("v-progress-linear",{attrs:{value:100*a.popularity,color:"primary",rounded:"",height:"20"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.value;return[t._v(" "+t._s(Math.floor(e))+"% Popular ")]}}],null,!0)}),e("div",{staticClass:"duration"},[Math.floor(a.duration_in_minutes/60)>0?[t._v(" "+t._s(Math.floor(a.duration_in_minutes/60))+" h ")]:t._e(),t._v(" "+t._s(a.duration_in_minutes%60)+" m ")],2)],1),e("v-card-text",[e("chart",{key:a.uid,attrs:{labels:t.levels,data:[a.learningPaths.filter((function(a){return a.levels.includes(t.levels[0])})).length,a.learningPaths.filter((function(a){return a.levels.includes(t.levels[1])})).length,a.learningPaths.filter((function(a){return a.levels.includes(t.levels[2])})).length]}})],1),e("v-card-actions",{staticClass:"justify-end mr-4 mb-4"},[e("v-btn",{attrs:{color:"primary",href:t.$store.state.constants.certificationsUrl+a.name,target:"_blank"}},[t._v("Link")])],1)],1)],1)})),1)],1)],1)},r=[],s=e("0292"),i={components:{Chart:s["a"]},name:"Certifications",data:function(){return{levels:["beginner","intermediate","advanced"]}},computed:{certifications:function(){return this.$store.state.certifications},learningPaths:function(){return this.$store.state.catalog.learningPaths}}},l=i,o=e("2877"),c=e("6544"),u=e.n(c),d=e("8212"),v=e("8336"),f=e("b0af"),h=e("99d9"),m=e("62ad"),_=e("a523"),g=e("adda"),p=e("8e36"),b=e("0fd9"),C=e("8dd9"),V=Object(o["a"])(l,n,r,!1,null,null,null);a["default"]=V.exports;u()(V,{VAvatar:d["a"],VBtn:v["a"],VCard:f["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VCol:m["a"],VContainer:_["a"],VImg:g["a"],VProgressLinear:p["a"],VRow:b["a"],VSheet:C["a"]})}}]);
//# sourceMappingURL=chunk-2d0b2d67.97109456.js.map