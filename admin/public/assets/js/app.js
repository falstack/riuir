webpackJsonp([1],[function(e,n,t){"use strict";function o(e){c||t(3)}Object.defineProperty(n,"__esModule",{value:!0});var r=(t(1),{name:"v-index",components:{},props:{},watch:{},computed:{},data:function(){return{}},created:function(){},methods:{},mounted:function(){}}),u=function(){var e=this,n=e.$createElement;return(e._self._c||n)("h1",[e._v("this is index page")])},s=[];u._withStripped=!0;var i={render:u,staticRenderFns:s},a=i,c=!1,l=t(5),p=o,d=l(r,a,p,null,null);d.options.__file="frontend/views/index.vue",d.esModule&&Object.keys(d.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.");var f=d.exports;Vue.use(VueRouter);var v=new VueRouter({mode:"history",routes:[]});Vue.use(Vuex);var m=new Vuex.Store({state:{login:null},mutations:{SET_LOGIN:function(e,n){var t=n.bool;e.login=t}},actions:{setLogin:function(e,n){(0,e.commit)("SET_LOGIN",{bool:n.bool})}},getters:{isLogin:function(e){return e.login}}});t.d(n,"app",function(){return _});var h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},_=new Vue(h({router:v,store:m},f)).$mount("#app")},,,function(e,n){}],[0]);