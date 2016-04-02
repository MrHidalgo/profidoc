/*
*   LANG BTN
*/
$('.header-lang a').click( function(e) {
    e.preventDefault();

    $('.header-lang a').removeClass('active');
    $(this).addClass('active');
});