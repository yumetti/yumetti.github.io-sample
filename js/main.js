$(function(){
  $("nav").hide();
  $("header .fa").click(function(){
    $("nav").show();
    $("nav").click(function(){
      $("nav").hide();
    });
  });
  

  $(".fourth dt:nth-child(1)").click(function(){
    $(".fourth dd:nth-child(2)").slideToggle(200);
  })
  $(".fourth dt:nth-child(3)").click(function(){
    $(".fourth dd:nth-child(4)").slideToggle(200);
  })
  $(".fourth dt:nth-child(5)").click(function(){
    $(".fourth dd:nth-child(6)").slideToggle(200);
  })
  
  
    // スクロールの方向　-1の時には左、1の時には右
    var dir = -1;
  
    // スクロールのインターバル(何秒ごとにスクロールさせるか。3000ミリ秒に設定)
    var interval = 3000;
  
    // スクロールのスピード（700ミリ秒に設定）
    var duration = 700;
  
    // タイマー用の変数
    var timer;
  
    // リストの順番を変更（3番目を1番最初にする）
    $("#slide ul").prepend($("#slide li:last-child"));
  
    // リストの位置を変更（画像1枚分ずらす）
    $("#slide ul").css("left", 30);     /*止まっている時の位置１ */
  
    // 3000ミリ秒（変数intervalの値）ごとにslideTimer関数を実行
    timer = setInterval(slideTimer, interval);
  
    // slideTimer()関数
    function slideTimer(){
      // スクロール方向の判断
      if(dir == -1){
        // 画像1枚分左へスクロール
        $("#slide ul").animate({"left" : "-=345px"}, duration, function(){  /*動く幅 */
          // リストの順番を変更
          $(this).append($("#slide li:first-child"));
  
          // リストの位置を変更
          $(this).css("left", 30);      /*止まっている時の位置２ */
        });
      }else{
        // 画像1枚分右へスクロール
        $("#slide ul").animate({"left" : "+=200px"}, duration, function(){
          // リストの順番を変更
          $(this).prepend($("#slide li:last-child"));
  
          // リストの位置を変更
          $(this).css("left", 0);
  
          // 左方向へリセット
          dir = -1;
        });
      }
    }
  
    $(".alert").hide();

  $("#submitBtn").click(function(){

      var sendFlag = true;

      if(!$("#text").val()){
        $("#textSection .alert").show();
        sendFlag = false;
      }else{
        $("#textSection .alert").hide();
      }

      if(!$("#email").val()){
        $("#emailSection .alert").show();
        sendFlag = false;
      }else{
        $("#emailSection .alert").hide();
      }
      
      var checkboxChk = $('input[type="checkbox"]:checked').length;
      if(checkboxChk < 1){
        $("#checkboxSection .alert").show();
        sendFlag=false;
      }else{
        $("#checkboxSection .alert").hide();
      }

      if(!$("textarea").val()){
        $("#textareaSection .alert").show();
        sendFlag = false;
      }else{
        $("#textareaSection .alert").hide();
      }
      
      if(sendFlag == false){

        return false;
      }
  });

  AOS.init()
})

