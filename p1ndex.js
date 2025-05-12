document.addEventListener("DOMContentLoaded", function() {
    // Manejo de redirección según el enlace seleccionado
    document.querySelectorAll(".navegacion a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado
            
            const destinos = {
                "MENU": "p-menu.html",
                "CONTACTANOS": "p-con.html",
                "MENU PRINCIPAL": "index.html",
                "INICIAR SECCION": "p-ini.html"
            };

            // Obtener el texto del enlace y redirigir si está en la lista
            let destino = destinos[this.textContent.trim()];
            if (destino) {
                window.location.href = destino;
            }
        });
    });

    // Manejo del desplazamiento suave para el enlace "INICIO"
    const inicioLink = document.querySelector("a[href='#inicio']");
    const inicioTarget = document.getElementById("inicio");

    if (inicioLink && inicioTarget) {
        inicioLink.addEventListener("click", function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado

            inicioTarget.scrollIntoView({
                behavior: "smooth", // Desplazamiento suave
                block: "start" // Asegura que se muestre desde el inicio
            });
        });
    }
});