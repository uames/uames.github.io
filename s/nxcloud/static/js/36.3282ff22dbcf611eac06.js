webpackJsonp([36],{"6L1V":function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,"\n.pagination[data-v-32cf4373] {\n  margin: 10px 20px;\n}\n.pagination .current-page[data-v-32cf4373] {\n  text-align: center;\n  color: #2DB9F9;\n}\n.grid-center[data-v-32cf4373] {\n  text-align: center;\n}\n.vux-table td[data-v-32cf4373],\n.vux-table th[data-v-32cf4373] {\n  word-break: break-all;\n}\ntable button[data-v-32cf4373] {\n  padding: 0 10px;\n  margin: 0 !important;\n}\n","",{version:3,sources:["D:/work/git/nxcloud/src/pages/manage/business/ProductAttribute.vue"],names:[],mappings:";AACA;EACE,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,mBAAmB;CACpB;AACD;;EAEE,sBAAsB;CACvB;AACD;EACE,gBAAgB;EAChB,qBAAqB;CACtB",file:"ProductAttribute.vue",sourcesContent:["\n.pagination[data-v-32cf4373] {\n  margin: 10px 20px;\n}\n.pagination .current-page[data-v-32cf4373] {\n  text-align: center;\n  color: #2DB9F9;\n}\n.grid-center[data-v-32cf4373] {\n  text-align: center;\n}\n.vux-table td[data-v-32cf4373],\n.vux-table th[data-v-32cf4373] {\n  word-break: break-all;\n}\ntable button[data-v-32cf4373] {\n  padding: 0 10px;\n  margin: 0 !important;\n}\n"],sourceRoot:""}])},JCbx:function(t,e,n){var a=n("6L1V");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("288d4f8e",a,!0,{})},rYFI:function(t,e,n){"use strict";function a(t){n("JCbx")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("Xxa5"),s=n.n(i),r=n("exGp"),o=n.n(r),c=n("dQSc"),u=n("ignk"),l=n("jHVj"),d=n("S8Wg"),m=n("pDNl"),p=n("rHil"),v=n("2sLL"),f=n("wwIJ"),g=n("etVR"),b=n("YxJB"),h=n("3Lt7"),x=n("kNDc"),_=n("LgOF"),A=n("HqzV"),C=n("TIYx"),I=(c.a,u.a,l.a,d.a,m.a,p.a,v.a,f.a,g.a,b.a,h.a,x.a,_.a,A.a,{name:"productAttributeBussiness",components:{Card:c.a,XTable:u.a,CellFormPreview:l.a,Scroller:d.a,XInput:m.a,Group:p.a,XButton:v.a,Selector:f.a,Checklist:g.a,Flexbox:b.a,FlexboxItem:h.a,Grid:x.a,GridItem:_.a,Search:A.a},data:function(){return{totalPage:1,likeItemName:"",tableData:[],total:1,pageSize:10,pageNum:1,loading:!1,btnList:{"permission:attribute:add":!1,"permission:attribute:edit":!1,"permission:attribute:enable":!1,"permission:attribute:delete":!1},modeList:{1:"下拉框",2:"单选框",3:"输入框",4:"密码框",5:"数字框"},classifyList:{1:"云产品",2:"云市场"},inlineTableData:[],dialogVisible:!1,totalInline:1,pageSizeInline:10,pageNumInline:1,inlineLoading:!1}},computed:{},created:function(){if(this.userType=this.$store.getters.userInfo.userType,1==parseInt(this.userType))this.BTN_showActive(this.btnList);else for(var t in this.btnList)this.btnList[t]=!0;this.getItemsList()},mounted:function(){},methods:{handleTablePageChange:function(t){"prev"==t?this.pageNum=this.pageNum-1:"next"==t&&(this.pageNum=this.pageNum+1),this.getItemsList()},getItemsList:function(){var t=this;return o()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t,Object(C.i)({likeItemName:t.likeItemName,pageSize:t.pageSize,pageNum:t.pageNum}).then(function(t){t&&(t.msg&&!t.data?n.$vux.toast.show({text:t.msg,type:"warn",time:3e3,position:"middle"}):(n.tableData=t.list,n.totalPage=t.totalPage))});case 2:case"end":return e.stop()}},e,t)}))()},addItem:function(){this.$router.push({name:"productAttributeDetail"})},editItem:function(t){this.$router.push({name:"productAttributeDetail",query:{id:t.id}})},deleteItem:function(t){var e=this;this.$vux.confirm.show({title:"提示",content:"是否确定删除?",onCancel:function(){e.$vux.toast.show({text:"已取消删除",type:"success",time:3e3,position:"middle"})},onConfirm:function(){Object(C.n)(t.id).then(function(){e.$vux.toast.show({text:"删除成功!",type:"success",time:3e3,position:"middle"})}).finally(function(){e.getItemsList()})}})},changeItem:function(t,e){var n=this;return o()(s.a.mark(function a(){var i;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:i=n,n.$vux.confirm.show({title:"提示",content:1==e?"是否确定启用":"是否确定禁用",onCancel:function(){i.$vux.toast.show({text:"已取消",type:"success",time:3e3,position:"middle"})},onConfirm:function(){Object(C.c)({id:t.id,itemStatus:e}).then(function(){i.$vux.toast.show({text:1==e?"启用成功":"禁用成功",type:"success",time:3e3,position:"middle"})}).finally(function(){i.getItemsList()})}});case 2:case"end":return a.stop()}},a,n)}))()},userProduct:function(t){var e=this;return o()(s.a.mark(function n(){var a;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=e,e.dialogVisible=!0,e.inlineLoading=!0,n.next=5,Object(C.j)({id:t.id,pageNum:e.pageNumInline,pageSize:e.pageSizeInline}).then(function(t){a.inlineTableData=t.list,a.totalInline=t.total});case 5:case"end":return n.stop()}},n,e)}))()}}}),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"productAttributeBussiness"},[n("card",{attrs:{header:{title:"属性管理"}}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("search",{ref:"search",attrs:{placeholder:"请输入属性名称","auto-fixed":!1,position:"relative"},on:{"on-change":t.getItemsList},model:{value:t.likeItemName,callback:function(e){t.likeItemName=e},expression:"likeItemName"}}),t._v(" "),n("scroller",{attrs:{"lock-y":"","scrollbar-x":""}},[n("x-table",{staticStyle:{"background-color":"#fff",width:"820px"}},[n("thead",[n("tr",{staticStyle:{"background-color":"#f6f7fb"}},[n("th",[t._v("属性名称")]),t._v(" "),n("th",[t._v("展示方式")]),t._v(" "),n("th",[t._v("属性值")]),t._v(" "),n("th",[t._v("属性描述")]),t._v(" "),n("th",[t._v("状态")]),t._v(" "),n("th",[t._v("使用商品")]),t._v(" "),n("th",[t._v("创建时间")]),t._v(" "),n("th",[t._v("操作")])])]),t._v(" "),n("tbody",[0==t.tableData.length?n("tr",[n("td",{attrs:{colspan:"8"}},[t._v("暂无数据")])]):t._e(),t._v(" "),t._l(t.tableData,function(e){return n("tr",[n("td",[t._v(t._s(e.itemName))]),t._v(" "),n("td",[t._v(" "+t._s(t.modeList[e.mode]))]),t._v(" "),n("td",[t._v(t._s(e.itemCodeName))]),t._v(" "),n("td",[t._v(t._s(e.itemDesc))]),t._v(" "),n("td",[t._v(" "+t._s(1==e.itemStatus?"启用":"禁用"))]),t._v(" "),n("td",[n("span",{staticClass:"lookBtn",on:{click:function(n){return t.userProduct(e)}}},[t._v("查看")])]),t._v(" "),n("td",[t._v(t._s(e.createTime))]),t._v(" "),n("td",{staticClass:"btn-group"},[t.btnList["permission:attribute:edit"]?n("x-button",{attrs:{type:"primary",mini:""},nativeOn:{click:function(n){return t.editItem(e)}}},[t._v("修改")]):t._e(),t._v(" "),0==e.itemStatus&&t.btnList["permission:attribute:enable"]?n("x-button",{attrs:{type:"primary",mini:""},nativeOn:{click:function(n){return t.changeItem(e,"1")}}},[t._v("启用")]):t._e(),t._v(" "),1==e.itemStatus&&t.btnList["permission:attribute:enable"]?n("x-button",{attrs:{type:"warn",mini:""},nativeOn:{click:function(n){return t.changeItem(e,"0")}}},[t._v("禁用")]):t._e(),t._v(" "),t.btnList["permission:attribute:delete"]?n("x-button",{attrs:{type:"warn",mini:""},nativeOn:{click:function(n){return t.deleteItem(e)}}},[t._v("删除")]):t._e()],1)])})],2)])],1),t._v(" "),n("div",{staticClass:"pagination"},[n("flexbox",[n("flexbox-item",[n("x-button",{attrs:{type:"default",disabled:t.pageNum<=1},nativeOn:{click:function(e){return t.handleTablePageChange("prev")}}},[t._v("上一页")])],1),t._v(" "),n("flexbox-item",[n("div",{staticClass:"current-page"},[t._v(" "+t._s((0==t.totalPage?0:t.pageNum)+"/"+t.totalPage))])]),t._v(" "),n("flexbox-item",[n("x-button",{attrs:{type:"default",disabled:t.pageNum==t.totalPage||0==t.totalPage},nativeOn:{click:function(e){return t.handleTablePageChange("next")}}},[t._v("下一页")])],1)],1)],1),t._v(" "),t.btnList["permission:attribute:add"]?n("div",{staticStyle:{padding:"10px"}},[n("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.addItem(e)}}},[t._v("新增属性")])],1):t._e()],1)])],1)},y=[],B={render:k,staticRenderFns:y},L=B,w=n("VU/8"),N=a,D=w(I,L,!1,N,"data-v-32cf4373",null);e.default=D.exports}});