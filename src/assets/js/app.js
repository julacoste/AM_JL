'use strict';

//variables declaration
var $band = $('.am_band');
var $overlay = $('.am_overlay');

// click on rayons = opening tabs + active overlay
$('.rayons').on('click', function(e) {
    e.preventDefault();

    $band.addClass('active');
    $overlay.addClass('active');


})

// click on close = closing tabs + unactive overlay
$('.am_band__close').on('click', function(e) {
    e.preventDefault();

    $band.removeClass('active');
    $overlay.removeClass('active');
})