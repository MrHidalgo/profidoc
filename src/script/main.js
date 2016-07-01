/*
 * SPLIT TEXT NEWS
 */
function less(nWords) {
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
$('.menu-list li a').click(function (e) {
	e.preventDefault();
	var hashVal = $(this).attr('href').substr(1);

	$.ajax(
		{
			url: /ajax-page/ + hashVal,
			success: function (data) {
				$('#content').html(data);
			}
		}
	);
});


/*
 *   CUSTOM SELECT
 */
function selectedElementValue(opt, element) {
	if (opt === true) {
		var $valueOption = $(element).children('option').eq(0).text();
	} else if (opt === false) {
		var $valueOption = $(element).children('option:selected').text();
	}

	$(element).prev('.select-value').find('span').html($valueOption);
}
// in load page find all select and change val in span
function searchAllSelectStart(opt) {
	opt = (typeof opt === 'undefined') ? true : opt;
	$('select').each(
		function () {
			selectedElementValue(opt, this);
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
	// $(elem).closest('.radio-block').find('.radio-custom').removeClass('check');

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


$(window).on('click', function (e) {
	if ($(e.target).closest('.modal-internal-main, .btn-address, .btn-modal, .modal-wrap, .btn-print, #form-print, .sign-in, section#form-sign').length)
		return;

	$('#form-print').hide();
	$('body').removeClass('form-open');
	$('section#form-sign').hide();
	$('.modal-window').hide();
});


function mark(nav) {
	$('ul.list-menu li').removeClass('active');
	$(nav).closest('li').addClass('active');
}



/*
 * DOCUMENT READY
 */
$(document).ready(
	function () {




		// new modal windows
		$(document).on('click', '[data-modal]', function (e) {
			e.preventDefault();
			var options = {
				modalClass: "modal-window",
				showClose: false
			};
			if ($(this).data('submodal')) {
				options = $.extend({}, options, {closeExisting: false});
			}
			$($(this).data('modal')).modal(options);
		});

		/* custom select*/
		searchAllSelectStart();
		/* custom checkbox */
		searchAllCheckbox();
		/* custom radio */
		searchAllRadio();


		$('a.btn').each(function () {
			var linkAttr = $(this).attr('data-list');

			if ($('div#' + linkAttr + ' > *').length < 1) {
				$(this).addClass('disabled');
			}
		});


		$('a.btn').on('click', function (e) {
			e.preventDefault();

			
			var linkAttr  = $(this).attr('data-list');


			if ($('.list-row-content ').hasClass('list-view')) {
				if ($(this).hasClass('active')) {
					$(this).removeClass('active').siblings('div.list-content').find('a.btn').removeClass('active');
				} else {
					$(this).siblings('a.btn').next('div.list-content').find('a.btn').removeClass('active');
					$(this).siblings('a.btn').removeClass('active');
					$(this).addClass('active');
				}
			} else {

				console.log(linkAttr);

				if ($(window).width() >= 1200) {
					var linkDesktop = $(this).attr('data-desktop');



					if ($('.main-block-desktop-' + linkDesktop + ' > div').eq(linkDesktop).length > 0) {

						console.log($('.main-block-desktop-' + linkDesktop + ' > div').filter('#' + linkAttr));
						console.log($('a.btn[data-list=' + linkAttr + ']'));


						$('a.btn[data-list=' + linkAttr + ']').appendTo($('.main-block-desktop-' + linkDesktop + ' > div').filter('#' + linkAttr));
					}


					$('.main-block-desktop-' + linkDesktop).eq(linkDesktop).append($('div').filter('#' + linkAttr));
				}
			}
		});



		$('a.btn-block-change').on('click', function() {
			$('a.btn').removeClass('active');
			$('.list-row-content').removeClass('list-view').addClass('list-block');
		});

		$('a.btn-list-change').on('click', function() {
			$('a.btn').removeClass('active');
			$('.list-row-content').removeClass('list-block').addClass('list-view');
		});


		/* radio */
		$(document).on('click', 'div.radio-item', function (e) {
			var inputAttr = $(this).find('input[type=radio]').attr('name');

			$('input[name="' + inputAttr + '"]').closest('.radio-item').removeClass('active');
			$(this).addClass('active');
		});


		/* SCROLLSPY */
		{
			var lastID;
			var elemID;

			$('#list-menu li a').click(function () {
				var id = $(this).attr('href'),
					blockTop = $('#right-panel-row').offset().top,
					y = $(id).offset().top - blockTop - 20;

				$('.right-panel').animate(
					{
						scrollTop: y
					},
					'slow'
				);

				$('ul.list-menu li').removeClass('active');
				$(this).closest('li').addClass('active');

				return false;
			});

			$('#right-panel').scroll(function () {
				var blockTop = $('#right-panel-row').offset().top,
					yDoc = $(this).scrollTop() + 50;

				$('.scroll').each(function () {
					var yElem = $(this).offset().top - blockTop;

					if (yDoc >= yElem) {
						elemID = $(this).attr('id');

						if (elemID != lastID) {
							lastID = elemID;

							mark($('#list-menu li a[href="#' + elemID + '"]'));
						}
					}
				});
			});
		}


		if ($('#admin-panel').length > 0 || $('#address .section').length > 0) {
			//$('#admin-panel').steps(
			//    {
			//        headerTag: "h4",
			//        bodyTag: "section",
			//        transitionEffect: "slideLeft",
			//        stepsOrientation: "vertical",
			//        titleTemplate: "#title#",
			//        showFinishButtonAlways: true,
			//        startIndex: 3
			//    }
			//);
			//
			//$("#address .section").steps(
			//    {
			//        headerTag: "h5",
			//        bodyTag: "section",
			//        transitionEffect: "slideLeft",
			//        enableFinishButton: false,
			//        enablePagination: false,
			//        enableAllSteps: true,
			//        titleTemplate: "#title#",
			//        cssClass: "tabcontrol",
			//        startIndex: 0
			//    }
			//);
		}

		$('.btn-modal').on(
			'click',
			function (e) {
				e.preventDefault();

				var attrLink = $(this).attr('data-modal');
				if (attrLink == 'modal-open') {
					if (!$('body').hasClass('form-open')) {
						$('body').addClass('form-open');
						$('#modal').show();
					} else {
						$('body').addClass('internal-modal');
						$('#modal1').show();
					}
				}
			}
		);
		$('.btn-esc').on(
			'click',
			function (e) {
				e.preventDefault();

				if ($('body').hasClass('internal-modal')) {
					$('body').removeClass('internal-modal');
					$('#modal1').hide();
				} else {
					$('body').removeClass('form-open');
					$('#modal').hide();
				}
			}
		);

		//$('.btn-modal, .btn-internal-modal').on('click', function(e) {
		//    e.preventDefault();
		//    var linkAttr = $(this).attr('data-modal');
		//
		//    $('body').addClass('form-open');
		//
		//    if(linkAttr === 'address') {
		//        $('.modal-row-address').show();
		//    } else if (linkAttr === 'address1'){
		//        $('.modal-row-address1').show();
		//    }
		//});
		//
		//$('a.btn-esc, a.btn-internal-esc').on('click', function(e) {
		//    e.preventDefault();
		//
		//    var linkAttr = $(this).attr('data-esc');
		//
		//    console.log(linkAttr);
		//
		//    if(linkAttr === 'main') {
		//        $('body').removeClass('form-open');
		//        $('.modal-' + linkAttr).hide();
		//    }
		//    else if(linkAttr === 'internal') {
		//        $('body').removeClass('internal-modal');
		//        $('.modal-' + linkAttr + '-main').hide();
		//    }
		//});


		/*...*/
		{
			$('.btn-print').click(function (e) {
				e.preventDefault();
				if ($(this).attr('data-link') === 'print') {
					$('body').scrollTop(0).toggleClass('form-open');
					$('#form-print').fadeToggle();
				}
			});

			$('.form-close-print').click(function () {
				$('#form-print').fadeToggle();
				$('body').toggleClass('form-open');
			});
		}

		/* form sign in main */
		{
			$('.sign-in, .form-close').on('click', function () {
				$('section#form-sign').fadeToggle();
				$('body').toggleClass('form-open');
			});
		}


		/* ... */
		$('.btn-choose-contract').on('click', function (e) {
			e.preventDefault();

			var linkAttr = $(this).attr('href');

			$('ul').hide();

			$('ul').filter(linkAttr).slideToggle();
		});


		/*  */
		// $('a.btn-mode').on('click', function (e) {
		// 	$('a.btn').removeClass('active');
		// 	if ($('.list-row-content').hasClass('list-view')) {
		// 		// console.log(true);
		// 		$('.list-row-content').removeClass('list-view').addClass('list-block');
		// 	}
		// 	else if ($('.list-row-content').hasClass('list-block')) {
		// 		// console.log(false);
		// 		$('.list-row-content').removeClass('list-block').addClass('list-view');
		// 	}
		// });








		/* pagination */
		{
			$('.list-pagination li a, .btn-news-first, .btn-news-last').on('click', function (e) {
				e.preventDefault();

				$('.list-pagination li').removeClass('active');

				if ($(this).attr('class') === 'btn-news-first') {
					$('.list-pagination li:first-child').addClass('active');
				} else if ($(this).attr('class') === 'btn-news-last') {
					$('.list-pagination li:last-child').addClass('active');
				} else {
					$(this).closest('li').addClass('active');
				}
			});
		}

		/* designer doc/contr - benefits */
		{
			$('.benefits-row a').on('click', function (e) {
				e.preventDefault();
				var linkAttr = $(this).attr('data-benefits');

				$('.benefits-row a').removeClass('active');
				$(this).addClass('active');

				$('.benefits-row>div').removeClass('active');
				$('.benefits-row>div').filter('.' + linkAttr + '').addClass('active');
			});
		}


		/* hover main menu */
		$('.nav-list li a').off('mouseenter').on('mouseenter',
			function () {
				var linkAttr = $(this).attr('data-block');

				$('.nav-list li').removeClass('active');
				$(this).closest('li').addClass('active');
				$('.hide-nav-container').fadeIn('');
				$('.hide-row > div').hide();
				$('.hide-row > #' + linkAttr + '').show();

			}
		);
		$('.navigation-container, section, .header-container').off('mouseenter').on('mouseenter',
			function () {
				$('.hide-nav-container').fadeOut('');
				$('.nav-list li').removeClass('active');
			}
		);


		/* onchange select value */
		{
			$(document).on('change', 'select', function () {
				selectedElementValue(false, this);
			});
			// $('select').on('change', function() {
			//     selectedElementValue(false, this);
			// });

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
					$('.choose-container').find('.radio-block .radio-custom').removeClass('check');
					$(this).closest('.radio-block').find('.radio-custom').removeClass('check');
					$(this).closest('.sub-yes').find('.main-field .radio-custom').removeClass('check');
					$(this).closest('.sub-yes').find('.radio-custom.main').addClass('check');
					$(this).closest('.sub-yes').siblings('.sub-no').find('.radio-custom').removeClass('check');
					$(this).closest('.sub-no').siblings('.sub-yes ').find('.radio-custom').removeClass('check');
					customRadio(this);

					$('.choose-row').removeClass('active');
					$(this).closest('.choose-row').addClass('active');
				}
			);
		}

		/* lang btn */
		{
			$('.header-lang a').click(function (e) {
				e.preventDefault();

				$('.header-lang a').removeClass('active');
				$(this).addClass('active');
			});
		}

		/* owl carousel */
		{
			var carousel = $('.owl-carousel');

			if (carousel.length > 0) {
				carousel.owlCarousel(
					{
						loop: true,
						margin: 10,
						// nav:true,
						responsiveClass: true,
						responsive: {
							0: {
								items: 2
							},
							768: {
								items: 3
							},
							1000: {
								items: 5
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
			$('.accordion-section-title').click(function (e) {
				var currentAttrValue = $(this).attr('href');

				if ($(e.target).closest('a').hasClass('active')) {
					close_accordion_section();
				} else {
					close_accordion_section();

					$(this).addClass('active');
					$('.accordion ' + currentAttrValue).slideDown(250).addClass('open');
				}

				e.preventDefault();
			});


			$('.btn-accordion').click(function (e) {
				var currentAttrValue = $(this).attr('href');
				console.log(currentAttrValue);

				if ($(e.target).hasClass('active')) {
					console.log($(e.target).hasClass('active'));
					console.log('active');
					//$('.accordion-list .btn-accordion').removeClass('active');
					//$('.accordion-list .accordion-content').slideUp(250).removeClass('open');
					//$(this).closest('.accordion-list').siblings('.accordion-list').find('.btn-accordion').removeClass('active');
					//$(this).closest('.accordion-list').siblings('.accordion-list').find('.accordion-content').slideUp(250).removeClass('open');
				} else {
					console.log($(e.target).hasClass('active'));
					console.log('else');
					$(this).closest('.accordion-list').siblings('.accordion-list').find('.btn-accordion').removeClass('active');
					$(this).closest('.accordion-list').siblings('.accordion-list').find('.accordion-content').slideUp(250).removeClass('open');

					$(this).addClass('active');
					$(currentAttrValue).slideDown(250).addClass('open');
				}

				e.preventDefault();
			});
		}

		/* active menu content page */
		{
			$('.menu-list li a').click(function (e) {
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