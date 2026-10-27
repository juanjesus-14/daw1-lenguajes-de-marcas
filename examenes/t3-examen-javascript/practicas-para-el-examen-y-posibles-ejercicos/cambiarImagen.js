// Esperamos a que el HTML esté listo
document.addEventListener("DOMContentLoaded", function () {

    // Seleccionamos el div donde cambia la imagen
    const imagen = document.getElementById("imagen");

    // Zona donde mostramos el mensaje
    const resultado = document.getElementById("resultado");

    // Seleccionamos botones
    const playa = document.getElementById("playa");
    const montana = document.getElementById("montana");

    // Botón Playa
    playa.addEventListener("click", function () {

        imagen.className = ""; // Quitamos clase anterior
        imagen.classList.add("playa"); // Añadimos nueva clase

        resultado.innerHTML = "Imagen seleccionada: playa";
    });

    // Botón Montaña
    montana.addEventListener("click", function () {

        imagen.className = "";
        imagen.classList.add("montana");

        resultado.innerHTML = "Imagen seleccionada: montaña";
    });

});