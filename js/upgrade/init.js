app.dynamicLoadingCss=function(h,i){var j=document.createElement("link");var f=document.getElementsByTagName("head")[0];j.href=h;j.rel="stylesheet";j.type="text/css";if(typeof i==="function"){var g;j.onload=j.onreadystatechange=function(){if(!g&&(!j.readyState||/loaded|complete/.test(j.readyState))){j.onload=j.onreadystatechange=null;g=true;i()}}}f.appendChild(j)};

app.bust = '49';
setTimeout(function () {
  $("#xes_btn_RelLoad_box").show();
}, 8000);
app.imgPath = app.resPath+'img/upgrade/';

// $('img').each(function(img,i){
//   $(img).attr('src',app.resPath+$(img).attr('src'));
// });

app.dynamicLoadingJs(app.resPath+'js/upgrade/swipe.js?bust='+app.bust,function(){
  app.dynamicLoadingJs(app.resPath+'js/upgrade/upgrade.js?bust='+app.bust);
});
app.dynamicLoadingCss(app.resPath+'css/upgrade/upgrade.css?bust='+app.bust, function(){
  $(".xesLoading").hide();
});
