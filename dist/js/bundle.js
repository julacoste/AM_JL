"use strict";var $band=$(".am_band"),$overlay=$(".am_overlay");$(".rayons").on("click",(function(a){a.preventDefault(),$band.addClass("active"),$overlay.addClass("active")})),$(".am_band__close, .am_overlay").on("click",(function(a){a.preventDefault(),$band.removeClass("active"),$overlay.removeClass("active"),$(".am_band__nav--level2").removeClass("active"),$(".am_band__nav--level1").removeClass("submenu-active"),$(".am_dropdown").removeClass("active")})),$(".am_band__nav--level1 .am_band__item .btn-js").on("click",(function(a){a.preventDefault();var e=$(this);e.next(".am_band__nav--level2").addClass("active"),e.closest(".am_band__nav--level1").addClass("submenu-active")})),$(".am_band__nav-return").on("click",(function(a){a.preventDefault(),$(".am_band__nav--level2").removeClass("active"),$(".am_band__nav--level1").removeClass("submenu-active")})),$(".am_btn--dropdown").on("click",(function(a){a.preventDefault(),$(".am_dropdown").hasClass("active")?$(".am_dropdown").removeClass("active"):$(".am_dropdown").addClass("active")}));