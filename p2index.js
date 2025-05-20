document.addEventListener("DOMContentLoaded", function() {
    const deliveryHome = document.getElementById("deliveryHome");
    const deliveryPickup = document.getElementById("deliveryPickup");
    const addressField = document.getElementById("addressField");
    const addressInput = document.getElementById("addressInput");
    const userName = document.getElementById("userName");
    const orderDate = document.getElementById("orderDate");
    const showTicketButton = document.getElementById("showTicket");
    const ticketContent = document.getElementById("ticketContent");
    const printTicketButton = document.getElementById("printTicket");
    const calculateTotalButton = document.getElementById("calculateTotal");
    const totalElement = document.getElementById("totalPrice");
    const resultElement = document.getElementById("result");
    const proceedPaymentButton = document.getElementById("proceedPayment");
    const regresarButton = document.getElementById("regresar");
    const reiniciarButton = document.getElementById("reiniciar");

    let pizzaPrice = 0;
    let complementPrice = 0;
    let deliveryPrice = 0;

    // Función para validar el nombre antes de cualquier acción
    function validarNombre() {
        let nombre = userName.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa tu nombre antes de continuar.");
            return false;
        }
        return true;
    }

    // Guardar datos en localStorage
    if (userName) {
        userName.addEventListener("input", function() {
            localStorage.setItem("userName", userName.value.trim());
        });
    }

    if (orderDate) {
        orderDate.addEventListener("input", function() {
            localStorage.setItem("orderDate", orderDate.value);
        });
    }

    if (deliveryHome) {
        deliveryHome.addEventListener("change", function() {
            addressField.style.display = "block";
        });
    }

    if (deliveryPickup) {
        deliveryPickup.addEventListener("change", function() {
            addressField.style.display = "none";
            localStorage.removeItem("deliveryAddress");
            addressInput.value = "";
        });
    }

    if (addressInput) {
        addressInput.addEventListener("input", function() {
            localStorage.setItem("deliveryAddress", addressInput.value.trim());
        });
    }

    // Función para calcular el total
    function calculateTotal() {
        if (!validarNombre()) return;

        pizzaPrice = parseFloat(document.getElementById('piz1')?.value) || 0;
        pizzaPrice += parseFloat(document.getElementById('piz2')?.value) || 0;
        pizzaPrice += parseFloat(document.getElementById('piz3')?.value) || 0;

        complementPrice = Array.from(document.getElementsByName('complement'))
            .filter(item => item.checked)
            .reduce((sum, item) => sum + parseFloat(item.value), 0);

        const selectedDelivery = Array.from(document.getElementsByName('delivery-method'))
            .find(item => item.checked);

        deliveryPrice = selectedDelivery ? parseFloat(selectedDelivery.value) || 0 : 0;

        const total = pizzaPrice + complementPrice + deliveryPrice;

        if (totalElement && resultElement) {
            totalElement.textContent = total.toFixed(2);
            resultElement.style.display = 'block';
        }

        localStorage.setItem("orderTotal", total.toFixed(2));
    }

    // Función para generar el ticket de compra
    function generateTicket() {
        if (!validarNombre()) return;

        const name = localStorage.getItem("userName") || "Usuario";
        const date = localStorage.getItem("orderDate") || "Fecha no especificada";
        const address = localStorage.getItem("deliveryAddress") || "Sin dirección (para llevar)";
        const total = localStorage.getItem("orderTotal") || "0.00";

        if (ticketContent) {
            ticketContent.innerHTML = `
                <h3>Ticket de Compra</h3>
                <p><strong>Cliente:</strong> ${name}</p>
                <p><strong>Fecha:</strong> ${date}</p>
                <p><strong>Dirección:</strong> ${address}</p>
                <p><strong>Total a pagar:</strong> $${total}</p>
            `;
            ticketContent.style.display = "block";
        }
    }

    // Event Listeners con validación
    if (calculateTotalButton) {
        calculateTotalButton.addEventListener("click", calculateTotal);
    }

    if (showTicketButton) {
        showTicketButton.addEventListener("click", generateTicket);
    }

if (printTicketButton) {
    printTicketButton.addEventListener("click", function() {
        if (!validarNombre()) return;

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.setTextColor(40, 40, 40);
        doc.text("Ticket de Compra", 105, 20, { align: "center" });
doc.setLineWidth(0.5); doc.line(20, 25, 190, 25);
doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(60, 60, 60);

        let y = 40; 
        const contenido = ticketContent.innerText.split("\n");

        contenido.forEach((linea) => {
            doc.text(linea, 10, y);
            y += 10; // Espaciado entre líneas
        });

        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text("Gracias por su compra", 105, 280, { align: "center" });
const img = new Image();
img.src = "image/calo.jpg"; 

img.onload = function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.addImage(img, "JPEG", 20, 50, 100, 50); // (imagen, formato, x, y, ancho, alto)
    doc.save("documento.pdf");
};

        doc.save("ticket.pdf");
    });
}

    if (proceedPaymentButton) {
        proceedPaymentButton.addEventListener("click", function() {
            if (!validarNombre()) return;
            window.location.href = "p-pago.html";
        });
    }

    if (regresarButton) {
        regresarButton.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "p-index.html";
        });
    }

    if (reiniciarButton) {
        reiniciarButton.addEventListener("click", function(event) {
            event.preventDefault();
            location.reload();
        });
    }
});
