// Esperamos a que el HTML esté cargado completamente
document.addEventListener("DOMContentLoaded", function () {

    // Guardamos una referencia al body (porque vamos a cambiar su clase)
    const body = document.body;

    // Seleccionamos el lugar donde mostraremos el mensaje
    const resultado = document.getElementById("resultado");

    // Seleccionamos los botones por su id
    const claro = document.getElementById("claro");
    const oscuro = document.getElementById("oscuro");

    // Cuando se pulse el botón "Claro"
    claro.addEventListener("click", function () {

        body.className = ""; // Quitamos cualquier clase anterior
        body.classList.add("claro"); // Añadimos la clase "claro"

        // Mostramos el mensaje en pantalla
        resultado.innerHTML = "Tema actual: claro";
    });

    // Cuando se pulse el botón "Oscuro"
    oscuro.addEventListener("click", function () {

        body.className = ""; // Quitamos clases anteriores
        body.classList.add("oscuro"); // Añadimos la clase "oscuro"

        resultado.innerHTML = "Tema actual: oscuro";
    });

});