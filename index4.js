document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
fetch("https://ejemplo.com/api/suscribirse", {  // Reemplaza con tu URL real
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email })
    })
.then(response => response.json())
.then(data => {
    document.getElementById("message").textContent = "¡Suscripción exitosa!";
    })
    .catch(error => {
    document.getElementById("message").textContent = "Hubo un error. Inténtalo de nuevo.";
});
});
document.getElementById("regresar").addEventListener("click", function (event) {
    event.preventDefault(); 
    window.location.href = "l-index.html"; 
});
document.getElementById("reiniciar").addEventListener("click", function(event) {
    event.preventDefault(); 
    location.reload(); 
});
