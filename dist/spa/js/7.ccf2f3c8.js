(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"013f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("SanctumLoginPage",{on:{success:e.handleSuccess}})},s=[],c=a("7a11"),u=a("ebd1"),o={props:{},components:{SanctumLoginPage:c["b"]},computed:{},methods:{handleSuccess(e){this.$auth.fetchUser().then((e=>{u["a"].create({data:e.data}),this.$router.push("/")}))}},data(){return{}}},r=o,d=a("a6c2"),h=Object(d["a"])(r,n,s,!1,null,null,null);t["default"]=h.exports}}]);