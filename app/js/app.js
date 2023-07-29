$(function () {

  $(".header__menu-btn").on("click", function () {
    $(".header__menu").addClass("open");
    $(".header__menu-wrap").addClass("open");
    $("body").addClass("lock");
  });

  $(".header__menu-close").on("click", function () {
    $(".header__menu").removeClass("open");
    $(".header__menu-wrap").removeClass("open");
    $("body").removeClass("lock");
  });

  $(".header__menu-wrap").on("click", function () {
    $(".header__menu").removeClass("open");
    $(".header__menu-wrap").removeClass("open");
    $("body").removeClass("lock");
  });



});