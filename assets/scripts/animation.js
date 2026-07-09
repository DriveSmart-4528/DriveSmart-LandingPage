const elementos = document.querySelectorAll('.animacion');
function mostrarAnimaciones(){
    elementos.forEach(elemento =>{
        const posicion = elemento.getBoundClientRect().top;
        const pantalla = window.innerHeight;
        if(posicion < pantalla - 120){
            elemento.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", mostrarAnimaciones);
window.addEvwentListener("load", mostrarAnimaciones);