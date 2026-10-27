// Esperamos a que cargue el documento
document.addEventListener("DOMContentLoaded", function () {

    // Seleccionamos la caja que queremos mostrar u ocultar
    const caja = document.getElementById("caja");

    // Seleccionamos el lugar donde mostrar el mensaje
    const resultado = document.getElementById("resultado");

    // Seleccionamos los botones
    const mostrar = document.getElementById("mostrar");
    const ocultar = document.getElementById("ocultar");

    // Botón Mostrar
    mostrar.addEventListener("click", function () {

        caja.className = ""; // Quitamos clase anterior
        caja.classList.add("visible"); // Añadimos clase que la muestra

        resultado.innerHTML = "Elemento visible";
    });

    // Botón Ocultar
    ocultar.addEventListener("click", function () {

        caja.className = "";
        caja.classList.add("oculto"); // Añadimos clase que la oculta

        resultado.innerHTML = "Elemento oculto";
    });

});