
    var t_img; // 定时器
	var isLoad = true; // 控制变量
	
	// 判断图片加载状况，加载完成后回调
	isImgLoad(function(){
	    // 加载完成
	});
	
	// 判断图片加载的函数
	function isImgLoad(callback){
	    // 查找所有图，迭代处理
	    $('img').each(function(){
	        // 找到为0就将isLoad设为false，并退出each
	        if(this.height === 0){
	            isLoad = false;
	            return false;
	        }
	    });
	    // 为true，没有发现为0的。加载完毕
	    if(isLoad){
	        clearTimeout(t_img); // 清除定时器
	        console.log("加载完成");
//			        alert("加载完成");
	        $(document).ready(function (){
	        	$('.loading_box').hide();
	        	
	        //正文内容	








var timer;
var num = 0;
var startY = endY= count = quit = liate = zong = 0;
var distance =-2600;
 $('.outContain').on('touchstart', function(event) {
 	if(!$("#mp3Btn").hasClass("hasPlay")){
   		$("#mp3Btn").addClass("hasPlay");
   	   document.getElementById("mp3").play();
   	}
 	$(".upDown").hide();
   var touchstar = event.targetTouches[0];
   startY = touchstar.pageY;
 });
   $('.outContain').on('touchmove', function(e) {
   	
      var touch = e.touches[0];
	  endY = touch.pageY ;    
      count = endY - startY;
      
      quit = startY - endY;
      zong  = zong + count;
      liate = liate + quit;
      
      
      distance += quit/20;
      console.log(distance);
      distance=distance>720?720:distance;
      distance=distance<-830?-830:distance;
      $('.cdd').css({
          transform:'translateZ('+ distance + 'px)'
      })
 })
// 禁止微信上下显示黑框
document.querySelector('body').addEventListener('touchstart', function (ev) {
        event.preventDefault();
})
document.getElementById("mp3Btn").addEventListener("tap",function(){
	 	var $this=$(this);
	 	if($this.hasClass("playing1")){
	 		document.getElementById("mp3").pause();
	 		$this.removeClass("playing1");
	 	}else{
	 		document.getElementById("mp3").play();
	 		$this.addClass("playing1");
	 	}
 })



	        //正文结束	
	        	
            }); 
	        // 回调函数
	        callback();
	    // 为false，因为找到了没有加载完成的图，将调用定时器递归
	    
	    }else{
	        isLoad = true;
	        t_img = setTimeout(function(){
	            isImgLoad(callback); // 递归扫描
	        },500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	    }
	}
