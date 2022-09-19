$(document).ready(function () {
  let owl = $(".owl-carousel-banner").owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    dots: true,
  });

  $(".owl-next-banner").click(() => {
    owl.trigger("next.owl.carousel");
  });
  $(".owl-prev-banner").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});
