$(function () {

  $(".header__menu-btn").on("click", function () {
    $(".header__menu").addClass("open");
    $("body").addClass("lock");
  });

  $(".header__menu-close").on("click", function () {
    $(".header__menu").removeClass("open");
    $("body").removeClass("lock");
  });



});