// ================================================================
// MENU MOBILE — Hambúrguer
// Alterna a classe .ativo no menu ao clicar no botão hambúrguer.
// Fecha o menu ao clicar em qualquer link de navegação.
// ================================================================

const menuToggle = document.getElementById('menu-toggle');
const navLinks   = document.getElementById('nav-links');

// Abre/fecha o menu ao clicar no ícone de hambúrguer
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('ativo');
});

// Fecha o menu ao clicar em qualquer link (melhora UX no mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('ativo');
  });
});