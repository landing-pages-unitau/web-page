"use strict";

var toggle = document.getElementById('menu-toggle');
var links = document.getElementById('nav-links');
toggle.addEventListener('click', function () {
  return links.classList.toggle('active');
});
links.querySelectorAll('a').forEach(function (a) {
  return a.addEventListener('click', function () {
    return links.classList.remove('active');
  });
});
//# sourceMappingURL=script.dev.js.map
