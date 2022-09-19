$(document).ready(function () {
  $(".product-info ul").click(function (e) {
    if (e.target.localName != "li") return 0;
    for (const item of e.currentTarget.children) {
      item.classList.remove("active");
    }
    e.target.className += " active";
  });
});
