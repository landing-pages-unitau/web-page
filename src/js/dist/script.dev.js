"use strict";

// ================================================================
// MENU MOBILE — Hambúrguer
// Alterna a classe .ativo no menu ao clicar no botão hambúrguer.
// Fecha o menu ao clicar em qualquer link de navegação.
// ================================================================
var menuToggle = document.getElementById('menu-toggle');
var navLinks = document.getElementById('nav-links'); // Abre/fecha o menu ao clicar no ícone de hambúrguer

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('ativo');
}); // Fecha o menu ao clicar em qualquer link (melhora UX no mobile)

navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('ativo');
  });
});
//# sourceMappingURL=script.dev.js.map
