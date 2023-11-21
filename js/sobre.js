document.addEventListener("DOMContentLoaded", function() {
    var textosOcultos = document.querySelectorAll('.textoOculto');
    textosOcultos.forEach(function(texto) {
        texto.style.display = "none";
    });
});

function toggleTexto(idTexto, idBotao) {
    var texto = document.getElementById(idTexto);
    var botao = document.getElementById(idBotao);

    if (texto.style.display === "none" || texto.style.display === "") {
        texto.style.display = "block";
        botao.innerText = "Pause";
    } else {
        texto.style.display = "none";
        botao.innerText = "Play";
    }
}
