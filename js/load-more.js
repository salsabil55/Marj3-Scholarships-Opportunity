/*global $, document, alert, console*/
$(function () {
	"use strict";
    $('.leader-data').slice(0, 4).show();
    $('#loadmore').on('click', function (e) {
        e.preventDefault();
        $('.leader-data:hidden').slice(0, 7).slideDown();
        if ($('.leader-data:hidden').length === 0) {
            $('#loadmore').replaceWith("<p class='p'>No More</p>");
        }
    });
    $('#top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#top a').fadeIn();
        } else {
            $('#top a').fadeOut();
        }
    });
});