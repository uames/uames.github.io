webpackJsonp([25],{HkBW:function(t,e,i){"use strict";function a(t){i("XqXs")}Object.defineProperty(e,"__esModule",{value:!0});var s=i("2sLL"),n=i("YxJB"),l=i("3Lt7"),o=i("RH4F"),c=(s.a,n.a,l.a,{name:"exampleDetail",components:{XButton:s.a,Flexbox:n.a,FlexboxItem:l.a},data:function(){return{tableData:[],rowData:{},dialogVisible:!1,statusList:{2:"正常",22:"执行续订",33:"执行变更",55:"执行退订",5:"已退订",6:"已超时",7:"已销毁"},portalOrderInvoice:{invoiceType:1,invoiceTitle:"",taxpayerNo:"",invoiceContent:"商品明细"},noVoiceInfo:!1}},filters:{flavorComment:function(t){if(!t)return"";for(var e="",i=0;i<t.length;i++){var a=t[i],s=Number(a.itemCode),n=a.itemCodeValue;switch(s){case 590039903:e+=n+"Vcpu，";break;case 590039904:e+=n+"G内存，";break;case 590040018:e+=n+"M带宽，";break;case 590039910:e+=n+"G";break;case 590039908:e+=n+"系统盘";break;case 590039911:e+=n+"G";break;case 590039909:e+=n+"数据盘"}}return e}},created:function(){this.initData()},methods:{initData:function(){this.rowData=o.a.getItem("HOSTDetail"),this.tableData.push(this.rowData)},goBack:function(){this.$router.go(-1)},goPay:function(t){o.a.setItem("productConfig",t),this.$router.push({name:"payMent",query:{id:t.orderId,type:2}})},findInvoice:function(){this.noVoiceInfo?this.$message.info("暂无发票信息"):this.dialogVisible=!0}}}),A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"exampleDetailPage"},[i("div",{staticClass:"list-group"},[i("div",{staticClass:"list-group-title"},[t._v("实例信息")]),t._v(" "),t._l(t.tableData,function(e){return i("ul",{staticClass:"list"},[i("li",{staticClass:"list-item"},[i("span",{staticClass:"item-label"},[t._v("实例名称")]),t._v(" "),i("span",{staticClass:"item-content"},[t._v(t._s(e.vmName))])]),t._v(" "),i("li",{staticClass:"list-item"},[i("span",{staticClass:"item-label"},[t._v("实例ID")]),t._v(" "),i("span",{staticClass:"item-content"},[t._v(t._s(e.orderId))])]),t._v(" "),i("li",{staticClass:"list-item"},[i("span",{staticClass:"item-label"},[t._v("运行状态")]),t._v(" "),i("span",{staticClass:"item-content"},[t._v(t._s(e.vmStatus))])]),t._v(" "),i("li",{staticClass:"list-item"},[i("span",{staticClass:"item-label"},[t._v("资源节点")]),t._v(" "),i("span",{staticClass:"item-content"},[t._v(t._s(e.zoneName))])]),t._v(" "),i("li",{staticClass:"list-item"},[i("span",{staticClass:"item-label"},[t._v("订单创建按时间")]),t._v(" "),i("span",{staticClass:"item-content"},[t._v(t._s(e.createDate))])])])})],2),t._v(" "),i("div",{staticClass:"list-group"},[i("div",{staticClass:"list-group-title"},[t._v("实例配置")]),t._v(" "),t._l(t.tableData,function(e){return i("ul",{staticClass:"list"},[i("li",{staticClass:"list-item"},[i("span",{staticClass:"item-label"},[t._v("实例名称")]),t._v(" "),i("span",{staticClass:"item-content"},[t._v(t._s(e.vmName))])]),t._v(" "),i("li",{staticClass:"list-item"},[i("span",{staticClass:"item-label"},[t._v("CPU")]),t._v(" "),i("span",{staticClass:"item-content"},[t._v(t._s(e.cpuNum))])]),t._v(" "),i("li",{staticClass:"list-item"},[i("span",{staticClass:"item-label"},[t._v("内存")]),t._v(" "),i("span",{staticClass:"item-content"},[t._v(t._s(e.memSize))])]),t._v(" "),i("li",{staticClass:"list-item"},[i("span",{staticClass:"item-label"},[t._v("OS")]),t._v(" "),i("span",{staticClass:"item-content"},[t._v(t._s(e.osStyle))])]),t._v(" "),i("li",{staticClass:"list-item"},[i("span",{staticClass:"item-label"},[t._v("IP")]),t._v(" "),i("span",{staticClass:"item-content"},[t._v(t._s(e.ipAddress))])]),t._v(" "),i("li",{staticClass:"list-item"},[i("span",{staticClass:"item-label"},[t._v("私有云地址")]),t._v(" "),i("span",{staticClass:"item-content"},[t._v(t._s(e.privateIpAddress))])])])})],2)])},d=[],r={render:A,staticRenderFns:d},m=r,p=i("VU/8"),C=a,v=p(c,m,!1,C,"data-v-71c69d0e",null);e.default=v.exports},XqXs:function(t,e,i){var a=i("nzU9");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("9df12f98",a,!0,{})},nzU9:function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,"\n.exampleDetailPage[data-v-71c69d0e] {\n  padding-bottom: 30px;\n}\n.list-group[data-v-71c69d0e] {\n  background: #ededed;\n  margin-bottom: 30px;\n}\n.list-group-title[data-v-71c69d0e] {\n  position: relative;\n  background: #fff;\n  padding: 6px 10px;\n  margin-bottom: 1px;\n  line-height: 34px;\n  font-weight: bold;\n}\n.list-group-title[data-v-71c69d0e]:before {\n  content: '';\n  border-left: 4px solid #2DB9F9;\n  position: absolute;\n  left: 0;\n  height: 34px;\n}\n.list[data-v-71c69d0e] {\n  background: #fff;\n  font-size: 15px;\n  margin-bottom: 8px;\n}\n.list .list-item[data-v-71c69d0e] {\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.list .list-item .item-label[data-v-71c69d0e] {\n  margin-right: 1em;\n  min-width: 4em;\n  text-align: justify;\n  text-align-last: justify;\n}\n.list .list-item .item-content[data-v-71c69d0e] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n.list .list-item .total[data-v-71c69d0e] {\n  color: red;\n  font-weight: bold;\n}\n","",{version:3,sources:["D:/work/git/nxcloud/src/pages/manage/customer/ExampleDetail.vue"],names:[],mappings:";AACA;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;EACpB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,+BAA+B;EAC/B,mBAAmB;EACnB,QAAQ;EACR,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,yBAAyB;CAC1B;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,kBAAkB;CACnB;AACD;EACE,WAAW;EACX,kBAAkB;CACnB",file:"ExampleDetail.vue",sourcesContent:["\n.exampleDetailPage[data-v-71c69d0e] {\n  padding-bottom: 30px;\n}\n.list-group[data-v-71c69d0e] {\n  background: #ededed;\n  margin-bottom: 30px;\n}\n.list-group-title[data-v-71c69d0e] {\n  position: relative;\n  background: #fff;\n  padding: 6px 10px;\n  margin-bottom: 1px;\n  line-height: 34px;\n  font-weight: bold;\n}\n.list-group-title[data-v-71c69d0e]:before {\n  content: '';\n  border-left: 4px solid #2DB9F9;\n  position: absolute;\n  left: 0;\n  height: 34px;\n}\n.list[data-v-71c69d0e] {\n  background: #fff;\n  font-size: 15px;\n  margin-bottom: 8px;\n}\n.list .list-item[data-v-71c69d0e] {\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.list .list-item .item-label[data-v-71c69d0e] {\n  margin-right: 1em;\n  min-width: 4em;\n  text-align: justify;\n  text-align-last: justify;\n}\n.list .list-item .item-content[data-v-71c69d0e] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n.list .list-item .total[data-v-71c69d0e] {\n  color: red;\n  font-weight: bold;\n}\n"],sourceRoot:""}])}});