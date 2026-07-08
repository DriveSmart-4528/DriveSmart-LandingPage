const btAbrir = document.getElementById("btn-iniciar-sesion");
const btCerrar = document.getElementById("cerrarIS");
const modal = document.getElementById("IS");

btAbrir.addEventListener("click",() => {
    modal.showModal();
});

btCerrar.addEventListener("click",() => {
    modal.close();
});