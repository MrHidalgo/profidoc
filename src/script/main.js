/*
*   LANG BTN
*/
(function () {
    $('.header-lang a').click( function(e) {
        e.preventDefault();

        $('.header-lang a').removeClass('active');
        $(this).addClass('active');
    });
})(jQuery);


/*
 * SPLIT TEXT NEWS
 */
$( function () {
    function less(nWords){
        var txtNews = $('p.description').text().substring(0, nWords).trim();
        return txtNews + '...';
    }
    $('p.description').html(less(65));
});


/*
 *   ACTIVE MENU CONTENT INFO
 */
$( function () {
    $('.menu-list li a').click( function (e) {
        e.preventDefault();

        $('.menu-list li a').removeClass('active');
        $(this).addClass('active');
    });
});


/*
 *   ACCORDION
 */
$( function () {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(250).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            $(this).addClass('active');
            $('.accordion ' + currentAttrValue).slideDown(250).addClass('open');
        }

        e.preventDefault();
    });
});


/*
*   SLIDER
*/
$( function () {
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
