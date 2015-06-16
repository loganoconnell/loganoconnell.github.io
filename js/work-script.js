jQuery(document).ready(function($){

  $('a[href*=#]').bind('click', function(e) {
    
	  e.preventDefault();
       
	  var target = $(this).attr("href");

    $('html, body').stop().animate({ scrollTop: $(target).offset().top+5 }, 1500, "easeInOutExpo");
			
	  return false;
  });
});
