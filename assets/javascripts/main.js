$(document).ready(function($) {
  // INITIATE THE FOOTER
  onScroll();
  siteFooter();  
    if ($(window).scrollTop() + $(window).height() > $('.wrapper_main').outerHeight()) {
      $('.arrow').hide();
    }
$(document.body).on('touchmove', onScroll);
$(window).on('scroll', onScroll);

function onScroll() {
      //ADD .TIGHT
      if ($(window).scrollTop() + $(window).height()-1 > $('.wrapper_main').outerHeight()) {
        $('body').addClass('tight');
        $('.arrow').hide();
      } 
      else {
        $('body').removeClass('tight');
        $('.arrow').show();
      }

    var navbar = $('.navbar');
    if($(window).scrollTop() <= 40){
      navbar.removeClass('navbar-scroll');
      $('.navbar').css('background', 'rgba(255, 255, 255, 0.0)')
    } else {
      navbar.addClass('navbar-scroll');
      $('.navbar').css('background', '#fff')
    }


      if ($(document).scrollTop() > $("#contact").position().top- 500) {
          $('.zind').css('background', $("#about").attr("data-color"));
          $('.border-change').css('border', '4px solid #fff');
          $('.navbar-scroll').css('background', $("#showcase").attr("data-color"))
          $('.nav-link').css('color', $("#about").attr("data-color"))
          $('.navbar-brand').css('color', $("#about").attr("data-color"))
      }
      else if ($(document).scrollTop() > $("#showcase").position().top-500) {
          $('.zind').css('background', $("#showcase").attr("data-color"));
          $('.border-change').css('border', '4px solid #2b2b2b');
          $('.navbar-scroll').css('background', $("#about").attr("data-color"));
          $('.nav-link').css('color', $("#showcase").attr("data-color"))
          $('.navbar-brand').css('color', $("#showcase").attr("data-color"))
      }
      else if ($(document).scrollTop() >= $("#about").position().top-500) {
          $('.zind').css('background', $("#about").attr("data-color"));
          $('.border-change').css('border', '4px solid #fff');
          $('.navbar-scroll').css('background', $("#showcase").attr("data-color"))
          $('.nav-link').css('color', $("#about").attr("data-color"))
          $('.navbar-brand').css('color', $("#about").attr("data-color"))
      }

      if ($(document).scrollTop() > $("#scroll-point").position().top) {
          $(".skill").addClass("anima");
      }
    
}

$(".navbar a").on('click', function(event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-100
      }, 800, function(){
      });
    }  // End if
  });


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
      "margin-bottom" : siteFooterHeight + 49
    });
}

$('#resume').hover(function(){ 
            $('#resume').toggleClass("animated jello",function(){
               $(this).remove();
            });
});   


