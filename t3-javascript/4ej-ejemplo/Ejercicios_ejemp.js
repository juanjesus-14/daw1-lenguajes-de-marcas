/* ======================================================
   PRÁCTICA 1
   Leer datos del formulario y mostrarlos en el HTML
====================================================== */
function leeform() {

  // Leemos el valor de los inputs usando su id
  const campo1 = document.getElementById("campo1").value;
  const campo2 = document.getElementById("campo2").value;

  // Seleccionamos el div donde escribiremos el resultado
  const resultado = document.getElementById("resultado1");

  // innerHTML permite escribir HTML dentro del div
  resultado.innerHTML =
    "<p><strong>Campo 1:</strong> " + campo1 + "</p>" +
    "<p><strong>Campo 2:</strong> " + campo2 + "</p>";
}


/* ======================================================
   PRÁCTICA 2
   Recorrer un array numérico y sumar sus valores
====================================================== */
function recorre_simple() {

  // Creamos un array con números
  const numeros = [10, 5, 20, 3, 7];

  // Variable acumuladora
  let resultado = 0;

  // forEach recorre todos los elementos del array
  numeros.forEach(function (n) {
    resultado += n; // sumamos cada número
  });
  // Mostramos el resultado
  alert("La suma es: " + resultado);
}


/* ======================================================
   PRÁCTICA 3
   Recorrer un array e inyectar HTML creando <li>
====================================================== */
function mostrar_lista() {

  // Array simple de texto
  const coches = ["BMW", "Volvo", "Saab", "Ford"];

  // Seleccionamos la lista ordenada
  const lista1 = document.getElementById("lista1");

  // Limpiamos la lista para evitar duplicados
  lista1.innerHTML = "";

  // Recorremos el array
  coches.forEach(function (coche) {

    // Creamos un elemento <li>
    const elementoLista = document.createElement("li");

    // Añadimos texto al <li>
    elementoLista.textContent = coche;

    // Insertamos el <li> dentro de la <ol>
    lista1.appendChild(elementoLista);
  });
}


/* ======================================================
   PRÁCTICA 4
   Array de objetos (clave -> valor)
====================================================== */
function mostrar_lista_clave() {

  // Array de objetos con propiedades marca y precio
  const coches = [
    { marca: "BMW", precio: 45000 },
    { marca: "Volvo", precio: 38000 },
    { marca: "Saab", precio: 32000 },
    { marca: "Ford", precio: 28000 }
  ];

  // Seleccionamos la lista
  const lista2 = document.getElementById("lista2");

  // Limpiamos para no duplicar
  lista2.innerHTML = "";

  // Recorremos el array de objetos
  coches.forEach(function (coche) {

    // Creamos el elemento <li>
    const elementoLista = document.createElement("li");

    // Accedemos a las propiedades del objeto
    elementoLista.textContent =
      "El " + coche.marca + " tiene un precio de " + coche.precio + "€";

    // Insertamos el <li> en la lista
    lista2.appendChild(elementoLista);
  });
}
