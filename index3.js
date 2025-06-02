
document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".b1");
  const contenedorPoemas = document.getElementById("contenedor-poemas");
  const contenedorInfo = document.getElementById("info-apartado");

  const botonReiniciar = document.getElementById("reiniciar");
  if (botonReiniciar) {
    botonReiniciar.addEventListener("click", function (event) {
      event.preventDefault();
      location.reload();
    });
  }
document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".b1");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const tema = boton.getAttribute("data-tema");
      window.location.href = `${tema}.html`; // redirige a amor.html, muerte.html, etc.
    });
  });
});
}