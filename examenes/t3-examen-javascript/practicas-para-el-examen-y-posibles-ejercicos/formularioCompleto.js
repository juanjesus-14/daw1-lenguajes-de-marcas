// Esperamos a que cargue el HTML
document.addEventListener("DOMContentLoaded", function () {

    // Seleccionamos formulario y mensaje
    const formulario = document.getElementById("formulario");
    const mensaje = document.getElementById("mensaje");

    // Cuando se envía el formulario
    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault(); // Evita que se envíe

        // Obtenemos los valores
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("telefono").value;
        let edad = document.getElementById("edad").value;

        let online = document.getElementById("online").checked;
        let presencial = document.getElementById("presencial").checked;

        mensaje.innerHTML = ""; // Limpiamos mensaje anterior

        // -------- VALIDACIONES --------

        if (nombre === "") {
            mensaje.innerHTML = "El nombre es obligatorio";
            return;
        }

        if (email === "") {
            mensaje.innerHTML = "El email es obligatorio";
            return;
        }

        if (!email.includes("@")) {
            mensaje.innerHTML = "El email debe contener @";
            return;
        }

        if (telefono !== "" && telefono.length !== 9) {
            mensaje.innerHTML = "El teléfono debe tener 9 caracteres";
            return;
        }

        if (edad === "") {
            mensaje.innerHTML = "La edad es obligatoria";
            return;
        }

        if (edad < 18) {
            mensaje.innerHTML = "Debes ser mayor de edad";
            return;
        }

        if (!online && !presencial) {
            mensaje.innerHTML = "Debes seleccionar modalidad";
            return;
        }

        // -------- SI TODO ESTÁ BIEN --------

        let modalidad;

        if (online) {
            modalidad = "Online";
        } else {
            modalidad = "Presencial";
        }

        mensaje.innerHTML =
            "Nombre: " + nombre + "<br>" +
            "Email: " + email + "<br>" +
            "Teléfono: " + telefono + "<br>" +
            "Edad: " + edad + "<br>" +
            "Modalidad: " + modalidad;
    });

});