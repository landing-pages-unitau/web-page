const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

/* FECHAR MENU AO CLICAR */
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});