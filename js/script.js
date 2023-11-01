function adicionarComentario() {

    let nome = document.getElementById("nome").value;
    let comentario = document.getElementById("comentario").value;
    let nota = document.getElementById("nota").value;

    // Verificar se os campos não estão vazios
    if (nome.trim() === "" || comentario.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;        
    }

    // Criar um elemento para exibir o novo comentário
    let novoComentario = document.createElement("div");
    novoComentario.className = "comentario";

    // Criar elementos para mostrar o nome, comentário e nota
    let nomeElement = document.createElement("p");
    nomeElement.className = "nome-comentario";
    nomeElement.textContent = nome;

    let comentarioElement = document.createElement("p");
    comentarioElement.className = "texto-comentario";
    comentarioElement.textContent = comentario;

    let notaElement = document.createElement("p");
    notaElement.className = "nota-comentario";
    notaElement.textContent = "Avaliação: " + nota;

    // Anexar elementos ao novoComentario
    novoComentario.appendChild(nomeElement);
    novoComentario.appendChild(comentarioElement);
    novoComentario.appendChild(notaElement);

    // Anexar o novoComentario ao elemento de comentários existente
    let comentariosContainer = document.getElementById("comentarios-container");
    comentariosContainer.appendChild(novoComentario);

    // Limpar os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("comentario").value = "";
    document.getElementById("nota").value = "5";
}
