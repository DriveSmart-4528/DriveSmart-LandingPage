document.addEventListener('DOMContentLoaded', () => {
    const hamburguesa = document.querySelector('#hamburguesa');
    const menu = document.querySelector('#nav-menu');

    hamburguesa.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});