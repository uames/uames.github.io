webpackJsonp([31],{"+KY3":function(e,t,n){"use strict";function o(e){n("fb25")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("wwIJ"),a=n("rHil"),s=(a.a,r.a,{name:"customerIndex",components:{Group:a.a,Selector:r.a},data:function(){return{role:"1",roleList:[{key:"1",value:"行业主管"},{key:"2",value:"企业主管"},{key:"3",value:"运维人员"}]}},watch:{$route:{handler:function(e){"customerIndex"===e.name&&this.changePage(),"customerIndex1"===e.name&&(this.role="1"),"customerIndex2"===e.name&&(this.role="2"),"customerIndex3"===e.name&&(this.role="3")},immediate:!0}},created:function(){this.changePage()},mounted:function(){},methods:{changePage:function(){var e="customerIndex"+this.role;this.$router.replace({name:e})}}}),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"customerIndex"},[n("Group",[n("Selector",{attrs:{title:"角色",options:e.roleList},on:{"on-change":e.changePage},model:{value:e.role,callback:function(t){e.role=t},expression:"role"}})],1),e._v(" "),n("div",[n("router-view")],1)],1)},i=[],u={render:c,staticRenderFns:i},l=u,d=n("VU/8"),m=o,f=d(s,l,!1,m,"data-v-2d87f0e5",null);t.default=f.exports},fb25:function(e,t,n){var o=n("tNFj");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("5ed780f0",o,!0,{})},tNFj:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"CustomerIndex.vue",sourceRoot:""}])}});