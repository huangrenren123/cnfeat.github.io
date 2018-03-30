$(function() {
    var rawHeight = document.documentElement.clientHeight;
    var screenWidth = document.documentElement.clientWidth;
    var headHeight = $(".fixHead").height();
    var logoHeight = $(".logoHead").height();
    /* console.log(rawHeight+"head"+headHeight);*/
    if (screenWidth < 768) {
        $("nav .news-tabs").css("height", rawHeight - headHeight);
    } else {
        $("nav .news-tabs").css("height", rawHeight - logoHeight);
    }

    $("#nav-body").css("top", headHeight);
    $(window).resize(function() {
        var rawHeight = document.documentElement.clientHeight;

        $("nav .news-tabs").css("height", rawHeight);
    });
    /*("button").on("click",function(){
      if($("#nav-body").hasClass("out")){
        $("#nav-body").removeClass("out")
        $("#nav-body").addClass("in");
      }
    })*/
    var box = document.querySelector('body');
    //记录触屏数据
    var startX = 0;
    var moveX = 0;
    var startY = 0;
    var moveY = 0;
    var distanceX = 0;
    var distanceY = 0;
    box.addEventListener('touchstart', function(e) {

        //记录触屏开始位置
        startX = e.targetTouches[0].clientX;
        startY = e.targetTouches[0].clientY;
    });

    box.addEventListener('touchmove', function(e) {
        //获取当前鼠标移动的位置
        moveX = e.targetTouches[0].clientX;
        moveY = e.targetTouches[0].clientY;
        distanceX = moveX - startX; //计算距离差
        distanceY = moveY - startY; //计算距离差
        /* console.log("distanceY : "+distanceY);*/
    });

    box.addEventListener('touchend', function() {
        //在触屏结束后判断用户滑动方式
        if (distanceX > 0 && (distanceY <= 10 && distanceY >= -10)) {
            $("#nav-body").addClass("in");
            $("#nav-body").removeClass("out");
        }

        if (distanceX < 0 || (distanceY >= 10 || distanceY <= -10)) {
            $("#nav-body").addClass("out");
            setTimeout(function() {
                $("#nav-body").removeClass("in");
                $("#nav-body").removeClass("out");
            }, 400)

        }

        //数据重置
        startX = 0;
        moveX = 0;
        distanceX = 0;
        startY = 0;
        moveY = 0;
        distanceY = 0;
    });

    $(".wxlogo").on("click", function() {

        $(this).next("span").toggleClass("isShow");
        $(".showNumber").removeClass("isShow");

    })
    $(".phoneLogo").on("click", function() {

        $(this).next("span").toggleClass("isShow");
        $(".wxerweima").removeClass("isShow");

    })
    /*判断是否有立即体验*/
    /*var isExperience=$(".netVersion span").hasAttr("");*/
    var isExperience = true;
    var netBtn = $(".netVersion button");
    if (isExperience) {
        netBtn.css("background-image", "url(images/activebg.png)");
        netBtn.css("cursor", "default");
    } else {
        netBtn.css("background-image", "url(images/demopic-19.png)");
        netBtn.css("cursor", "pointer");
    }   
});