/*
 * SPLIT TEXT NEWS
 */
function less(nWords){
    var txtNews = $('p.description').text().substring(0, nWords).trim();
    return txtNews + '...';
}

/*
 *   ACCORDION
 */
function close_accordion_section() {
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content').slideUp(250).removeClass('open');
}


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


/*
*   CUSTOM SELECT 
*/
function selectedElementValue(opt, element) {
    if(opt === true) {
        var $valueOption    = $(element).children('option').eq(0).text();
    } else if (opt === false) {
        var $valueOption    = $(element).children('option:selected').text();
    }

    $(element).prev('.select-value').find('span').html($valueOption);
}
// in load page find all select and change val in span
function searchAllSelectStart() {
    $('select').each(
        function() {
            selectedElementValue(true, this);
        }
    );
}



/*
*   CUSTOM CHECKBOX
*/
function customCheckbox(elem) {
    if ($(elem).is(':checked')) {
        $(elem).closest('.checkbox-custom').addClass('check');
    } else {
        $(elem).closest('.checkbox-custom').removeClass('check');
    }
}
function searchAllCheckbox() {
    $('input[type="checkbox"]').each(
        function () {
            customCheckbox(this);
        }
    );
}




/*
* DOCUMENT READY
*/
$(document).ready(
    function() {
        /* custom select*/
        searchAllSelectStart();
        /* custom checkbox */
        searchAllCheckbox();


        /* onchange select value */
        {
            $('select').on('change', function() {
                selectedElementValue(false, this);
            });

        }
        /* click checkbox */
        {
            $('input[type="checkbox"]').on('click',
                function () {
                    customCheckbox(this);
                }
            );
        }
        /* reload page */
        {
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

        }
        /* lang btn */
        {
            $('.header-lang a').click( function(e) {
                e.preventDefault();

                $('.header-lang a').removeClass('active');
                $(this).addClass('active');
            });
        }
        /* owl carousel */
        {
            var carousel = $('.owl-carousel');

            if(carousel.length > 0){
                carousel.owlCarousel(
                    {
                        loop:true,
                        margin:10,
                        nav:true,
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
        }
        /* go to home page logotype */
        {
            $('.img-nav').on('click', function (e) {
                window.location = '/';
                e.preventDefault();
            });
        }
        /* click item menu */
        {
            $('.menu-list li a').click( function (e) {
                e.preventDefault();
                var hashVal = $(this).attr('href').substr(1);

                ajaxReplaceContent(hashVal);
            });
        }
        /* accordion */
        {
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
        }
        /* active menu content page */
        {
            $('.menu-list li a').click( function (e) {
                e.preventDefault();

                $('.menu-list li a').removeClass('active');
                $(this).addClass('active');
            });
        }
        /* split text & add ... */
        {
            $('p.description').html(less(65));
        }
    }
);