webpackJsonp([6],{GpMO:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"Main.vue",sourceRoot:""}])},Wq0z:function(n,e,t){var i=t("tVc5");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("7c0b8967",i,!0,{})},XvsA:function(n,e,t){var i=t("n9zQ");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("4a522921",i,!0,{})},Zrlr:function(n,e,t){"use strict";e.__esModule=!0,e.default=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}},"b+jt":function(n,e,t){"use strict";var i={name:"swiper-item",mounted:function(){var n=this;this.$nextTick(function(){n.$parent.rerender()})},beforeDestroy:function(){var n=this.$parent;this.$nextTick(function(){n.rerender()})}},o=function(){var n=this,e=n.$createElement;return(n._self._c||e)("div",{staticClass:"vux-swiper-item"},[n._t("default")],2)},r=[],a={render:o,staticRenderFns:r},s=a,h=t("VU/8"),l=h(i,s,!1,null,null,null);e.a=l.exports},eYrN:function(n,e,t){"use strict";function i(n){t("Wq0z")}function o(n){t("xUh1")}Object.defineProperty(e,"__esModule",{value:!0});var r=t("fBcm"),a=t("b+jt"),s=t("UgCr"),h=(r.a,a.a,{components:{Swiper:r.a,SwiperItem:a.a},data:function(){return{list:[]}},created:function(){var n=this;Object(s.a)().then(function(e){var t=[];e.map(function(e){t.push({url:e.url.replace("#",""),img:n.COMMON.origin+e.picUrl,title:""})}),n.list=t})}}),l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("swiper",{staticStyle:{margin:"0 auto"},attrs:{list:n.list,auto:"",height:"180px","dots-class":"custom-bottom","dots-position":"center"}})],1)},c=[],d={render:l,staticRenderFns:c},u=d,A=t("VU/8"),p=i,f=A(h,u,!1,p,"data-v-bfd9f7b6",null),C=f.exports,E={name:"Main",components:{HomeBanner:C}},v=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("home-banner")],1)},m=[],g={render:v,staticRenderFns:m},x=g,b=t("VU/8"),z=o,_=b(E,x,!1,z,"data-v-48f15324",null);e.default=_.exports},fBcm:function(n,e,t){"use strict";function i(n){t("XvsA")}var o=t("mvHQ"),r=t.n(o),a=t("Zrlr"),s=t.n(a),h=t("wxAW"),l=t.n(h),c=t("BEQ0"),d=t.n(c),u=function(n){return Array.prototype.slice.call(n)},A=function(){function n(e){if(s()(this,n),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=d()(this._default,e),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this.realCount=this.$items.length,this._position=[],this._firstItemIndex=0,this._isMoved=!1,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return l()(n,[{key:"_auto",value:function(){var n=this;n.stop(),n._options.auto&&(n.timer=setTimeout(function(){n.next()},n._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.realCount>=3}},{key:"_onResize",value:function(){var n=this;this.resizeHandler=function(){setTimeout(function(){n.updateItemWidth(),n._setOffset(),n._setTransform()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._setOffset(),this._setTransform(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var n=0;n<this.realCount;n++)this._position.push(n)}},{key:"_movePosition",value:function(n){var e=this;if(n>0){var t=e._position.splice(0,1);e._position.push(t[0])}else if(n<0){var i=e._position.pop();e._position.unshift(i)}}},{key:"_setOffset",value:function(){var n=this,e=n._position.indexOf(n._current);n._offset=[],u(n.$items).forEach(function(t,i){n._offset.push((i-e)*n._distance)})}},{key:"_setTransition",value:function(n){n=n||this._options.duration||"none";var e="none"===n?"none":n+"ms";u(this.$items).forEach(function(n,t){n.style.webkitTransition=e,n.style.transition=e})}},{key:"_setTransform",value:function(n){var e=this;n=n||0,u(e.$items).forEach(function(t,i){var o=e._offset[i]+n,r="translate3d("+o+"px, 0, 0)";"vertical"===e._options.direction&&(r="translate3d(0, "+o+"px, 0)"),t.style.webkitTransform=r,t.style.transform=r,e._isMoved=!0})}},{key:"_bind",value:function(){var n=this,e=this;e.touchstartHandler=function(n){e.stop(),e._start.x=n.changedTouches[0].pageX,e._start.y=n.changedTouches[0].pageY,e._setTransition("none"),e._isMoved=!1},e.touchmoveHandler=function(t){if(1!==e.count){e._move.x=t.changedTouches[0].pageX,e._move.y=t.changedTouches[0].pageY;var i=e._move.x-e._start.x,o=e._move.y-e._start.y,r=o,a=Math.abs(i)>Math.abs(o);"horizontal"===e._options.direction&&a&&(r=i),n._options.loop||n._current!==n.count-1&&0!==n._current||(r/=3),((e._options.minMovingDistance&&Math.abs(r)>=e._options.minMovingDistance||!e._options.minMovingDistance)&&a||e._isMoved)&&e._setTransform(r),a&&t.preventDefault()}},e.touchendHandler=function(n){if(1!==e.count){e._end.x=n.changedTouches[0].pageX,e._end.y=n.changedTouches[0].pageY;var t=e._end.y-e._start.y;"horizontal"===e._options.direction&&(t=e._end.x-e._start.x),t=e.getDistance(t),0!==t&&e._options.minMovingDistance&&Math.abs(t)<e._options.minMovingDistance&&!e._isMoved||(t>e._options.threshold?e.move(-1):t<-e._options.threshold?e.move(1):e.move(0),e._loopRender())}},e.transitionEndHandler=function(n){e._activate(e._current);var t=e._eventHandlers.swiped;t&&t.apply(e,[e._prev%e.count,e._current%e.count]),e._auto(),e._loopRender(),n.preventDefault()},e.$container.addEventListener("touchstart",e.touchstartHandler,!1),e.$container.addEventListener("touchmove",e.touchmoveHandler,!1),e.$container.addEventListener("touchend",e.touchendHandler,!1),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var n=this;n._loop()&&(0===n._offset[n._offset.length-1]?(n.$container.appendChild(n.$items[0]),n._loopEvent(1)):0===n._offset[0]&&(n.$container.insertBefore(n.$items[n.$items.length-1],n.$container.firstChild),n._loopEvent(-1)))}},{key:"_loopEvent",value:function(n){var e=this;e._itemDestoy(),e.$items=e.$container.querySelectorAll(e._options.item),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1),e._movePosition(n),e._setOffset(),e._setTransform()}},{key:"getDistance",value:function(n){return this._loop()?n:n>0&&0===this._current?0:n<0&&this._current===this.realCount-1?0:n}},{key:"_moveIndex",value:function(n){0!==n&&(this._prev=this._current,this._current+=this.realCount,this._current+=n,this._current%=this.realCount)}},{key:"_activate",value:function(n){var e=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(t,i){t.classList.remove(e),n===Number(t.dataset.index)&&t.classList.add(e)})}},{key:"go",value:function(n){var e=this;return e.stop(),n=n||0,n+=this.realCount,n%=this.realCount,n=this._position.indexOf(n)-this._position.indexOf(this._current),e._moveIndex(n),e._setOffset(),e._setTransition(),e._setTransform(),e._auto(),this}},{key:"next",value:function(){return this.move(1),this}},{key:"move",value:function(n){return this.go(this._current+n),this}},{key:"on",value:function(n,e){return this._eventHandlers[n]&&console.error("[swiper] event "+n+" is already register"),"function"!=typeof e&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[n]=e,this}},{key:"_itemDestoy",value:function(){var n=this;this.$items.length&&u(this.$items).forEach(function(e){e.removeEventListener("webkitTransitionEnd",n.transitionEndHandler,!1)})}},{key:"destroy",value:function(){if(this.stop(),this._current=0,this._setTransform(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy(),this._options.loop&&2===this.count){var n=this.$container.querySelector(this._options.item+"-clone");n&&this.$container.removeChild(n),n=this.$container.querySelector(this._options.item+"-clone"),n&&this.$container.removeChild(n)}}}]),n}(),p=A,f=t("0FxO"),C=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var n=this;this.hasTwoLoopItem(),this.$nextTick(function(){n.list&&0===n.list.length||n.render(n.index),n.xheight=n.getHeight(),n.$emit("on-get-height",n.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(n){Object(f.b)(n.url,this.$router),this.$emit("on-click-list-item",JSON.parse(r()(n)))},buildBackgroundUrl:function(n){return n.fallbackImg?"url("+n.img+"), url("+n.fallbackImg+")":"url("+n.img+")"},render:function(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new p({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,t){n.current=t%n.length,n.index=t%n.length}),e>0&&this.swiper.go(e)},rerender:function(){var n=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){n.index=n.value||0,n.current=n.value||0,n.length=n.list.length||n.$children.length,n.destroy(),n.render(n.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var n=parseInt(this.height,10);return n?this.height:n?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(n){n?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(n,e){r()(n)!==r()(e)&&this.rerender()},current:function(n){this.index=n,this.$emit("on-index-change",n)},index:function(n){var e=this;n!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(n)}),this.$emit("input",n)},value:function(n){this.index=n}},beforeDestroy:function(){this.destroy()}}),E=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"vux-slider"},[t("div",{staticClass:"vux-swiper",style:{height:n.xheight}},[n._t("default"),n._v(" "),n._l(n.list,function(e,i){return t("div",{staticClass:"vux-swiper-item",attrs:{"data-index":i},on:{click:function(t){return n.clickListItem(e)}}},[t("a",{attrs:{href:"javascript:"}},[t("div",{staticClass:"vux-img",style:{backgroundImage:n.buildBackgroundUrl(e)}}),n._v(" "),n.showDescMask?t("p",{staticClass:"vux-swiper-desc"},[n._v(n._s(e.title))]):n._e()])])}),n._v(" "),n._l(n.listTwoLoopItem,function(e,i){return n.listTwoLoopItem.length>0?t("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":i},on:{click:function(t){return n.clickListItem(e)}}},[t("a",{attrs:{href:"javascript:"}},[t("div",{staticClass:"vux-img",style:{backgroundImage:n.buildBackgroundUrl(e)}}),n._v(" "),n.showDescMask?t("p",{staticClass:"vux-swiper-desc"},[n._v(n._s(e.title))]):n._e()])]):n._e()})],2),n._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:n.showDots,expression:"showDots"}],class:[n.dotsClass,"vux-indicator","vux-indicator-"+n.dotsPosition]},n._l(n.length,function(e){return t("a",{attrs:{href:"javascript:"}},[t("i",{staticClass:"vux-icon-dot",class:{active:e-1===n.current}})])}),0)])},v=[],m={render:E,staticRenderFns:v},g=m,x=t("VU/8"),b=i,z=x(C,g,!1,b,null,null);e.a=z.exports},n9zQ:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,"/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text size of content\n* zh-CN: 内容文本大小\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.vux-slider {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-indicator,\n.vux-slider .vux-indicator-right {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n}\n.vux-slider > .vux-indicator > a,\n.vux-slider .vux-indicator-right > a {\n  float: left;\n  margin-left: 6px;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot {\n  display: inline-block;\n  vertical-align: middle;\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #d0cdd1;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot.active,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot.active {\n  background-color: #2DB9F9;\n}\n.vux-slider > .vux-indicator-center {\n  right: 50%;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n}\n.vux-slider > .vux-indicator-left {\n  left: 15px;\n  right: auto;\n}\n.vux-slider > .vux-swiper {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: center center no-repeat;\n  background-size: cover;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 1.4em;\n  font-size: 16px;\n  padding: 20px 50px 12px 13px;\n  margin: 0;\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n}\n","",{version:3,sources:["D:/work/git/nxcloud/node_modules/vux/src/components/swiper/swiper.vue"],names:[],mappings:"AAAA;;EAEE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;;EAGE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;;EAGE;AACF;;EAEE;AACF;;EAEE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF,WAAW;AACX;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;EAEE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;EAEE;AACF;;EAEE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;EAEE;AACF;;EAEE;AACF;;;EAGE;AACF;;;EAGE;AACF;;;EAGE;AACF;;EAEE;AACF;;;EAGE;AACF;;EAEE;AACF;;;EAGE;AACF;;EAEE;AACF;;;EAGE;AACF;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;;EAEE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;AACD;;EAEE,YAAY;EACZ,iBAAiB;CAClB;AACD;;EAEE,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;CAC3B;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,WAAW;EACX,mCAAmC;UAC3B,2BAA2B;CACpC;AACD;EACE,WAAW;EACX,YAAY;CACb;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;CACd;AACD;EACE,eAAe;EACf,YAAY;EACZ,aAAa;CACd;AACD;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,cAAc;EACd,gBAAgB;EAChB,6BAA6B;EAC7B,UAAU;EACV,4FAA4F;EAC5F,0FAA0F;EAC1F,YAAY;EACZ,wCAAwC;EACxC,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,kBAAkB;CACnB",file:"swiper.vue",sourcesContent:["/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text size of content\n* zh-CN: 内容文本大小\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.vux-slider {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-indicator,\n.vux-slider .vux-indicator-right {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n}\n.vux-slider > .vux-indicator > a,\n.vux-slider .vux-indicator-right > a {\n  float: left;\n  margin-left: 6px;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot {\n  display: inline-block;\n  vertical-align: middle;\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #d0cdd1;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot.active,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot.active {\n  background-color: #2DB9F9;\n}\n.vux-slider > .vux-indicator-center {\n  right: 50%;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n}\n.vux-slider > .vux-indicator-left {\n  left: 15px;\n  right: auto;\n}\n.vux-slider > .vux-swiper {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: center center no-repeat;\n  background-size: cover;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 1.4em;\n  font-size: 16px;\n  padding: 20px 50px 12px 13px;\n  margin: 0;\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n}\n"],sourceRoot:""}])},tVc5:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"HomeBanner.vue",sourceRoot:""}])},wxAW:function(n,e,t){"use strict";e.__esModule=!0;var i=t("C4MV"),o=function(n){return n&&n.__esModule?n:{default:n}}(i);e.default=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}()},xUh1:function(n,e,t){var i=t("GpMO");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("16311e6c",i,!0,{})}});