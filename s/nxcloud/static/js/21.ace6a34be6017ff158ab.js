webpackJsonp([21],{DtkZ:function(e,t,a){var o=a("VuCx");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("5e6bff22",o,!0,{})},E3tT:function(e,t,a){"use strict";function o(e){a("DtkZ")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("Xxa5"),n=a.n(r),i=a("exGp"),c=a.n(i),s=a("wwIJ"),u=a("pDNl"),d=a("ALGc"),l=a("2sLL"),m=a("UgCr"),p=(s.a,u.a,d.a,l.a,{components:{Selector:s.a,XInput:u.a,XTextarea:d.a,XButton:l.a},data:function(){return{configLoaidng:!1,payMent:1,crmData:{city:"",region:"",crmCustId:"",crmCustIdTmp:"",showCusId:"",accountId:"",accountIdTmp:"",showAccountId:"",yunAccountInfo:"",yunAccountTmp:"",bizId:""},staticData:{publicNetwork:[]},resourcePoolList:[],selectResourcePool:{},vpcList:[],rules:{name:[{validator:function(e,t,a){if(!t)return a(new Error("实例名不能为空"));a()},trigger:"blur"}]},dataForm:{name:"default",vpc:"",publicNetwork:"",desc:"",resourcePool:""},keyCodeList:{},orderInitData:{}}},computed:{},created:function(){this.getBaseData()},mounted:function(){document.documentElement.scrollTop=0},methods:{getBaseData:function(){var e=this;return c()(n.a.mark(function t(){var a,o,r,i;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e,t.prev=1,a.configLoaidng=!0,t.next=5,Object(m.t)({typeCode:"publicNetwork"});case 5:if(o=t.sent,Array.isArray(o)){t.next=8;break}return t.abrupt("return");case 8:r=0;case 9:if(!(r<o.length)){t.next=21;break}i=o[r],e.keyCodeList[i.keyValue]=i,t.t0=o[r].typeCode,t.next="publicNetwork"===t.t0?15:17;break;case 15:return a.staticData.publicNetwork.push(o[r]),t.abrupt("break",18);case 17:return t.abrupt("break",18);case 18:r++,t.next=9;break;case 21:a.handlepublicNetworkChange();case 22:return t.prev=22,a.configLoaidng=!1,t.finish(22);case 25:case"end":return t.stop()}},t,e,[[1,,22,25]])}))()},handlepublicNetworkChange:function(){var e=this;e.$nextTick(function(){e.dataForm.publicNetwork=e.staticData.publicNetwork[0].keyValue})},crmInfo:function(e){this.crmData=e,e.bizId&&this.getResourceList()},getResourceList:function(){var e=this;return c()(n.a.mark(function t(){var a,o;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.configLoaidng=!0,e.dataForm.resourcePool="",t.next=5,Object(m.B)();case 5:a=t.sent,e.resourcePoolList=a,o=a[0],e.dataForm.resourcePool=o.regionId,e.selectResourcePool=o,e.resourceChange();case 11:return t.prev=11,e.configLoaidng=!1,t.finish(11);case 14:case"end":return t.stop()}},t,e,[[0,,11,14]])}))()},getValue:function(e){var t=this.$refs[e].getFullValue();return t&&t.length>0?t[0]:{}},changePool:function(e){var t=this;setTimeout(function(){var a=t.getValue(e);t.selectResourcePool=a,t.resourceChange()},200)},resourceChange:function(){try{this.configLoaidng=!0,this.dataForm.vpc="",this.getVpc()}catch(e){console.error(e)}finally{this.configLoaidng=!1}},getVpc:function(){var e=this;return c()(n.a.mark(function t(){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.configLoaidng=!0,t.next=4,Object(m.y)({type:1,regionId:e.dataForm.resourcePool,crmBizId:e.crmData.bizId,accountId:""});case 4:a=t.sent,a&&a.length>0?(e.vpcList=a,e.dataForm.vpc=a[0].resVpcId):e.createVpc();case 6:return t.prev=6,e.configLoaidng=!1,t.finish(6);case 9:case"end":return t.stop()}},t,e,[[0,,6,9]])}))()},createVpc:function(){var e=this;return c()(n.a.mark(function t(){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.selectResourcePool.zoneId,t.next=3,Object(m.f)({regionId:e.crmData.regionId,zoneId:a,crmBizId:e.crmData.bizId,type:"1",accountId:""});case 3:case"end":return t.stop()}},t,e)}))()},validate:function(){return!0},submitForm:function(e){if(!this.validate())return console.log("error submit!!"),!1;this.goOrder()},goOrder:function(){this.switchData();var e=[],t={productId:12,productName:"负载均衡",orderType:4,perPrice:"",unitPrice:"",data:this.dataForm,crmData:this.crmData,productFiles:e,configData:this.configData,flavorId:"",flavorName:"",tableShowData:{config:"负载均衡",time:"",num:""}};this.orderInitData=t,this.payMent=2},switchData:function(){var e=this,t=e.dataForm,a=[];a.push({itemCode:"00006029",itemCodeName:e.crmData.bizId,itemCodeValue:e.crmData.bizId,itemId:"00006029",itemIdType:"",itemMode:"",itemName:"云主机BIZID"}),a.push({itemCode:"590039898",itemCodeName:this.selectResourcePool.zoneName,itemCodeValue:this.selectResourcePool.regionId,itemId:"590039898",itemIdType:"",itemMode:"",itemName:"资源池"}),a.push({itemCode:"10020441",itemCodeName:t.vpc,itemCodeValue:t.vpc,itemId:"10020441",itemIdType:"",itemMode:"",itemName:"vpc"}),a.push({itemCode:"描述",itemCodeName:t.desc,itemCodeValue:t.desc,itemId:"描述",itemIdType:"",itemMode:"",itemName:"描述"});var o=this.keyCodeList;for(var r in t){if(["publicNetwork"].includes(r)){var n=t[r],i=o[n];a.push({itemCode:i.keyCode,itemCodeName:i.keyName,itemCodeValue:i.keyValue,itemIdType:i.typeCode,itemId:"",itemMode:"",itemName:""})}}this.configData=a},showPage:function(){this.payMent=1}}}),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"database"},[a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.payMent,expression:"payMent === 1"}],staticClass:"dataproduct"},[a("div",{staticClass:"dataproduct-container"},[a("div",{staticClass:"content"},[a("product-cust-info",{attrs:{cLoading:e.configLoaidng,needBizid:!0},on:{crmData:e.crmInfo}}),e._v(" "),a("div",{staticClass:"content-section"},[a("x-input",{attrs:{title:"名称","label-width":"10"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}}),e._v(" "),a("selector",{ref:"resourcePool",attrs:{"value-map":["regionId","zoneName"],title:"资源池",options:e.resourcePoolList},on:{"on-change":function(t){return e.changePool("resourcePool")}},model:{value:e.dataForm.resourcePool,callback:function(t){e.$set(e.dataForm,"resourcePool",t)},expression:"dataForm.resourcePool"}}),e._v(" "),a("selector",{attrs:{"value-map":["resVpcId","name"],title:"所属VPC",options:e.vpcList},model:{value:e.dataForm.vpc,callback:function(t){e.$set(e.dataForm,"vpc",t)},expression:"dataForm.vpc"}}),e._v(" "),a("selector",{attrs:{"value-map":["keyValue","keyValue"],title:"公网宽带",options:e.staticData.publicNetwork},model:{value:e.dataForm.publicNetwork,callback:function(t){e.$set(e.dataForm,"publicNetwork",t)},expression:"dataForm.publicNetwork"}}),e._v(" "),a("x-textarea",{attrs:{title:"描述",placeholder:"请输入内容"},model:{value:e.dataForm.desc,callback:function(t){e.$set(e.dataForm,"desc",t)},expression:"dataForm.desc"}})],1)],1),e._v(" "),a("div",{staticClass:"bottom-container"},[a("x-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.submitForm("dataForm")}}},[e._v("立即购买")])],1)])]),e._v(" "),a("product-order",{directives:[{name:"show",rawName:"v-show",value:2===e.payMent,expression:"payMent === 2"}],attrs:{orderInitData:e.orderInitData},on:{showPage:e.showPage}})],1)},v=[],h={render:f,staticRenderFns:v},g=h,b=a("VU/8"),I=o,k=b(p,g,!1,I,"data-v-7fc83b6a",null);t.default=k.exports},VuCx:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"LoadProduct.vue",sourceRoot:""}])}});