// Variables globales
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para añadir un producto al carrito
function addToCart(productId, nombre, precio, imagen) {
    // Crear un objeto producto
    const producto = {
        id: productId,
        nombre,
        precio: parseFloat(precio),
        imagen,
        cantidad: 1, // Inicia con una unidad
    };

    // Verificar si el producto ya está en el carrito
    const index = carrito.findIndex((item) => item.id === productId);

    if (index > -1) {
        // Si ya existe, aumenta la cantidad
        carrito[index].cantidad++;
    } else {
        // Si no existe, añadir al carrito
        carrito.push(producto);
    }

    // Guardar el carrito en el Local Storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto añadido al carrito");
}

// Función para cargar los productos en la página carrito.html
function cargarCarrito() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    if (!cartItemsContainer || !totalPriceElement) return;

    // Limpiar contenido previo
    cartItemsContainer.innerHTML = "";

    // Mostrar productos del carrito
    let total = 0;
    carrito.forEach((producto) => {
        const productoHTML = `
            <div class="cart-item">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="cart-item-info">
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <button onclick="eliminarDelCarrito('${producto.id}')">Eliminar</button>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += productoHTML;
        total += producto.precio * producto.cantidad;
    });

    // Actualizar el precio total
    totalPriceElement.textContent = total.toFixed(2);
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(productId) {
    const index = carrito.findIndex((item) => item.id === productId);

    if (index > -1) {
        carrito.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        cargarCarrito();
    }
}

// Función para completar la compra
function checkout() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    alert("¡Gracias por tu compra!");
    localStorage.removeItem("carrito");
    window.location.reload(); // Recarga la página para vaciar el carrito
}

// Cargar carrito al iniciar la página
window.onload = cargarCarrito;
