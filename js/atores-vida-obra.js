import { arrayAtores } from "./postagens.js";
import { arrayDestaques } from "./postagens.js";


for (let i = 0; i < arrayAtores.length; i++) {
    let article = document.createElement("article");

    article.innerHTML = `
    <div class="content">
    <div class="item">
    <div class="comment">
     <h3>${arrayAtores[i].ator}</h3>
     <img src="${arrayAtores[i].imagem}" alt="${arrayAtores[i].ator}" classe="imagem"><br><br>
     <p class="sobre">Vida: ${arrayAtores[i].vida}</p>
     <pclass="sobre">Obra: ${arrayAtores[i].obras}</p>
     </div>
     </div>
     </div>
     `;

    article.id = `post-${i + 1}`

    let main = document.querySelector("main");
    main.appendChild(article);

}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const input = document.querySelector("input[name='q']");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita o envio padrão do formulário
  
      const searchTerm = input.value.toLowerCase();
  
      // Filtra os resultados nos arrays de filmes e atores
      const resultadosFilmes = arrayDestaques.filter((item) =>
        item.filme.toLowerCase().includes(searchTerm)
      );
  
      const resultadosAtores = arrayAtores.filter((item) =>
        item.ator.toLowerCase().includes(searchTerm)
      );
  
      // Combina os resultados
      const resultados = [...resultadosFilmes, ...resultadosAtores];
  
      // Cria uma string HTML para os resultados
      const resultadosHTML = resultados
        .map((resultado, index) => {
          if ("filme" in resultado) {
            // Se for um filme
            return `
              <article id="post-${index + 1}">
                <h3>${resultado.filme}</h3>
                <img src="${resultado.imagem}" alt="${resultado.filme}" class="imagem"><br><br>
                <p class="sobre">${resultado.sinopse}</p>
                <a href="${resultado.link}" target="_blank">Clique para assistir</a>
              </article>
            `;
          } else if ("ator" in resultado) {
            // Se for um ator
            return `
              <article id="post-${index + 1}">
                <h3>${resultado.ator}</h3>
                <img src="${resultado.imagem}" alt="${resultado.ator}" class="imagem"><br><br>
                <p class="sobre">Vida: ${resultado.vida}</p>
                <p class="obras"><strong>Obras:</strong>Obra: ${resultado.obras}</p>
              </article>
            `;
          }
        })
        .join(""); // Converte o array de strings em uma única string
  
      // Abre uma nova página e exibe os resultados
      const novaPagina = window.open("");
      novaPagina.document.write(`
        <html>
          <head>
            <title>Resultados da Pesquisa</title>
            <style>
            * {
            background-color: #000;
            margin: 0;
            padding: 0;
            justify-content: center;
            align-items: center;
        }
        article{
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        h3 {
            font-size: 5rem;
            width: auto;
            height: auto;
            color: #BDB76B;
            text-align: center;
        }
        p {
            color: #D0B312;
            text-align: center;
            width: auto;
            height: auto;
            justify-content: center;
        }
        img:hover {
            scale: 1.1;
        }
        .imagem {
            align-items: flex-star;
            justify-content: center
            width: auto;
            height: auto;
            margin-left: 20px;
        }
        a {
            aling-items: center;
            color: #DAA520;
            text-align: center;

        }
        a:hover {
            color: #808000;
            text-decoration: none;
            font-size: 1.5rem;
        }
        .obras{
            margin: 1rem;
            padding: 5px:
        }
        .vida{
            margin: 1rem;
            padding: 5px:
        }
            </style>
          </head>
          <body>
            ${resultadosHTML}
          </body>
        </html>
      `);
    });
  });
  
