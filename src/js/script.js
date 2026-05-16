const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => links.classList.toggle('active'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('active')));
