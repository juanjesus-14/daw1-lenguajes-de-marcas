// Esperamos a que el HTML esté cargado
document.addEventListener("DOMContentLoaded", function () {

    // Seleccionamos el body (porque cambiaremos el color del texto del body)
    const body = document.body;

    // Seleccionamos el lugar donde mostramos el mensaje
    const resultado = document.getElementById("resultado");

    // Seleccionamos los botones
    const rojo = document.getElementById("rojo");
    const azul = document.getElementById("azul");
    const verde = document.getElementById("verde");

    // BOTÓN ROJO
    rojo.addEventListener("click", function () {

        body.className = ""; // Quitamos cualquier clase anterior
        body.classList.add("rojo"); // Añadimos clase rojo

        resultado.innerHTML = "El texto es de color rojo";
    });

    // BOTÓN AZUL
    azul.addEventListener("click", function () {

        body.className = "";
        body.classList.add("azul");

        resultado.innerHTML = "El texto es de color azul";
    });

    // BOTÓN VERDE
    verde.addEventListener("click", function () {

        body.className = "";
        body.classList.add("verde");

        resultado.innerHTML = "El texto es de color verde";
    });

});