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

$(function() {
    setDivHeight();
    setDiagonals();
});
