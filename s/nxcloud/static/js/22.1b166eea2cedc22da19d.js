webpackJsonp([22],{QHIG:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"\n.pagination[data-v-a36ae9aa] {\n  margin: 10px 20px;\n}\n.pagination .current-page[data-v-a36ae9aa] {\n  text-align: center;\n  color: #2DB9F9;\n}\n.grid-center[data-v-a36ae9aa] {\n  text-align: center;\n}\n.vux-table td[data-v-a36ae9aa],\n.vux-table th[data-v-a36ae9aa] {\n  word-break: break-all;\n}\n","",{version:3,sources:["D:/work/git/nxcloud/src/pages/manage/business/BussinessOrder.vue"],names:[],mappings:";AACA;EACE,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,mBAAmB;CACpB;AACD;;EAEE,sBAAsB;CACvB",file:"BussinessOrder.vue",sourcesContent:["\n.pagination[data-v-a36ae9aa] {\n  margin: 10px 20px;\n}\n.pagination .current-page[data-v-a36ae9aa] {\n  text-align: center;\n  color: #2DB9F9;\n}\n.grid-center[data-v-a36ae9aa] {\n  text-align: center;\n}\n.vux-table td[data-v-a36ae9aa],\n.vux-table th[data-v-a36ae9aa] {\n  word-break: break-all;\n}\n"],sourceRoot:""}])},WTSr:function(t,e,a){var n=a("QHIG");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("86ca8c8c",n,!0,{})},"q+B/":function(t,e,a){"use strict";function n(t){a("WTSr")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("Xxa5"),s=a.n(r),i=a("exGp"),o=a.n(i),d=a("dQSc"),v=a("ignk"),u=a("jHVj"),c=a("S8Wg"),l=a("pDNl"),_=a("rHil"),p=a("2sLL"),g=a("wwIJ"),m=a("etVR"),h=a("YxJB"),f=a("3Lt7"),x=a("kNDc"),b=a("LgOF"),A=a("Nv8u"),C=(d.a,v.a,u.a,c.a,l.a,_.a,p.a,g.a,m.a,h.a,f.a,x.a,b.a,{name:"bussinessOrder",components:{Card:d.a,XTable:v.a,CellFormPreview:u.a,Scroller:c.a,XInput:l.a,Group:_.a,XButton:p.a,Selector:g.a,Checklist:m.a,Flexbox:h.a,FlexboxItem:f.a,Grid:x.a,GridItem:b.a},data:function(){return{pageNum:1,pageSize:10,tableTotalPage:1,tableData:[],statusList:["待支付","支付成功","支付失败","已生单","已竣工","已签收","已取消"]}},computed:{},created:function(){this.getOrderList()},mounted:function(){},methods:{handleTablePageChange:function(t){"prev"==t?this.pageNum=this.pageNum-1:"next"==t&&(this.pageNum=this.pageNum+1),this.getOrderList()},getOrderList:function(){var t=this;return o()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t,Object(A.d)({pageNum:t.pageNum,pageSize:t.pageSize}).then(function(t){t&&(t.msg&&!t.data?a.$vux.toast.show({text:t.msg,type:"warn",time:3e3,position:"middle"}):(t.orderList.forEach(function(t){t.userPhone=a.RSAdecrypt(t.userPhone)}),a.tableData=t.orderList,a.tableTotalPage=t.totalPage))});case 2:case"end":return e.stop()}},e,t)}))()},finishOrder:function(t){var e=this;this.$vux.confirm.show({title:"提示",content:"是否确定完成此订单?",onCancel:function(){},onConfirm:function(){Object(A.b)({orderId:t}).then(function(t){t&&(t.msg&&!t.data?e.$vux.toast.show({text:t.msg,type:"warn",time:3e3,position:"middle"}):(e.$vux.toast.show({text:t,type:"success",time:3e3,position:"middle"}),e.getOrderList()))})}})}}}),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bussinessOrder"},[a("card",{attrs:{header:{title:"订单管理"}}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("scroller",{attrs:{"lock-y":"","scrollbar-x":""}},[a("x-table",{staticStyle:{"background-color":"#fff",width:"980px"}},[a("thead",[a("tr",{staticStyle:{"background-color":"#f6f7fb"}},[a("th",[t._v("订单号")]),t._v(" "),a("th",[t._v("产品名称")]),t._v(" "),a("th",[t._v("状态")]),t._v(" "),a("th",[t._v("联系方式")]),t._v(" "),a("th",[t._v("订单金额（元）")]),t._v(" "),a("th",[t._v("支付金额（元）")]),t._v(" "),a("th",[t._v("合作伙伴实得金额（元）")]),t._v(" "),a("th",[t._v("手续费（元）")]),t._v(" "),a("th",[t._v("分成费（元）")]),t._v(" "),a("th",[t._v("数量")]),t._v(" "),a("th",[t._v("时长")]),t._v(" "),a("th",[t._v("下单时间")]),t._v(" "),a("th",[t._v("操作")])])]),t._v(" "),a("tbody",[0==t.tableData.length?a("tr",[a("td",{attrs:{colspan:"13"}},[t._v("暂无数据")])]):t._e(),t._v(" "),t._l(t.tableData,function(e){return a("tr",[a("td",[t._v(t._s(e.orderId))]),t._v(" "),a("td",[t._v(t._s(e.productName))]),t._v(" "),a("td",[t._v(t._s(t.statusList[e.orderStatus]))]),t._v(" "),a("td",[t._v(t._s(e.userPhone))]),t._v(" "),a("td",[t._v(t._s(e.totalAmount))]),t._v(" "),a("td",[t._v(t._s(e.payAmount))]),t._v(" "),a("td",[t._v(t._s(e.actualAmount))]),t._v(" "),a("td",[t._v(t._s(e.serviveAmount))]),t._v(" "),a("td",[t._v(t._s(e.shareAmount))]),t._v(" "),a("td",t._l(e.productConfigInfo.productItems,function(e,n){return a("div",{key:n},["2"===e.itemIdType?a("div",[a("span",[t._v(t._s(e.itemCodeName))])]):t._e()])}),0),t._v(" "),a("td",t._l(e.productConfigInfo.productItems,function(e,n){return a("div",{key:n},["1"===e.itemIdType?a("div",[a("span",[t._v(t._s(e.itemCodeName))])]):t._e()])}),0),t._v(" "),a("td",[t._v(t._s(e.orderTime))]),t._v(" "),a("td",[[1].includes(e.orderStatus)?a("x-button",{attrs:{type:"primary",mini:""},nativeOn:{click:function(a){return t.finishOrder(e.orderId)}}},[t._v("完成")]):t._e()],1)])})],2)])],1),t._v(" "),a("div",{staticClass:"pagination"},[a("flexbox",[a("flexbox-item",[a("x-button",{attrs:{type:"default",disabled:t.pageNum<=1},nativeOn:{click:function(e){return t.handleTablePageChange("prev")}}},[t._v("上一页")])],1),t._v(" "),a("flexbox-item",[a("div",{staticClass:"current-page"},[t._v(" "+t._s(t.pageNum+"/"+t.tableTotalPage))])]),t._v(" "),a("flexbox-item",[a("x-button",{attrs:{type:"default",disabled:t.pageNum==t.tableTotalPage},nativeOn:{click:function(e){return t.handleTablePageChange("next")}}},[t._v("下一页")])],1)],1)],1)],1)])],1)},B=[],y={render:k,staticRenderFns:B},O=y,w=a("VU/8"),N=n,I=w(C,O,!1,N,"data-v-a36ae9aa",null);e.default=I.exports}});