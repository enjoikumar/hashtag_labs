window.setInterval(function(){
	var windowTop = $(window).scrollTop();
  var windowBottom = windowTop + window.innerHeight;
  var imgTop = $('#myimage').position().top;
  var imgBottom = imgTop + $('#myImage').height(); 
  if(windowTop < imgTop && imgTop < windowBottom || windowTop < imgBottom && imgBottom < windowBottom){
    console.log('visible');
  }
},2000);