webpackJsonp([35],{R1Vu:function(t,e,a){var n=a("z3LV");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("60423ac2",n,!0,{})},YHtN:function(t,e,a){"use strict";function n(t){a("R1Vu")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),s=a.n(i),r=a("exGp"),o=a.n(r),l=a("2sLL"),d=a("YxJB"),u=a("3Lt7"),c=a("rGqP"),m=a("Nv8u"),p=a("RH4F"),v=(l.a,d.a,u.a,c.a,{name:"customerOrder",components:{XButton:l.a,Flexbox:d.a,FlexboxItem:u.a,Divider:c.a},data:function(){return{pageNum:1,pageSize:10,total:1,totalPage:1,orderList:[],statusList:["待支付","支付成功","支付失败","已生单","已竣工","已签收","已取消"]}},created:function(){this.getOrderList()},methods:{handlePageChange:function(t){"prev"==t?this.pageNum=this.pageNum-1:"next"==t&&(this.pageNum=this.pageNum+1),this.getOrderList()},getOrderList:function(){var t=this;return o()(s.a.mark(function e(){var a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t,n={pageNum:t.pageNum,pageSize:t.pageSize},t.$vux.loading.show(),Object(m.n)(n).then(function(t){t&&(t.msg&&!t.data?a.$vux.toast.show({text:t.msg,type:"warn",time:3e3,position:"middle"}):(a.orderList=t.orderList||[],a.total=t.total,a.totalPage=t.totalPage))}).finally(function(){a.$vux.loading.hide()});case 4:case"end":return e.stop()}},e,t)}))()},orderDetail:function(t){p.a.setItem("ORDERDetail",t),this.$router.push({name:"orderDetail",query:{id:t.orderId}})},sureGetOrder:function(t){var e=this;this.$vux.confirm.show({title:"提示",content:"是否确认收货?",onCancel:function(){e.$vux.toast.show({text:"已取消收货",type:"text",time:1500,position:"middle"})},onConfirm:function(){Object(m.z)({orderId:t}).then(function(t){t&&(t.msg&&!t.data?e.$vux.toast.show({text:t.msg,type:"warn",time:3e3,position:"middle"}):(e.$vux.toast.show({text:t,type:"success",time:3e3,position:"middle"}),e.getOrderList()))})}})},goPay:function(t){p.a.setItem("productConfig",t),this.$router.push({name:"payMent",query:{id:t.orderId,type:2}})}}}),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customerOrder-page"},[a("Divider",{directives:[{name:"show",rawName:"v-show",value:0==t.orderList.length,expression:"orderList.length==0"}]},[t._v("暂无订单信息")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.orderList.length,expression:"orderList.length"}],staticClass:"list-group"},t._l(t.orderList,function(e){return a("ul",{staticClass:"list"},[a("li",{staticClass:"list-item"},[a("span",{staticClass:"item-label"},[t._v("订单号")]),t._v(" "),a("span",{staticClass:"item-content"},[t._v(t._s(e.orderId))])]),t._v(" "),a("li",{staticClass:"list-item"},[a("span",{staticClass:"item-label"},[t._v("产品名称")]),t._v(" "),a("span",{staticClass:"item-content"},[t._v(t._s(e.productName))])]),t._v(" "),a("li",{staticClass:"list-item"},[a("span",{staticClass:"item-label"},[t._v("状态")]),t._v(" "),a("span",{staticClass:"item-content"},[t._v(t._s(t.statusList[e.orderStatus]))])]),t._v(" "),a("li",{staticClass:"list-item"},[a("span",{staticClass:"item-label"},[t._v("订单金额")]),t._v(" "),a("span",{staticClass:"item-content"},[t._v(t._s(e.totalAmount)+"元")])]),t._v(" "),a("li",{staticClass:"list-item"},[a("span",{staticClass:"item-label"},[t._v("支付金额")]),t._v(" "),a("span",{staticClass:"item-content"},[t._v(t._s(e.payAmount)+"元")])]),t._v(" "),a("li",{staticClass:"list-item"},[a("span",{staticClass:"item-label"},[t._v("下单时间")]),t._v(" "),a("span",{staticClass:"item-content"},[t._v(t._s(e.orderTime))])]),t._v(" "),a("li",{staticClass:"list-item"},[a("flexbox",[a("flexbox-item",{directives:[{name:"show",rawName:"v-show",value:4==e.orderStatus,expression:"item.orderStatus == 4"}]},[a("x-button",{attrs:{type:"warn"},nativeOn:{click:function(a){return t.sureGetOrder(e.orderId)}}},[t._v("确认收货")])],1),t._v(" "),a("flexbox-item",{directives:[{name:"show",rawName:"v-show",value:0==e.orderStatus,expression:"item.orderStatus == 0"}]},[a("x-button",{attrs:{type:"warn"},nativeOn:{click:function(a){return t.goPay(e)}}},[t._v("去支付")])],1),t._v(" "),a("flexbox-item",[a("x-button",{attrs:{type:"primary"},nativeOn:{click:function(a){return t.orderDetail(e)}}},[t._v("查看")])],1)],1)],1)])}),0),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.orderList.length,expression:"orderList.length"}],staticClass:"pagination"},[a("flexbox",[a("flexbox-item",[a("x-button",{attrs:{type:"default",disabled:1==t.pageNum},nativeOn:{click:function(e){return t.handlePageChange("prev")}}},[t._v("上一页")])],1),t._v(" "),a("flexbox-item",[a("div",{staticClass:"current-page"},[t._v(" "+t._s(t.pageNum+"/"+t.totalPage))])]),t._v(" "),a("flexbox-item",[a("x-button",{attrs:{type:"default",disabled:t.pageNum==t.totalPage},nativeOn:{click:function(e){return t.handlePageChange("next")}}},[t._v("下一页")])],1)],1)],1)],1)},A=[],x={render:g,staticRenderFns:A},C=x,f=a("VU/8"),h=n,B=f(v,C,!1,h,"data-v-3e4244ea",null);e.default=B.exports},z3LV:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"\n.customerOrder-page[data-v-3e4244ea] {\n  overflow: hidden;\n  background: #fff;\n}\n.list-group[data-v-3e4244ea] {\n  background: #ededed;\n  margin-bottom: 30px;\n}\n.list[data-v-3e4244ea] {\n  background: #fff;\n  font-size: 15px;\n  margin-bottom: 8px;\n}\n.list .list-item[data-v-3e4244ea] {\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.list .list-item .item-label[data-v-3e4244ea] {\n  margin-right: 1em;\n  min-width: 4em;\n  text-align: justify;\n  text-align-last: justify;\n}\n.list .list-item .item-content[data-v-3e4244ea] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n.pagination[data-v-3e4244ea] {\n  margin: 30px 20px;\n}\n.pagination .current-page[data-v-3e4244ea] {\n  text-align: center;\n  color: #2DB9F9;\n}\n","",{version:3,sources:["D:/work/git/nxcloud/src/pages/manage/customer/CustomerOrder.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,oBAAoB;EACpB,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,yBAAyB;CAC1B;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,eAAe;CAChB",file:"CustomerOrder.vue",sourcesContent:["\n.customerOrder-page[data-v-3e4244ea] {\n  overflow: hidden;\n  background: #fff;\n}\n.list-group[data-v-3e4244ea] {\n  background: #ededed;\n  margin-bottom: 30px;\n}\n.list[data-v-3e4244ea] {\n  background: #fff;\n  font-size: 15px;\n  margin-bottom: 8px;\n}\n.list .list-item[data-v-3e4244ea] {\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.list .list-item .item-label[data-v-3e4244ea] {\n  margin-right: 1em;\n  min-width: 4em;\n  text-align: justify;\n  text-align-last: justify;\n}\n.list .list-item .item-content[data-v-3e4244ea] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n.pagination[data-v-3e4244ea] {\n  margin: 30px 20px;\n}\n.pagination .current-page[data-v-3e4244ea] {\n  text-align: center;\n  color: #2DB9F9;\n}\n"],sourceRoot:""}])}});