// Espera a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

  // Selecciona el formulario por su id
  // y añade un evento submit
  document.getElementById("formulario")
          .addEventListener('submit', validarFormulario);
});

// Función que se ejecuta cuando se envía el formulario
function validarFormulario(evento) {

  // Evita que el formulario se envíe automáticamente
  evento.preventDefault();

  // Obtiene el valor del campo usuario
  var usuario = document.getElementById('usuario').value;

  // Comprueba si el usuario está vacío
  if (usuario.length == 0) {
    alert('No has escrito nada en el usuario');
    return; // Detiene la ejecución
  }

  // Obtiene el valor del campo clave
  var clave = document.getElementById('clave').value;

  // Comprueba si la clave tiene menos de 6 caracteres
  if (clave.length < 6) {
    alert('La clave no es válida');
    return; // Detiene la ejecución
  }

  // Si todo es correcto, envía el formulario manualmente
  this.submit();
}
