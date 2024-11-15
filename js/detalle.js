// Función para añadir al carrito
function addToCart() {
    const quantity = document.getElementById('quantity').value;
    
    // Validar si la cantidad es mayor que 0
    if (quantity <= 0 || isNaN(quantity)) {
        alert('Por favor, ingresa una cantidad válida.');
        return;
    }

    // Mostrar mensaje de confirmación con la cantidad seleccionada
    alert(`Producto añadido al carrito. Cantidad: ${quantity}`);
}

// Función para agregar comentarios
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener el comentario ingresado
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    if (commentText) {
        // Crear un nuevo comentario
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-item');
        commentDiv.innerHTML = `<p>${commentText}</p>`;

        // Añadir el comentario a la lista de comentarios
        document.getElementById('comments-list').appendChild(commentDiv);

        // Limpiar el campo de comentario
        commentInput.value = '';
    } else {
        alert('Por favor, ingresa un comentario.');
    }
});
