// Espera a que el DOM esté completamente cargado
// para asegurarse de que todos los elementos HTML existen
document.addEventListener("DOMContentLoaded", function () {

  // Guardamos referencias a elementos del HTML
  const Formulario = document.getElementById("Formulario");
  const mensajeError = document.getElementById("mensajeError");

  // Escuchamos el evento submit del formulario
  Formulario.addEventListener("submit", function (evento) {

    // Evita que el formulario se envíe automáticamente
    evento.preventDefault();

    // Obtenemos los valores de los campos
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;

    // En radio buttons se usa .checked (true/false)
    let sexoH = document.getElementById("sexo-h").checked;
    let sexoM = document.getElementById("sexo-m").checked;

    let correo = document.getElementById("correo").value;
    let descripcion = document.getElementById("descripcion").value;

    // Checkbox también usa .checked
    let condiciones = document.getElementById("condiciones").checked;

    // Validaciones una por una

    // trim() elimina espacios en blanco al inicio y final
    if (nombre.trim() === "") {
      mensajeError.innerText = "La celda nombre no puede estar vacía.";
      return; // Detiene la ejecución
    }

    if (apellidos.trim() === "") {
      mensajeError.innerText = "La celda apellidos no puede estar vacía.";
      return;
    }

    // Si ninguno de los radio está seleccionado
    if (!sexoH && !sexoM) {
      mensajeError.innerText = "Debes seleccionar una opción en sexo.";
      return;
    }

    if (correo.trim() === "") {
      mensajeError.innerText = "La celda correo no puede estar vacía.";
      return;
    }

    // Llamamos a la función que valida el formato del email
    if (!validarEmail(correo)) {
      mensajeError.innerText = "El formato del correo no es válido.";
      return;
    }

    if (descripcion.trim() === "") {
      mensajeError.innerText = "El campo descripción no puede estar vacío.";
      return;
    }

    if (!condiciones) {
      mensajeError.innerText = "Debes aceptar las condiciones.";
      return;
    }

    // Si todo es correcto:
    mensajeError.innerText = ""; // Limpia errores
    alert("Formulario enviado correctamente");

    // Ahora sí enviamos el formulario manualmente
    Formulario.submit();
  });

  // Función para validar email con expresión regular
  function validarEmail(email) {

    // Expresión regular:
    // ^ inicio
    // [^\s@]+ texto antes del @
    // @ obligatorio
    // [^\s@]+ dominio
    // \. punto obligatorio
    // [^\s@]+ extensión
    // $ final
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // test() devuelve true o false
    return expresion.test(email.toLowerCase());
  }

});
