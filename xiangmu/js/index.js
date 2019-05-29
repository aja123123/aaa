
    var curIndex = 0; //当前index
    //  alert(imgLen);
    // 定时器自动变换2.5秒每次
    var autoChange = setInterval(function(){ 
      if(curIndex < $(".imgList li").length-1){ 
        curIndex ++; 
    }else{ 
      curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex); 
    },3000);
 
    $(".indexList").find("li").each(function(item){ 
      $(this).hover(function(){ 
        clearInterval(autoChange);
        changeTo(item);
        curIndex = item;
      },function(){ 
        autoChange = setInterval(function(){ 
          if(curIndex < $(".imgList li").length-1){ 
            curIndex ++; 
          }else{ 
            curIndex = 0;
          }
          //调用变换处理函数
          changeTo(curIndex); 
        },3000);
      });
    });
    function changeTo(num){ 
      $(".imgList").find("li").removeClass("imgOn").hide().eq(num).fadeIn().addClass("imgOn");
      $(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
      $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
    }




    $(document).ready(function(){
      $(".u64 .show").mouseover(function(){
        $(this).css("display","none");
        $(".u64 .hidden").fadeIn();
        $(".u64 .hidden").css("display","block");
      });
      $(".u64 .hidden").mouseout(function(){
        $(this).css("display","none");
        $(".u64 .show").fadeIn();
        $(".u64 .show").css("display","block")
      })
    })


// 返回顶部
  $(".t-right-bar").hide();
  $(function () {
      $(window).scroll(function () {
          if ($(window).scrollTop() > 100) {
              $(".t-right-bar").fadeIn(500);
          }
          else {
              $(".t-right-bar").fadeOut(500);
          }
      });

      $("#back-to-top").click(function () {
          $('body,html').animate({scrollTop: 0}, 1000);
          return false;
      });
  });

  
