
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formulario");
    const mensaje = document.getElementById("mensaje");

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;

        let general = document.getElementById("general").checked;
        let vip = document.getElementById("vip").checked;

        //let Taller = document.getElementById("Taller").checked;
        //let Networking = document.getElementById("vip").checked;
        //let Charla = document.getElementById("vip").checked;

        mensaje.innerHTML = "";

        if (nombre.trim() === "") {
            mensaje.innerHTML = "El nombre no puede estar vacío.";
            return;
        }

        if (email.trim() === "") {
            mensaje.innerHTML = "El email es obligatorio";
            return;
        }

        if (!email.includes("@")) {
            mensaje.innerHTML = "El email debe contener @";
            return;
        }

        if (!general && !vip) {
            mensaje.innerText = "Debes seleccionar una opción.";
            return;
        }

        let textoTipoEntrada;

        if (general) {
            textoTipoEntrada = "Entrada General";
        } else {
            textoTipoEntrada = "Entrada Vip";
        }

        mensaje.innerHTML =
            "Nombre: " + nombre + "<br>" +
            "Email: " + email + "<br>" +
            "Tipo entrada: " + textoTipoEntrada + "<br>" +
            "Actividades: " + Taller + Networking + Charla;
            
    });

});