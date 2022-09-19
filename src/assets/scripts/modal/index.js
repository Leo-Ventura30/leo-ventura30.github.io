function disable() {
  // To get the scroll position of current webpage

  let TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  let LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;
  document.querySelector("body").style.overflow = "hidden";

  // if scroll happens, set it to the previous value
  window.onscroll = function () {
    window.scrollTo(LeftScroll, TopScroll);
  };
}

function enable() {
  document.querySelector("body").style.overflow = "scroll";

  window.onscroll = function () {};
}

$(document).ready(() => {
  let btnClose = document.querySelector("#close-modal button");
  let modal = document.querySelector(".modal-newsletter.open");

  if (!!!modal) return 0;
  $("html,body").scrollTop(0);

  disable();

  $(btnClose).click(() => {
    modal.classList.remove("open");
    enable();
  });
});
