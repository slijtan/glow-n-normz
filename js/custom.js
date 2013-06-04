function setDivHeight(){
    $screen_height = $(window).height();
    $('div.page').each(function() {
	if($(this).data('height')){
	    $height = $(this).data('height');
	    $height = (Number($height.replace('%', '')) * $screen_height / 100) + "px";
	    $(this).css("height", $height);
	}
    });
}

function setDiagonals(){
    $screen_width = $(window).width();

    $('div.diagonal').each(function() {
	$ratio = $(this).data('ratio');
	$height = $screen_width * $ratio;
	$(this).css("border-right-width", $screen_width + "px");
	$(this).css("border-top-width", $height + "px");
    });
}

function setupTitles(controller){

    $('.title').each(function($index){
	$title_selector = '#title-' + ($index + 1) +'-bg';
	$header_selector = '#title-' + ($index + 1) +'-header';

	/*controller.addTween($header_selector,
			    TweenMax.from($($header_selector), .5, {css:{opacity:0}}),
			    300,
			    -300
			   );*/

	controller.pin($($header_selector), 300, {offset: -350});

	/*controller.addTween($header_selector,
			    TweenMax.to($($header_selector), .5, {css:{opacity:0}}),
			    300,
			    50
			   );*/
    });

}

function initAnimations(){
    var controller = $.superscrollorama({triggerAtCenter: false});

    setupTitles(controller);

   controller.addTween('#welcome-text',
		       (new TimelineLite())
		       .append([
			   TweenMax.to($('#flower-1'), 1, {css:{top: 350}}),
			   TweenMax.to($('#flower-2'), 1, {css:{top: 100}}),
			   TweenMax.to($('#flower-4'), 1, {css:{top: 300}}),
			   TweenMax.to($('#flower-5'), 1, {css:{top: 0}}),
			   TweenMax.to($('#flower-6'), 1, {css:{top: 300}}),
			   TweenMax.to($('#flower-7'), 1, {css:{top: 500}}),
			   TweenMax.to($('#flower-9'), 1, {css:{top: 800}})
		       ]),
		       1000 // scroll duration of tween
		       );

    controller.pin($('#welcome-text'), 1000, {offset: 0, pushFollowers: false});


    //ABOUT US
    controller.addTween('#how-we-met',
			TweenMax.from($('#how-we-met'), .5, {css:{opacity:0}}),
			500,
			-600
		       );
    controller.pin($('#how-we-met'), 300, {offset: -50});

    controller.addTween('#the-proposal',
			TweenMax.from($('#the-proposal'), .5, {css:{opacity:0}}),
			500,
			-600
		       );

    controller.pin($('#the-proposal'), 300, {offset: -50});

    //BRIDAL PARTY
    controller.addTween('#groomsmen',
			TweenMax.from($('#groomsmen'), .5, {css:{opacity:0}}),
			400,
			-500
		       );
    controller.pin($('#groomsmen'), 300, {offset: -100});

    controller.addTween('#bridesmaids',
			TweenMax.from($('#bridesmaids'), .5, {css:{opacity:0}}),
			400,
			-500
		       );
    controller.pin($('#bridesmaids'), 300, {offset: -200});


    //EVENT
    controller.addTween('#event',
			TweenMax.from($('#event'), .5, {css:{opacity:0}}),
			500,
			-600
		       );
    controller.pin($('#event'), 700, {offset: -100, pushFollowers: false});

    controller.addTween('#map',
			TweenMax.from($('#map'), .5, {css:{opacity:0}}),
			390,
			-600
		       );
    controller.pin($('#map'), 1170, {offset: -220, pushFollowers: false});

    controller.addTween('#directions',
			TweenMax.from($('#directions'), .5, {css:{opacity:0}}),
			200,
			-400
		       );
    controller.pin($('#directions'), 300, {offset: -100, pushFollowers: false});


    //ACTIVITIES
    controller.addTween('#accommodations',
			TweenMax.from($('#accommodations'), .5, {css:{opacity:0}}),
			400,
			-400
		       );
    controller.pin($('#accommodations'), 300, {offset: -50});

    controller.addTween('#transportation',
			TweenMax.from($('#transportation'), .5, {css:{opacity:0}}),
			400,
			-400
		       );
    controller.pin($('#transportation'), 300, {offset: -50});

    controller.addTween('#activities',
			TweenMax.from($('#activities'), .5, {css:{opacity:0}}),
			400,
			-400
		       );

    controller.pin($('#activities'), 300, {offset: -50});


    //RSVP
    controller.pin($('#rsvp'), 400, {offset: -100});
}

function initNavScroll(){
    $('ul.nav li a').on('click', function() {
	$.smoothScroll({
	    scrollTarget: $(this).attr('href'),
	    speed: 900
	});
	return false;
    });
}

function initNavHighlighting(){
    var $sections = $('.title');
    var $navs = $('ul.nav > li');

    var topsArray = $sections.map(function() {
	return $(this).position().top;
    }).get();

    var len = topsArray.length;
    var currentIndex = 0;

    var getCurrent = function( top ) {
	for( var i = 0; i < len; i++ ) {
	    if( top < topsArray[i] ) {
		return i;
	    }
	}
    };

    $(window).scroll(function(e) {
	var scrollTop = $(this).scrollTop();
	var checkIndex = getCurrent( scrollTop );
	if( checkIndex !== currentIndex ) {
	    currentIndex = checkIndex;
	    $navs.eq( currentIndex ).addClass("active").siblings(".active").removeClass("active");
	}
    });
}

$(function() {
    setDivHeight();
    setDiagonals();
    initAnimations();
    initNavScroll();
    initNavHighlighting();
    $.smoothScroll({ scrollTarget: 'body', offset: 0 }); //scroll to fix initial tween positioning bug
});
