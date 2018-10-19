
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
      distance=distance>665?665:distance;
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
