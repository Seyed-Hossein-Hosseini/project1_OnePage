$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#Top').fadeIn();
        } else {
            $('#Top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#Top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 900);
        return false;
    });
});