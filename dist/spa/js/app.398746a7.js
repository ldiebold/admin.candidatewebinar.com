(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={1:0},a=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{2:"95724f69",3:"be0be148",4:"c7fcebc0",5:"c625c353",6:"131ac5e6",7:"ccf2f3c8",8:"f9987d68"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0d87":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("8ed0");class o extends r["OnlineEvent"]{}},"2f39":function(e,t,n){"use strict";n.r(t);n("15db"),n("cbcf"),n("7f20"),n("2233"),n("9ce7"),n("7e6d");var r=n("e832"),o=n("b661"),a=n("5937"),i=n("f846"),s=n("f6b1");r["a"].use(i["a"],{config:{},lang:o["a"],iconSet:a["a"],directives:{ClosePopup:s["a"]}});var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},c=[],l={name:"App"},p=l,f=n("a6c2"),d=Object(f["a"])(p,u,c,!1,null,null,null),h=d.exports,b=n("94ea"),v=n("e3c3"),g=n("8ed0"),m=n("ebd1"),y=n("0d87");class w extends g["OnlineEventUser"]{}const _=new v["default"].Database;_.register(m["a"]),_.register(y["a"]),_.register(w);var P=_;r["a"].use(b["a"]),v["default"].use(g["VuexOrmRestPlugin"],{api_url:"https://api.process.test/api"}),v["default"].use(g["SchemaPlugin"],{database:P});var O=function(){const e=new b["a"].Store({plugins:[v["default"].install(P)],strict:!1});return e},j=n("4af9");const x=[{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>n.e(6).then(n.bind(null,"8b24"))},{path:"/users",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"6571"))},{path:"/events",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"5ead"))}]},{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"cffb")),children:[{path:"/login",name:"login",component:()=>n.e(7).then(n.bind(null,"013f"))}]},{path:"*",component:()=>n.e(4).then(n.bind(null,"e51e"))}];var S=x,C=n("7a11");r["a"].use(j["a"]);var E=function(e){const t=new j["a"]({scrollBehavior:()=>({x:0,y:0}),routes:S,mode:"history",base:"/"});return t.beforeEach(((t,n,r)=>k(t,n,r,e))),t};function k(e,t,n,r){const o={localUser:m["a"].query().first(),fetch_user:()=>m["a"].$session(),auth_endpoint:"https://api.process.test/login",login_endpoint:"/login",logout_endpoint:"/logout",errorNotifier:()=>alert("error"),public_routes:["/logout","/login"],home_endpoint:"/"},a=new C["a"](o,e,t,n);return a.authorize()}var $=async function(){const e="function"===typeof O?await O({Vue:r["a"]}):O,t="function"===typeof E?await E({Vue:r["a"],store:e}):E;e.$router=t;const n={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:n,store:e,router:t}},M=({store:e})=>{Object(g["RegisterModelAliasesToVue"])(r["a"],e)},T=n("7c1e");r["a"].prototype.$schemaFormConfig={fieldComponents:{datetime:T["a"]}};var V=n("7338"),q=n.n(V);q.a.defaults.withCredentials=!0,r["a"].prototype.$axios=q.a;var A=n("8d35"),U=n.n(A),J=n("b106");U.a.extend(J),r["a"].prototype.$dayjs=U.a;var L=n("8746");const R="/";async function z(){const{app:e,store:t,router:n}=await $();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),s=[M,void 0,void 0,void 0,L["a"]];for(let c=0;!1===o&&c<s.length;c++)if("function"===typeof s[c])try{await s[c]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:R})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==o&&new r["a"](e)}z()},4763:function(e,t,n){"use strict";t["a"]={login_url:"https://api.process.test/login",logout_url:"https://api.process.test/logout",user_endpoint:"https://api.process.test/api/user",csrf_cookie_url:"https://api.process.test/sanctum/csrf-cookie"}},"7e6d":function(e,t,n){},ebd1:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("8ed0");class o extends r["User"]{}}});