//<![CDATA[
// scrollFooter() create function to verify scroll position and thus hide the footer.
function scrollFooter(scrollY, heightFooter)
{
	if(scrollY >= heightFooter)
	{
		$('footer').css({
			'bottom' : '0px'
		});
	}
	else
	{
		$('footer').css({
			'bottom' : '-' + heightFooter + 'px'
		});
	}
}

function setHeiHeight() {
    $('#header').css({
        height: $(window).height() + 'px'
    });
}


function setAnimate(){
	var heightDocument	= ($(window).height()) + ($('.content').height()) + ($('footer').height());
	// Defining the size of the element to animate
	$('#scroll-animate, #scroll-animate-main').css({
		'height' :  (heightDocument) + 'px'
	});
}


setHeiHeight(); // window height on first page loading
$( window ).resize(function() {
	setHeiHeight();
	var windowHeight	= $(window).height(),
		windowWidth		= $( window ).width(),
	  	heightH = windowHeight,
		widthH =  ((windowHeight*4)/3);
		while(widthH<windowWidth){
				widthH=widthH+50;
				heightH = ((widthH*3)/4);
			}
	var background = new Image();
	background.src = $('.skill-parallax').css('background-image').replace('url(','').replace(')','').replace(/\"/gi, "");

    var widthH1 = background.width,
        heightH1 = background.height,
    	heightH2 = $('.skill-parallax').height(),
		widthH2 =  $( window ).width();

	while(heightH1<heightH2 || widthH1<widthH2){
			heightH1=heightH1+50;
			widthH1 =  ((heightH1*16)/9);
	}	

	$('header').css({
		'background-size' :  widthH+'px '+ heightH + 'px',
	});
	$('.skill-parallax').css({
        'background-size' :  widthH1+'px '+ heightH1 + 'px',
    });

	$('header').css({
		'height' : windowHeight + 'px',
		'background-size' :  widthH+'px '+ heightH + 'px',
	});
		$('.wrapper-parallax').css({
		'margin-top' : windowHeight + 'px'
		});
		setAnimate();
});

// Start Action to load the whole page
$(window).on('load',function(){
	var windowHeight	= $(window).height(),
		windowWidth		= $( window ).width(),
		footerHeight	= $('footer').height(),
		heightH = windowHeight,
		widthH =  ((windowHeight*4)/3);
		while(widthH<windowWidth){
				widthH=widthH+50;
				heightH = ((widthH*3)/4);
	}
	var heightDocument	= (windowHeight) + ($('.content').height()) + ($('footer').height());
    var background = new Image();
	background.src = $('.skill-parallax').css('background-image').replace('url(','').replace(')','').replace(/\"/gi, "");

    var widthH1 = background.width,
        heightH1 = background.height,
        heightH2 = $('.skill-parallax').height(),
		widthH2 =  $( window ).width();

	while(heightH1<heightH2 || widthH1<widthH2){
			heightH1=heightH1+50;
			widthH1 =  ((heightH1*16)/9);
	}
	$('header').css({
		'height' : windowHeight + 'px',
		'background-size' :  widthH +'px '+ heightH + 'px',
	});

	setAnimate();
		$('.wrapper-parallax').css({
		'margin-top' : windowHeight + 'px'
	});
	setAnimate();

	// Getting function scrollFooter() to verify the position of the scroll and hide the footer
	scrollFooter(window.scrollY, footerHeight);

	// Start Action on scrolling
	window.onscroll = function(){
		var scroll = window.scrollY;
		// Creating the effect of smooth animation content to use the scroll.
		$('#scroll-animate-main').css({
			'top' : '-' + scroll + 'px'
		});
		$('footer').css({
			'background-position-y' : 100 - (scroll * 300 / heightDocument) + 'px'
		});
		$('header').css({
            'background-position' : 'center ' + (- scroll * 300 / heightDocument) + 'px'  
        });
        $('.skill-parallax').css({
            'background-position' : 'center ' + ((- scroll * 800) / (heightDocument)) + 'px',
            'background-size' :  widthH1+'px '+ heightH1 + 'px',
        });
		scrollFooter(scroll, footerHeight);
	};
});

      
$(window).scroll(function(){
    $("#me").css("opacity", 1 - $(window).scrollTop() / 550);
  });
$(window).scroll(function(){
    $(".name-ani").css("opacity", 1 - $(window).scrollTop() / 550);
  });
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

// Navigation Scroll - ljepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
