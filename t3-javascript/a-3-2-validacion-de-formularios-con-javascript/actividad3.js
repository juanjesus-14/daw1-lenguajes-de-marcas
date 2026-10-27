// Función que valida el formulario cuando se pulsa el botón "Enviar"
function valida_envia() {

    // ---------------------------
    // Validación del nombre
    // ---------------------------
    if (document.fvalida.nombre.value.length == 0) {
        // Si el campo está vacío
        alert("Tiene que escribir su nombre");
        document.fvalida.nombre.focus(); // Coloca el cursor en el campo
        return 0; // Detiene la ejecución de la función
    }

    // ---------------------------
    // Validación de la edad
    // ---------------------------
    let edad = document.fvalida.edad.value;

    // Llamamos a una función auxiliar que convierte a entero (no mostrada aquí)
    edad = validarEntero(edad); 
    document.fvalida.edad.value = edad; // Actualiza el valor del campo

    if (edad == "") {
        // Si no se introdujo un número entero
        alert("Tiene que introducir un número entero en su edad.");
        document.fvalida.edad.focus();
        return 0;
    } else {
        if (edad < 18) {
            // Si es menor de 18 años
            alert("Debe ser mayor de 18 años.");
            document.fvalida.edad.focus();
            return 0;
        }
    }

    // ---------------------------
    // Validación del interés (select)
    // ---------------------------
    if (document.fvalida.interes.selectedIndex == 0) {
        // Si no se ha seleccionado ninguna opción válida
        alert("Debe seleccionar un motivo de su contacto.");
        document.fvalida.interes.focus();
        return 0;
    }

    // ---------------------------
    // Si todo está correcto
    // ---------------------------
    alert("Muchas gracias por enviar el formulario");

    // Enviar el formulario manualmente
    document.fvalida.submit();
}
