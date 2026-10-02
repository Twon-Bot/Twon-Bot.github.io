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
  // Alumni map: hovering, focusing or tapping a city (or its chip) highlights it and shows its name.
  var map = document.querySelector(".map-wrap");
  if (map) {
    var tip = map.querySelector(".map-tip");
    var svg = map.querySelector("svg");
    var chips = document.querySelectorAll(".city-chip");
    var activate = function (name) {
      map.querySelectorAll(".city").forEach(function (c) {
        var on = c.getAttribute("data-city") === name;
        c.classList.toggle("is-active", on);
        if (on && tip) {
          var dot = c.querySelector(".city__dot");
          var box = svg.getBoundingClientRect(), wrap = map.getBoundingClientRect();
          var sx = box.width / svg.viewBox.baseVal.width, sy = box.height / svg.viewBox.baseVal.height;
          tip.innerHTML = "<strong>" + name + "</strong><span>" + c.getAttribute("data-region") + "</span>";
          tip.style.left = (box.left - wrap.left + dot.cx.baseVal.value * sx) + "px";
          tip.style.top = (box.top - wrap.top + dot.cy.baseVal.value * sy) + "px";
          tip.classList.add("is-visible");
        }
      });
      chips.forEach(function (b) { b.classList.toggle("is-active", b.getAttribute("data-city") === name); });
      if (!name && tip) tip.classList.remove("is-visible");
    };
    map.querySelectorAll(".city").forEach(function (c) {
      var name = c.getAttribute("data-city");
      c.addEventListener("mouseenter", function () { activate(name); });
      c.addEventListener("focus", function () { activate(name); });
      c.addEventListener("click", function () { activate(name); });
      c.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(name); } });
    });
    map.addEventListener("mouseleave", function () { activate(null); });
    chips.forEach(function (b) {
      var name = b.getAttribute("data-city");
      b.addEventListener("mouseenter", function () { activate(name); });
      b.addEventListener("focus", function () { activate(name); });
      b.addEventListener("click", function () { activate(name); });
      b.addEventListener("mouseleave", function () { activate(null); });
    });
  }
})();
