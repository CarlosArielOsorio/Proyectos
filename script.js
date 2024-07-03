
const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
	target.addEventListener('click', () => {
		content.forEach(c => {
			c.classList.remove('active')
		})
		const t = document.querySelector(target.dataset.target)
		t.classList.add('active')
	})
})


const firebaseConfig = {
	piKey: "AIzaSyBU29QncCfvqd57BXuxpmdEPKJkd2iqjt8",
  authDomain: "webb-1f3d1.firebaseapp.com",
  databaseURL: "https://webb-1f3d1-default-rtdb.firebaseio.com",
  projectId: "webb-1f3d1",
  storageBucket: "webb-1f3d1.appspot.com",
  messagingSenderId: "96237937124",
  appId: "1:96237937124:web:a2be14c8b71d240c9767f1",
  measurementId: "G-2V7FGBDZB0"
  };


firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var contacFormDB = firebase.database().ref("contacForm");

document.getElementById("contacForm").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();

var name = getElementVal("name");
var emailid = getElementVal("emailid");
var msgContent = getElementVal("msgContent");

saveMessages(name, emailid, msgContent);

document.querySelector(".alert").style.display = "block";


setTimeout(() => {
  document.querySelector(".alert").style.display = "none";
}, 3000);

document.getElementById("contacForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
var newContacForm = contacFormDB.push();

newContacForm.set({
  name: name,
  emailid: emailid,
  msgContent: msgContent,
});
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};
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