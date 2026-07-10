const elementos = document.querySelectorAll('.animacion');

function mostrarAnimaciones(){
    elementos.forEach(elemento => {
        // CORREGIDO: getBoundingClientRect (con 'ing')
        const posicion = elemento.getBoundingClientRect().top;
        const pantalla = window.innerHeight;
        
        if(posicion < pantalla - 120){
            elemento.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", mostrarAnimaciones);
// CORREGIDO: addEventListener (sin la 'w')
window.addEventListener("load", mostrarAnimaciones);