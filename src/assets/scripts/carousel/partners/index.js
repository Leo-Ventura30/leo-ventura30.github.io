$(document).ready(function () {
  $(".owl-carousel-partners").owlCarousel({
    loop: true,
    nav: false,
    items: 5,
    dots: false,
    margin: 20,
    responsive: {
      0: {
        items: 1.1,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });
});
