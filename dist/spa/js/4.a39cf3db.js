(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"84ea":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("MCandidatesTable",{attrs:{entities:e.users}})],1)},s=[],i=n("c175"),r={name:"CandidatesPage",components:{MCandidatesTable:i["c"]},created(){this.$MUser.$getCandidates({with:["online_events"]}),this.$MOnlineEvent.$get()},data(){return{initialPagination:{rowsPerPage:50}}},computed:{users(){return this.$MUser.query().where("role","candidate").where("upline_id",this.$MUser.getSessionUser().id).get()}}},d=r,c=n("a6c2"),o=n("505d"),l=n("63c1"),u=n.n(l),p=Object(c["a"])(d,a,s,!1,null,null,null);t["default"]=p.exports;u()(p,"components",{QPage:o["a"]})}}]);