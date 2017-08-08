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
$(window).resize( setHeiHeight );


// Start Action to load the whole page
jQuery_1(window).load(function(){
	var windowHeight	= jQuery_1(window).height(),
		footerHeight	= jQuery_1('footer').height(),
		heightDocument	= (windowHeight) + (jQuery_1('.content').height()) + (jQuery_1('footer').height());

	// Defining the size of the element to animate
	jQuery_1('#scroll-animate, #scroll-animate-main').css({
		'height' :  heightDocument + 'px'
	});

	// Defining the size of the header and content elements
	jQuery_1('header').css({
		'height' : windowHeight + 'px',
		'line-height' : windowHeight + 'px'
	});

	jQuery_1('.wrapper-parallax').css({
		'margin-top' : windowHeight + 'px'
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

		 //Creating sensation of parallax in the header bg.
		jQuery_1('header').css({
			'background-position-y' :  0 - (scroll * 600 / heightDocument) + 'px'
		});

	

		jQuery_1('footer').css({
			'background-position-y' : 100 - (scroll * 600 / heightDocument) + 'px'
		});//

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
