(function($) {
    "use strict";

    $('a.about').on('click', function(e) {
        $('a.about').addClass('active');
        $('a.acheive').removeClass('active');
        $('#acheivements').removeClass('active');
        $('a.activity').removeClass('active');
        $('#activity').removeClass('active');
        $('#about').addClass('active');

    });
    $('a.acheive').on('click', function(e) {
        $('a.acheive').addClass('active');
        $('#acheivements').addClass('active');
        $('a.about').removeClass('active');
        $('#about').removeClass('active');
        $('#activity').removeClass('active');
        $('a.activity').removeClass('active');

    });
    $('a.activity').on('click', function(e) {
        $('a.activity').addClass('active');
        $('#activity').addClass('active');
        $('a.about').removeClass('active');
        $('#about').removeClass('active');
        $('#acheivements').removeClass('active');
        $('#about').removeClass('active');
        $('a.acheive').removeClass('active');

    });


    // article tabs

    $('a.question').on('click', function(e) {
        $('a.question').addClass('active');
        $('#questions').addClass('active');

        $('a.answer').removeClass('active');
        $('#answers').removeClass('active');

        $('a.video').removeClass('active');
        $('#videos').removeClass('active');

        $('#articles').removeClass('active');
        $('a.article').removeClass('active');

    });

    $('a.answer').on('click', function(e) {
        $('a.question').addClass('active');
        $('#answers').addClass('active');

        $('a.question').removeClass('active');
        $('#questions').removeClass('active');

        $('a.video').removeClass('active');
        $('#videos').removeClass('active');

        $('#articles').removeClass('active');
        $('a.article').removeClass('active');

    });

    $('a.article').on('click', function(e) {
        $('a.article').addClass('active');
        $('#articles').addClass('active');

        $('a.question').removeClass('active');
        $('#questions').removeClass('active');

        $('a.video').removeClass('active');
        $('#videos').removeClass('active');

        $('a.answer').removeClass('active');
        $('#answers').removeClass('active');

    });

    $('a.video').on('click', function(e) {
        $('a.video').addClass('active');
        $('#videos').addClass('active');

        $('a.question').removeClass('active');
        $('#questions').removeClass('active');

        $('#articles').removeClass('active');
        $('a.article').removeClass('active');

        $('a.answer').removeClass('active');
        $('#answers').removeClass('active');

    });

    // end article

    // menu
    $('.click-open').on('click', function(e) {
        $('body.menu-open').removeClass('menu-open');
        $('.menu-container').removeClass('full');
        $('li.plus-btn a').removeClass('mob-menu');
        $('button.click-open').removeClass('block');
        $('.footer').fadeIn("slow");
        $('.page-content-body').fadeIn("slow");
        $('.profile-page').fadeIn("slow");
        $('.profile-tabs').fadeIn("slow");
        $('.menu-sliders').fadeOut("slow");

    });

    // end menu

    // model
    $("#accordians a").click(function() {
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_active_links = closest_ul.find(".active")
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("active");
        var count = 0;

        closest_ul.find("ul").slideUp(function() {
            if (++count == closest_ul.find("ul").length)
                parallel_active_links.removeClass("active");
        });

        if (!link_status) {
            closest_li.children("ul").slideDown();
            closest_li.addClass("active");
        }
    });

    // privacy age

    $('label.check-label').on('click', function(e) {
        $('.date-birth').toggleClass('hidden');

    });

    $('.toggle').on('click', function(e) {
        $('.switch-block').toggleClass('hidden');
        $('.switch-block.private').css('display', 'inline-block');

    });

    $('label.currently-study').on('click', function(e) {
        $('.this-year').toggleClass('hidden');

    });
    // end privacy

    // dont have work

    $('label.experience').on('click', function(e) {
        $('#have-exp').toggleClass('none');
        $('#no-exp').toggleClass('block');

    });

    // close accordion

    $('a.work-acc').on('click', function(e) {
        $('.work-acc-block').toggleClass('none');

    });
    $('a.lang-acc').on('click', function(e) {
        $('.lang-acc-block').toggleClass('none');

    });
    $('a.cer-acc').on('click', function(e) {
        $('.cer-acc-block').toggleClass('none');

    });
    $('a.scholar-acc').on('click', function(e) {
        $('.scholar-acc-block').toggleClass('none');

    });
    $('a.iterest-acc').on('click', function(e) {
        $('.interest-acc-block').toggleClass('none');

    });
    $('a.edu-acc').on('click', function(e) {
        $('.edu-acc-block').toggleClass('none');

    });
    $('a.additional-acc').on('click', function(e) {
        $('.additional-acc-block').toggleClass('none');

    });
    $('a.info-acc').on('click', function(e) {
        $('.info-acc-block').toggleClass('none');

    });

    // click to save scholarship
    $('button.click-saved-scholar').on('click', function(e) {
        $('.click-saved-scholars').addClass('none');
        $('.click-saved-scholars').removeClass('block');
        $('.saved-scholars').addClass('block');
        $('.saved-scholars').removeClass('none');
    });
    $('button.saved-scholar').on('click', function(e) {
        $('.saved-scholars').addClass('none');
        $('.saved-scholars').removeClass('block');
        $('.click-saved-scholars').addClass('block');
        $('.click-saved-scholars').removeClass('none');
    });
    // end close accordion

    // other work

    $('#work-selection').change(function() {
        $('.other-work').hide();
        $('#' + $(this).val()).show();
    });

    $(".colors span").click(function() {
        color = $(this).attr("class");
        $(".demo .minitoggle").removeAttr("class").addClass('minitoggle' + ' ' + color);
    });

    $('.toggle').minitoggle();
    $('.toggle').on("toggle", function(e) {
        if (e.isActive)
            $(".result").html("you turn me on.")
        else
            $(".result").html("you turn me off.")
    });


    //Set the carousel options
    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
    });

    // upload image
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function() {
        readURL(this);
    });

    /*--------------------------
     auto-size Active Class
    ---------------------------- */
    $(".auto-size")[0] && autosize($(".auto-size"));
    /*--------------------------
     Collapse Accordion Active Class
    ---------------------------- */
    $(".collapse")[0] && ($(".collapse").on("show.bs.collapse", function(e) {
        $(this).closest(".panel").find(".panel-heading").addClass("active")
    }), $(".collapse").on("hide.bs.collapse", function(e) {
        $(this).closest(".panel").find(".panel-heading").removeClass("active")
    }), $(".collapse.in").each(function() {
        $(this).closest(".panel").find(".panel-heading").addClass("active")
    }));
    /*----------------------------
     jQuery tooltip
    ------------------------------ */
    $('[data-toggle="tooltip"]').tooltip();
    /*--------------------------
     popover
    ---------------------------- */
    $('[data-toggle="popover"]')[0] && $('[data-toggle="popover"]').popover();
    /*--------------------------
     File Download
    ---------------------------- */
    $('.btn.dw-al-ft').on('click', function(e) {
        e.preventDefault();
    });
    /*--------------------------
     Sidebar Left
    ---------------------------- */
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');

    });
    $('#sidebarCollapse').on('click', function() {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
    });
    $('.menu-switcher-pro').on('click', function() {
        var button = $(this).find('i.nk-indicator');
        button.toggleClass('notika-menu-befores').toggleClass('notika-menu-after');

    });
    $('.menu-switcher-pro.fullscreenbtn').on('click', function() {
        var button = $(this).find('i.nk-indicator');
        button.toggleClass('notika-back').toggleClass('notika-next-pro');
    });
    /*--------------------------
     Button BTN Left
    ---------------------------- */

    $(".nk-int-st")[0] && ($("body").on("focus", ".nk-int-st .form-control", function() {
        $(this).closest(".nk-int-st").addClass("nk-toggled")
    }), $("body").on("blur", ".form-control", function() {
        var p = $(this).closest(".form-group, .input-group"),
            i = p.find(".form-control").val();
        p.hasClass("fg-float") ? 0 == i.length && $(this).closest(".nk-int-st").removeClass("nk-toggled") : $(this).closest(".nk-int-st").removeClass("nk-toggled")
    })), $(".fg-float")[0] && $(".fg-float .form-control").each(function() {
        var i = $(this).val();
        0 == !i.length && $(this).closest(".nk-int-st").addClass("nk-toggled")
    });

    jQuery('nav#dropdown').meanmenu();

    /*----------------------------
     owl active
    ------------------------------ */
    $("#owl-demo").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });



    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    var ui = {
        tabs: document.querySelectorAll('.search-box__tabs li'),
        panels: document.querySelectorAll('.search-box__panel')
    };

    // faq



})(jQuery);