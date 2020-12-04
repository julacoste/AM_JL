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
    $('.am_band__nav--level2').removeClass('active');
    $('.am_band__nav--level1').removeClass('submenu-active');
    $('.am_dropdown').removeClass('active');
})

// click on epicerie salee = hide nav lvl1 + show nav lvl 2
$('.am_band__nav--level1 .am_band__item .btn-js').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    console.log($this.children('.am_band__nav--level2'));
    $this.next('.am_band__nav--level2').addClass('active');
    $this.closest('.am_band__nav--level1').addClass('submenu-active');
});

//return on lvl 1 menu
$('.am_band__nav-return').on('click', function(e) {
    e.preventDefault();

    $('.am_band__nav--level2').removeClass('active');
    $('.am_band__nav--level1').removeClass('submenu-active');
});

//click on btn dropdown = toggle display
$('.am_btn--dropdown').on('click', function(e) {
    e.preventDefault();
    if (!$('.am_dropdown').hasClass('active')) {
        $('.am_dropdown').addClass('active');
    } else {
        $('.am_dropdown').removeClass('active');
    }
})