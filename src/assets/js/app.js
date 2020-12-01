'use strict';

var $band = $('.am_band');
$('.rayons').on('click', function(e) {
    e.preventDefault();

    $band.addClass('active');

})

$('.am_band__close').on('click', function(e) {
    e.preventDefault();

    $band.removeClass('active');
})