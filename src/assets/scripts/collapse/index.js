$(document).ready(() => {
  let collapseItems = document.querySelectorAll(".collapse");
  $(collapseItems).click((e) => {
    if (e.currentTarget.children[1].style.display == "block") {
      e.currentTarget.children[1].style.display = "none";
    } else {
      e.currentTarget.children[1].style.display = "block";
    }
  });
});
