// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // Guardamos referencias al formulario y al párrafo de errores
    const formulario = document.getElementById('formulario');
    const mensajeError = document.getElementById('mensajeError');

    // Añadimos evento submit al formulario
    formulario.addEventListener('submit', function (evento) {

        // Evita el envío automático para poder validar
        evento.preventDefault();

        // Obtenemos los valores de los campos
        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let categoria = document.getElementById('categoria').value;

        // En checkbox usamos .checked (true/false)
        let terminos = document.getElementById('terminos').checked;

        // VALIDACIONES

        // trim() elimina espacios al inicio y final
        if (nombre.trim() === '') {
            mensajeError.innerText = 'El campo nombre no puede estar vacío.';
            return; // Detiene la ejecución
        }

        if (email.trim() === '') {
            mensajeError.innerText = 'El campo email no puede estar vacío.';
            return;
        }

        // Validamos formato del email usando una función
        if (!validarEmail(email)) {
            mensajeError.innerText = 'El formato del email no es válido.';
            return;
        }

        // Si el select sigue con valor vacío
        if (categoria === '') {
            mensajeError.innerText = 'Debes seleccionar una categoría.';
            return;
        }

        // Si el checkbox no está marcado
        if (!terminos) {
            mensajeError.innerText = 'Debes aceptar los términos y condiciones.';
            return;
        }

        // Si todo está correcto:
        mensajeError.innerText = ''; // Limpia errores

        // Envía el formulario manualmente
        formulario.submit();
    });

    // Función que valida el formato del email con expresión regular
    function validarEmail(email) {

        // Expresión regular avanzada que valida:
        // - Texto antes del @
        // - Dominio válido
        // - Extensión correcta
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // test() devuelve true si el formato es correcto
        return re.test(String(email).toLowerCase());
    }

});
