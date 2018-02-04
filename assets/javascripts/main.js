//<![CDATA[
// scrollFooter() create function to verify scroll position and thus hide the footer.
function scrollFooter(scrollY, heightFooter)
{
	if(scrollY >= heightFooter)
	{
		jQuery_1('footer').css({
			'bottom' : '0px'
		});
	}
	else
	{
		jQuery_1('footer').css({
			'bottom' : '-' + heightFooter + 'px'
		});
	}
}

function setHeiHeight() {
    $('#header').css({
        height: $(window).height() + 'px'
    });
}
setHeiHeight(); // window height on first page loading
$( window ).resize(function() {
	setHeiHeight();
	var windowHeight	= jQuery_1(window).height(),
		windowWidth		= $( window ).width();
  	var heightH = windowHeight;
	var widthH =  ((windowHeight*4)/3);

		if(widthH<windowWidth){
			while(widthH<windowWidth){
				widthH=widthH+50;
				heightH = ((widthH*3)/4);
			}
		}
		var heightH1 = windowHeight;
		var widthH1 =  ((windowHeight*16)/9);
		if(widthH1<windowWidth){
			while(widthH1<windowWidth){
				widthH1=widthH+20;
				heightH1 = ((widthH*9)/16);
			}
		}
		
	jQuery_1('header').css({
		'background-size' :  widthH+'px '+ heightH + 'px',
	});
	jQuery_1('.skill-parallax').css({
            'background-size' :  widthH1+'px '+ heightH1 + 'px',
        });

	jQuery_1('header').css({
		'height' : windowHeight + 'px',
		'background-size' :  widthH+'px '+ heightH + 'px',
	});
	heightDocument	= (windowHeight) + (jQuery_1('.content').height()) + (jQuery_1('footer').height());
	// Defining the size of the element to animate
	jQuery_1('#scroll-animate, #scroll-animate-main').css({
		'height' :  heightDocument + 'px'
	});
		jQuery_1('.wrapper-parallax').css({
		'margin-top' : windowHeight + 'px'
	});
});


// Start Action to load the whole page
jQuery_1(window).load(function(){
	var windowHeight	= jQuery_1(window).height(),
		windowWidth		= $( window ).width(),
		footerHeight	= jQuery_1('footer').height();
	// Defining the size of the header and content elements
		var heightH = windowHeight;
		var widthH =  ((windowHeight*4)/3);
		if(widthH<windowWidth){
			while(widthH<windowWidth){
				widthH=widthH+50;
				heightH = ((widthH*3)/4);
			}
		}
		var heightH1 = windowHeight;
		var widthH1 =  ((windowHeight*16)/9);
		if(widthH1<windowWidth){
			while(widthH1<windowWidth){
				widthH1=widthH+20;
				heightH1 = ((widthH*9)/16);
			}
		}		
	jQuery_1('header').css({
		'height' : windowHeight + 'px',
		'background-size' :  widthH+'px '+ heightH + 'px',
	});

	jQuery_1('.wrapper-parallax').css({
		'margin-top' : windowHeight + 'px'
	});
	var heightDocument	= (windowHeight) + (jQuery_1('.content').height()) + (jQuery_1('footer').height());
	// Defining the size of the element to animate
	jQuery_1('#scroll-animate, #scroll-animate-main').css({
		'height' :  (heightDocument-20) + 'px'
	});

	// Getting function scrollFooter() to verify the position of the scroll and hide the footer
	scrollFooter(window.scrollY, footerHeight);

	// Start Action on scrolling
	window.onscroll = function(){
		var scroll = window.scrollY;

		// Creating the effect of smooth animation content to use the scroll.
		jQuery_1('#scroll-animate-main').css({
			'top' : '-' + scroll + 'px'
		});
		jQuery_1('footer').css({
			'background-position-y' : 100 - (scroll * 300 / heightDocument) + 'px'
		});//
		jQuery_1('header').css({
            'background-position' : 'center ' + (- scroll * 300 / heightDocument) + 'px'  
        });
        jQuery_1('.skill-parallax').css({
            'background-position' : 'center ' + ((- scroll * 500) / (heightDocument)) + 'px',
            'background-size' :  widthH1+'px '+ heightH1 + 'px',
        });
		// On scrolling using function scrollFooter() to verify the position of the scroll and hide the footer
		scrollFooter(scroll, footerHeight);
	};
});
//]]>

      
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