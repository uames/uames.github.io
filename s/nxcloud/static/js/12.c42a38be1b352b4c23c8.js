webpackJsonp([12],{"AHu/":function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"\n.content-section[data-v-7785c3a2] {\n  background-color: #fff;\n  margin-bottom: 8px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n}\n.productinfo[data-v-7785c3a2] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-content: center;\n          align-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.productinfo-img[data-v-7785c3a2] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.productinfo-img img[data-v-7785c3a2] {\n  width: 120px;\n  height: auto;\n}\n.productinfo-content[data-v-7785c3a2] {\n  font-size: 15px;\n  -webkit-box-flex: 6;\n  -webkit-flex: 6;\n          flex: 6;\n}\n.productinfo-content__title[data-v-7785c3a2] {\n  padding-bottom: 5px;\n}\n.productinfo-content__kind[data-v-7785c3a2] {\n  padding-bottom: 5px;\n  font-size: 14px;\n  color: #666;\n}\n.productinfo-content__words[data-v-7785c3a2] {\n  padding-bottom: 5px;\n  background: #eaf6fe;\n  color: #1f8eeb;\n  font-size: 14px;\n  padding: 3px 5px;\n}\n.bottom-container[data-v-7785c3a2] {\n  padding: 10px;\n}\n","",{version:3,sources:["D:/work/git/nxcloud/src/pages/product/awareProduct/index.vue"],names:[],mappings:";AACA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,6CAA6C;CAC9C;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;EAChC,8BAA8B;UACtB,sBAAsB;EAC9B,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;CACjB;AACD;EACE,aAAa;EACb,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;CACjB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;EACpB,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,oBAAoB;EACpB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,cAAc;CACf",file:"index.vue",sourcesContent:["\n.content-section[data-v-7785c3a2] {\n  background-color: #fff;\n  margin-bottom: 8px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n}\n.productinfo[data-v-7785c3a2] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-content: center;\n          align-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.productinfo-img[data-v-7785c3a2] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.productinfo-img img[data-v-7785c3a2] {\n  width: 120px;\n  height: auto;\n}\n.productinfo-content[data-v-7785c3a2] {\n  font-size: 15px;\n  -webkit-box-flex: 6;\n  -webkit-flex: 6;\n          flex: 6;\n}\n.productinfo-content__title[data-v-7785c3a2] {\n  padding-bottom: 5px;\n}\n.productinfo-content__kind[data-v-7785c3a2] {\n  padding-bottom: 5px;\n  font-size: 14px;\n  color: #666;\n}\n.productinfo-content__words[data-v-7785c3a2] {\n  padding-bottom: 5px;\n  background: #eaf6fe;\n  color: #1f8eeb;\n  font-size: 14px;\n  padding: 3px 5px;\n}\n.bottom-container[data-v-7785c3a2] {\n  padding: 10px;\n}\n"],sourceRoot:""}])},U2gm:function(t,e,a){var n=a("AHu/");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("8ea02b84",n,!0,{})},t0nz:function(t,e,a){"use strict";function n(t){a("U2gm")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),o=a.n(i),s=a("exGp"),c=a.n(s),r=a("UgCr"),d=a("XpF+"),p=a("T8/m"),u=a("wwIJ"),m=a("2sLL"),l=(d.a,p.a,u.a,m.a,{name:"awareProduct",components:{ProductOrder:d.a,Panel:p.a,Selector:u.a,XButton:m.a},data:function(){var t=this;return{configLoaidng:!1,payMent:1,crmData:{city:"",region:"",crmCustId:"",crmCustIdTmp:"",showCusId:"",accountId:"",accountIdTmp:"",showAccountId:"",yunAccountInfo:"",yunAccountTmp:"",bizId:""},staticData:{databaseEngine:[],databaseVersion:[],instanceType:[],storage:[],capabilityFormat:[],timeList:[],numList:0},performance:"通用增强型",dataForm:{name:"default",datatype:"",edition:"5.7",exampletype:"",buyTime:0,buyNum:1,savespace:"40GB",pass:"",checkPass:""},rules:{name:[{validator:function(t,e,a){if(!e)return a(new Error("实例名不能为空"));a()},trigger:"blur"}],pass:[{validator:function(e,a,n){""===a?n(new Error("请输入密码")):(""!==t.dataForm.checkPass&&t.$refs.dataForm.validateField("checkPass"),n())},trigger:"blur"}],checkPass:[{validator:function(e,a,n){""===a?n(new Error("请再次输入密码")):a!==t.dataForm.pass?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}]},templateRadio:1,specsData:{keyName:1,keyValue:"1核|2GB"},keyCodeList:{},orderInitData:{}}},computed:{databaseVersion:function(){var t=this.dataForm.datatype,e=this.staticData.databaseVersion;return e=e.filter(function(e){return e.remark===t}),e}},created:function(){this.getBaseData()},mounted:function(){document.documentElement.scrollTop=0},methods:{getBaseData:function(){var t=this;return c()(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t,e.prev=1,a.configLoaidng=!1,e.next=5,Object(r.t)({typeCode:"databaseEngine,instanceType,storage,databaseVersion,capabilityFormat,timeKey,numKey"}).then(function(e){if(Array.isArray(e)){for(var n=0;n<e.length;n++){var i=e[n];switch("numKey"!==i.typeCode&&(t.keyCodeList[i.keyValue]=i),e[n].typeCode){case"databaseEngine":a.staticData.databaseEngine.push(e[n]);break;case"instanceType":a.staticData.instanceType.push(e[n]);break;case"storage":a.staticData.storage.push(e[n]);break;case"databaseVersion":a.staticData.databaseVersion.push(e[n]);break;case"capabilityFormat":a.staticData.capabilityFormat.push(e[n]);break;case"timeKey":a.staticData.timeList.push(e[n]);break;case"numKey":a.staticData.numList=e[n]}}var o=a.staticData,s=o.databaseEngine,c=o.instanceType,r=o.capabilityFormat;a.dataForm.datatype=s[0].keyValue,a.dataForm.exampletype=c[0].keyValue,a.dataForm.buyTime=a.staticData.timeList[11].keyValue,a.handleDatatypeChange(),a.getTemplateRow(0,r[0])}});case 5:return e.prev=5,a.configLoaidng=!1,e.finish(5);case 8:case"end":return e.stop()}},e,t,[[1,,5,8]])}))()},crmInfo:function(t){this.crmData=t},handleDatatypeChange:function(){var t=this;t.$nextTick(function(){t.dataForm.edition=t.databaseVersion[0].keyValue})},getTemplateRow:function(t,e){if(e){for(var a in this.specsData)this.specsData[a]=e[a];this.templateRadio=this.specsData.keyValue}},submitForm:function(t){this.goOrder()},goOrder:function(){this.switchData();var t=[],e={productId:13,productName:"态势感知",orderType:4,perPrice:"",unitPrice:"",data:this.dataForm,crmData:this.crmData,productFiles:t,configData:this.configData,flavorId:"",flavorName:"",tableShowData:{config:this.specsData.keyValue,time:this.dataForm.buyTime,num:this.dataForm.buyNum}};this.orderInitData=e,this.payMent=2},switchData:function(){var t=this,e=t.dataForm,a=[];a.push({itemCode:"590040017",itemCodeName:e.pass,itemCodeValue:e.pass,itemId:"590040017",itemIdType:"",itemMode:"",itemName:"登录数据库密码"}),a.push({itemCode:"实例名称",itemId:"实例名称",itemCodeName:e.name,itemCodeValue:e.name,itemIdType:"",itemMode:"",itemName:"实例名称"});var n=this.keyCodeList;for(var i in e){if(!["name","buyNum","pass","checkPass"].includes(i)){var o=e[i],s=n[o];a.push({itemCode:s.keyCode,itemCodeName:s.keyName,itemCodeValue:s.keyValue,itemIdType:s.typeCode,itemId:"",itemMode:"",itemName:""})}}a.push({itemCode:"590039924",itemCodeName:1,itemCodeValue:1,itemIdType:"numKey",itemId:"",itemMode:"",itemName:""}),this.configData=a},showPage:function(){this.payMent=1}}}),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"database"},[a("product-process",{attrs:{title:"流量检测",payMent:t.payMent}}),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.configLoaidng,expression:"configLoaidng"},{name:"show",rawName:"v-show",value:1===t.payMent,expression:"payMent === 1"}],staticClass:"dataproduct"},[a("div",{staticClass:"dataproduct-container"},[a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("product-cust-info",{attrs:{needBizid:!1},on:{crmData:t.crmInfo}}),t._v(" "),a("div",{staticClass:"content-section"},[a("selector",{attrs:{"value-map":["keyValue","keyName"],title:"购买时长",options:t.staticData.timeList},model:{value:t.dataForm.buyTime,callback:function(e){t.$set(t.dataForm,"buyTime",e)},expression:"dataForm.buyTime"}})],1)],1),t._v(" "),a("div",{staticClass:"bottom-container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"bottom-container__content",attrs:{span:12}},[t._m(1),t._v(" "),a("div",{staticClass:"tips"},[t._v("\n              参考价格，具体扣费请以账单为准。\n            ")])]),t._v(" "),a("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.submitForm(e)}}},[t._v("立即购买")])],1)])]),t._v(" "),a("product-order",{directives:[{name:"show",rawName:"v-show",value:2===t.payMent,expression:"payMent === 2"}],attrs:{needPay:!0,orderInitData:t.orderInitData},on:{showPage:t.showPage}})],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-section"},[n("div",{staticClass:"productinfo"},[n("div",{staticClass:"productinfo-img"},[n("img",{attrs:{src:a("wkSH"),alt:""}})]),t._v(" "),n("div",{staticClass:"productinfo-content"},[n("p",{staticClass:"productinfo-content__title"},[t._v("流量检测")]),t._v(" "),n("p",{staticClass:"productinfo-content__kind"},[t._v("态势感知系统安全扫描软件")]),t._v(" "),n("p",{staticClass:"productinfo-content__words"},[t._v("通过实时收集和分析用户的数据包信息，来检查分析当前网络是否存在被攻击和入侵威胁的行为，并对分析出来的威胁告警信息实现推送给租户进行展现。")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"price"},[a("span",{staticClass:"price-text"},[t._v("配置费用")]),t._v(" "),a("span",{staticClass:"price-detail"},[t._v("￥540.00")])])}],C={render:A,staticRenderFns:f},b=C,g=a("VU/8"),v=n,y=g(l,b,!1,v,"data-v-7785c3a2",null);e.default=y.exports},wkSH:function(t,e,a){t.exports=a.p+"static/img/liuliangjiance.jpg"}});