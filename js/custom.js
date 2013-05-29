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

	controller.addTween($header_selector,
			    TweenMax.from($($header_selector), .5, {css:{opacity:0}}),
			    300,
			    -300
			   );

	controller.pin($($header_selector), 300, {offset: -350});

	controller.addTween($header_selector,
			    TweenMax.to($($header_selector), .5, {css:{opacity:0}}),
			    300,
			    50
			   );
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
					    {css:{top: 50}, immediateRender:true},
					    {css:{top: 200}}),
			    TweenMax.fromTo($('#flower-2'), 1,
					    {css:{bottom: 0}, immediateRender:true},
					    {css:{bottom: 550}}),
			    TweenMax.fromTo($('#flower-3'), 1,
					    {css:{top: -200}, immediateRender:true},
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
    controller.pin($('#event'), 1200, {offset: -100, pushFollowers: false});

    controller.pin($('#map'), 765, {offset: 100, pushFollowers: false});

    controller.pin($('#directions'), 230, {offset: -100, pushFollowers: false});

    //RSVP
    controller.pin($('#rsvp'), 400, {offset: -200});
}

$(function() {
    setDivHeight();
    setDiagonals();
    initAnimations();
});
