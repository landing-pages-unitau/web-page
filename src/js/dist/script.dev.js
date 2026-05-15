"use strict";

var toggle = document.getElementById('menu-toggle');
var nav = document.getElementById('nav-links');
toggle.addEventListener('click', function () {
  nav.classList.toggle('active');
});
/* FECHAR MENU AO CLICAR */

var links = document.querySelectorAll('.nav-links a');
links.forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('active');
  });
});
//# sourceMappingURL=script.dev.js.map
