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
$('.menu-list li a').click( function (e) {
    e.preventDefault();
    var hashVal = $(this).attr('href').substr(1);

    $.ajax(
        {
            url: hashVal + '.html',
            success: function(data) {
                $('#content').html(data);
            }
        }
    );
});


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
 *   CUSTOM RADIO
 */
function customRadio(elem) {
    $('input[type="radio"]').closest('.radio-custom').removeClass('check');

    if ($(elem).is(':checked')) {
        $(elem).closest('.radio-custom').addClass('check');
    } else {
        $(elem).closest('.radio-custom').removeClass('check');
    }
}
function searchAllRadio() {
    $('input[type="radio"]').each(
        function () {
            customRadio(this);
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
        /* custom radio */
        searchAllRadio();

        /*...*/
        {
            $('.list-link li a').click(function (e) {
                e.preventDefault();
                var linkAttr = $(this).attr('data-link');

                console.log(linkAttr);
                
                if (linkAttr === 'print') {
                    $('body').scrollTop(0);
                    $('#form-print').slideToggle();
                    $('body').toggleClass('form-open');
                } else {
                    $.ajax(
                        {
                            url: 'personal-area-' + linkAttr + '.html',
                            success: function(data) {
                                $('#personal-content-right').html(data);
                            }
                        }
                    );   
                }
            });

            $('.form-close').click(function () {
                $('#form-print').slideToggle();
            });
        }

        /* form sign in main */
        {
            $('.sign-in, .form-close').on('click', function() {
                $('section#form').slideToggle();
                $('body').toggleClass('form-open');
            });
        }


        /* ... */
        $('.btn-choose-contract').on('click', function(e) {
            e.preventDefault();

            var linkAttr = $(this).attr('href');

            $('ul').hide();

            $('ul').filter(linkAttr).slideToggle();
        });

        $('.btn-list-change').on('click', function(e) {
            e.preventDefault();

            $('.list-item').hide();

            $('.list-row-content-block').removeClass('list-row-content-block').addClass('list-row-content');
        });

        $('.btn-block-change').on('click', function(e) {
            e.preventDefault();

            $('.list-item').hide();

            $('.list-row-content').removeClass('list-row-content').addClass('list-row-content-block');
        });


        /* pagination */
        {
            $('.list-pagination li a, .btn-news-first, .btn-news-last').on('click', function(e) {
                e.preventDefault();

                $('.list-pagination li').removeClass('active');

                if ($(this).attr('class') === 'btn-news-first') {
                    $('.list-pagination li:first-child').addClass('active');
                } else if ($(this).attr('class') === 'btn-news-last'){
                    $('.list-pagination li:last-child').addClass('active');
                } else {
                    $(this).closest('li').addClass('active');
                }
            });
        }

        /* designer doc/contr - benefits */
        {
            $('.benefits-row a').on('click', function(e) {
                e.preventDefault();
                var linkAttr = $(this).attr('data-benefits');

                $('.benefits-row a').removeClass('active');
                $(this).addClass('active');

                $('.benefits-row>div').removeClass('active');
                $('.benefits-row>div').filter('.' + linkAttr + '').addClass('active');
            });
        }


        // /* hover main menu */
        // $('.nav-list li a').off('mouseenter').on('mouseenter',
        //     function() {
        //         var linkAttr = $(this).attr('data-block');
        //
        //         $('.nav-list li').removeClass('active');
        //         $(this).closest('li').addClass('active');
        //         $('.hide-nav-container').fadeIn('');
        //         $('.hide-row > div').hide();
        //         $('.hide-row > #'+ linkAttr + '').show();
        //
        //     }
        // );
        // $('.navigation-container, section.document, .header-container').off('mouseenter').on('mouseenter',
        //     function() {
        //         $('.hide-nav-container').fadeOut('');
        //         $('.nav-list li').removeClass('active');
        //     }
        // );


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

        /* click radio */
        {
            $('input[type="radio"]').on('click',
                function () {
                    customRadio(this);
                    $('.choose-row').removeClass('active');
                    $(this).closest('.choose-row').addClass('active');
                }
            );
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