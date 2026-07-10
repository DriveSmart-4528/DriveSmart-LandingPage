document.addEventListener("DOMContentLoaded", () => {

    const preguntas = [

        "¿Sabías que respetar el límite de velocidad puede salvar vidas?",

        "¿Recuerdas utilizar siempre el cinturón de seguridad?",

        "¿Conoces la distancia mínima que debes mantener con otro vehículo?",

        "¿Sabías que usar el celular mientras conduces aumenta el riesgo de accidentes?",

        "¿Has revisado los neumáticos de tu vehículo antes de conducir?",

        "¿Conoces las señales de tránsito más importantes?",

        "¿Estás listo para convertirte en un conductor más responsable?"

    ];

    const boton = document.getElementById("boton-pregunta");
    const ventana = document.querySelector(".pregunta-flotante");
    const texto = document.getElementById("texto-pregunta");
    const cerrar = document.getElementById("cerrar-pregunta");

    boton.addEventListener("click", function(e){

        e.preventDefault();

        const numero = Math.floor(Math.random() * preguntas.length);

        texto.textContent = preguntas[numero];

        ventana.classList.add("activo");

    });

    cerrar.addEventListener("click", function(){

        ventana.classList.remove("activo");

    });

});