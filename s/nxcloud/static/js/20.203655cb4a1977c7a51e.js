webpackJsonp([20],{"7r7H":function(t,a,e){"use strict";function o(t){e("BNef")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("mvHQ"),n=e.n(s),r=e("pDNl"),i=e("2sLL"),l=e("rLAy"),f=e("Nv8u"),u=(r.a,i.a,l.a,{name:"ModifyPassword",components:{XInput:r.a,XButton:i.a,Toast:l.a},data:function(){return{formData:{password:"",newPassword:"",newPassSure:"",authCode:"",code:""},rules:{},uuid:"",loadingBtn:!1,showToast:!1,toastContent:""}},created:function(){this.getCaptcha()},methods:{showToastMsg:function(t){this.showToast=!0,this.toastContent=t},validatePhone:function(t){return!!/^1[3456789]\d{9}$/.test(t)||(this.showToastMsg("请输入正确的手机号"),!1)},validatePass:function(t){return t.length<8||t.length>16?(this.showToastMsg("输入密码为8-16位！"),!1):!!/^(?![0-9a-z]+$)(?![0-9A-Z]+$)(?![0-9\W]+$)(?![a-z\W]+$)(?![a-zA-Z]+$)(?![A-Z\W]+$)[a-zA-Z0-9\W_]+$/.test(t)||(this.showToastMsg("密码必须包含大写字母、小写字母、数字和符号其中三项！"),!1)},checkRepeat:function(t){return t===this.formData.newPassword||(this.showToastMsg("输入的密码不一致"),!1)},handleModifyPassword:function(){var t=this;if(t.validatePass(this.formData.newPassword)&&t.checkRepeat(this.formData.newPassSure)){t.loadingBtn=!0;var a=JSON.parse(n()(t.formData));a.uuid=this.uuid,delete a.newPassSure;for(var e in a)"uuid"!==e&&(a[e]=t.RSAencrypt(a[e]));Object(f.p)(a).then(function(a){a.msg&&!a.data?t.showToastMsg(a.msg):(a.userName=t.RSAdecrypt(a.userName),t.$store.commit("setUserInfo",""),t.showConfirm("修改密码成功，请重新登陆"))}).finally(function(a){console.log("finally",a),t.loadingBtn=!1})}},getCaptcha:function(){this.uuid=this.getUuid(),this.captchaBase64Img=this.COMMON.baseUrl+"/admin/captcha?uuid="+this.uuid},getUuid:function(){for(var t=[],a="0123456789abcdef",e=0;e<36;e++)t[e]=a.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=a.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")},showConfirm:function(t){var a=this;this.$vux.confirm.show({title:"提示",content:t,onCancel:function(){a.$router.push({name:"home"})},onConfirm:function(){a.$router.push({name:"addUserInfo"})}})}}}),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modify-password-page"},[e("div",{ref:"modifyPasswordForm",staticClass:"weui-cells-form",attrs:{model:t.formData,rules:t.rules}},[e("Toast",{attrs:{type:"text",time:3e3,"is-show-mask":"",text:t.toastContent,position:"center"},model:{value:t.showToast,callback:function(a){t.showToast=a},expression:"showToast"}}),t._v(" "),e("div",{staticClass:"weui-cells"},[e("XInput",{attrs:{title:"旧密码",type:"password",required:"",placeholder:"请输入旧密码"},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password","string"==typeof a?a.trim():a)},expression:"formData.password"}}),t._v(" "),e("XInput",{attrs:{title:"新密码",type:"password",required:"",placeholder:"请输入新密码"},on:{"on-blur":t.validatePass},model:{value:t.formData.newPassword,callback:function(a){t.$set(t.formData,"newPassword","string"==typeof a?a.trim():a)},expression:"formData.newPassword"}}),t._v(" "),e("XInput",{attrs:{title:"新确认密码",type:"password",required:"",placeholder:"请输入新密码"},on:{"on-blur":t.checkRepeat},model:{value:t.formData.newPassSure,callback:function(a){t.$set(t.formData,"newPassSure","string"==typeof a?a.trim():a)},expression:"formData.newPassSure"}}),t._v(" "),e("XInput",{attrs:{title:"验证码",required:"",placeholder:"请输入验证码"},model:{value:t.formData.code,callback:function(a){t.$set(t.formData,"code",a)},expression:"formData.code"}},[e("img",{attrs:{slot:"right-full-height",src:t.captchaBase64Img,width:"96px"},on:{click:t.getCaptcha},slot:"right-full-height"})])],1),t._v(" "),e("div",{staticClass:"weui-cells"},[e("XButton",{attrs:{type:"primary","show-loading":t.loadingBtn},nativeOn:{click:function(a){return t.handleModifyPassword(a)}}},[t._v("确认修改")])],1)],1)])},c=[],p={render:d,staticRenderFns:c},m=p,h=e("VU/8"),w=o,A=h(u,m,!1,w,"data-v-46a17fb4",null);a.default=A.exports},BNef:function(t,a,e){var o=e("uMM8");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("42e9f4c4",o,!0,{})},uMM8:function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,"\n.modify-password-page[data-v-46a17fb4] {\n  background: #fff;\n}\n.weui-cells-form[data-v-46a17fb4] {\n  padding: 10px 25px;\n}\n.weui-cells-form .form-footer.link-group[data-v-46a17fb4] {\n  margin: 5px;\n  margin-bottom: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.weui-cells-form .form-footer.link-group .link[data-v-46a17fb4] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  font-size: 15px;\n  color: #688ee8;\n}\n.text-right[data-v-46a17fb4] {\n  text-align: right;\n}\n","",{version:3,sources:["D:/work/git/nxcloud/src/pages/manage/ModifyPassword.vue"],names:[],mappings:";AACA;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,kBAAkB;CACnB",file:"ModifyPassword.vue",sourcesContent:["\n.modify-password-page[data-v-46a17fb4] {\n  background: #fff;\n}\n.weui-cells-form[data-v-46a17fb4] {\n  padding: 10px 25px;\n}\n.weui-cells-form .form-footer.link-group[data-v-46a17fb4] {\n  margin: 5px;\n  margin-bottom: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.weui-cells-form .form-footer.link-group .link[data-v-46a17fb4] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  font-size: 15px;\n  color: #688ee8;\n}\n.text-right[data-v-46a17fb4] {\n  text-align: right;\n}\n"],sourceRoot:""}])}});