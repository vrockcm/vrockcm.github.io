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
		
	jQuery_1('header').css({
		'background-size' :  widthH+'px '+ heightH + 'px',
	});
});


// Start Action to load the whole page
jQuery_1(window).load(function(){
	var windowHeight	= jQuery_1(window).height(),
		windowWidth		= $( window ).width();
		footerHeight	= jQuery_1('footer').height(),
		heightDocument	= (windowHeight) + (jQuery_1('.content').height()) + (jQuery_1('footer').height());


	// Defining the size of the element to animate
	jQuery_1('#scroll-animate, #scroll-animate-main').css({
		'height' :  heightDocument + 'px'
	});

	// Defining the size of the header and content elements
		var heightH = windowHeight;
		var widthH =  ((windowHeight*4)/3);
		if(widthH<windowWidth){
			while(widthH<windowWidth){
				widthH=widthH+50;
				heightH = ((widthH*3)/4);
			}
		}
		
	jQuery_1('header').css({
		'height' : windowHeight + 'px',
		'background-size' :  widthH+'px '+ heightH + 'px',
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
		jQuery_1('footer').css({
			'background-position-y' : 100 - (scroll * 600 / heightDocument) + 'px'
		});//
		jQuery_1('header').css({
            'background-position' : 'center ' + (- scroll * 300 / heightDocument) + 'px'  
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
