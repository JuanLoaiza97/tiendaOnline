// Importar Firebase Firestore y otros módulos necesarios
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAqQDc5FG4VMNN3qsdJwWzv_iZhfOcQlgI",
    authDomain: "gestiontiendaudem.firebaseapp.com",
    projectId: "gestiontiendaudem",
    storageBucket: "gestiontiendaudem.firebaseapp.com",
    messagingSenderId: "446141955012",
    appId: "1:446141955012:web:3a4c15d56ee14fb4e5c291"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para obtener los productos de la base de datos
async function obtenerProductos() {
    const productosSnapshot = await getDocs(collection(db, "productos"));
    const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return productosList;
}

// Función para mostrar productos en el HTML
async function mostrarProductos() {
    const productos = await obtenerProductos();
    const productosContainer = document.querySelector(".product-list");
    productosContainer.innerHTML = "";

    productos.forEach(producto => {
        const productHTML = `
            <div class="product-item">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p class="price">$${producto.precio}</p>
                <button onclick="window.location.href='detalles.html?id=${producto.id}'">Ver Más</button>
            </div>
        `;
        productosContainer.innerHTML += productHTML;
    });
}

// Llamar a la función para mostrar productos al cargar la página
document.addEventListener("DOMContentLoaded", mostrarProductos);
