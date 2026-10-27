// Array de productos
// Creamos un array que contiene objetos.
// Cada objeto representa un producto con sus propiedades.
const productos = [
    { nombre: "Teclado", descripcion: "Teclado mecánico", unidades: 2, precio: 50 },
    { nombre: "Ratón", descripcion: "Ratón inalámbrico", unidades: 1, precio: 25 },
    { nombre: "Monitor", descripcion: "Monitor 24 pulgadas", unidades: 1, precio: 180 }
];

// Seleccionamos el contenedor donde se mostrarán los productos
// getElementById busca un elemento del HTML por su id.
const contenedorProductos = document.getElementById("productos");

// Recorremos el array y creamos los elementos dinámicamente
// forEach ejecuta una función por cada elemento del array.
productos.forEach(producto => {

    // Creamos un nuevo elemento <div>
    const divProducto = document.createElement("div");

    // Calculamos el subtotal del producto
    // (unidades × precio)
    const subtotal = producto.unidades * producto.precio;

    // Insertamos contenido HTML dentro del div creado
    // Usamos template literals (``) para insertar variables con ${}
    divProducto.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p><strong>Descripción:</strong> ${producto.descripcion}</p>
        <p><strong>Unidades:</strong> ${producto.unidades}</p>
        <p><strong>Precio por unidad:</strong> ${producto.precio} €</p>
        <p><strong>Subtotal:</strong> ${subtotal} €</p>
        <hr>
    `;

    // Añadimos el div creado dentro del contenedor del HTML
    contenedorProductos.appendChild(divProducto);
});

// Función para calcular el total con IVA
// Recibe el array de productos como parámetro
function calcularTotal(productos) {

    // Variable acumuladora
    let totalSinIVA = 0;

    // Recorremos el array para sumar todos los subtotales
    productos.forEach(producto => {
        totalSinIVA += producto.unidades * producto.precio;
    });

    // Calculamos el IVA (21%)
    const iva = totalSinIVA * 0.21;

    // Calculamos el total final
    const totalConIVA = totalSinIVA + iva;

    // Devolvemos un objeto con los resultados
    return {
        totalSinIVA,
        iva,
        totalConIVA
    };
}

// Mostramos el total
// Llamamos a la función y guardamos el resultado
const resultado = calcularTotal(productos);

// Seleccionamos el div donde mostraremos el total
const divTotal = document.getElementById("total");

// Insertamos el resultado en el HTML
// toFixed(2) limita los números a 2 decimales
divTotal.innerHTML = `
    <h2>Total de la compra</h2>
    <p><strong>Total sin IVA:</strong> ${resultado.totalSinIVA.toFixed(2)} €</p>
    <p><strong>IVA (21%):</strong> ${resultado.iva.toFixed(2)} €</p>
    <p><strong>Total con IVA:</strong> ${resultado.totalConIVA.toFixed(2)} €</p>
`;
