document.getElementById("regresar").addEventListener("click", function (event) {
    event.preventDefault(); 
    window.location.href = "l-index.html"; 
});
document.getElementById("reiniciar").addEventListener("click", function(event) {
    event.preventDefault(); 
    location.reload(); 
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".b1").forEach(button => {
        button.addEventListener("click", function () {
            actualizarContenido(this.id);
        });
    });
});

function actualizarContenido(selected) {
    let info = "", bgImage = "";
switch (selected) {
case "amor":
info =" <br>Tema universal que ha sido explorado a lo largo de la historia, " +
    "en diversas formas y estilos.<br> Se manifiesta como una emoción profunda" +
    "que puede ser apasionada, melancólica, idealizada o incluso trágica <br>"+
    "<img src='image/amo.jpg' width='200px'>  <a href='y-amor.html'>ver poemas</a>";
break;
case "muerte":
    info = " <br>En la poesía griega antigua, la muerte se"+
    "representaba como un fenómeno ligado al destino, con una fuerte influencia"+
    "de la mitología.<br> En la literatura moderna, como una experiencia emocional y filosófica <br>"+
    "<img src='image/muer.jpg' width='200px'><a href='y-muert.html'>ver poemas</a>";
break;
case "naturaleza":
    info = "Se presenta como un refugio emocional y"+
    "un espejo del alma humana. En la poesía contemporánea, se ha "+
    "convertido en un espacio de crítica ecológica y conciencia ambiental, "+
    "explorando la relación entre el ser humano y su entorno.<br>" +
    "<img src='image/nat.jpg' width='200px'><a href='y-natu.html'>ver poemas</a>";
break;
case "tiempo":
    info = "El tiempo  asociaba con la belleza y la decadencia,"+
    "mientras que en la poesía moderna se ha convertido en un espacio de"+
    "introspección y cuestionamiento sobre la existencia.<br>" +
    "<img src='image/tie.jpg' width='200px'><a href='y-tiem.html'>ver poemas</a>";
break;
case "temor":
    info = "Para expresar inquietudes existenciales,"+ 
    "angustias personales y reflexiones sobre lo desconocido.<br>En muchos casos,"+
    "el temor se presenta como una fuerza que paraliza,"+
    "pero también como un impulso para la introspección y el crecimiento.<br>"+
    "<img src='image/tem.jpg' width='200px'><a href='y-temor.html'>ver poemas</a>";
break;
case "determinacion":
    info ="Se manifiesta como una fuerza interna que impulsa al individuo a "+
    "superar obstáculos, alcanzar metas y mantenerse firme en sus convicciones.<br> "+
    "Es un tema recurrente en la literatura, donde los poetas han utilizado versos" +
    "para expresar la lucha contra la adversidad, la perseverancia y el deseo de transformación.<br>" +
    "<img src='image/baki.jpg' width='200px'><a href='y-deter.html'>ver poemas</a>";
break;
case "tristeza":
    info = " Se manifiesta en versos que expresan melancolía, pérdida, "+
    "nostalgia y dolor emocional. A través de metáforas y simbolismos, "+
    "los poetas han capturado la esencia del sufrimiento humano, convirtiendo "+
    "la tristeza en una fuente de inspiración artística<br>" +
    "<img src='image/triz.jpg' width='200px'><a href='y-trist.html'>ver poemas</a>";
break;;
default:
    info = "Selecciona un tema.";
break;
}

    document.getElementById("info-apartado").innerHTML = `<h3>${selected}</h3><p>${info}</p>`;

    document.body.style.backgroundImage = bgImage;
}

