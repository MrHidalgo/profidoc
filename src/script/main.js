/*
*   LANG BTN
*/
$('.header-lang a').click( function(e) {
    e.preventDefault();

    $('.header-lang a').removeClass('active');
    $(this).addClass('active');
});

/*
*   SLIDER
*/
$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            // loop:true,
            margin:10,
            // nav:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2
                },
                768:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        }
    );
});


/*
* SPLIT TEXT NEWS
*/
function less(nWords){
        var txtNews = $('p.description').text().substring(0, nWords).trim();
    return txtNews + '...';
}
$('p.description').html(less(65));


/*
*   ACTIVE MENU CONTENT INFO
*/
$('.menu-list li a').click( function (e) {
    e.preventDefault();

    $('.menu-list li a').removeClass('active');
    $(this).addClass('active');
});