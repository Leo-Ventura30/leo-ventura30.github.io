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
  let btnClose = document.getElementById("close-menu");
  let menu = document.querySelector(".header-menu");
  let menuIcon = document.querySelector(".menu-mobile li");
  $(menuIcon).click(() => {
    menu.classList.add("open");
    disable();
  });
  $(btnClose).click(() => {
    menu.classList.remove("open");
    enable();
  });
});
