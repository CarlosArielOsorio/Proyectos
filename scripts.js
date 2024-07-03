let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });
    totalCarrito.textContent = total;
}

function buscarProductos() {
    const terminoBusqueda = document.getElementById('barraBusqueda').value.toLowerCase();
    const productos = [
        { nombre: "Tarjeta Madre", descripcion: "Tarjeta madre para procesador 7" },
        { nombre: "Procesador", descripcion: "Procesador ryzen 7" },
        { nombre: "Pantalla", descripcion: "Pantalla de 8 pulgadas HD" },
        // Agregar más productos aquí
    ];

    const resultadosBusqueda = document.getElementById('resultadosBusqueda');
    resultadosBusqueda.innerHTML = '';

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(terminoBusqueda) ||
        producto.descripcion.toLowerCase().includes(terminoBusqueda)
    );

    if (productosFiltrados.length === 0) {
        resultadosBusqueda.innerHTML = '<p>No se encontraron productos.</p>';
    } else {
        productosFiltrados.forEach(producto => {
            const resultado = document.createElement('div');
            resultado.classList.add('producto');

            const nombreProducto = document.createElement('h3');
            nombreProducto.classList.add('producto__nombre');
            nombreProducto.textContent = producto.nombre;

            const descripcionProducto = document.createElement('p');
            descripcionProducto.classList.add('producto__descripcion');
            descripcionProducto.textContent = producto.descripcion;

            const botonAgregar = document.createElement('button');
            botonAgregar.textContent = 'Agregar al Carrito';
            botonAgregar.onclick = () => agregarAlCarrito(producto.nombre, 100); // Ajusta el precio según sea necesario

            resultado.appendChild(nombreProducto);
            resultado.appendChild(descripcionProducto);
            resultado.appendChild(botonAgregar);

            resultadosBusqueda.appendChild(resultado);
        });
    }
}