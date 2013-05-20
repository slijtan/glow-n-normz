function setFullScreen(){
    $screen_height = $(window).height();
    $('.full-screen').each(function(index) {
	$(this).css('height', $screen_height);
    });
}

$(function() {
    setFullScreen();
});
