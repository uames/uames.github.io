webpackJsonp([39],{GSVK:function(t,e,a){"use strict";function n(t){a("O6E4")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),s=a.n(i),r=a("exGp"),o=a.n(r),c=a("dQSc"),u=a("ignk"),l=a("jHVj"),d=a("S8Wg"),p=a("pDNl"),m=a("rHil"),v=a("2sLL"),f=a("wwIJ"),g=a("etVR"),h=a("YxJB"),_=a("3Lt7"),x=a("kNDc"),y=a("LgOF"),b=a("HqzV"),C=a("TIYx"),k=(c.a,u.a,l.a,d.a,p.a,m.a,v.a,f.a,g.a,h.a,_.a,x.a,y.a,b.a,{name:"businessManage",components:{Card:c.a,XTable:u.a,CellFormPreview:l.a,Scroller:d.a,XInput:p.a,Group:m.a,XButton:v.a,Selector:f.a,Checklist:g.a,Flexbox:h.a,FlexboxItem:_.a,Grid:x.a,GridItem:y.a,Search:b.a},data:function(){return{totalPage:1,pageNum:1,total:1,formData:{productName:"",partnerId:"",productCategoryId:""},tableData:[],loading:!1,partnerList:[],typeList:{1:"云产品",2:"云市场"},categoryTypeList:[{key:1,value:"云产品"},{key:2,value:"云市场"}],btnList:{"permission:manage:add":!1,"permission:manage:edit":!1,"permission:manage:enable":!1,"permission:manage:delete":!1,"permission:manage:audit":!1,"permission:manage:preRelease":!1,"permission:manage:release":!1,"permission:manage:look":!1,"permission:manage:stop":!1},dialogVisible:!1,checkData:{isChecked:"",reason:""},activityLoading:!1,dialogVisibleRelease:!1,releaseTitle:"商品上架",emailForm:{userEmails:[{val:""}]},rowData:"",typeTmp:"",statusList:["待审核","审核通过","审核不通过"],releaseStatusList:{0:"上架",1:"下架",2:"预上架",3:"待上架"}}},computed:{},created:function(){if(this.userType=this.$store.getters.userInfo.userType,console.log("userType",this.userType),1==this.userType)this.BTN_showActive(this.btnList);else for(var t in this.btnList)this.btnList[t]=!0;this.getProductList()},mounted:function(){},methods:{getPartnerList:function(){var t=this;return o()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t,t.formData.productCategoryId="",e.next=4,Object(C.g)({categoryType:t.formData.categoryType}).then(function(t){a.partnerList=t});case 4:case"end":return e.stop()}},e,t)}))()},handleTablePageChange:function(t){"prev"==t?this.pageNum=this.pageNum-1:"next"==t&&(this.pageNum=this.pageNum+1),this.getProductList()},getProductList:function(){var t=this;return o()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t,Object(C.k)({pageNum:t.pageNum,pageSize:t.pageSize,productName:t.formData.productName,categoryType:t.formData.categoryType,productCategoryId:t.formData.productCategoryId}).then(function(t){t&&(t.msg&&!t.data?a.$vux.toast.show({text:t.msg,type:"warn",time:3e3,position:"middle"}):(a.tableData=t.list,a.totalPage=t.totalPage,console.log(t)))});case 2:case"end":return e.stop()}},e,t)}))()},addProduct:function(){this.$router.push({name:"productManageDeatil"})},editItems:function(t){this.$router.push({name:"productManageDeatil",query:{id:t.id}})},removeItem:function(t){var e=this;this.$vux.confirm.show({title:"提示",content:"是否确定删除?",onCancel:function(){e.$vux.toast.show({text:"已取消删除",type:"success",time:3e3,position:"middle"})},onConfirm:function(){Object(C.e)(t.id).then(function(){e.$vux.toast.show({text:"删除成功!",type:"success",time:3e3,position:"middle"})}),e.getProductList()}})},changeItem:function(t,e){var a=this;return o()(s.a.mark(function n(){var i;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:i=a,a.$vux.confirm.show({title:"提示",content:0==e?"是否确定禁用":"是否确定启用",onCancel:function(){i.$vux.toast.show({text:"已取消",type:"success",time:3e3,position:"middle"})},onConfirm:function(){Object(C.d)({id:t.id,productStatus:e}).then(function(){i.$vux.toast.show({text:1==e?"启用成功":"禁用成功",type:"success",time:3e3,position:"middle"})}),i.getProductList()}});case 2:case"end":return n.stop()}},n,a)}))()},examine:function(t){this.rowData=t,this.dialogVisible=!0,this.checkData.reason="",this.checkData.isChecked=""},examineSure:function(t){var e=this;return o()(s.a.mark(function a(){var n,i;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(n=e,""!=t){a.next=4;break}return n.$vux.toast.show({text:"请选择是否通过",type:"warn",time:3e3,position:"middle"}),a.abrupt("return");case 4:return e.activityLoading=!0,i={auditStatus:t,id:e.rowData.id},2==t&&(i.reason=e.checkData.reason),a.next=9,Object(C.b)(i).then(function(){n.$vux.toast.show({text:"审核成功",type:"success",time:3e3,position:"middle"}),n.getProductList()}).finally(function(){n.dialogVisible=!1});case 9:case"end":return a.stop()}},a,e)}))()},removeEmailItem:function(t){this.emailForm.userEmails.splice(t,1)},addEmailItem:function(){this.emailForm.userEmails.push({val:""})},preRelease:function(t,e){this.rowData=e,this.dialogVisibleRelease=!0,this.emailForm.userEmails=[{val:""}],this.typeTmp=t},releaseSure:function(){var t=this,e={productId:this.rowData.id,userEmails:[]};this.emailForm.userEmails.forEach(function(t){e.userEmails.push(t.val)}),Object(C.l)(e).then(function(){t.$vux.toast.show({text:"预上架成功",type:"success",time:3e3,position:"middle"})}).finally(function(){t.getProductList(),t.dialogVisibleRelease=!1})},readConfig:function(t){this.$router.push({name:"readProductConfig",query:{id:t.id,status:t.auditStatus}})},release:function(t,e){var a=this;this.$vux.confirm.show({title:"提示",content:0==t?"是否确定上架":"是否确定下架",onCancel:function(){a.$vux.toast.show({text:"已取消",type:"success",time:3e3,position:"middle"})},onConfirm:function(){Object(C.m)({productId:e.id,state:t}).then(function(){a.$vux.toast.show({text:0==t?"上架成功":"下架成功",type:"success",time:3e3,position:"middle"})}).finally(function(){a.getProductList()})}})},stopProducts:function(t){var e=this;return o()(s.a.mark(function a(){var n;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:n=e,e.$vux.confirm.show({title:"提示",content:"是否确定强制下架？",onCancel:function(){n.$vux.toast.show({text:"已取消",type:"success",time:3e3,position:"middle"})},onConfirm:function(){Object(C.o)({productId:t}).then(function(){n.$vux.toast.show({text:"下架成功",type:"success",time:3e3,position:"middle"})}).finally(function(){n.getProductList()})}});case 2:case"end":return a.stop()}},a,e)}))()}}}),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"businessManage"},[a("card",[a("div",{attrs:{slot:"content"},slot:"content"},[a("search",{ref:"search",attrs:{placeholder:"请输入商品名称","auto-fixed":!1,position:"relative"},model:{value:t.formData.productName,callback:function(e){t.$set(t.formData,"productName",e)},expression:"formData.productName"}}),t._v(" "),a("Selector",{attrs:{title:"商品类型",options:t.categoryTypeList},on:{"on-change":t.getPartnerList},model:{value:t.formData.categoryType,callback:function(e){t.$set(t.formData,"categoryType",e)},expression:"formData.categoryType"}}),t._v(" "),a("Selector",{attrs:{title:"所属行业","value-map":["id","categoryName"],options:t.partnerList},model:{value:t.formData.productCategoryId,callback:function(e){t.$set(t.formData,"productCategoryId",e)},expression:"formData.productCategoryId"}}),t._v(" "),a("div",{staticStyle:{padding:"10px"}},[a("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.getProductList(e)}}},[t._v("查询")])],1),t._v(" "),a("scroller",{attrs:{"lock-y":"","scrollbar-x":""}},[a("x-table",{staticStyle:{"background-color":"#fff",width:"800px"}},[a("thead",[a("tr",{staticStyle:{"background-color":"#f6f7fb"}},[a("th",[t._v("商品名称")]),t._v(" "),a("th",[t._v("价格")]),t._v(" "),a("th",[t._v("商品类型")]),t._v(" "),a("th",[t._v("商品分类")]),t._v(" "),a("th",[t._v("总库存")]),t._v(" "),a("th",[t._v("总销量")]),t._v(" "),a("th",[t._v("创建时间")]),t._v(" "),a("th",[t._v("序号")]),t._v(" "),a("th",[t._v("商户")]),t._v(" "),a("th",[t._v("审批状态")]),t._v(" "),a("th",[t._v("上架状态")]),t._v(" "),a("th",[t._v("操作")])])]),t._v(" "),a("tbody",[0==t.tableData.length?a("tr",[a("td",{attrs:{colspan:"12"}},[t._v("暂无数据")])]):t._e(),t._v(" "),t._l(t.tableData,function(e){return a("tr",[a("td",[t._v(t._s(e.productName))]),t._v(" "),a("td",[t._v(t._s(e.basicPrice))]),t._v(" "),a("td",[t._v(" "+t._s(t.typeList[e.categoryType]))]),t._v(" "),a("td",[t._v(t._s(e.productCategoryName))]),t._v(" "),a("td",[t._v(" "+t._s(e.productInventory))]),t._v(" "),a("td",[t._v(t._s(e.salesNum))]),t._v(" "),a("td",[t._v(t._s(e.createTime))]),t._v(" "),a("td",[t._v(t._s(e.orderNo))]),t._v(" "),a("td",[t._v(" "+t._s(null==e.partnerName?"云门户":e.partnerName))]),t._v(" "),a("td",[t._v(" "+t._s(t.statusList[e.auditStatus]))]),t._v(" "),a("td",[t._v(" "+t._s(t.releaseStatusList[e.productReleaseState]))]),t._v(" "),a("td",[(1!=e.auditStatus||1!=e.productReleaseState&&3!=e.productReleaseState)&&2!=e.auditStatus||!t.btnList["permission:manage:edit"]?t._e():a("x-button",{attrs:{type:"primary",mini:""},nativeOn:{click:function(a){return t.editItems(e)}}},[t._v("编辑")]),t._v(" "),"1"==t.userType&&t.btnList["permission:manage:stop"]&&0==e.productReleaseState?a("x-button",{attrs:{type:"warn",mini:""},nativeOn:{click:function(a){return t.stopProducts(e.id)}}},[t._v("强制下架")]):t._e(),t._v(" "),1==e.auditStatus&&0!==e.productReleaseState&&t.btnList["permission:manage:release"]?a("x-button",{attrs:{type:"primary",mini:""},nativeOn:{click:function(a){return t.release("0",e)}}},[t._v("上架")]):t._e(),t._v(" "),1==e.auditStatus&&1!==e.productReleaseState&&3!==e.productReleaseState&&t.btnList["permission:manage:release"]?a("x-button",{attrs:{type:"warn",mini:""},nativeOn:{click:function(a){return t.release("1",e)}}},[t._v("下架")]):t._e(),t._v(" "),1==e.auditStatus&&0!==e.productReleaseState&&2!==e.productReleaseState&&t.btnList["permission:manage:preRelease"]?a("x-button",{attrs:{type:"success",mini:""},nativeOn:{click:function(a){return t.preRelease("pre",e)}}},[t._v("预上架")]):t._e(),t._v(" "),"1"==t.userType&&t.btnList["permission:manage:audit"]&&1!==e.auditStatus?a("x-button",{attrs:{type:"primary",mini:""},nativeOn:{click:function(a){return t.examine(e)}}},[t._v("审核")]):t._e(),t._v(" "),"1"==t.userType&&t.btnList["permission:manage:look"]?a("x-button",{attrs:{type:"primary",mini:""},nativeOn:{click:function(a){return t.readConfig(e)}}},[t._v("查看")]):t._e(),t._v(" "),t.btnList["permission:manage:delete"]&&1==e.productReleaseState?a("x-button",{attrs:{type:"warn",mini:""},nativeOn:{click:function(a){return t.removeItem(e)}}},[t._v("删除")]):t._e()],1)])})],2)])],1),t._v(" "),a("div",{staticClass:"pagination"},[a("flexbox",[a("flexbox-item",[a("x-button",{attrs:{type:"default",disabled:t.pageNum<=1},nativeOn:{click:function(e){return t.handleTablePageChange("prev")}}},[t._v("上一页")])],1),t._v(" "),a("flexbox-item",[a("div",{staticClass:"current-page"},[t._v(" "+t._s((0==t.totalPage?0:t.pageNum)+"/"+t.totalPage))])]),t._v(" "),a("flexbox-item",[a("x-button",{attrs:{type:"default",disabled:t.pageNum==t.totalPage||0==t.totalPage},nativeOn:{click:function(e){return t.handleTablePageChange("next")}}},[t._v("下一页")])],1)],1)],1),t._v(" "),t._e()],1)])],1)},L=[],D={render:w,staticRenderFns:L},S=D,A=a("VU/8"),P=n,T=A(k,S,!1,P,"data-v-29aa05a6",null);e.default=T.exports},O6E4:function(t,e,a){var n=a("fCMI");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("0250baca",n,!0,{})},fCMI:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"\n.pagination[data-v-29aa05a6] {\n  margin: 10px 20px;\n}\n.pagination .current-page[data-v-29aa05a6] {\n  text-align: center;\n  color: #2DB9F9;\n}\n.grid-center[data-v-29aa05a6] {\n  text-align: center;\n}\n.vux-table td[data-v-29aa05a6],\n.vux-table th[data-v-29aa05a6] {\n  word-break: break-all;\n}\n","",{version:3,sources:["D:/work/git/nxcloud/src/pages/manage/business/BusinessManage.vue"],names:[],mappings:";AACA;EACE,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,mBAAmB;CACpB;AACD;;EAEE,sBAAsB;CACvB",file:"BusinessManage.vue",sourcesContent:["\n.pagination[data-v-29aa05a6] {\n  margin: 10px 20px;\n}\n.pagination .current-page[data-v-29aa05a6] {\n  text-align: center;\n  color: #2DB9F9;\n}\n.grid-center[data-v-29aa05a6] {\n  text-align: center;\n}\n.vux-table td[data-v-29aa05a6],\n.vux-table th[data-v-29aa05a6] {\n  word-break: break-all;\n}\n"],sourceRoot:""}])}});