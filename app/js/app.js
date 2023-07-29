$(function () {

  $(".header__menu-btn").on("click", function () {
    $(".header__menu").addClass("open");
    $(".header__menu-shadow").addClass("open");
    $("body").addClass("lock");
  });

  $(".header__menu-close").on("click", function () {
    $(".header__menu").removeClass("open");
    $(".header__menu-shadow").removeClass("open");
    $("body").removeClass("lock");
  });

  $(".header__menu-shadow").on("click", function () {
    $(".header__menu").removeClass("open");
    $(".header__menu-shadow").removeClass("open");
    $("body").removeClass("lock");
  });



});