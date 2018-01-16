$(function(){
  // 关键代码:禁止ios浏览器自带的滚动效果!
  document.body.addEventListener('touchmove', function (event) {
      event.preventDefault();
  }, false);

  // begin--音乐播放,兼容ios微信浏览器
  function audioAutoPlay(id){
      var audio = document.getElementById(id),
          play = function(){
              audio.play();
              document.removeEventListener("touchstart",play, false);
          };
      console.log(audio);
      audio.play();
      document.addEventListener("WeixinJSBridgeReady", function () {
          play();
      }, false);
      document.addEventListener('YixinJSBridgeReady', function() {
          play();
      }, false);
      document.addEventListener("touchstart",play, false);
  }
  audioAutoPlay('audioTag');
  // end--音乐播放,兼容苹果微信浏览器

  // 开始,隐藏引导界面
  $("#beginBtn").click(function(){
    $("#firstCon").hide();
  });
  app.options = {
    callback: function(index, dom){
      app.options.movedFn();
      if(index!=1){ // index==1为初始化滑动
        app.mySwipe.kill();
        // index==0 为向左滑动了一个,取lIdx为当前问题的idx
        var idx = index==2?app.lIdx:app.rIdx;
        var rst = index==2?app.lRst:app.rRst;
        var lFn = function(){
          if(idx===-1 && idx==-2){ // 游戏结束

          }else{ // 继续游戏
            var q = app.question[idx]; //根据当前idx取出当前问题
            app.initScroll([q.lIdx, idx, q.rIdx]);
          }

        }
        if(rst && rst!=""){
          layer.open({content:rst,end:function(){
              lFn();
          }});
        }else{
          lFn();
        }


      }
    },
    movingFn: function(x){
      var word = x<0?app.lWord:app.rWord;
      if(word!=app.answerDom.html() && word!=""){
        app.answerDom.html(word).stop().animate({padding:"20px 0"});
      }
    },
    movedFn: function(){
      app.answerDom.stop().css("padding","0");
      app.answerDom.html('')
    }
  };
  app.init = function(){
    $("#again").click(function(){
      // $("#btnCon").hide();
      // app.initScroll([1,0,2]);
      // localStorage.setItem('again','1');
      // location.href = location.origin + location.pathname + '?bust='+ ((new Date()).getTime());
      app.mySwipe.kill();
      app.initScroll([1,0,2]);
      $("#slider").css("top","30%");
      $(".slideSpan").css("top","-170px");
      $("#btnCon, #secondCon").hide();
    });
    $("#toActivity").click(function(){
      // location.href = "http://uc.gzxueersi.com/zytb/index.html";
      $("#zytb").show();
    });
    app.wrapDom = $("#slider .swipe-wrap");
    app.answerDom = $("#answer");
    app.initScroll = function(idxs){
      var _h = '', m = app.question[idxs[1]];
      if(m.rIdx===-1 && m.lIdx===-1){
        $("#btnCon, #secondCon").show();
        $("#secondCon .archiveImg").attr("src",app.imgPath+m.img);
        $("#secondCon .archiveMsg").html(m.title);
        idxs.pop();
      }else if(m.rIdx===-2 && m.lIdx===-2){
        $("#again").hide();
        $("#btnCon, #secondCon").show();
        $("#secondCon .archiveImg").attr("src",app.imgPath+m.img);
        $("#secondCon .archiveMsg").html(m.title);
        $("#btnCon, #toActivity").show();
        idxs.pop();
      }
      for(var i=0, l=idxs.length; i<l; i++){
        var d = idxs[i]>-1?app.question[idxs[i]]:{};
        _h += ['<div><div style="'+(i==1&&d.img&&d.img!=""?'background:url('+app.imgPath+d.img+')':'')+'">',
               '<span class="slideSpan" style="'+(i==1?'padding: 12px 0':'')+'">' + (i==1?d.title:'') + '</span></div></div>'].join();
      }
      app.lWord = m.left;
      app.rWord = m.right;
      app.lIdx = m.lIdx;
      app.rIdx = m.rIdx;
      app.lRst = m.lRst;
      app.rRst = m.rRst;
      app.lSuc = m.lSuc;
      app.rSuc = m.rSuc;
      app.href = m.href;
      app.hrefWord = m.hrefWord;
      app.rImg = m.rImg;
      app.lImg = m.lImg;

      app.wrapDom.html(_h);
      if(m.rIdx!=-1 && m.rIdx!=-2){
        app.mySwipe = Swipe(document.getElementById('slider'),app.options);
      }else {
        $("#slider").css("top","20%");
        $(".slideSpan").css("top","-90px");
      }
      app.mySwipe.next();
    }
    app.initScroll([1,0,2]);
  }
  app.init();


  // setTimeout(function () {
  // }, 3000);
});
app.question = [
  {idx:0,  lIdx:1,  rIdx:2,  title:"你开始初一的生活<br>有一天你去外面吃饭<br>你叫了一碗牛肉面<br>老板却端来一盘便宜的鱼丸<br>你会吃下它吗?",
    left:"吃",right:"我就要我的牛肉面",img:"boss_smile.jpg"},
  {idx:1,  lIdx:2,  rIdx:3, title:"结帐的时候<br>老板按原价收你钱",left:"给",right:"不给",img:"boss_smoke.jpg"},
  {idx:2,  lIdx:5,  rIdx:5,  title:"老板向你道歉<br>并免费给你加了个蛋",left:"",right:"",img:"happy.jpg"},
  {idx:3,  lIdx:4,  rIdx:4,  title:"你和老板吵了起来<br>打了一架<br>被学校发现校外斗殴<br>你被劝退了",left:"",right:"",img:"bad_guy.jpg"},
  {idx:4,  lIdx:-1,  rIdx:-1,  title:"恭喜你达成:小混混成就",left:"",right:"",img:"bad_guy.jpg"},
  {idx:5,  lIdx:6,  rIdx:8,  title:"接下来还有一个月<br>要期末考试了",left:"该玩玩,没必要过于紧张",right:"抓紧复习吧",img:"fighting.jpg",rRst:"",},
  {idx:6,  lIdx:7,  rIdx:7,  title:"由于没有复习<br>考试成绩特别差<br>受到严重打击一蹶不振<br>导致最后浑浑噩噩地<br>结束了初中生活",left:"",right:"",img:"hit.jpg"},
  {idx:7,  lIdx:-1,  rIdx:-1,  title:"恭喜你获得:差等生成就",left:"",right:"",img:"sad_hit.jpg"},
  {idx:8,  lIdx:9,  rIdx:9,  title:"期末考试成绩出来了,还不错",left:"",right:"",img:"yeah.jpg"},
  {idx:9,  lIdx:10,  rIdx:12, title:"初一下学期开学摸底考试<br>监考老师在你的座位附近<br>走来走去,你会瞪他吗?",left:"会",right:"认真做题没注意过",img:"exam.png"},
  {idx:10,  lIdx:11,  rIdx:11,  title:"由于不尊重老师,你被劝退了",left:"",right:"",img:"deng.jpg"},
  {idx:11,  lIdx:-1,  rIdx:-1,  title:"恭喜你获得:非主流成就",left:"",right:"",img:"strange_guy.jpg"},
  {idx:12,  lIdx:13,  rIdx:15, title:"x的零次方是一个?",left:"整式",right:"分式",img:"math.jpg"},
  {idx:13,  lIdx:14,  rIdx:14,  title:"这都不会,重读去吧",left:"",right:"",img:"dumbass.jpg"},
  {idx:14,  lIdx:-1,  rIdx:-1,  title:"恭喜你获得:学渣成就",left:"",right:"",img:"dumbass.jpg"},
  {idx:15,  lIdx:18,  rIdx:16, title:"屎味的巧克力和<br>巧克力味的屎你会吃哪个?",left:"屎味的巧克力",right:"巧克力味的屎",img:"deng.jpg"},
  {idx:16,  lIdx:17,  rIdx:17,  title:"初二那年你被自己恶心死了",left:"",right:"",img:"sad_hit.jpg"},
  {idx:17,  lIdx:-1,  rIdx:-1,  title:"恭喜你获得:遗臭万年成就",left:"",right:"",img:"sad_hit.jpg"},
  {idx:18,  lIdx:19,  rIdx:21,  title:"由于你惊人的举动,<br>你成了你们学校的名人",left:"不顾他人眼光,潜心修学",right:"主动适应变化",img:"haha.png"},
  {idx:19,  lIdx:20,  rIdx:20,  title:"平平淡淡的过完初中",img:"passerby.jpg",left:"",right:""},
  {idx:20,  lIdx:-1,  rIdx:-1,  title:"恭喜你达成:路人甲成就",img:"passerby.jpg",left:"",right:""},
  {idx:21,  lIdx:24,  rIdx:22,  title:"给你一次机会穿越到<br>游戏中你会选择哪个?",left:"我的世界",right:"王者农药",img:"deng.jpg"},
  {idx:22,  lIdx:23,  rIdx:23,  title:"你化身项羽征战沙场<br>最终战死乌江",left:"",right:"",img:"honor.jpg"},
  {idx:23,  lIdx:-1,  rIdx:-1,  title:"恭喜你获得成就:西楚霸王",left:"",right:"",img:"xiangyu.jpg"},
  {idx:24,  lIdx:25,  rIdx:25,  title:"你在游戏中不断创造新事物,<br>杀敌探险,习得一身武功<br>重回现实",left:"",right:"",img:"world.jpg"},
  {idx:25,  lIdx:26, rIdx:28, title:"回来当天学校下发新的规定:<br>每个人的手机<br>只能留一个社交软件.<br>微信和QQ你必须卸载一个",left:"卸载微信",right:"卸载QQ",img:"qqwx.png"},
  {idx:26,  lIdx:27,  rIdx:27,  title:"你妈知道你卸载了微信<br>并屏蔽了她的朋友圈<br>你被她拉黑了",left:"",right:"",img:"mami.jpg"},
  {idx:27,  lIdx:-1,  rIdx:-1,  title:"恭喜你获得成就:没人疼的孩子",left:"",right:"",img:"mami.jpg"},
  {idx:28,  lIdx:29,  rIdx:29,  title:"你卸载了QQ<br>少了很多无意义的聊天<br>你的成绩稳步提升",left:"",right:"",img:"yeah.jpg"},
  {idx:29,  lIdx:30, rIdx:32, title:"有一天你正在上厕所<br>突然地震了",left:"冲了水赶紧跑",right:"直接跑",img:"earthquake.jpg"},
  {idx:30,  lIdx:31,  rIdx:31,  title:"你被埋在了废墟下方<br>没有等到救援",left:"",right:"",img:"hit.jpg"},
  {idx:31,  lIdx:-1,  rIdx:-1,  title:"恭喜你获得成就<br>讲卫生的三好学生",left:"",right:"",img:"sad_hit.jpg"},
  {idx:32, lIdx:34, rIdx:34, title:"跑的时候碰到同学摔倒了",left:"拉他一把",right:"拉他一把",img:"down.png"},
  {idx:33,  lIdx:34,  rIdx:34,  title:"",left:"",right:"",img:"save.jpg"},
  {idx:34, lIdx:35, rIdx:50, title:"初三一模你考了0分",left:"调整心态,寻找缺点!!",right:"这一定是在做梦",img:"zero.jpg"},
  {idx:35,  lIdx:36,  rIdx:36,  title:"傻孩子,你怎么可能考0分",left:"",right:"",img:"haha.png"},
  {idx:36,  lIdx:-1,  rIdx:-1,  title:"恭喜你获得成就:单纯的少年",left:"",right:"",img:"deng.jpg"},
  {idx:37,  lIdx:8,  rIdx:9,  title:"",left:"",right:"",img:"yeah.jpg"},
  {idx:38,  lIdx:39,  rIdx:51,  title:"那么真的问题来了.<br>你喜欢吃苹果还是香蕉?",left:"苹果",right:"香蕉",img:"apple.jpg"},
  {idx:39,  lIdx:40,  rIdx:40,  title:"我是校长<br>我不喜欢吃苹果!<br>你被劝退了,对不起",left:"",right:"",img:"president.jpg"},
  {idx:40,  lIdx:-1,  rIdx:-1,  title:"恭喜你获得成就:爱吃水果的孩子",left:"",right:"",img:"happy.jpg"},
  {idx:41,  lIdx:42,  rIdx:43,  title:"这次不是做梦<br>真的初三一模考试<br>成绩不上不下<br>没有达到自己的预期",left:"二模再说",right:"我得找老师帮我好好分析分析",img:"hit.jpg"},
  {idx:42,  lIdx:44,  rIdx:44,  title:"由于没有目的地复习,<br>二模成绩更差了",left:"",right:"",img:"sad_hit.jpg"},
  {idx:43,  lIdx:44,  rIdx:44,  title:"老师帮你指出了一些问题<br>复习有了方向<br>你的二模成绩有了一定提升",left:"",right:"",img:"importance.png"},
  {idx:44,  lIdx:45,  rIdx:48,  title:"马上就要中考填报志愿了",left:"根据自己的一模二模成绩填写<br>我更相信我自己",right:"参加模拟志愿填报,<br>让专业的老师帮自己<br>进行一个评估再填报",
    img:"fill.jpg"},
  {idx:45,  lIdx:46,  rIdx:46,  title:"由于目标不够合理<br>第一志愿未能录取,<br>只能看考试分数有没有达到",left:"",right:"",img:"hit.jpg"},
  {idx:46,  lIdx:-2,  rIdx:-2,  title:"顺利升上高中<br>达成成就:一丝丝遗憾的初三",left:"",right:"",img:"sad_hit.jpg"},
  {idx:47,  lIdx:8,  rIdx:9,  title:"",left:"",right:"",img:"yeah.jpg"},
  {idx:48,  lIdx:49,  rIdx:49,  title:"经过专业的评估<br>在填报志愿的时候<br>有了明确的方向<br>你刚好压线<br>考上自己选择的高中.",left:"",right:"",img:"yeah.jpg"},
  {idx:49,  lIdx:-2,  rIdx:-2,  title:"恭喜你顺利完成初中三年学业<br>获得成就:我自己的初三",left:"",right:"",img:"yeah.jpg"},
  {idx:50,  lIdx:38,  rIdx:38,  title:"哈哈原来真的是梦",left:"",right:"",img:"haha.png"},
  {idx:51,  lIdx:41,  rIdx:41,  title:"侥幸通过了哦",left:"",right:"",lRst:"",rRst:"",img:"happy.jpg"},
  // {idx:7,  lIdx:8,  rIdx:9,  title:"",left:"",right:"",lRst:"",rRst:"",img:"yeah.jpg"},
  // {idx:7,  lIdx:8,  rIdx:9,  title:"",left:"",right:"",lRst:"",rRst:"",img:"yeah.jpg"},
  // {idx:7,  lIdx:8,  rIdx:9,  title:"",left:"",right:"",lRst:"",rRst:"",img:"yeah.jpg"},
  // {idx:7,  lIdx:8,  rIdx:9,  title:"",left:"",right:"",lRst:"",rRst:"",img:"yeah.jpg"},
  // {idx:7,  lIdx:8,  rIdx:9,  title:"",left:"",right:"",lRst:"",rRst:"",img:"yeah.jpg"},
  // {idx:7,  lIdx:8,  rIdx:9,  title:"",left:"",right:"",lRst:"",rRst:"",img:"yeah.jpg"},
  // {idx:7,  lIdx:8,  rIdx:9,  title:"",left:"",right:"",lRst:"",rRst:"",img:"yeah.jpg"},
];
// {idx:7,  lIdx:8,  rIdx:9,  title:"你想去爬山吗?",left:"想去",right:"不想去",lRst:"",rRst:""},
// {idx:8,  lIdx:10, rIdx:11, title:"想去哪里爬山?",left:"白云山",right:"大夫山",lRst:"",rRst:""},
// {idx:9,  lIdx:-1, rIdx:-1, title:"为什么不想去爬山?",left:"天气太热",right:"懒癌晚期",lRst:"早晚的天气都还可以哦",rRst:"睡什么睡,起来嗨!"},
// {idx:10, lIdx:-1, rIdx:-1, title:"白云山有哪里吸引你的吗?",left:"山下吃的",right:"山上看的",lRst:"下次要带我去吃哦",rRst:"下次要给我带路哦"},
// {idx:11, lIdx:-1, rIdx:-1, title:"大夫山有哪里吸引你的吗?",left:"骑单车环游",right:"风景秀丽美女多",lRst:"我也喜欢,下次一起去",rRst:"摁...,我懂,我懂"},
