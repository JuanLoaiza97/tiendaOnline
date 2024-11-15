// Importar Firebase Firestore
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAqQDc5FG4VMNN3qsdJwWzv_iZhfOcQlgI",
    authDomain: "gestiontiendaudem.firebaseapp.com",
    projectId: "gestiontiendaudem",
    storageBucket: "gestiontiendaudem.firebaseapp.com",
    messagingSenderId: "446141955012",
    appId: "1:446141955012:web:3a4c15d56ee14fb4e5c291"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Ejemplo de productos para cargar en la base de datos
const productos = [
    {
        nombre: "Tenis",
        precio: 250.000,
        imagen: "https://asicsco.vteximg.com.br/arquivos/ids/368811-1000-1000/Tenis-ASICS-GEL-Kayano-30---Masculino---Negro.jpg",
        descripcion: "tenis comodos para todo momento"
    },
    // {
    //     nombre: "Producto 2",
    //     precio: 19.99,
    //     imagen: "https://via.placeholder.com/300x300",
    //     descripcion: "Descripción del Producto 2"
    // },
    // {
    //     nombre: "Producto 3",
    //     precio: 49.99,
    //     imagen: "https://via.placeholder.com/300x300",
    //     descripcion: "Descripción del Producto 3"
    // }
];

// Función para cargar productos a Firestore
async function cargarProductos() {
    try {
        const productosCollection = collection(db, "productos");
        for (const producto of productos) {
            await addDoc(productosCollection, producto);
            console.log(`Producto ${producto.nombre} agregado con éxito`);
        }
    } catch (error) {
        console.error("Error al cargar productos: ", error);
    }
}

// Ejecutar la función
cargarProductos();
