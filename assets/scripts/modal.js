const modalLogin = document.getElementById("IS"); //ventana modal de iniciar sesión
const modalRegistro = document.getElementById("RS"); //ventana modal de registrarse

const btnAbrirLogin = document.getElementById("btn-iniciar-sesion"); //botón para abrir el modal de iniciar sesión
const btnAbrirRegistro = document.getElementById("btn-registrarse"); //botón para abrir el modal de registrarse

const btnCerrarLogin = document.getElementById("cerrarIS");//botón para cerrar el modal de iniciar sesión
const btnCerrarRegistro = document.getElementById("cerrarRS"); //botón para cerrar el modal de registrarse

const btnRegistroDesdeLogin = document.getElementById("btn-registrarseIS"); //botón para abrir el modal de registrarse desde el modal de iniciar sesión
const btnLoginDesdeRegistro = document.getElementById("btn-iniciar-sesionRS"); //botón para abrir el modal de iniciar sesión desde el modal de registrarse

let scrollPosition = 0;

//Funciones

function abrirModal(modal) {
    scrollPosition = window.scrollY;
    document.body.classList.add("modal-abierto");
    document.body.style.top = `-${scrollPosition}px`;
    modal.showModal();
}

function cerrarModal(modal) {
    modal.close();
    document.body.classList.remove("modal-abierto");
    document.body.style.top = ""; //restablece la posición del scroll
    window.scrollTo(0, scrollPosition); //evita que se mueva la pantalla de atras
}

// Logica de los modales

//  INICIAR SESIÓN 
btnAbrirLogin.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModal(modalLogin);
});

btnCerrarLogin.addEventListener("click", () => cerrarModal(modalLogin));

modalLogin.addEventListener("close", () => cerrarModal(modalLogin));

modalLogin.addEventListener("click", (e) => {
    if (e.target === modalLogin) cerrarModal(modalLogin);
});

// REGISTRO 
btnAbrirRegistro.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModal(modalRegistro);
});

btnCerrarRegistro.addEventListener("click", () => cerrarModal(modalRegistro));

modalRegistro.addEventListener("close", () => cerrarModal(modalRegistro));

modalRegistro.addEventListener("click", (e) => {
    if (e.target === modalRegistro) cerrarModal(modalRegistro);
});

//  CAMBIO ENTRE MODALES 
// Registrarse desde el modal de Iniciar Sesión
if (btnRegistroDesdeLogin) {
    btnRegistroDesdeLogin.addEventListener("click", (e) => {
        e.preventDefault();
        cerrarModal(modalLogin);
        abrirModal(modalRegistro); 
    });
}

// Iniciar Sesión desde el modal de Registro
if (btnLoginDesdeRegistro) {
    btnLoginDesdeRegistro.addEventListener("click", (e) => {
        e.preventDefault();
        cerrarModal(modalRegistro);
        abrirModal(modalLogin); 
    });
}