document.addEventListener("DOMContentLoaded", function () {

    const info = document.getElementById("info");

    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");


    html.addEventListener("click", function () {

        info.className = "";
        info.classList.add("html");

        info.innerHTML = "HTML es el lenguaje de marcado utilizado para estructurar páginas web.";
    });

    css.addEventListener("click", function () {

        info.className = "";
        info.classList.add("css");

        info.innerHTML = "CSS se utiliza para definir el estilo y diseño de las páginas web.";
    });

    js.addEventListener("click", function () {

        info.className = "";
        info.classList.add("javascript");

        info.innerHTML = "JavaScript permite añadir interactividad y comportamiento dinámico a las páginas web.";
    });

});