$(document).ready(function () {
  $(".owl-carousel-infos").owlCarousel({
    loop: false,
    nav: false,
    items: 5,
    dots: false,
    mouseDrag: false,
    margin: 20,
    responsive: {
      0: {
        items: 1.1,
      },
      1000: {
        items: 3,
        mouseDrag: true,
        autoHeight: true,
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
