document.getElementById('searchBtn').addEventListener('click', function() {
    let searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    if (searchTerm) {
        alert('Buscando productos relacionados con: ' + searchTerm);
        // Aquí podrías integrar la lógica para filtrar productos o redirigir a una página de resultados
    } else {
        alert('Por favor ingresa un término de búsqueda');
    }
});
