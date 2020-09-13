	$(document).ready(function () {
	$(window).on("scroll", function(){
	 

    var scroll = $(this).scrollTop();


    if (scroll >= 80) {
    
      $('#header').addClass('fixed');
       $('.header-nav').addClass('fixed');
      $('#contactLang').css("display", "none");
      $('#divdign').css("display", "none");
       $('.logo').addClass('littleLogo');
      
    } else {

      $('#header').removeClass('fixed');
      $('.header-nav').removeClass('fixed');
      $('#contactLang').css("display", "block");
      $('#divdign').css("display", "block");
      $('.logo').removeClass('littleLogo');
    }
  });
});