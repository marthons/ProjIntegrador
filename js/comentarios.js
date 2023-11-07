document.addEventListener("DOMContentLoaded", function() {
    const comentarioForm = document.getElementById("comentario-form");
    const comentariosDiv = document.getElementById("comentarios");

    comentarioForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nomeUsuarioInput = document.getElementById("nome-usuario");
        const nomeFilmeSerie = document.getElementById("nome-filme-serie").value;
        const comentario = document.getElementById("comentario").value;
        const nota = document.getElementById("nota").value;

        // Adicione "@" automaticamente ao nome de usuário
        const nomeUsuario = `@${nomeUsuarioInput.value}`;

        // Crie um novo elemento para exibir o comentário
        const novoComentario = document.createElement("div");
        novoComentario.className = "comentario";
        novoComentario.innerHTML = `
            <h3>${nomeUsuario}</h3>
            <p id="filme-serie">Filme/Série: ${nomeFilmeSerie}</p>
            <p>Comentário: ${comentario}</p>
            <p id="nota">Nota: ${nota}/5</p>
        `;

        // Adicione o novo comentário à lista de comentários
        comentariosDiv.appendChild(novoComentario);

        // Limpe os campos do formulário
        comentarioForm.reset();
    });
});
