
  // Evento para manejar el cambio de selección
  document.getElementById("tema").addEventListener("change", function () {
    const selected = this.value;
    mostrarInformacionTema(selected);
  });

document.getElementById("reiniciar").addEventListener("click", function () {
  location.reload(); // Recarga toda la página
});


  // Función para mostrar la información del tema seleccionado
  function mostrarInformacionTema(selected) {
    const contenedor = document.getElementById("info-apartado");
    let info = "";

    switch (selected) {
      case "amor":
        info = "<br>Tema universal que ha sido explorado a lo largo de la historia, " +
               "en diversas formas y estilos.<br> Se manifiesta como una emoción profunda " +
               "que puede ser apasionada, melancólica, idealizada o incluso trágica.<br>" +
               "<img src='image/amo.jpg' width='200px'>";
        break;

      case "muerte":
        info = "<br>En la poesía griega antigua, la muerte se representaba como un fenómeno " +
               "ligado al destino, con una fuerte influencia de la mitología.<br> En la literatura moderna, " +
               "como una experiencia emocional y filosófica.<br>" +
               "<img src='image/muer.jpg' width='200px'>";
        break;

      case "naturaleza":
        info = "Se presenta como un refugio emocional y un espejo del alma humana. En la poesía contemporánea, " +
               "se ha convertido en un espacio de crítica ecológica y conciencia ambiental, explorando la relación " +
               "entre el ser humano y su entorno.<br>" +
               "<img src='image/nat.jpg' width='200px'>";
        break;

      case "tiempo":
        info = "El tiempo se asociaba con la belleza y la decadencia, mientras que en la poesía moderna se ha convertido " +
               "en un espacio de introspección y cuestionamiento sobre la existencia.<br>" +
               "<img src='image/tie.jpg' width='200px'>";
        break;

      case "temor":
        info = "Para expresar inquietudes existenciales, angustias personales y reflexiones sobre lo desconocido.<br>" +
               "En muchos casos, el temor se presenta como una fuerza que paraliza, pero también como un impulso para la introspección y el crecimiento.<br>" +
               "<img src='image/tem.jpg' width='200px'>";
        break;

      case "determinacion":
        info = "Se manifiesta como una fuerza interna que impulsa al individuo a superar obstáculos, alcanzar metas y mantenerse firme en sus convicciones.<br>" +
               "Es un tema recurrente en la literatura, donde los poetas han utilizado versos para expresar la lucha contra la adversidad, la perseverancia y el deseo de transformación.<br>" +
               "<img src='image/baki.jpg' width='200px'>";
        break;

      case "tristeza":
        info = "Se manifiesta en versos que expresan melancolía, pérdida, nostalgia y dolor emocional. A través de metáforas y simbolismos, " +
               "los poetas han capturado la esencia del sufrimiento humano, convirtiendo la tristeza en una fuente de inspiración artística.<br>" +
               "<img src='image/triz.jpg' width='200px'>";
        break;

      default:
        info = "Selecciona un tema.";
        break;
    }

    contenedor.innerHTML = `<h3>${selected.toUpperCase()}</h3><p>${info}</p>`;
    contenedor.style.display = "block";
  }

