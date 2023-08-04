$(function () {

  jQuery(window).scroll(function () {
    var $sections = $('section');
    $sections.each(function (i, el) {
      var top = $(el).offset().top - 800;
      var bottom = top + $(el).height();
      var scroll = $(window).scrollTop();
      var id = $(el).attr('id');
      if (scroll > top && scroll < bottom) {
        $('a.active').removeClass('active');
        $('a[href="#' + id + '"]').addClass('active');
      }
    })
  });


  $(".header__list li a").on("click", function () {
    $(".header__menu").removeClass("open");
    $(".header__menu-shadow").removeClass("open");
    $("body").removeClass("lock");
  });

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

  $('.menu__right-slider').slick({
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    focusOnSelect: true,
    pauseOnHover: true,
    swipe: true,
    swipeToSlide: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          autoplay: true,
          autoplaySpeed: 5000,
          draggable: true,
          focusOnSelect: true,
          pauseOnHover: true,
          swipe: true,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 5000,
          draggable: true,
          focusOnSelect: true,
          pauseOnHover: true,
          swipe: true,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 5000,
          draggable: true,
          focusOnSelect: true,
          pauseOnHover: true,
          swipe: true,
          swipeToSlide: true,
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
    autoplay: true,
    autoplaySpeed: 5000,
  
    responsive: [{
        breakpoint: 1900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          variableWidth: true,
        }
      },
      {
        breakpoint: 1200,
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

  $(".reviews__read").fancybox({
    afterClose: function () {
      $(".reviews__item-inner").css("display", "block");
    }
  });

  $('.info__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
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

//parallax
document.addEventListener("mousemove", parallax);

function parallax(event) {
  this.querySelectorAll(".modal__parallax").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth + event.pageX * position) / 90;
    const y = (window.innerHeight + event.pageY * position) / 90;
    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

//header
const navOffset = $(".header").offset().top + 200;
$(window).scroll(function () {

  const scrolled = $(this).scrollTop();

  if (scrolled > navOffset) {
    $('header').addClass("sticky animate__animated animate__fadeInDown");
    $('header').next().addClass("margin-top");
  } else if (scrolled < navOffset) {
    $('header').removeClass("sticky animate__animated animate__fadeInDown");
    $('header').next().removeClass("margin-top");
  }
});