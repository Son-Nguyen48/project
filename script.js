$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
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

var num = 200;

$(window).bind("scroll", function () {
  if ($(window).scrollTop() > num) {
    $(".header .max-width").addClass("fixed");
  } else {
    $(".header .max-width").removeClass("fixed");
  }
});
