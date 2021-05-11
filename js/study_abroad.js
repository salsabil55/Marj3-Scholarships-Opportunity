/* Compare
====================*/
$(document).ready(function () {
    "use strict";
    $(".compare-footer ul li .icon-btn").click(function () {
        $(this).parent('li').remove();
    });
    $(".remove-all").click(function () {
        $(".compare-footer ul li").remove();
    });
        $(".remv-img").click(function () {
        $(".upload-img").remove();
    });
    $(".compare-toggle").click(function () {
        $(".compare-footer").toggleClass("move");
    });
});

/* viddeo Mute
===================================*/
$(document).ready(function () {
    "use strict";
    $('.compare-btn img').click(function () {
        var img_src = $(this).attr('src');
        if (img_src == 'img/compare.png') {
            $(this).attr('src', 'img/compared.png');
        } else {
            $(this).attr('src', 'img/compare.png');
        }
    });
});

/* Side Links
=========================*/
$(document).ready(function () {
    "use strict";
    $(".social-btn .main-btn").click(function () {
        $(".social-btn-list").toggleClass("open");
    });
});

/* Gallery
=============================*/
$(document).ready(function () {
    "use strict";
    $('.popup-gall').on('click', function(event) {
        event.preventDefault();
        var gallery = $(this).attr('href');
        $("#gallery a").magnificPopup({
            type: 'image',
            removalDelay: 300,
			gallery: {
                enabled: true,
                preload: [0, 2],
                navigateByImgClick: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                tPrev: 'Previous (Left arrow key)',
                tNext: 'Next (Right arrow key)',
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
			}
		}).magnificPopup('open');
	});
});

/*Smooth Scroll
================================*/
$(document).ready(function () {
    "use strict";
    function goToByScroll(id) {
        $('html , body').animate({
            scrollTop: $(id).offset().top
        }, 'slow');
    }
    $('.programs_wrap_nav li a').click(function () {
        goToByScroll($(this).attr('href'));
        return false;
    });
});

/* Date Picker
=============================*/
$(document).ready(function () {
    "use strict";
    $('.form_date').datetimepicker({
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0,
        format: "dd MM yyyy - hh:ii",
        pickerPosition: "bottom-left"
    });
    $('.form_time').datetimepicker({
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 1,
		minView: 0,
		maxView: 1,
		forceParse: 0,
        pickerPosition: "bottom-left"
    });
});

/* Tag Select
============================*/
$(document).ready(function () {
    "use strict";
    $('#tags').select2({
        tags: true,
        tokenSeparators: [',']
    });
 });

/*Price Rang
============================*/
$(document).ready(function () {
    $(".ranger").slider({
        orientation: "horizontal",
        range: !0,
        values: [1200, 20000],
        min: 1,
        max: 40000,
        slide: function (t, e) {
            $(this).prev().find(".first_limit").val( e.values[0] + "$" ), $(this).prev().find(".last_limit").val( e.values[1] + "$")
        }
    })
});

/* Phone flag
============================*/
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  hiddenInput: "full_phone",
  utilsScript: "js/phone-flag/utils.js?1549804213570" // just for formatting/placeholders etc
});
