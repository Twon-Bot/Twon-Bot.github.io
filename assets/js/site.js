// Site behaviour. The site still works if this file fails to load.
(function () {
  // Header: solid after scrolling; mobile menu toggle.
  var header = document.querySelector(".site-header");
  if (header) {
    var toggle = header.querySelector(".nav-toggle");
    var onScroll = function () {
      if (window.scrollY > 80) header.classList.add("is-solid");
      else header.classList.remove("is-solid");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = header.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  }

  // Marquee: if a firm's logo file is missing, show its name instead.
  document.querySelectorAll(".firm img").forEach(function (img) {
    var fallback = function () { img.closest(".firm").classList.add("no-logo"); };
    if (img.complete && img.naturalWidth === 0) fallback();
    else img.addEventListener("error", fallback);
  });
})();
