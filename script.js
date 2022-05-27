// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     // autoplay: true,
//     autoplayTimeout: 5000,
//     autoplayHoverPause: true,
//     animateOut: "fadeOut",
//     responsive: {
//       0: {
//         items: 1
//       },
//       600: {
//         items: 1
//       },
//       1000: {
//         items: 1
//       }
//     }
//   });

// $(".scroll_btn_up").click(function () {
//   $("html").animate({ scrollTop: 0 });
// });

//   $(".menu__btn").click(function () {
//     $(".navbar .menu").toggleClass("active");
//     $(".menu__btn i").toggleClass("active");
//   });

//   // var num = 200;

//   // $(window).bind("scroll", function () {
//   //   if ($(window).scrollTop() > num) {
//   //     $(".navbar .max-width").addClass("fixed");
//   //   } else {
//   //     $(".navbar .max-width").removeClass("fixed");
//   //   }
//   // });
//   $(window).scroll(function () {
//     if (this.scrollY > 20) {
//       $(".navbar").addClass("sticky");
//     } else {
//       $(".navbar").removeClass("sticky");
//     }
//     //Scroll top btn
//     if (this.scrollY > 500) {
//       $(".scroll_btn_up").addClass("show");
//     } else {
//       $(".scroll_btn_up").removeClass("show");
//     }
//   });
// });

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

  // Typed script

  // var typed = new Typed(".typing", {
  //   strings: ["Frontend Dev", "Coder", "Youtuber", "Streamer"],
  //   typedSpeed: 10,
  //   backSpeed: 30,
  //   loop: true
  // });
  // var typed = new Typed(".typing2", {
  //   strings: ["Frontend Dev", "Coder", "Youtuber", "Streamer"],
  //   typedSpeed: 10,
  //   backSpeed: 30,
  //   loop: true
  // });
  $(".scroll_btn_up").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  //Click btn menu
  // $(".menu-btn").click(function () {
  //   $(".navbar .menu").removeClass("active");
  // });

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
