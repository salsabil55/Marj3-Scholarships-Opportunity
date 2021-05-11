    $(document).ready(function() {

        $(".scroll_down").click(function() {
            $('html, body').animate({
                scrollTop: $(".opportunit-sec").offset().top
            }, 1000);
        });
        $(".up").click(function() {
            $('html, body').animate({
                scrollTop: $(".top-page").offset().top
            }, 1000);
        });


        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        var myVar;

        function myFunction() {
            myVar = setTimeout(showPage, 1000);
        }

        function showPage() {
            document.getElementById("splash").style.display = "none";
            document.getElementById("myDiv").style.display = "block";
        }
        $('.form-control').focusout(function() {
            $('.form-group').removeClass('focus');
        });
        $('.form-control').focus(function() {
            $(this).closest('.form-group').addClass('focus');
        });

        /// Input Kepress Filled  Focus
        $('.form-control').keyup(function() {
            if ($(this).val().length > 0) {
                $(this).closest('.form-group').addClass('filled');
            } else {
                $(this).closest('.form-group').removeClass('filled');
            }
        });
        $('.main-btn').click(function() {
            $(this).closest('.social-btn').toggleClass('open');
        });


        // in active img
        $('img#compare-1').click(function() {
            $('img#compare-1').toggleClass('none');
            $('img#compare-2').toggleClass('block');
        });
        $('img#compare-2').click(function() {
            $('img#compare-1').toggleClass('none');
            $('img#compare-2').toggleClass('block');
        });
        $('img#compare-3').click(function() {
            $('img#compare-3').toggleClass('none');
            $('img#compare-4').toggleClass('block');
        });
        $('img#compare-4').click(function() {
            $('img#compare-3').toggleClass('none');
            $('img#compare-4').toggleClass('block');
        });
        $('img#compare-5').click(function() {
            $('img#compare-5').toggleClass('none');
            $('img#compare-6').toggleClass('block');
        });
        $('img#compare-6').click(function() {
            $('img#compare-5').toggleClass('none');
            $('img#compare-6').toggleClass('block');
        });
        $('img#compare-7').click(function() {
            $('img#compare-7').toggleClass('none');
            $('img#compare-8').toggleClass('block');
        });
        $('img#compare-8').click(function() {
            $('img#compare-7').toggleClass('none');
            $('img#compare-8').toggleClass('block');
        });
        $('img#compare-9').click(function() {
            $('img#compare-9').toggleClass('none');
            $('img#compare-10').toggleClass('block');
        });
        $('img#compare-10').click(function() {
            $('img#compare-9').toggleClass('none');
            $('img#compare-10').toggleClass('block');
        });
        $('img#compare-11').click(function() {
            $('img#compare-11').toggleClass('none');
            $('img#compare-12').toggleClass('block');
        });
        $('img#compare-12').click(function() {
            $('img#compare-11').toggleClass('none');
            $('img#compare-12').toggleClass('block');
        });
        $('img#compare-13').click(function() {
            $('img#compare-13').toggleClass('none');
            $('img#compare-14').toggleClass('block');
        });
        $('img#compare-14').click(function() {
            $('img#compare-13').toggleClass('none');
            $('img#compare-14').toggleClass('block');
        });
        $('img#compare-15').click(function() {
            $('img#compare-15').toggleClass('none');
            $('img#compare-16').toggleClass('block');
        });
        $('img#compare-16').click(function() {
            $('img#compare-15').toggleClass('none');
            $('img#compare-16').toggleClass('block');
        });
        $('img#compare-17').click(function() {
            $('img#compare-17').toggleClass('none');
            $('img#compare-18').toggleClass('block');
        });
        $('img#compare-18').click(function() {
            $('img#compare-17').toggleClass('none');
            $('img#compare-18').toggleClass('block');
        });
        $('img#compare-19').click(function() {
            $('img#compare-19').toggleClass('none');
            $('img#compare-20').toggleClass('block');
        });
        $('img#compare-20').click(function() {
            $('img#compare-19').toggleClass('none');
            $('img#compare-20').toggleClass('block');
        });
        $('img#compare-21').click(function() {
            $('img#compare-21').toggleClass('none');
            $('img#compare-22').toggleClass('block');
        });
        $('img#compare-22').click(function() {
            $('img#compare-21').toggleClass('none');
            $('img#compare-22').toggleClass('block');
        });
        $('img#compare-23').click(function() {
            $('img#compare-23').toggleClass('none');
            $('img#compare-24').toggleClass('block');
        });
        $('img#compare-24').click(function() {
            $('img#compare-23').toggleClass('none');
            $('img#compare-24').toggleClass('block');
        });
        $('img#compare-25').click(function() {
            $('img#compare-25').toggleClass('none');
            $('img#compare-26').toggleClass('block');
        });
        $('img#compare-26').click(function() {
            $('img#compare-25').toggleClass('none');
            $('img#compare-26').toggleClass('block');
        });



        /// Input Check Filled Focus
        var $formControl = $('.form-control');
        var values = {};
        var validate = $formControl.each(function() {
            if ($(this).val().length > 0) {
                $(this).closest('.form-group').addClass('filled');
            } else {
                $(this).closest('.form-group').removeClass('filled');
            }
        });

        // Button switching

        $('.caption').click(function() {
            $(this).closest('.log-form').addClass('open');
        });


        $('.close').click(function() {
            $(this).closest('.log-form').removeClass('open');
        });
        //Ripple Effect
        $(".btn").click(function(e) {

            // Remove olds ones
            $(".ripple").remove();

            // Setup
            var posX = $(this).offset().left,
                posY = $(this).offset().top,
                buttonWidth = $(this).width(),
                buttonHeight = $(this).height();

            // Add the element
            $(this).prepend("<span class='ripple'></span>");

            // Make it round!
            if (buttonWidth >= buttonHeight) {
                buttonHeight = buttonWidth;
            } else {
                buttonWidth = buttonHeight;
            }

            // Get the center of the element
            var x = e.pageX - posX - buttonWidth / 2;
            var y = e.pageY - posY - buttonHeight / 2;

            // Add the ripples CSS and start the animation
            $(".ripple").css({
                width: buttonWidth,
                height: buttonHeight,
                top: y + 'px',
                left: x + 'px'
            }).addClass("rippleEffect");
        });


        // modal
        $(".chosen")[0] && $(".chosen").chosen({
            width: "100%",
            allow_single_deselect: !0
        });

        // matching frame
        $modalg = $('#check-matching');
        $('.close').on('click', function() {
            $modalg.removeClass('state-appear');
        });
        $('.check-match').on('click', function() {
            $modalg.addClass('state-appear');
        });

        // luck frame
        $modalu = $('#best-luck');
        $('.close').on('click', function() {
            $modalu.removeClass('state-appear');
        });
        $('.best-luck').on('click', function() {
            $modalu.addClass('state-appear');
        });


        // lose-hope frame
        $modalpe = $('#lose-hope');
        $('.close').on('click', function() {
            $modalpe.removeClass('state-appear');
        });
        $('.lose-hope').on('click', function() {
            $modalpe.addClass('state-appear');
        });
        // ask frame
        $modalpsk = $('#ask-frame');
        $('.close').on('click', function() {
            $modalpsk.removeClass('state-appear');
        });
        $('.ask-frames').on('click', function() {
            $modalpsk.addClass('state-appear');
        });
        // answer frame
        $modalpsw = $('#answer-frame');
        $('.close').on('click', function() {
            $modalpsw.removeClass('state-appear');
        });
        $('.answer-frames').on('click', function() {
            $modalpsw.addClass('state-appear');
        });
        // report frame
        $modalport = $('#report-frame');
        $('.close').on('click', function() {
            $modalport.removeClass('state-appear');
        });
        $('.report-frames').on('click', function() {
            $modalport.addClass('state-appear');
        });

        // add-article frame
        $modalcle = $('#add-article-frame');
        $('.close').on('click', function() {
            $modalcle.removeClass('state-appear');
        });
        $('.add-article').on('click', function() {
            $modalcle.addClass('state-appear');
        });

        // sent-article frame
        $modalst = $('#sent-article-frame');
        $('.close').on('click', function() {
            $modalstremoveClass('state-appear');
        });
        $('.add-article').on('click', function() {
            $modalst.addClass('state-appear');
        });

        // change_pass frame
        $modalpass = $('#change-pass-frame');
        $('.close').on('click', function() {
            $modalpass.removeClass('state-appear');
        });
        $('.change_pass').on('click', function() {
            $modalport.addClass('state-appear');
        });

        // thnksframe
        $modalks = $('#thanks-frame');
        $('.close').on('click', function() {
            $modalks.removeClass('state-appear');
        });
        $('.thanks-frame').on('click', function() {
            $modalks.addClass('state-appear');
            $('#report-frame').fadeOut();
            $('.modal-backdrop.fade.in').css('display', 'none');
        });
        // suceess-pass frame
        $modalss = $('#pass-sucess-frame');
        $('.close').on('click', function() {
            $modalss.removeClass('state-appear');
        });
        $('.pass-sucess').on('click', function() {
            $modalss.addClass('state-appear');
            $('#change-pass-frame').fadeOut();
            $('.modal-backdrop.fade.in').css('display', 'none');
        });

        // edu frame
        $modale = $('#edu-modal');
        $('.close').on('click', function() {
            $modale.removeClass('state-appear');
        });
        $('.add-edu').on('click', function() {
            $modale.addClass('state-appear');
        });
        // fill edu frame
        $modalr = $('#fill-edu-modal');
        $('.close').on('click', function() {
            $modalr.removeClass('state-appear');
        });
        $('.edit-edu').on('click', function() {
            $modalr.addClass('state-appear');
        });
        // delete edu

        $modalde = $('#delete-edu-modal');
        $('.close').on('click', function() {
            $modalde.removeClass('state-appear');
        });

        $('.delete-edu').on('click', function() {
            $modalde.addClass('state-appear');
        });

        // work frame
        $modalw = $('#work-modal');
        $('.close').on('click', function() {
            $modalw.removeClass('state-appear');
        });
        $('.add-work').on('click', function() {
            $modalw.addClass('state-appear');
        });
        // fill work frame
        $modalf = $('#fill-work-modal');
        $('.close').on('click', function() {
            $modalf.removeClass('state-appear');
        });
        $('.edit-work').on('click', function() {
            $modalf.addClass('state-appear');
        });
        // delete work

        $modalc = $('#delete-work-modal');
        $('.close').on('click', function() {
            $modaldc.removeClass('state-appear');
        });

        $('.delete-work').on('click', function() {
            $modaldc.addClass('state-appear');
        });


        // language frame
        $modalg = $('#lang-modal');
        $('.close').on('click', function() {
            $modalg.removeClass('state-appear');
        });
        $('.add-lang').on('click', function() {
            $modalg.addClass('state-appear');
        });
        // fill language frame
        $modaln = $('#fill-lang-modal');
        $('.close').on('click', function() {
            $modaln.removeClass('state-appear');
        });
        $('.edit-lng').on('click', function() {
            $modaln.addClass('state-appear');
        });
        // delete lng

        $modall = $('#delete-lng-modal');
        $('.close').on('click', function() {
            $modaldl.removeClass('state-appear');
        });

        $('.delete-lng').on('click', function() {
            $modaldl.addClass('state-appear');
        });


        // test frame
        $modalt = $('#test-modal');
        $('.close').on('click', function() {
            $modalt.removeClass('state-appear');
        });
        $('.add-test').on('click', function() {
            $modalt.addClass('state-appear');
        });
        // fill test frame
        $modals = $('#fill-test-modal');
        $('.close').on('click', function() {
            $modals.removeClass('state-appear');
        });
        $('.edit-test').on('click', function() {
            $modals.addClass('state-appear');
        });
        // delete test

        $modalst = $('#delete-test-modal');
        $('.close').on('click', function() {
            $modaldst.removeClass('state-appear');
        });

        $('.delete-test').on('click', function() {
            $modaldst.addClass('state-appear');
        });


        // interest frame
        $modali = $('#interest-modal');
        $('.close').on('click', function() {
            $modali.removeClass('state-appear');
        });
        $('.add-interest').on('click', function() {
            $modali.addClass('state-appear');
        });
        // fill interest frame
        $modaler = $('#fill-interest-modal');
        $('.close').on('click', function() {
            $modaler.removeClass('state-appear');
        });
        $('.edit-interest').on('click', function() {
            $modaler.addClass('state-appear');
        });
        // delete interest

        $modalest = $('#delete-interest-modal');
        $('.close').on('click', function() {
            $modaldest.removeClass('state-appear');
        });

        $('.delete-interest').on('click', function() {
            $modaldest.addClass('state-appear');
        });

        // scholar frame
        $modalar = $('#scholar-modal');
        $('.close').on('click', function() {
            $modalar.removeClass('state-appear');
        });
        $('.add-scholar').on('click', function() {
            $modalar.addClass('state-appear');
        });
        // fill scholar frame
        $modalch = $('#fill-scholar-modal');
        $('.close').on('click', function() {
            $modalch.removeClass('state-appear');
        });
        $('.edit-scholar').on('click', function() {
            $modalch.addClass('state-appear');
        });
        // delete scholar

        $modalo = $('#delete-scholar-modal');
        $('.close').on('click', function() {
            $modaldo.removeClass('state-appear');
        });

        $('.delete-scholar').on('click', function() {
            $modaldo.addClass('state-appear');
        });
        //    mobile menu
        $('li.plus-btn a').on('click', function() {
            $('li.plus-btn a').addClass('mob-menu');
            $('.footer').fadeOut("slow");
            // $('.profile-page').fadeOut("slow");
            $('.page-content-body').fadeOut("slow");
            $('.profile-tabs').fadeOut("slow");
            $('.menu-sliders').fadeIn("slow");

        });

        // saved pass
        $('.saved-change-pass').on('click', function(e) {
            $('.sucess-saved-pass').toggleClass('block');
        });
        // landig tabs
        $('li.study-abroad a').on('click', function(e) {
            $('li.study-abroad').addClass('active');
            $('li.scholar').removeClass('active');
            $('.first-opport-tab').addClass('none');
            $('.first-opport-tab').removeClass('block');
            $('.sec-opport-tab').addClass('block');
            $('.sec-opport-tab').removeClass('none');
        });
        $('li.scholar a').on('click', function(e) {
            $('li.scholar').addClass('active');
            $('li.study-abroad').removeClass('active');
            $('.first-opport-tab').addClass('block');
            $('.first-opport-tab').removeClass('none');
            $('.sec-opport-tab').addClass('none');
            $('.sec-opport-tab').removeClass('block');

        });

        // menu
        $('li#notify-link a').on('click', function(e) {
            $('li#notify-link').toggleClass('show');
            $('ul#notify-menu').toggleClass('show');
            $('li#admin-link').removeClass('show');
            $('ul#admin-menu').removeClass('show');
            $('li#event-link').removeClass('show');
            $('ul#event-menu').removeClass('show');
            $('li#communit-link').removeClass('show');
            $('ul#communit-menu').removeClass('show');
            $('li#study-link').removeClass('show');
            $('ul#study-menu').removeClass('show');
            $('li#scholar-link').removeClass('show');
            $('ul#scholar-menu').removeClass('show');
        });
        $('li#notify-link-ar a').on('click', function(e) {
            $('li#notify-link-ar').toggleClass('show');
            $('ul#notify-menu-ar').toggleClass('show');
            $('li#admin-link-ar').removeClass('show');
            $('ul#admin-menu-ar').removeClass('show');
            $('li#event-link-ar').removeClass('show');
            $('ul#event-menu-ar').removeClass('show');
            $('li#communit-link-ar').removeClass('show');
            $('ul#communit-menu-ar').removeClass('show');
            $('li#study-link-ar').removeClass('show');
            $('ul#study-menu-ar').removeClass('show');
            $('li#scholar-link-ar').removeClass('show');
            $('ul#scholar-menu-ar').removeClass('show');
        });


        $('li#admin-link a').on('click', function(e) {
            $('li#admin-link').toggleClass('show');
            $('ul#admin-menu').toggleClass('show');
            $('li#notify-link').removeClass('show');
            $('ul#notify-menu').removeClass('show');
            $('li#event-link').removeClass('show');
            $('ul#event-menu').removeClass('show');
            $('li#communit-link').removeClass('show');
            $('ul#communit-menu').removeClass('show');
            $('li#study-link').removeClass('show');
            $('ul#study-menu').removeClass('show');
            $('li#scholar-link').removeClass('show');
            $('ul#scholar-menu').removeClass('show');
        });
        $('li#admin-link-ar a').on('click', function(e) {
            $('li#admin-link-ar').toggleClass('show');
            $('ul#admin-menu-ar').toggleClass('show');
            $('li#notify-link-ar').removeClass('show');
            $('ul#notify-menu-ar').removeClass('show');
            $('li#event-link-ar').removeClass('show');
            $('ul#event-menu-ar').removeClass('show');
            $('li#communit-link-ar').removeClass('show');
            $('ul#communit-menu-ar').removeClass('show');
            $('li#study-link-ar').removeClass('show');
            $('ul#study-menu-ar').removeClass('show');
            $('li#scholar-link-ar').removeClass('show');
            $('ul#scholar-menu-ar').removeClass('show');
        });

        $('li#event-link a').on('click', function(e) {
            $('li#event-link').toggleClass('show');
            $('ul#event-menu').toggleClass('show');
            $('li#notify-link').removeClass('show');
            $('ul#notify-menu').removeClass('show');
            $('li#admin-link').removeClass('show');
            $('ul#admin-menu').removeClass('show');
            $('li#communit-link').removeClass('show');
            $('ul#communit-menu').removeClass('show');
            $('li#study-link').removeClass('show');
            $('ul#study-menu').removeClass('show');
            $('li#scholar-link').removeClass('show');
            $('ul#scholar-menu').removeClass('show');
        });
        $('li#event-link-ar a').on('click', function(e) {
            $('li#event-link-ar').toggleClass('show');
            $('ul#event-menu-ar').toggleClass('show');
            $('li#notify-link-ar').removeClass('show');
            $('ul#notify-menu-ar').removeClass('show');
            $('li#admin-link-ar').removeClass('show');
            $('ul#admin-menu-ar').removeClass('show');
            $('li#communit-link-ar').removeClass('show');
            $('ul#communit-menu-ar').removeClass('show');
            $('li#study-link-ar').removeClass('show');
            $('ul#study-menu-ar').removeClass('show');
            $('li#scholar-link-ar').removeClass('show');
            $('ul#scholar-menu-ar').removeClass('show');
        });


        $('li#communit-link a').on('click', function(e) {
            $('li#communit-link').toggleClass('show');
            $('ul#communit-menu').toggleClass('show');
            $('li#study-link').removeClass('show');
            $('ul#study-menu').removeClass('show');
            $('li#scholar-link').removeClass('show');
            $('ul#scholar-menu').removeClass('show');
            $('li#event-link').removeClass('show');
            $('ul#event-menu').removeClass('show');
            $('li#notify-link').removeClass('show');
            $('ul#notify-menu').removeClass('show');
            $('li#admin-link').removeClass('show');
            $('ul#admin-menu').removeClass('show');
        });
        $('li#communit-link-ar a').on('click', function(e) {
            $('li#communit-link-ar').toggleClass('show');
            $('ul#communit-menu-ar').toggleClass('show');
            $('li#study-link-ar').removeClass('show');
            $('ul#study-menu-ar').removeClass('show');
            $('li#scholar-link-ar').removeClass('show');
            $('ul#scholar-menu-ar').removeClass('show');
            $('li#event-link-ar').removeClass('show');
            $('ul#event-menu-ar').removeClass('show');
            $('li#notify-link-ar').removeClass('show');
            $('ul#notify-menu-ar').removeClass('show');
            $('li#admin-link-ar').removeClass('show');
            $('ul#admin-menu-ar').removeClass('show');
        });


        $('li#study-link a').on('click', function(e) {
            $('li#study-link').toggleClass('show');
            $('ul#study-menu').toggleClass('show');
            $('li#scholar-link').removeClass('show');
            $('ul#scholar-menu').removeClass('show');
            $('li#event-link').removeClass('show');
            $('ul#event-menu').removeClass('show');
            $('li#notify-link').removeClass('show');
            $('ul#notify-menu').removeClass('show');
            $('li#admin-link').removeClass('show');
            $('ul#admin-menu').removeClass('show');
            $('li#communit-link').removeClass('show');
            $('ul#communit-menu').removeClass('show');
        });
        $('li#study-link-ar a').on('click', function(e) {
            $('li#study-link-ar').toggleClass('show');
            $('ul#study-menu-ar').toggleClass('show');
            $('li#scholar-link-ar').removeClass('show');
            $('ul#scholar-menu-ar').removeClass('show');
            $('li#event-link-ar').removeClass('show');
            $('ul#event-menu-ar').removeClass('show');
            $('li#notify-link-ar').removeClass('show');
            $('ul#notify-menu-ar').removeClass('show');
            $('li#admin-link-ar').removeClass('show');
            $('ul#admin-menu-ar').removeClass('show');
            $('li#communit-link-ar').removeClass('show');
            $('ul#communit-menu-ar').removeClass('show');
        });


        $('li#scholar-link a').on('click', function(e) {
            $('li#scholar-link').toggleClass('show');
            $('ul#scholar-menu').toggleClass('show');
            $('li#event-link').removeClass('show');
            $('ul#event-menu').removeClass('show');
            $('li#notify-link').removeClass('show');
            $('ul#notify-menu').removeClass('show');
            $('li#admin-link').removeClass('show');
            $('ul#admin-menu').removeClass('show');
            $('li#communit-link').removeClass('show');
            $('ul#communit-menu').removeClass('show');
            $('li#study-link').removeClass('show');
            $('ul#study-menu').removeClass('show');
        });
        $('li#scholar-link-ar a').on('click', function(e) {
            $('li#scholar-link-ar').toggleClass('show');
            $('ul#scholar-menu-ar').toggleClass('show');
            $('li#event-link-ar').removeClass('show');
            $('ul#event-menu-ar').removeClass('show');
            $('li#notify-link-ar').removeClass('show');
            $('ul#notify-menu-ar').removeClass('show');
            $('li#admin-link-ar').removeClass('show');
            $('ul#admin-menu-ar').removeClass('show');
            $('li#communit-link-ar').removeClass('show');
            $('ul#communit-menu-ar').removeClass('show');
            $('li#study-link-ar').removeClass('show');
            $('ul#study-menu-ar').removeClass('show');
        });


        // saved
        $('#saved-1').on('click', function(e) {
            $('#saved-1').toggleClass('red');
        });

        $('#saved-2').on('click', function(e) {
            $('#saved-2').toggleClass('red');
        });
        $('#saved-3').on('click', function(e) {
            $('#saved-3').toggleClass('red');
        });
        $('#saved-4').on('click', function(e) {
            $('#saved-4').toggleClass('red');
        });
        $('#saved-5').on('click', function(e) {
            $('#saved-5').toggleClass('red');
        });
        $('#saved-6').on('click', function(e) {
            $('#saved-6').toggleClass('red');
        });
        $('#saved-7').on('click', function(e) {
            $('#saved-7').toggleClass('red');
        });
        $('#saved-8').on('click', function(e) {
            $('#saved-8').toggleClass('red');
        });
        $('#saved-9').on('click', function(e) {
            $('#saved-9').toggleClass('red');
        });
        $('#saved-10').on('click', function(e) {
            $('#saved-10').toggleClass('red');
        });
        $('#saved-11').on('click', function(e) {
            $('#saved-11').toggleClass('red');
        });
        $('#saved-12').on('click', function(e) {
            $('#saved-12').toggleClass('red');
        });
        $('#saved-13').on('click', function(e) {
            $('#saved-13').toggleClass('red');
        });
        $('#saved-14').on('click', function(e) {
            $('#saved-14').toggleClass('red');
        });
        $('#saved-15').on('click', function(e) {
            $('#saved-15').toggleClass('red');
        });
        $('#saved-16').on('click', function(e) {
            $('#saved-16').toggleClass('red');
        });
        $('#saved-17').on('click', function(e) {
            $('#saved-17').toggleClass('red');
        });
        $('#saved-18').on('click', function(e) {
            $('#saved-18').toggleClass('red');
        });
        $('#saved-19').on('click', function(e) {
            $('#saved-19').toggleClass('red');
        });
        $('#saved-20').on('click', function(e) {
            $('#saved-20').toggleClass('red');
        });
        $('#saved-21').on('click', function(e) {
            $('#saved-21').toggleClass('red');
        });
        $('#saved-22').on('click', function(e) {
            $('#saved-22').toggleClass('red');
        });
        $('#saved-23').on('click', function(e) {
            $('#saved-23').toggleClass('red');
        });
        $('#saved-24').on('click', function(e) {
            $('#saved-24').toggleClass('red');
        });
        $('#saved-25').on('click', function(e) {
            $('#saved-25').toggleClass('red');
        });
        $('#saved-30').on('click', function(e) {
            $('#saved-30').toggleClass('red');
        });
        $('#saved-28').on('click', function(e) {
            $('#saved-28').toggleClass('red');
        });
        $('#saved-29').on('click', function(e) {
            $('#saved-29').toggleClass('red');
        });
        $('#saved-31').on('click', function(e) {
            $('#saved-31').toggleClass('red');
        });
        $('#saved-32').on('click', function(e) {
            $('#saved-32').toggleClass('red');
        });
        $('#saved-33').on('click', function(e) {
            $('#saved-33').toggleClass('red');
        });
        $('#saved-34').on('click', function(e) {
            $('#saved-34').toggleClass('red');
        });

        // multiple seletion

        (function($) {
            var proto = $.ui.autocomplete.prototype,
                initSource = proto._initSource;

            function filter(array, term) { var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i"); return $.grep(array, function(value) { return matcher.test($("<div>").html(value.label || value.value || value).text()); }); }
            $.extend(proto, { _initSource: function() { if (this.options.html && $.isArray(this.options.source)) { this.source = function(request, response) { response(filter(this.options.source, request.term)); }; } else { initSource.call(this); } }, _renderItem: function(ul, item) { return $("<li></li>").data("item.autocomplete", item).append($("<a></a>")[this.options.html ? "html" : "text"](item.label)).appendTo(ul); } });
        })(jQuery);

        var cache = {};

        function googleSuggest(request, response) {
            var term = request.term;
            if (term in cache) { response(cache[term]); return; }
            $.ajax({
                url: 'https://query.yahooapis.com/v1/public/yql',
                dataType: 'JSONP',
                data: { format: 'json', q: 'select * from xml where url="http://google.com/complete/search?output=toolbar&q=' + term + '"' },
                success: function(data) {
                    var suggestions = [];
                    try { var results = data.query.results.toplevel.CompleteSuggestion; } catch (e) { var results = []; }
                    $.each(results, function() {
                        try {
                            var s = this.suggestion.data.toLowerCase();
                            suggestions.push({ label: s.replace(term, '<b>' + term + '</b>'), value: s });
                        } catch (e) {}
                    });
                    cache[term] = suggestions;
                    response(suggestions);
                }
            });
        }

        $(function() {
            $('#hero-demo').tagEditor({
                placeholder: 'Enter tags ...',
                autocomplete: { source: googleSuggest, minLength: 3, delay: 250, html: true, position: { collision: 'flip' } }
            });

            function tag_classes(field, editor, tags) {
                $('li', editor).each(function() {
                    var li = $(this);
                    if (li.find('.tag-editor-tag').html() == 'red') li.addClass('red-tag');
                    else if (li.find('.tag-editor-tag').html() == 'green') li.addClass('green-tag')
                    else li.removeClass('red-tag green-tag');
                });
            }

        });


        //Set the carousel options

        $('.month').datepicker({
            format: "MM",
            startView: "months",
            minViewMode: "months",
            autoclose: true
        });
        $('.day').datepicker({
            format: "dd",
            startView: "days",
            maxViewMode: "days",
            autoclose: true
        });
        $('.year').datepicker({
            format: "yyyy",
            startView: "years",
            minViewMode: "years",
            autoclose: true
        });
        $(".month").on('focus', '.datepicker .datepicker-dropdown .dropdown-menu .datepicker-orient-left .datepicker-orient-bottom', function() {
            $(this).css("top", "125px");
        });



    });