webpackJsonp([16],{fsLg:function(t,a,s){"use strict";function i(t){s("onhk")}Object.defineProperty(a,"__esModule",{value:!0});var e=s("Xxa5"),n=s.n(e),l=s("exGp"),o=s.n(l),c=s("hx1z"),r=s("2sLL"),d=s("YxJB"),p=s("3Lt7"),v=s("UgCr"),C=s("RH4F"),m=(r.a,d.a,p.a,c.a,{name:"adminPartnerApply",components:{XButton:r.a,Flexbox:d.a,FlexboxItem:p.a,UploadFile:c.a},data:function(){return{orderData:{},orderList:[],loading:!1,statusList:["待支付","支付成功","支付失败","已生单","已竣工","已签收","已取消"],portalOrderInvoice:{invoiceType:1,invoiceTitle:"",taxpayerNo:"",invoiceContent:"商品明细"},noVoiceInfo:!1}},filters:{flavorComment:function(t){if(!t)return"";for(var a="",s=0;s<t.length;s++){var i=t[s],e=Number(i.itemCode),n=i.itemCodeValue;switch(e){case 590039903:a+=n+"Vcpu，";break;case 590039904:a+=n+"G内存，";break;case 590040018:a+=n+"M带宽，";break;case 590039910:a+=n+"G";break;case 590039908:a+=n+"系统盘";break;case 590039911:a+=n+"G";break;case 590039909:a+=n+"数据盘"}}return a}},created:function(){this.initData(),this.getPartnerDetail()},methods:{initData:function(){this.orderData=C.a.getItem("adminPartnerApply"),this.orderList.push(this.orderData)},goPay:function(t){C.a.setItem("productConfig",t),this.$router.push({name:"payMent",query:{id:t.orderId,type:2}})},getPartnerDetail:function(){var t=this;return o()(n.a.mark(function a(){var s,i;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:s=t,i={partnerId:t.orderData.id},Object(v.o)(i).then(function(t){if(t)if(t.msg&&!t.data)s.$vux.toast.show({text:t.msg,type:"warn",time:3e3,position:"middle"});else{for(var a in t)["contactPhone","contactEmail","contactQq"].includes(a)&&(t[a]=s.RSAdecrypt(t[a]));console.log(t),s.orderData=t}else s.noVoiceInfo=!0}).finally(function(){s.loading=!1});case 3:case"end":return a.stop()}},a,t)}))()},findInvoice:function(){this.noVoiceInfo?this.$vux.toast.show({text:"暂无发票信息",type:"text",time:3e3,position:"middle"}):this.dialogVisible=!0}}}),A=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"adminPartnerApply-page"},[s("div",{staticClass:"list-group"},[s("div",{staticClass:"list-group-title"},[t._v("基本信息")]),t._v(" "),s("ul",{staticClass:"list"},[s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("公司名称")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.companyName))])]),t._v(" "),s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("公司网站")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.companyWebsite))])]),t._v(" "),s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("公司地址")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.companyAddress))])]),t._v(" "),s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("统一社会信用代码")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.socialCreditCode))])]),t._v(" "),s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("云主机合同号")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.cloudServerContractsNo))])]),t._v(" "),s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("合同有效期")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.contractsStartDate)+" - "+t._s(t.orderData.contractsEndDate))])]),t._v(" "),t._l(t.orderData.partnerDescList,function(a){return[s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v(t._s(a.descName))]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(a.descContent))])])]})],2)]),t._v(" "),s("div",{staticClass:"list-group"},[s("div",{staticClass:"list-group-title"},[t._v("联系方式")]),t._v(" "),s("ul",{staticClass:"list"},[s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("联系人")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.contactPerson))])]),t._v(" "),s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("联系电话")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.contactPhone))])]),t._v(" "),s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("联系邮箱")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.contactEmail))])]),t._v(" "),s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("联系QQ")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.contactQq))])]),t._v(" "),s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("联系地址")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.contactAddress))])])])]),t._v(" "),s("div",{staticClass:"list-group"},[s("div",{staticClass:"list-group-title"},[t._v("支付中心账户信息")]),t._v(" "),s("ul",{staticClass:"list"},[s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("开户名称")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.bankAccountName))])]),t._v(" "),s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("开户银行全称")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.bankFullName))])]),t._v(" "),s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("银行账户账号")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.bankAccountNo))])]),t._v(" "),s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("联行号")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.bankNo))])]),t._v(" "),s("li",{staticClass:"list-item"},[s("span",{staticClass:"item-label"},[t._v("转账类型")]),t._v(" "),s("span",{staticClass:"item-content"},[t._v(t._s(t.orderData.bankAccountType))])])])]),t._v(" "),s("div",{staticClass:"list-group"},[s("div",{staticClass:"list-group-title"},[t._v("上传图片信息")]),t._v(" "),s("div",{staticClass:"list"},t._l(t.orderData.partnerFileList,function(a){return 1==a.orderno?s("div",{staticClass:"weui-cell"},[s("div",{staticClass:"weui-cell__hd"},[s("label",{staticClass:"weui-label",staticStyle:{"word-break":"break-all"}},[t._v(t._s(a.picName))])]),t._v(" "),s("div",{staticClass:"weui-cell__bd",staticStyle:{minWidth:"60%"}},[s("UploadFile",{attrs:{uploadType:"img",fileURL:a.shareUrl,accept:"image/*"}})],1)]):t._e()}),0)]),t._v(" "),s("div",{staticClass:"list-group"},[s("div",{staticClass:"list-group-title"},[t._v("上传文件信息")]),t._v(" "),s("div",{staticClass:"list"},t._l(t.orderData.partnerFileList,function(a){return 2==a.orderno?s("div",{staticClass:"weui-cell"},[s("div",{staticClass:"weui-cell__bd"},[s("UploadFile",{attrs:{fileName:a.picName,readonly:!0,uploadType:"file",fileURL:a.shareUrl}})],1)]):t._e()}),0)])])},f=[],_={render:A,staticRenderFns:f},u=_,b=s("VU/8"),g=i,B=b(m,u,!1,g,"data-v-af8f265c",null);a.default=B.exports},onhk:function(t,a,s){var i=s("rL7r");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("1b604bc2",i,!0,{})},rL7r:function(t,a,s){a=t.exports=s("FZ+f")(!0),a.push([t.i,"\n.list-group[data-v-af8f265c] {\n  background: #ededed;\n  margin-bottom: 30px;\n}\n.list-group-title[data-v-af8f265c] {\n  position: relative;\n  background: #fff;\n  padding: 6px 10px;\n  margin-bottom: 1px;\n  line-height: 34px;\n  font-weight: bold;\n}\n.list-group-title[data-v-af8f265c]:before {\n  content: '';\n  border-left: 4px solid #2DB9F9;\n  position: absolute;\n  left: 0;\n  height: 34px;\n}\n.list[data-v-af8f265c] {\n  background: #fff;\n  font-size: 15px;\n  margin-bottom: 8px;\n}\n.list .list-item[data-v-af8f265c] {\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.list .list-item .item-label[data-v-af8f265c] {\n  margin-right: 1em;\n  min-width: 4em;\n  text-align: justify;\n  text-align-last: justify;\n}\n.list .list-item .item-content[data-v-af8f265c] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n.list .list-item .total[data-v-af8f265c] {\n  color: red;\n  font-weight: bold;\n}\n","",{version:3,sources:["D:/work/git/nxcloud/src/pages/manage/admin/AdminPartnerApply.vue"],names:[],mappings:";AACA;EACE,oBAAoB;EACpB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,+BAA+B;EAC/B,mBAAmB;EACnB,QAAQ;EACR,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,yBAAyB;CAC1B;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,kBAAkB;CACnB;AACD;EACE,WAAW;EACX,kBAAkB;CACnB",file:"AdminPartnerApply.vue",sourcesContent:["\n.list-group[data-v-af8f265c] {\n  background: #ededed;\n  margin-bottom: 30px;\n}\n.list-group-title[data-v-af8f265c] {\n  position: relative;\n  background: #fff;\n  padding: 6px 10px;\n  margin-bottom: 1px;\n  line-height: 34px;\n  font-weight: bold;\n}\n.list-group-title[data-v-af8f265c]:before {\n  content: '';\n  border-left: 4px solid #2DB9F9;\n  position: absolute;\n  left: 0;\n  height: 34px;\n}\n.list[data-v-af8f265c] {\n  background: #fff;\n  font-size: 15px;\n  margin-bottom: 8px;\n}\n.list .list-item[data-v-af8f265c] {\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.list .list-item .item-label[data-v-af8f265c] {\n  margin-right: 1em;\n  min-width: 4em;\n  text-align: justify;\n  text-align-last: justify;\n}\n.list .list-item .item-content[data-v-af8f265c] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n.list .list-item .total[data-v-af8f265c] {\n  color: red;\n  font-weight: bold;\n}\n"],sourceRoot:""}])}});