(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"mdi-menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        Quasar App\n      ")]),a("q-btn",{attrs:{flat:"",icon:"mdi-logout",round:""},on:{click:e.handleLogout}})],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n        Menu\n      ")]),e._l(e.menuItems,(function(t){return a("q-item",{key:t.label,attrs:{clickable:"",to:t.to}},[a("q-item-section",[a("q-item-label",[e._v("\n            "+e._s(t.label)+"\n          ")]),a("q-item-label",{attrs:{caption:""}},[e._v("\n            "+e._s(t.description)+"\n          ")])],1)],1)}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},o=[],r={name:"MainLayout",components:{},methods:{handleLogout(){const e=this;this.$auth.logout().then((()=>{console.log(e.$router),e.$router.go("/login")}))}},data(){return{leftDrawerOpen:!1,menuItems:[{icon:"person",label:"Users",description:"manage user accounts",to:"/users"},{icon:"calendar",label:"Events",description:"create and edit events",to:"/events"}]}}},l=r,s=a("a6c2"),c=a("f624"),i=a("8738"),u=a("66cf"),d=a("ef9c"),b=a("309f"),p=a("5cc9"),f=a("692f"),m=a("dc7c"),w=a("e0e9"),q=a("6c44"),v=a("ddc7"),g=a("63c1"),h=a.n(g),Q=Object(s["a"])(l,n,o,!1,null,null,null);t["default"]=Q.exports;h()(Q,"components",{QLayout:c["a"],QHeader:i["a"],QToolbar:u["a"],QBtn:d["a"],QToolbarTitle:b["a"],QDrawer:p["a"],QList:f["a"],QItemLabel:m["a"],QItem:w["a"],QItemSection:q["a"],QPageContainer:v["a"]})}}]);