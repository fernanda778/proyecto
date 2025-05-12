document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const interfaz = params.get("interfaz");
    const contenido = document.getElementById("contenido"); 
    
    if (contenido) {
        contenido.innerHTML = interfaz ? `<p>Interfaz seleccionada: ${interfaz}</p>` : "<p>No se ha seleccionado una interfaz.</p>";
    }
});