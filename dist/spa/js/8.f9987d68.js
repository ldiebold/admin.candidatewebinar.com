(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{6571:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",[r("UsersTable",{staticStyle:{height:"calc(100vh - 50px)"},attrs:{users:e.users}})],1)},a=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-table",e._g(e._b({attrs:{data:e.usersFiltered,columns:e.columns,pagination:e.initialPagination},scopedSlots:e._u([{key:"top",fn:function(){return[r("div",{staticClass:"text-h4 text-grey-8"},[e._v("Users")]),r("q-input",{staticClass:"q-ml-lg",attrs:{dense:"",placeholder:"Search",outlined:"",autofocus:"",clearable:"",debounce:150},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),r("q-space"),r("CreateUserButton",{attrs:{round:"",icon:"mdi-plus"}})]},proxy:!0},{key:"body-cell-edit",fn:function(t){return[r("td",{staticClass:"text-center"},[e.canManageUser(t.row)?r("UpdateUserButton",{attrs:{flat:"",icon:"mdi-pencil",round:"",dense:"",color:"blue-4",user:t.row}}):e._e()],1)]}},{key:"body-cell-delete",fn:function(t){return[r("td",{staticClass:"text-center"},[e.canManageUser(t.row)?r("MDeleteButton",{attrs:{model:t.row,"model-name":"User",flat:"",icon:"mdi-delete",round:"",dense:"",color:"red-4"}}):e._e()],1)]}}])},"q-table",e.$attrs,!1),e.$listeners))},l=[],o=r("87a6"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BDialogButton",e._g(e._b({ref:"dialogButton"},"BDialogButton",e.$attrs,!1),e.$listeners),[r("q-card-section",[r("CreateUserForm",{on:{success:function(){return e.$refs.dialogButton.hide()}}})],1)],1)},c=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-input",{staticClass:"q-mb-md",attrs:{filled:"",label:"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),r("q-input",{staticClass:"q-mb-md",attrs:{filled:"",label:"Email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("SelectUserRole",{staticClass:"q-mb-md",attrs:{filled:"",label:"Role"},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}}),r("q-input",{staticClass:"q-mb-md",attrs:{filled:"",type:e.passwordVisible?"text":"password",label:"Password"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.passwordVisible?"mdi-eye":"mdi-eye-off"},on:{click:function(t){e.passwordVisible=!e.passwordVisible}}})]},proxy:!0},{key:"after",fn:function(){return[r("q-btn",{attrs:{icon:"mdi-refresh",flat:"",round:""},on:{click:e.generateRandomPassword}})]},proxy:!0}]),model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),r("br"),r("q-btn",{attrs:{label:"Create",color:"primary"},on:{click:e.handleSubmit}})],1)},d=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-select",e._g(e._b({attrs:{options:e.options}},"q-select",e.$attrs,!1),e.$listeners))},p=[],f={props:{},components:{},computed:{options(){const e=["candidate","ibo"];return"super admin"===this.$MUser.getSessionUser().role&&e.push("admin","super admin"),e}},methods:{},data(){return{}}},h=f,b=r("a6c2"),g=r("f636"),$=r("63c1"),U=r.n($),q=Object(b["a"])(h,m,p,!1,null,null,null),v=q.exports;U()(q,"components",{QSelect:g["a"]});var w={props:{},components:{SelectUserRole:v},computed:{},methods:{generateRandomPassword(){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",t=10;this.form.password=Array(t).fill(e).map((function(e){return e[Math.floor(Math.random()*e.length)]})).join("")},handleSubmit(){this.$MUser.$create(this.form).then(this.handleSuccess).catch(this.handleError)},handleSuccess(e){this.$emit("input",!1),this.$emit("success",e)},handleError(e){console.log(e)}},data(){return{passwordVisible:!1,form:{name:null,email:null,role:null,password:null}}}},_=w,x=r("a3be"),y=r("19dc"),B=r("ef9c"),S=Object(b["a"])(_,u,d,!1,null,null,null),C=S.exports;U()(S,"components",{QInput:x["a"],QIcon:y["a"],QBtn:B["a"]});var k={props:{},components:{BDialogButton:o["a"],CreateUserForm:C},computed:{},methods:{},data(){return{}}},E=k,M=r("7006"),Q=Object(b["a"])(E,i,c,!1,null,null,null),j=Q.exports;U()(Q,"components",{QCardSection:M["a"]});var P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BDialogButton",e._g(e._b({ref:"dialogButton"},"BDialogButton",e.$attrs,!1),e.$listeners),[r("q-card-section",[r("UpdateUserForm",{attrs:{user:e.user},on:{success:function(t){return e.$refs.dialogButton.hide()}}})],1)],1)},R=[],D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-input",{staticClass:"q-mb-md",attrs:{filled:"",label:"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),r("q-input",{staticClass:"q-mb-md",attrs:{filled:"",label:"Email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("SelectUserRole",{staticClass:"q-mb-md",attrs:{filled:"",label:"Role"},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}}),r("br"),r("q-btn",{attrs:{label:"Update",color:"primary"},on:{click:e.handleSubmit}})],1)},O=[],F=r("8ed0"),V={props:{user:{required:!0,type:F["User"]}},components:{SelectUserRole:v},computed:{},methods:{generateRandomPassword(){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",t=10;this.form.password=Array(t).fill(e).map((function(e){return e[Math.floor(Math.random()*e.length)]})).join("")},handleSubmit(){this.user.$update(this.form).then(this.handleSuccess).catch(this.handleError)},handleSuccess(e){this.$emit("input",!1),this.$emit("success",e)},handleError(e){console.log(e)}},created(){Object.keys(this.form).forEach((e=>{this.user[e]&&(this.form[e]=this.user[e])}))},data(){return{form:{name:null,email:null,role:null}}}},I=V,A=Object(b["a"])(I,D,O,!1,null,null,null),N=A.exports;U()(A,"components",{QInput:x["a"],QBtn:B["a"]});var T={props:{user:{required:!0,type:Object}},components:{BDialogButton:o["a"],UpdateUserForm:N},computed:{},methods:{},data(){return{}}},J=T,L=Object(b["a"])(J,P,R,!1,null,null,null),z=L.exports;U()(L,"components",{QCardSection:M["a"]});var G={props:{users:{required:!0,type:Array}},components:{MDeleteButton:o["b"],CreateUserButton:j,UpdateUserButton:z},computed:{usersFiltered(){return this.search?this.users.filter((e=>String(e.name).toLowerCase().includes(String(this.search).toLowerCase()))):this.users},columns(){return[{align:"left",field:"name",label:"Name",name:"name"},{align:"left",field:"email",label:"Email",name:"email"},{align:"left",field:"role",label:"Role",name:"role"},{align:"center",field:"edit",label:"Edit",name:"edit"},{align:"center",field:"delete",label:"Delete",name:"delete"}]}},methods:{canManageUser(e){const t=this.$MUser.getSessionUser();return"super admin"===t.role||"admin"!==e.role}},data(){return{initialPagination:{descending:!1,rowsPerPage:20},search:""}}},H=G,K=r("3846"),W=r("dc01"),X=Object(b["a"])(H,n,l,!1,null,null,null),Y=X.exports;U()(X,"components",{QTable:K["a"],QInput:x["a"],QSpace:W["a"]});var Z={name:"UsersPage",components:{UsersTable:Y},data(){return{}},created(){this.$MUser.$get()},computed:{users(){return this.$MUser.all()}}},ee=Z,te=r("505d"),re=Object(b["a"])(ee,s,a,!1,null,null,null);t["default"]=re.exports;U()(re,"components",{QPage:te["a"]})}}]);