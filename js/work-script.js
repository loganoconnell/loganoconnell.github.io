jQuery(document).ready(function($){

  $('a[href*=#]').bind('click', function(e) {
	e.preventDefault();
       
	var target = $(this).attr("href");

  if (target === "#one") {

    $('html, body').stop().animate({ scrollTop: $(target).offset().top }, 1500, "easeInOutExpo");
  }

  else {

    return true;
  }
			
	return false;
   });
});
