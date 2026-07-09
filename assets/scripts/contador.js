const contador = document.getElementById("contador-certificados");

let numero = 0;
const objetivo = 12540;

const velocidad = 15;

const intervalo = setInterval(() => {

    numero += 120;

    if(numero >= objetivo){
        numero = objetivo;
        clearInterval(intervalo);
    }

    contador.textContent = numero.toLocaleString();

}, velocidad);