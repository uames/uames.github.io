webpackJsonp([24],{R3TZ:function(t,i,e){var s=e("cuB8");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("454f8b56",s,!0,{})},cuB8:function(t,i,e){i=t.exports=e("FZ+f")(!0),i.push([t.i,"\n.list-group[data-v-877a5356] {\n  background: #ededed;\n  margin-bottom: 30px;\n}\n.list-group-title[data-v-877a5356] {\n  position: relative;\n  background: #fff;\n  padding: 6px 10px;\n  margin-bottom: 1px;\n  line-height: 34px;\n  font-weight: bold;\n}\n.list-group-title[data-v-877a5356]:before {\n  content: '';\n  border-left: 4px solid #2DB9F9;\n  position: absolute;\n  left: 0;\n  height: 34px;\n}\n.list[data-v-877a5356] {\n  background: #fff;\n  font-size: 15px;\n  margin-bottom: 8px;\n}\n.list .list-item[data-v-877a5356] {\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.list .list-item .item-label[data-v-877a5356] {\n  margin-right: 1em;\n  min-width: 4em;\n  text-align: justify;\n  text-align-last: justify;\n}\n.list .list-item .item-content[data-v-877a5356] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n.list .list-item .total[data-v-877a5356] {\n  color: red;\n  font-weight: bold;\n}\n","",{version:3,sources:["D:/work/git/nxcloud/src/pages/manage/OrderDetail.vue"],names:[],mappings:";AACA;EACE,oBAAoB;EACpB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,+BAA+B;EAC/B,mBAAmB;EACnB,QAAQ;EACR,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,yBAAyB;CAC1B;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,kBAAkB;CACnB;AACD;EACE,WAAW;EACX,kBAAkB;CACnB",file:"OrderDetail.vue",sourcesContent:["\n.list-group[data-v-877a5356] {\n  background: #ededed;\n  margin-bottom: 30px;\n}\n.list-group-title[data-v-877a5356] {\n  position: relative;\n  background: #fff;\n  padding: 6px 10px;\n  margin-bottom: 1px;\n  line-height: 34px;\n  font-weight: bold;\n}\n.list-group-title[data-v-877a5356]:before {\n  content: '';\n  border-left: 4px solid #2DB9F9;\n  position: absolute;\n  left: 0;\n  height: 34px;\n}\n.list[data-v-877a5356] {\n  background: #fff;\n  font-size: 15px;\n  margin-bottom: 8px;\n}\n.list .list-item[data-v-877a5356] {\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.list .list-item .item-label[data-v-877a5356] {\n  margin-right: 1em;\n  min-width: 4em;\n  text-align: justify;\n  text-align-last: justify;\n}\n.list .list-item .item-content[data-v-877a5356] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n.list .list-item .total[data-v-877a5356] {\n  color: red;\n  font-weight: bold;\n}\n"],sourceRoot:""}])},d02N:function(t,i,e){"use strict";function s(t){e("R3TZ")}Object.defineProperty(i,"__esModule",{value:!0});var a=e("Xxa5"),n=e.n(a),l=e("exGp"),o=e.n(l),r=e("2sLL"),c=e("YxJB"),d=e("3Lt7"),p=e("Nv8u"),m=e("RH4F"),v=(r.a,c.a,d.a,{name:"orderDetail",components:{XButton:r.a,Flexbox:c.a,FlexboxItem:d.a},data:function(){return{orderData:{},orderList:[],loading:!1,statusList:["待支付","支付成功","支付失败","已生单","已竣工","已签收","已取消"],portalOrderInvoice:{invoiceType:1,invoiceTitle:"",taxpayerNo:"",invoiceContent:"商品明细"},noVoiceInfo:!1}},filters:{flavorComment:function(t){if(!t)return"";for(var i="",e=0;e<t.length;e++){var s=t[e],a=Number(s.itemCode),n=s.itemCodeValue;switch(a){case 590039903:i+=n+"Vcpu，";break;case 590039904:i+=n+"G内存，";break;case 590040018:i+=n+"M带宽，";break;case 590039910:i+=n+"G";break;case 590039908:i+=n+"系统盘";break;case 590039911:i+=n+"G";break;case 590039909:i+=n+"数据盘"}}return i}},created:function(){this.initData(),this.getOrderInvoiceInfo()},methods:{initData:function(){this.orderData=m.a.getItem("ORDERDetail"),this.orderList.push(this.orderData)},goPay:function(t){m.a.setItem("productConfig",t),this.$router.push({name:"payMent",query:{id:t.orderId,type:2}})},getOrderInvoiceInfo:function(){var t=this;return o()(n.a.mark(function i(){var e,s;return n.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:e=t,s={orderId:t.orderData.orderId},Object(p.l)(s).then(function(t){if(t)if(t.msg&&!t.data)e.$vux.toast.show({text:t.msg,type:"warn",time:3e3,position:"middle"});else{for(var i in e.portalOrderInvoice)e.portalOrderInvoice[i]=t[i];console.log(t)}else e.noVoiceInfo=!0}).finally(function(){e.loading=!1});case 3:case"end":return i.stop()}},i,t)}))()},findInvoice:function(){this.noVoiceInfo?this.$vux.toast.show({text:"暂无发票信息",type:"text",time:3e3,position:"middle"}):this.dialogVisible=!0}}}),C=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"orderDetail-page"},[e("div",{staticClass:"list-group"},[e("div",{staticClass:"list-group-title"},[t._v("订单信息")]),t._v(" "),t._l(t.orderList,function(i){return e("ul",{staticClass:"list"},[e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("订单号")]),t._v(" "),e("span",{staticClass:"item-content"},[t._v(t._s(i.orderId))])]),t._v(" "),e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("产品名称")]),t._v(" "),e("span",{staticClass:"item-content"},[t._v(t._s(i.productName))])]),t._v(" "),e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("订单状态")]),t._v(" "),e("span",{staticClass:"item-content"},[t._v(t._s(t.statusList[i.orderStatus]))])]),t._v(" "),e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("支付方式")]),t._v(" "),e("span",{staticClass:"item-content"},[t._v(t._s(i.payType))])]),t._v(" "),e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("订单创建时间")]),t._v(" "),e("span",{staticClass:"item-content"},[t._v(t._s(i.orderTime))])]),t._v(" "),e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("支付时间")]),t._v(" "),e("span",{staticClass:"item-content"},[t._v(t._s(i.payTime))])]),t._v(" "),e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("联系手机")]),t._v(" "),e("span",{staticClass:"item-content"},[t._v(t._s(i.contactPhone))])]),t._v(" "),e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("联系QQ")]),t._v(" "),e("span",{staticClass:"item-content"},[t._v(t._s(i.contactQq))])]),t._v(" "),e("li",{staticClass:"list-item"},[e("flexbox",[e("flexbox-item",[e("x-button",{attrs:{type:"primary"},nativeOn:{click:function(i){return t.findInvoice(i)}}},[t._v("查看发票")])],1)],1)],1)])})],2),t._v(" "),e("div",{staticClass:"list-group"},[e("div",{staticClass:"list-group-title"},[t._v("订单配置")]),t._v(" "),t._l(t.orderList,function(i){return e("ul",{staticClass:"list"},[e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("产品名称")]),t._v(" "),e("span",{staticClass:"item-content"},[t._v(t._s(i.productName))])]),t._v(" "),e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("配置")]),t._v(" "),e("span",{staticClass:"item-content"},[t._v(t._s(i.productConfigInfo.flavorName)+"："+t._s(t._f("flavorComment")(i.productConfigInfo.productItems)))])]),t._v(" "),e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("数量")]),t._v(" "),e("span",{staticClass:"item-content"},[i.productConfigInfo?t._l(i.productConfigInfo.productItems,function(i,s){return e("div",{key:s},["2"===i.itemIdType?e("div",[e("span",[t._v(t._s(i.itemCodeValue))])]):t._e()])}):t._e()],2)]),t._v(" "),e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("时长")]),t._v(" "),e("span",{staticClass:"item-content"},[i.productConfigInfo?t._l(i.productConfigInfo.productItems,function(i,s){return e("div",{key:s},["timeKey"===i.itemIdType?e("div",[e("span",[t._v(t._s(i.itemCodeName))])]):t._e()])}):t._e()],2)]),t._v(" "),e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("单价（元）")]),t._v(" "),e("span",{staticClass:"item-content",scopedSlots:t._u([{key:"default",fn:function(e){return i.productConfigInfo?[t._v("\n                  "+t._s(i.productConfigInfo.unitPrice)+"\n              ")]:void 0}}],null,!0)})]),t._v(" "),e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("产品金额")]),t._v(" "),e("span",{staticClass:"item-content"},[t._v(t._s(i.totalAmount)+"元")])]),t._v(" "),e("li",{staticClass:"list-item"},[e("span",{staticClass:"item-label"},[t._v("订单金额")]),t._v(" "),e("span",{staticClass:"item-content"},[e("span",{staticClass:"total"},[t._v("￥"+t._s(i.totalAmount))])])]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:0===i.orderStatus,expression:"order.orderStatus === 0"}],staticClass:"list-item"},[e("flexbox",[e("flexbox-item",[e("x-button",{attrs:{type:"warn"},nativeOn:{click:function(e){return t.goPay(i)}}},[t._v("去支付")])],1)],1)],1)])})],2)])},A=[],u={render:C,staticRenderFns:A},f=u,_=e("VU/8"),g=s,B=_(v,f,!1,g,"data-v-877a5356",null);i.default=B.exports}});