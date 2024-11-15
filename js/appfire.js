// Importar funciones necesarias desde el SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqQDc5FG4VMNN3qsdJwWzv_iZhfOcQlgI",
  authDomain: "gestiontiendaudem.firebaseapp.com",
  projectId: "gestiontiendaudem",
  storageBucket: "gestiontiendaudem.firebasestorage.app",
  messagingSenderId: "446141955012",
  appId: "1:446141955012:web:3a4c15d56ee14fb4e5c291"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Obtener el formulario y agregar el evento submit
const form = document.getElementById('product-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Obtener los valores del formulario
  const name = document.getElementById('name').value;
  const price = parseFloat(document.getElementById('price').value);
  const description = document.getElementById('description').value;
  const imageUrl = document.getElementById('imageUrl').value;

  // Verificar que todos los campos estén completos
  if (name && price && description && imageUrl) {
    try {
      // Agregar el producto a Firestore
      const docRef = await addDoc(collection(db, "productos"), {
        name: name,
        price: price,
        description: description,
        imageUrl: imageUrl
      });

      console.log("Producto agregado con ID: ", docRef.id);

      // Opcional: Limpiar el formulario
      form.reset();
      alert("Producto agregado exitosamente!");
    } catch (e) {
      console.error("Error al agregar producto: ", e);
      alert("Hubo un error al agregar el producto.");
    }
  } else {
    alert("Por favor, complete todos los campos.");
  }
});
