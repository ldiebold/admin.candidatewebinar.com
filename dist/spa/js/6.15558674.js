(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"5ead":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("OnlineEventsTable",{staticStyle:{height:"calc(100vh - 50px)"},attrs:{"online-events":e.online_events}})],1)},r=[],o=n("0d87"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("RManageModelTable",{attrs:{"model-class":e.$MOnlineEvent,role:"admin","visible-columns":e.visibleColumns,"merge-fields":e.mergeFields,"update-button-props":{formProps:{inputProps:{filled:!0,class:["q-my-sm"]}}},search:{fields:["title","description","start_time","end_time"]}},scopedSlots:e._u([{key:"top-right",fn:function(){return[n("MShowTutorialVideoButton",{staticClass:"q-mr-sm",attrs:{title:"Managing Online Events"}})]},proxy:!0},{key:"body-cell-video_url",fn:function(t){return[n("q-td",[n("q-btn",{attrs:{icon:"mdi-open-in-new",flat:"",color:"blue-8",padding:"4px",props:t.props},on:{click:function(n){return e.openURL(t.row.video_url)}}})],1)]}},{key:"create-button",fn:function(){return[n("RCreateButton",{directives:[{name:"show",rawName:"v-show",value:"super admin"===e.$MUser.getSessionUser().role,expression:"$MUser.getSessionUser().role === 'super admin'"}],staticClass:"q-ml-md",attrs:{role:"admin","model-class":e.$MOnlineEvent,icon:"mdi-plus",size:"sm",round:"",color:"primary","form-props":{inputProps:{filled:!0,class:["q-my-sm"]}}}})]},proxy:!0}])})},l=[],a=n("5bc0"),d=n("dcba"),m={props:{onlineEvents:{required:!0,type:Array}},components:{RManageModelTable:a["c"],RCreateButton:a["a"]},computed:{visibleColumns(){const e=this.$MUser.getSessionUser(),t=["title","description","start_time","end_time","video_url"];return"super admin"===e.role&&t.push("update","delete"),t}},methods:{},data(){const e=this;return{openURL:d["a"],mergeFields:{end_time:{format(t){return e.$dayjs(t.end_time).format("DD/MM/YYYY h:mmA")}},start_time:{format(t){return e.$dayjs(t.start_time).format("DD/MM/YYYY h:mmA")}},video_url:{form:{label:"Video"}}}}}},u=m,c=n("a6c2"),p=n("7b08"),f=n("ef9c"),v=n("63c1"),b=n.n(v),_=Object(c["a"])(u,i,l,!1,null,null,null),h=_.exports;b()(_,"components",{QTd:p["a"],QBtn:f["a"]});var g={name:"EventsPage",components:{OnlineEventsTable:h},created(){this.$MOnlineEvent.$get()},computed:{online_events(){return o["a"].all()}}},M=g,y=n("505d"),w=Object(c["a"])(M,s,r,!1,null,null,null);t["default"]=w.exports;b()(w,"components",{QPage:y["a"]})}}]);