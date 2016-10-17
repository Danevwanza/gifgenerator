 $('#myVideo').fadeOut(0);
   setTimeout(function(){
     $('#myVideo').fadeIn(1500);
     myVideo.volume= 0;
     myVideo.play();
   },1500);