webpackJsonp([11],{"5wjh":function(t,e,r){var o=r("ssKS");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("rjj0")("e9ad7ab8",o,!0,{})},K89L:function(t,e,r){var o=r("jrKC");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("rjj0")("87922dac",o,!0,{})},jH04:function(t,e,r){"use strict";function o(t){r("K89L"),r("5wjh")}Object.defineProperty(e,"__esModule",{value:!0});var n=r("mvHQ"),a=r.n(n),i=r("Xxa5"),s=r.n(i),c=r("exGp"),d=r.n(c),u=r("HD9R"),p=r("2sLL"),l=r("YxJB"),m=r("3Lt7"),v=r("T8/m"),A=r("UgCr"),h=(u.a,p.a,l.a,m.a,v.a,{name:"Market",components:{Popup:u.a,XButton:p.a,Flexbox:l.a,FlexboxItem:m.a,Panel:v.a},watch:{"$store.state.productName":function(t){this.productName=t,this.getProduct()}},data:function(){return{showCate:!1,yunProducts:[{isLink:!1,id:"tianyiyun",name:"天翼云",route:"/yunProduct"},{isLink:!1,id:"yunanquan",name:"云安全",route:"/zwProduct"},{isLink:!0,name:"云网融合",route:"/ponProduct"},{isLink:!0,name:"NCE网",route:"/nceProduct"}],productName:"",cateTabs:[],page:{pageNo:1,pageSize:10,total:0},priceList:[{priceFrom:0,priceTo:0,name:"免费"},{priceFrom:1,priceTo:200,name:"1-200"},{priceFrom:201,priceTo:500,name:"201-500"},{priceFrom:501,priceTo:1e3,name:"501-1000"},{priceFrom:1001,priceTo:2e3,name:"1001-2000"},{priceFrom:2e3,priceTo:null,name:"2000以上"}],priceData:{priceFrom:null,priceTo:null},conditions:{price:""},order:{orderBy:null,order:null},loading:!1,productList:[],activeId:"",preChooseType:"1",preDataList:[],dataList:[]}},created:function(){this.getCategroy(),this.$route.query.product&&(this.productName=this.$route.query.product),this.$route.query.categoryId&&(this.activeId=this.$route.query.categoryId),this.getProduct()},methods:{getCategroy:function(){var t=this;return d()(s.a.mark(function e(){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.h)();case 2:r=e.sent,t.cateTabs=r;case 4:case"end":return e.stop()}},e,t)}))()},getProduct:function(t){var e=this;return d()(s.a.mark(function r(){var o,n;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o={pageNum:e.page.pageNo,pageSize:e.page.pageSize,priceFrom:e.priceData.priceFrom,priceTo:e.priceData.priceTo,orderBy:e.order.orderBy,order:e.order.order,categoryId:null,keyword:e.productName},t?(o.categoryId=t.id,e.activeId=t.id):e.$route.query.categoryId&&(o.categoryId=e.$route.query.categoryId),""===o.keyword&&(o.keyword=null),e.loading=!0,r.next=6,Object(A.p)(o);case 6:n=r.sent,e.loading=!1,e.page.total=n.total,e.preDataList=n.preReleaseProductList||[],e.dataList=n.list?n.list.map(function(t){return{id:t.id,src:e.COMMON.origin+t.productIntrPicUrl,title:t.productName,desc:t.productDesc}}):[],e.productList=JSON.parse(a()(e.dataList));case 12:case"end":return r.stop()}},r,e)}))()},handleCurrentChange:function(t){this.page.pageNo=t,this.getProduct()},choosePrice:function(t){this.priceData.priceFrom=t.priceFrom,this.priceData.priceTo=t.priceTo,this.conditions.price=t.name,this.getProduct()},removeLabel:function(t){this.conditions[t]="",this.priceData.priceFrom=null,this.priceData.priceTo=null,this.getProduct()},orderProduct:function(t){"default"===t?(this.order.orderBy=null,this.order.order=null):(this.order.orderBy!==t?this.order.order="asc":this.order.order="desc"===this.order.order?"asc":"desc",this.order.orderBy=t),this.getProduct()},envChange:function(){"1"===this.preChooseType?this.productList=JSON.parse(a()(this.dataList)):"2"===this.preChooseType&&(this.productList=JSON.parse(a()(this.preDataList)))},clearCategory:function(){this.$route.query.categoryId?(this.$router.push({name:"market"}),this.activeId=null,this.getProduct()):(this.activeId=null,this.getProduct())},handleYunProduct:function(t){if(t.isLink)return void this.$router.push(t.route);this.getProduct({id:t.id})},goToBuyPage:function(t){console.log(t);var e=t.id;this.activeId=e;var r=Number(e),o={1:{url:"yunProduct",query:{}},4:{url:"zwProduct",query:{productId:e}},5:{url:"zwProduct",query:{productId:e}},6:{url:"zwProduct",query:{productId:e}},7:{url:"zwProduct",query:{productId:e}},10:{url:"dataProduct",query:{}},11:{url:"ossProduct",query:{}},12:{url:"loadProduct",query:{}},0x5b5f5d431463000:{url:"awareProduct",query:{}},0x5b5f629f7463000:{url:"awareProduct2",query:{}}},n=o[r];n?this.$router.push({name:n.url,query:n.query}):this.$router.push({name:"product",query:{id:e}})}}}),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"market"},[r("div",{staticClass:"sortCon"},[r("flexbox",[r("flexbox-item",[r("span",{staticClass:"cateBtn",attrs:{mini:"",type:"primary"},on:{click:function(e){t.showCate=!0}}},[t._v("云市场分类")])]),t._v(" "),r("flexbox-item",[r("span",{on:{click:function(e){return t.orderProduct("default")}}},[t._v("默认")])]),t._v(" "),r("flexbox-item",[r("span",{on:{click:function(e){return t.orderProduct("createTime")}}},[t._v("上架时间")]),t._v(" "),"createTime"==t.order.orderBy?r("span",{staticClass:"sortOrder"},["desc"==t.order.order?r("svg",{staticClass:"vux-x-icon vux-x-icon-android-arrow-down sortArrow",attrs:{type:"android-arrow-down",size:"15",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 512 512"}},[r("path",{attrs:{d:"M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"}})]):t._e(),t._v(" "),"asc"==t.order.order?r("svg",{staticClass:"vux-x-icon vux-x-icon-android-arrow-up sortArrow",attrs:{type:"android-arrow-up",size:"15",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 512 512"}},[r("path",{attrs:{d:"M277.375 427V167.296l119.702 119.702L427 256 256 85 85 256l29.924 29.922 119.701-118.626V427h42.75z"}})]):t._e()]):t._e()]),t._v(" "),r("flexbox-item",[r("span",{on:{click:function(e){return t.orderProduct("basicPrice")}}},[t._v("价格")]),t._v(" "),"basicPrice"==t.order.orderBy?r("span",{staticClass:"sortOrder"},["desc"==t.order.order?r("svg",{staticClass:"vux-x-icon vux-x-icon-android-arrow-down sortArrow",attrs:{type:"android-arrow-down",size:"15",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 512 512"}},[r("path",{attrs:{d:"M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"}})]):t._e(),t._v(" "),"asc"==t.order.order?r("svg",{staticClass:"vux-x-icon vux-x-icon-android-arrow-up sortArrow",attrs:{type:"android-arrow-up",size:"15",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 512 512"}},[r("path",{attrs:{d:"M277.375 427V167.296l119.702 119.702L427 256 256 85 85 256l29.924 29.922 119.701-118.626V427h42.75z"}})]):t._e()]):t._e()])],1)],1),t._v(" "),r("div",[r("panel",{attrs:{list:t.dataList,type:"5"},on:{"on-click-item":t.goToBuyPage}})],1),t._v(" "),r("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[r("popup",{staticStyle:{background:"#fff"},attrs:{position:"right"},model:{value:t.showCate,callback:function(e){t.showCate=e},expression:"showCate"}},[r("div",{staticStyle:{width:"200px"}},[r("div",{staticClass:"menu"},[r("x-button",{directives:[{name:"show",rawName:"v-show",value:t.activeId,expression:"activeId"}],staticClass:"showAll",attrs:{mini:""},nativeOn:{click:function(e){return t.clearCategory(e)}}},[t._v("显示全部")]),t._v(" "),r("div",{staticClass:"cateBox"},[r("div",{staticClass:"cateTitle"},[t._v("云网产品")]),t._v(" "),r("flexbox",{staticClass:"cates",attrs:{gutter:0,wrap:"wrap"}},t._l(t.yunProducts,function(e){return r("flexbox-item",{key:e.name,staticClass:"cateBoxs",class:{cateBoxs:!0,isActive:t.activeId===e.id},attrs:{span:4/9},nativeOn:{click:function(r){return t.handleYunProduct(e)}}},[r("span",[t._v(t._s(e.name))]),t._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:t.activeId===e.id,expression:"activeId === item.id"}],staticClass:"el-icon-close",on:{click:function(e){return e.stopPropagation(),t.clearCategory(e)}}})])}),1)],1),t._v(" "),t._l(t.cateTabs,function(e,o){return r("div",{key:o,staticClass:"cateBox"},[e.products?r("div",{staticClass:"cateTitle activeTitle"},[r("span",{class:{cateBoxs:!0,isActive:t.activeId===e.id},on:{click:function(r){return t.getProduct(e)}}},[t._v("\n                "+t._s(e.categoryName)+"\n              ")])]):r("div",{staticClass:"cateTitle"},[t._v(t._s(e.categoryName))]),t._v(" "),r("flexbox",{staticClass:"cates",attrs:{gutter:0,wrap:"wrap"}},t._l(e.children,function(e,o){return r("flexbox-item",{key:o,class:{cateBoxs:!0,isActive:t.activeId===e.id},attrs:{span:4/9}},[r("span",{on:{click:function(r){return t.getProduct(e)}}},[t._v(t._s(e.categoryName.length>5?e.categoryName.replace("解决",""):e.categoryName))])])}),1)],1)})],2)])])],1)])},x=[],C={render:g,staticRenderFns:x},f=C,w=r("VU/8"),B=o,y=w(h,f,!1,B,"data-v-578dc046",null);e.default=y.exports},jrKC:function(t,e,r){e=t.exports=r("FZ+f")(!0),e.push([t.i,"\n.market button.weui-btn {\n  padding: 0 1em;\n}\n.market .cateBtn {\n  font-size: 12px;\n  padding: 4px;\n  border-radius: 3px;\n  color: #fff;\n  background: #2DB9F9;\n}\n.market .sortCon,\n.market .vux-flexbox {\n  text-align: center;\n  font-size: 14px;\n}\n.market .sortCon {\n  padding: 10px 0 10px 4px;\n  background: #fff;\n}\n.market .sortOrder {\n  position: relative;\n}\n.market .sortArrow {\n  position: absolute;\n  top: 3px;\n  right: -15px;\n}\n","",{version:3,sources:["D:/work/git/nxcloud/src/pages/market/Market.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;CACrB;AACD;;EAEE,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,yBAAyB;EACzB,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,aAAa;CACd",file:"Market.vue",sourcesContent:["\n.market button.weui-btn {\n  padding: 0 1em;\n}\n.market .cateBtn {\n  font-size: 12px;\n  padding: 4px;\n  border-radius: 3px;\n  color: #fff;\n  background: #2DB9F9;\n}\n.market .sortCon,\n.market .vux-flexbox {\n  text-align: center;\n  font-size: 14px;\n}\n.market .sortCon {\n  padding: 10px 0 10px 4px;\n  background: #fff;\n}\n.market .sortOrder {\n  position: relative;\n}\n.market .sortArrow {\n  position: absolute;\n  top: 3px;\n  right: -15px;\n}\n"],sourceRoot:""}])},ssKS:function(t,e,r){e=t.exports=r("FZ+f")(!0),e.push([t.i,"\n.isActive[data-v-578dc046] {\n  color: #2DB9F9;\n}\n.menu[data-v-578dc046] {\n  padding: 0px 0 0 20px;\n  position: relative;\n  line-height: 1.5;\n}\n.menu .showAll[data-v-578dc046] {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n}\n.menu .cateBox[data-v-578dc046] {\n  margin-bottom: 15px;\n}\n.menu .cateBox .cateTitle[data-v-578dc046] {\n  padding: 10px 0;\n  border-bottom: 1px solid #D9D9D9;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n","",{version:3,sources:["D:/work/git/nxcloud/src/pages/market/Market.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;CACb;AACD;EACE,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,iCAAiC;EACjC,mBAAmB;EACnB,kBAAkB;CACnB",file:"Market.vue",sourcesContent:["\n.isActive[data-v-578dc046] {\n  color: #2DB9F9;\n}\n.menu[data-v-578dc046] {\n  padding: 0px 0 0 20px;\n  position: relative;\n  line-height: 1.5;\n}\n.menu .showAll[data-v-578dc046] {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n}\n.menu .cateBox[data-v-578dc046] {\n  margin-bottom: 15px;\n}\n.menu .cateBox .cateTitle[data-v-578dc046] {\n  padding: 10px 0;\n  border-bottom: 1px solid #D9D9D9;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n"],sourceRoot:""}])}});