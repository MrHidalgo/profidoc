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

        if($(e.target).closest('a').hasClass('active')) {
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
*   Ajax menu 
*/
function ajaxReplaceContent(hashValue) {

    var objTitle = {
        'about-program' : 'О программе',
        'buy-bonus'     : 'Копить бонусные гравны',
        'spend-bonus'   : 'Тратить бонусные гривны',
        'rules'         : 'Правила участия'
    };

    $.ajax(
        {
            url : hashValue + '.html',
            cache : false,
            success : function(html) {
                if(hashValue in objTitle){
                    document.title = objTitle[hashValue];
                }
                window.location.hash = hashValue;
                $('#content').html(html);
            }
        }
    );
}


/* click item menu */
$('.menu-list li a').click( function (e) {
    e.preventDefault();
    var hashVal = $(this).attr('href').substr(1);

    ajaxReplaceContent(hashVal);
});


/* reload page */
$(document).ready( function() {
    var winHash     = window.location.hash.substr(1),
        valueActive = $('.menu-list li a'),
        arr         = [];

    for(var i = 0; i < valueActive.length; i++){
        arr.push($(valueActive[i]).attr('href').substr(1));
    }

    if(winHash === 'about-program' || winHash === 'buy-bonus' || winHash === 'spend-bonus' || winHash === 'rules') {
        ajaxReplaceContent(winHash);

        for(var j = 0; j < arr.length; j++) {
            if(winHash === arr[j]) {
                $(valueActive).filter('[href="/' + winHash + '"]').addClass('active');
            }
        }
    };
});


/*
*   SLIDER
*/
$( function () {
    var owlCarousel = $('.owl-carousel');

    if(owlCarousel.length > 0){
        owlCarousel.owlCarousel(
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
    }
});
