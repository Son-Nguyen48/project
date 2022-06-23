$(document).ready(function () {
  //Scroll top script
  $(".scroll_btn_up").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  $(window).scroll(function () {
    //Scroll top btn
    if (this.scrollY > 500) {
      $(".scroll_btn_up").addClass("show");
    } else {
      $(".scroll_btn_up").removeClass("show");
    }
  });

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  $(".scroll_btn_up").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  //   Toggle menu/navbar script
  $(".menu__btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu__btn i").toggleClass("active");
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    // autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});
