import { arrayDestaques } from "./postagens.js";

for (let i = 0; i < arrayDestaques.length; i++) {
    let article = document.createElement("article");

    article.innerHTML = `
     <h3>${arrayDestaques[i].filme}</h3>
     <img src="${arrayDestaques[i].imagem}" alt="${arrayDestaques[i].filme}" classe="imagem"><br><br>
     <p class="sobre">${arrayDestaques[i].sinopse}</p>
     <a href="${arrayDestaques[i].link}">Clique para assistir</a>
     `;

    article.id = `post-${i + 1}`

    let main = document.querySelector("main");
    main.appendChild(article);

}

let h3Element = document.createElement("h3");
h3Element.textContent = "Os Melhores filmes você encontra aqui, na IMDB.";
main.appendChild(h3Element);