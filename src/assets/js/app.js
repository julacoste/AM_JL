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
$('.am_band__close, .am_overlay').on('click', function(e) {
    e.preventDefault();

    $band.removeClass('active');
    $overlay.removeClass('active');
})

// click on epicerie salee = hide nav lvl1 + show nav lvl 2
$('.am_band__nav--level1 .am_band__item .am_btn').on('click', function(e) {
    e.preventDefault();
    $('.am_band__nav--level2').addClass('active');
    $('.am_band__nav--level1').addClass('submenu-active');
});


//click on btn dropdown = toggle display
$('.am_btn--dropdown').on('click', function(e) {
    e.preventDefault();

    $('.am_dropdown__content').dropdown();
})