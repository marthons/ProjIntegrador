import { arrayDestaques } from "./postagens.js";

for (let i = 0; i < arrayDestaques.length; i++) {
    let article = document.createElement("article");

    article.innerHTML = `
    <div class = "destaque-container">
        <h3 class = "dest">${arrayDestaques[i].filme}</h3>
        <img class="img-dest" src="${arrayDestaques[i].imagem}" alt="${arrayDestaques[i].filme}" classe="imagem">
        <p class="sobre ">${arrayDestaques[i].sinopse}</p>
        <button onclick="window.location.href='${arrayDestaques[i].link}'">Assistir</button>
    </div>

     `;

    article.id = `post-${i + 1}`

    let main = document.querySelector("main");
    main.appendChild(article);

}

let h3Element = document.createElement("h3");
h3Element.textContent = "Os Melhores filmes você encontra aqui, na IMDB.";
main.appendChild(h3Element);