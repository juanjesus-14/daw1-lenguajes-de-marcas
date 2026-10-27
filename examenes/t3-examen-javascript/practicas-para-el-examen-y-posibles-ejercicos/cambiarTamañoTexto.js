// Esperamos a que cargue el documento
document.addEventListener("DOMContentLoaded", function () {

    const body = document.body; // Referencia al body
    const resultado = document.getElementById("resultado"); // Donde mostramos mensaje

    // Seleccionamos botones
    const pequeno = document.getElementById("pequeno");
    const mediano = document.getElementById("mediano");
    const grande = document.getElementById("grande");

    // Botón Pequeño
    pequeno.addEventListener("click", function () {

        body.className = ""; // Quitamos clase anterior
        body.classList.add("pequeno"); // Añadimos clase pequeño

        resultado.innerHTML = "Tamaño aplicado: pequeño";
    });

    // Botón Mediano
    mediano.addEventListener("click", function () {

        body.className = "";
        body.classList.add("mediano");

        resultado.innerHTML = "Tamaño aplicado: mediano";
    });

    // Botón Grande
    grande.addEventListener("click", function () {

        body.className = "";
        body.classList.add("grande");

        resultado.innerHTML = "Tamaño aplicado: grande";
    });

});