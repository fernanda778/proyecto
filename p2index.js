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

    // Verificar existencia de elementos antes de agregar eventos
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

    function calculateTotal() {
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

    function generateTicket() {
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

    if (showTicketButton) {
        showTicketButton.addEventListener("click", generateTicket);
    }

    if (printTicketButton) {
        printTicketButton.addEventListener("click", function() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            doc.text(ticketContent.innerText, 10, 10);
            doc.save("ticket.pdf");
        });
    }

    if (calculateTotalButton) {
        calculateTotalButton.addEventListener("click", calculateTotal);
    }

    if (proceedPaymentButton) {
        proceedPaymentButton.addEventListener("click", function() {
            window.location.href = "p-pago.html";
        });
    }

if (regresarButton) {
    regresarButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "p-index.html"; // Reemplaza "tu-pagina.html" con la URL específica
    });
}

    if (reiniciarButton) {
        reiniciarButton.addEventListener("click", function(event) {
            event.preventDefault();
            location.reload(); // Recargar la página correctamente
        });
    }
});