$(document).ready(function($) {
  // INITIATE THE FOOTER
 
    if ($(window).scrollTop() + $(window).height() > $('.wrapper_main').outerHeight()) {
      $('.arrow').hide();
    } 
  $(window).scroll(function () {
    //ADD .TIGHT
    if ($(window).scrollTop() + $(window).height() > $('.wrapper_main').outerHeight()) {
      $('body').addClass('tight');
      $('.arrow').hide();
    } 
    else {
      $('body').removeClass('tight');
      $('.arrow').show();
    }
  });
  siteFooter();  
  //BACK TO PRESENTATION MODE
  $("html").on("click", "body.tight .wrapper_main", function() {
    $('html, body').animate({
      scrollTop: $('.wrapper_main').outerHeight() - $(window).height()
    }, 1200);
  });
});

$('.arrow').click(function(){
   $("html").animate({ scrollTop: $('.wrapper_main').outerHeight()}, 1200);
});
  
  function siteFooter() {
    var siteContent = $('body');
    var siteFooter = $('footer');
    var siteFooterHeight = siteFooter.height();

    siteContent.css({
      "margin-bottom" : siteFooterHeight + 50
    });
  }

  // Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 1200);
    event.preventDefault();
});

$('#resume').hover(function(){ 
            $('#resume').toggleClass("animated jello",function(){
               $(this).remove();
            });
        });   