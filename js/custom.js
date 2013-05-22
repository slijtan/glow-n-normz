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

function initAnimations(){
    var controller = $.superscrollorama();

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

    //ABOUT US TITLE
    controller.addTween('#title-1-bg',
			TweenMax.from($('#title-1-bg'), .5, {css:{opacity:0}}),
			600,
			300
		       );

    controller.addTween('#title-1-header',
			TweenMax.from($('#title-1-header'), .5, {css:{opacity:0}}),
			300,
			-300
		       );

    controller.pin($('#title-1-header'), 1800, {offset: -350});

    //ABOUT US
    controller.addTween('#how-we-met',
			TweenMax.from($('#how-we-met'), .5, {css:{opacity:0}}),
			400,
			-400
		       );
    controller.pin($('#how-we-met'), 700, {offset: -400});

    controller.addTween('#the-proposal',
			TweenMax.from($('#the-proposal'), .5, {css:{opacity:0}}),
			400,
			-200
		       );

    controller.pin($('#the-proposal'), 700, {offset: -100});

}

$(function() {
    setDivHeight();
    setDiagonals();
    initAnimations();
});
