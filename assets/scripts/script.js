const hamburguesa = document.querySelector('#hamburguesa');
const menu = document.querySelector('.navbar__menu');

hamburguesa.addEventListener('click', () => {
  menu.classList.toggle('show');
});