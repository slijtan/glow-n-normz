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
    var controller = $.superscrollorama();

    setupTitles(controller);

    //WELCOME PAGE
    controller.addTween('#welcome-text',
			(new TimelineLite())
			.append([
			    TweenMax.fromTo($('#flower-1'), 1,
					    {css:{top: -200}, immediateRender:true},
					    {css:{top: 500}}),
			    TweenMax.fromTo($('#flower-2'), 1,
					    {css:{bottom: 200}, immediateRender:true},
					    {css:{bottom: 350}}),
			    TweenMax.fromTo($('#flower-3'), 1,
					    {css:{top: -450}, immediateRender:true},
					    {css:{top: 300}})
			]),
			1000 // scroll duration of tween
		       );

    controller.pin($('#welcome-text'), 820, {offset: 0, pushFollowers: false});

    //ABOUT US
    controller.addTween('#how-we-met',
			TweenMax.from($('#how-we-met'), .5, {css:{opacity:0}}),
			400,
			-400
		       );
    controller.pin($('#how-we-met'), 300, {offset: -100});

    controller.addTween('#the-proposal',
			TweenMax.from($('#the-proposal'), .5, {css:{opacity:0}}),
			400,
			-400
		       );

    controller.pin($('#the-proposal'), 300, {offset: -100});

    //BRIDAL PARTY
    controller.addTween('#groomsmen',
			TweenMax.from($('#groomsmen'), .5, {css:{opacity:0}}),
			400,
			-200
		       );
    controller.pin($('#groomsmen'), 300, {offset: -100});

    controller.addTween('#bridesmaids',
			TweenMax.from($('#bridesmaids'), .5, {css:{opacity:0}}),
			400,
			-200
		       );
    controller.pin($('#bridesmaids'), 300, {offset: -200});


    //EVENT
    controller.addTween('#event',
			TweenMax.from($('#event'), .5, {css:{opacity:0}}),
			400,
			0
		       );
    controller.pin($('#event'), 1102, {offset: 200, pushFollowers: false});

    controller.addTween('#map',
			TweenMax.from($('#map'), .5, {css:{opacity:0}}),
			400,
			0
		       );
    controller.pin($('#map'), 700, {offset: 30, pushFollowers: false});

    controller.addTween('#directions',
			TweenMax.from($('#directions'), .5, {css:{opacity:0}}),
			200,
			100
		       );
    controller.pin($('#directions'), 230, {offset: -100, pushFollowers: false});

    //ACTIVITIES
    controller.addTween('#accommodations',
			TweenMax.from($('#accommodations'), .5, {css:{opacity:0}}),
			400,
			-200
		       );
    controller.pin($('#accommodations'), 300, {offset: -50});

    controller.addTween('#activities',
			TweenMax.from($('#activities'), .5, {css:{opacity:0}}),
			400,
			-200
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

    $(document).scroll(function(e) {
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
