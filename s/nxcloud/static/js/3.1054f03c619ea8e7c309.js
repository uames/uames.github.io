webpackJsonp([3],{"/5Lm":function(t,e,a){"use strict";var n=a("bOdI"),r=a.n(n),s=a("Dd8w"),i=a.n(s),o=a("c8Kt"),l=(Boolean,Boolean,String,{props:{x:Boolean,y:Boolean,field:String},render:function(){},created:function(){this.emitSetting()},methods:{emitSetting:function(){var t=this;["x","y"].forEach(function(e){t[e]&&(t.$parent.setScale(r()({},e,i()({},Object(o.a)(t.$attrs)))),t.field&&t.$parent.setField(e,t.field))})}}}),u=a("VU/8"),c=u(l,null,!1,null,null,null);e.a=c.exports},"7wsw":function(t,e,a){"use strict";var n=a("Dd8w"),r=a.n(n),s=function(t){return t.replace(/(-[a-z])/g,function(t){return t.toUpperCase().replace("-","")})},i=function(t){for(var e in t){var a=s(e);t[a]=t[e],a!==e&&delete t[e]}return t},o=(String,Boolean,String,Array,function(t){return t.replace(/(-[a-z])/g,function(t){return t.toUpperCase().replace("-","")})}),l=function(t){for(var e in t){var a=o(e);t[a]=t[e],a!==e&&delete t[e]}return t},u={props:{coord:{type:String,default:"polar"},transposed:{type:Boolean,default:!0},serialField:{type:String},colors:{type:Array}},created:function(){this.$parent.setPie(r()({},this.$props,l(this.$attrs)))},render:function(){}},c=a("VU/8"),d=c(u,null,!1,null,null,null);e.a=d.exports},"E+ij":function(t,e,a){"use strict";var n=a("Dd8w"),r=a.n(n),s=a("c8Kt"),i=(Object,Boolean,{props:{options:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:!1}},created:function(){this.$parent.setLegend(r()({},this.options,{disabled:this.disabled},Object(s.a)(this.$attrs)))},render:function(){}}),o=a("VU/8"),l=o(i,null,!1,null,null,null);e.a=l.exports},QlYx:function(t,e,a){"use strict";var n=a("Dd8w"),r=a.n(n),s=a("c8Kt"),i={line:"line",point:"circle",area:"area"};e.a={props:{colors:[String,Array],seriesField:String,adjust:[String,Object]},created:function(){this.$parent.set(this.chartName,r()({shape:i[this.chartName]||""},this.$props,Object(s.a)(this.$attrs)))},render:function(){}}},RG86:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,'\n.title[data-v-bbd4b75c] {\n  font-size: 16px;\n  padding: 10px;\n  border-bottom: solid 1px #e8ebee;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.icon-box[data-v-bbd4b75c] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.gray-box-grid .weui-grid[data-v-bbd4b75c] {\n  padding: 5px;\n}\n.gray-box-grid .weui-grid[data-v-bbd4b75c]:after {\n  display: none;\n}\n.gray-box[data-v-bbd4b75c] {\n  padding: 5px 10px;\n  background: #f9f9f9;\n  vertical-align: top;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.gray-box .status[data-v-bbd4b75c] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n.gray-box .status .status-badge[data-v-bbd4b75c] {\n  min-width: 65px;\n  font-size: 14px;\n  line-height: 23px;\n  height: 23px;\n}\n.gray-box .status .status-badge[status="handling"][data-v-bbd4b75c] {\n  background: #09bb07;\n}\n',"",{version:3,sources:["D:/work/git/nxcloud/src/pages/manage/customer/customerIndex2.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,cAAc;EACd,iCAAiC;EACjC,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,aAAa;CACd;AACD;EACE,cAAc;CACf;AACD;EACE,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,iBAAiB;EACjB,wBAAwB;EACxB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;CACd;AACD;EACE,oBAAoB;CACrB",file:"customerIndex2.vue",sourcesContent:['\n.title[data-v-bbd4b75c] {\n  font-size: 16px;\n  padding: 10px;\n  border-bottom: solid 1px #e8ebee;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.icon-box[data-v-bbd4b75c] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.gray-box-grid .weui-grid[data-v-bbd4b75c] {\n  padding: 5px;\n}\n.gray-box-grid .weui-grid[data-v-bbd4b75c]:after {\n  display: none;\n}\n.gray-box[data-v-bbd4b75c] {\n  padding: 5px 10px;\n  background: #f9f9f9;\n  vertical-align: top;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.gray-box .status[data-v-bbd4b75c] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n.gray-box .status .status-badge[data-v-bbd4b75c] {\n  min-width: 65px;\n  font-size: 14px;\n  line-height: 23px;\n  height: 23px;\n}\n.gray-box .status .status-badge[status="handling"][data-v-bbd4b75c] {\n  background: #09bb07;\n}\n'],sourceRoot:""}])},"W/ww":function(t,e,a){"use strict";var n=a("QlYx"),r=(n.a,{mixins:[n.a],data:function(){return{chartName:"bar"}}}),s=a("VU/8"),i=s(r,null,!1,null,null,null);e.a=i.exports},YvUR:function(t,e,a){"use strict";var n=a("QlYx"),r=(n.a,{mixins:[n.a],data:function(){return{chartName:"area"}}}),s=a("VU/8"),i=s(r,null,!1,null,null,null);e.a=i.exports},bOdI:function(t,e,a){"use strict";e.__esModule=!0;var n=a("C4MV"),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t,e,a){return e in t?(0,r.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},c8Kt:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var n=function(t){return t.replace(/(-[a-z])/g,function(t){return t.toUpperCase().replace("-","")})},r=function(t){for(var e in t){var a=n(e);t[a]=t[e],a!==e&&delete t[e]}return t}},ea2k:function(t,e,a){var n=a("RG86");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("3139298c",n,!0,{})},iPcQ:function(t,e,a){"use strict";var n=a("QlYx"),r=(n.a,{mixins:[n.a],data:function(){return{chartName:"line"}}}),s=a("VU/8"),i=s(r,null,!1,null,null,null);e.a=i.exports},"k+Ki":function(t,e,a){"use strict";var n=a("Dd8w"),r=a.n(n),s=a("c8Kt"),i=(Boolean,Boolean,Boolean,Boolean,Boolean,Object,{props:{disabled:{type:Boolean,default:!1},showCrosshairs:{type:Boolean,default:!0},showItemMarker:{type:Boolean,default:!0},showXValue:{type:Boolean,default:!1},showValueInLegend:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}}},render:function(){},created:function(){var t=r()({disabled:this.disabled,showCrosshairs:this.showCrosshairs,showItemMarker:this.showItemMarker,showValueInLegend:this.showValueInLegend},Object(s.a)(this.options),Object(s.a)(this.$attrs));this.showXValue&&(t.onShow=function(t){var e=t.items;e[0].name=e[0].title}),this.$parent.setTooltip(t)}}),o=a("VU/8"),l=o(i,null,!1,null,null,null);e.a=l.exports},tGjr:function(t,e,a){"use strict";function n(t){a("ea2k")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("Xxa5"),s=a.n(r),i=a("exGp"),o=a.n(i),l=a("s4px"),u=a("iPcQ"),c=a("YvUR"),d=a("k+Ki"),p=a("E+ij"),b=a("W/ww"),f=a("7wsw"),g=a("/5Lm"),h=a("dQSc"),A=a("kNDc"),v=a("LgOF"),m=a("oWtu"),C=a("32ER"),x=a("1DHf"),B=a("rHil"),w=a("1HIy"),y=a("T8/m"),k=a("D8a4"),E=a("mMlH"),_=["#fd9827","#1273c9","#1890FF","#13C2C2","#2FC25B","#FACC14","#F04864","red","DarkRed","blue","DarkBlue","green","Lime","yellow","Purple","Chocolate","#4B0082","#00FF00","#E0FFFF","#D2691E","#FA8072"],D=(l.a,u.a,c.a,d.a,p.a,b.a,f.a,g.a,h.a,A.a,v.a,m.a,C.a,x.a,B.a,w.a,y.a,k.a,["#fd9827","#1273c9","#1890FF","#13C2C2","#2FC25B","#FACC14","#F04864","red","DarkRed","blue","DarkBlue","green","Lime","yellow","Purple","Chocolate","#4B0082","#00FF00","#E0FFFF","#D2691E","#FA8072"]),F={name:"customerIndex2",components:{VChart:l.a,VLine:u.a,VArea:c.a,VTooltip:d.a,VLegend:p.a,VBar:b.a,VPie:f.a,VScale:g.a,Card:h.a,Grid:A.a,GridItem:v.a,Icon:m.a,CellBox:C.a,Cell:x.a,Group:B.a,GroupTitle:w.a,Panel:y.a,Badge:k.a},data:function(){return{qyzgOrderTotalNum:0,qyzgOrderData:[],showContent2:!0,content1List:[{name:"云监控",status:"handling",statusName:"处理中"},{name:"云数据库MongDB版",status:"handling",statusName:"处理中"},{name:"数据传输服务DTS",status:"success",statusName:"订购成功"},{name:"云服务器ECS",status:"success",statusName:"订购成功"},{name:"云数据库Redis版",status:"success",statusName:"订购成功"},{name:"开放搜索",status:"success",statusName:"订购成功"},{name:"运数据库HybridDB for MySQL",status:"success",statusName:"订购成功"},{name:"云效",status:"success",statusName:"订购成功"}],orderMonthData:[{date:"2017-06-05",value:116}],tabelData:[]}},created:function(){},mounted:function(){this.queryQyzgOrderFeeByYear(),this.queryQyzgOrderFeeByMonth(),this.queryTopCompany()},methods:{queryQyzgOrderFeeByYear:function(){var t=this;return o()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t,Object(E.h)().then(function(t){if(t)if(t.msg&&!t.data)a.$vux.toast.show({text:t.msg,type:"warn",time:3e3,position:"middle"});else{for(var e=[],n=0,r=0;r<t.length;r++){var s=t[r];e.push({name:s.productName,y:s.acctFee,const:"const"}),n+=s.acctFee}a.qyzgOrderTotalNum=n,a.qyzgOrderData=e}});case 2:case"end":return e.stop()}},e,t)}))()},queryQyzgOrderFeeByMonth:function(){var t=this;return o()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t,Object(E.g)().then(function(t){t&&(t.msg&&!t.data?a.$vux.toast.show({text:t.msg,type:"warn",time:3e3,position:"middle"}):(t.forEach(function(t,e){t.date=t.statMonth,t.value=t.orderFee}),a.orderMonthData=t,console.log(t)))});case 2:case"end":return e.stop()}},e,t)}))()},queryTopCompany:function(){var t=this;return o()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t,Object(E.i)().then(function(t){if(t)if(t.msg&&!t.data)a.$vux.toast.show({text:t.msg,type:"warn",time:3e3,position:"middle"});else{var e=[];t.forEach(function(t,a){t.title=t.custName,t.desc="订购业务数："+t.productCount,e.push(t)}),a.tabelData=t}});case 2:case"end":return e.stop()}},e,t)}))()},renderQyzgOrderDataVChart:function(t){var e=t.chart,a=this,n=a.qyzgOrderData,r=[];n.forEach(function(t,e){t.name=t.name,t.value=(t.y/a.qyzgOrderTotalNum*100).toFixed(2)+"%",t.marker={symbol:"square",radius:3,fill:D[e]},r.push(t)}),e.source(n),e.coord("polar",{transposed:!0,radius:9,center:["60%","60%"]}),e.legend({position:"bottom",custom:!0,items:r,nameStyle:{fill:"#808080"},valueStyle:{fill:"#333",fontWeight:"bold"}}),e.axis(!1),e.tooltip(!1),e.interval().position("const*y").color("name",D).adjust("stack"),e.render()},moreQyzgOrderData:function(){this.$router.push({name:"totalDetail3"})}}},O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customerIndex"},[a("div",{staticClass:"title"},[t._v("企业管理人员")]),t._v(" "),a("group",[a("cell",{attrs:{title:"您已订购的产品","is-link":"","border-intent":!1,"arrow-direction":t.showContent2?"up":"down"},nativeOn:{click:function(e){t.showContent2=!t.showContent2}}}),t._v(" "),t.showContent2?[a("grid",{staticClass:"gray-box-grid",attrs:{"show-lr-borders":!1,"show-vertical-dividers":!1,cols:1}},t._l(t.content1List,function(e,n){return a("grid-item",{key:n},[a("div",{staticClass:"gray-box"},[t._v(t._s(e.name)),a("span",{staticClass:"status"},[a("badge",{staticClass:"status-badge",attrs:{status:e.status,text:e.statusName}})],1)])])}),1)]:t._e()],2),t._v(" "),a("div",{staticClass:"weui-panel weui-panel_access"},[a("div",{staticClass:"weui-panel__hd"},[t._v("专线本年度使用费用支出 "),a("em",[t._v(t._s(t.qyzgOrderTotalNum)+"万")])]),t._v(" "),a("div",{staticClass:"weui-panel__bd"},[0!==t.qyzgOrderData.length?[a("v-chart",{attrs:{"prevent-render":""},on:{"on-render":t.renderQyzgOrderDataVChart}})]:t._e()],2),t._v(" "),a("div",{staticClass:"weui-panel__ft"},[a("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:"javascript:void(0);"},on:{click:t.moreQyzgOrderData}},[t._v("\n          查看详情\n      ")])])]),t._v(" "),[a("div",{staticClass:"weui-panel weui-panel_access"},[a("div",{staticClass:"weui-panel__hd"},[t._v("按月支出曲线图")]),t._v(" "),a("div",{staticClass:"weui-panel__bd"},[a("v-chart",{attrs:{data:t.orderMonthData,"prevent-default":""}},[a("v-scale",{attrs:{x:"","tick-count":3}}),t._v(" "),a("v-tooltip",{attrs:{"show-item-marker":!1,"show-x-value":""}}),t._v(" "),a("v-line")],1)],1)])],t._v(" "),a("card",{attrs:{header:{title:"订购业务量排名靠前的企业(TOP10)"}}},[a("div",{attrs:{slot:"content"},slot:"content"},t._l(t.tabelData,function(t,e){return a("cell",{key:e,attrs:{title:t.custName,value:t.productCount}})}),1)])],2)},j=[],V={render:O,staticRenderFns:j},z=V,N=a("VU/8"),S=n,q=N(F,z,!1,S,"data-v-bbd4b75c",null);e.default=q.exports}});