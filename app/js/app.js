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

  $(".reviews__read").on("click", function () {
    $(this).parent().addClass("open");
  });

  $(".header__menu-shadow").on("click", function () {
    $(".header__menu").removeClass("open");
    $(".header__menu-shadow").removeClass("open");
    $("body").removeClass("lock");
  });

  $('.menu__right-slider').slick({
    infinite: false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.reviews__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  
    responsive: [{
        breakpoint: 1900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          variableWidth: true,
        }
      }, 
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
          focusOnSelect: false,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.info__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $(".accordeon dd").hide().prev().click(function () {
    $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
    $("dl").removeClass("open");
    $(this).parent().toggleClass("open");
  });



  if ($('.slick-slider').length > 0) {
    $(".slick-slider").slick("refresh");
    $(".slick-slider").slick("setPosition");
  }
});