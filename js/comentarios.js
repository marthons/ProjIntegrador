import { arrayDestaques } from "./postagens.js";
import { arrayAtores } from "./postagens.js";

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const result = document.getElementById("result");

  stars.forEach((star) => {
    star.addEventListener("mouseover", function () {
      const rating = this.getAttribute("data-rating");
      highlightStars(rating);
    });

    star.addEventListener("mouseout", function () {
      const currentRating = result.textContent.match(/\d+/);
      highlightStars(currentRating);
    });

    star.addEventListener("click", function () {
      const rating = this.getAttribute("data-rating");
      result.textContent = `Avaliação: ${rating} estrelas`;
    });
  });

  function highlightStars(rating) {
    stars.forEach((star) => {
      if (star.getAttribute("data-rating") <= rating) {
        star.style.color = "gold";
      } else {
        star.style.color = "grey";
      }
    });
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const comentarioForm = document.getElementById("comentario-form");
  const comentariosDiv = document.getElementById("comentarios");

  comentarioForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeUsuarioInput = document.getElementById("nome-usuario");
    const nomeFilmeSerie = document.getElementById("nome-filme-serie").value;
    const comentario = document.getElementById("comentario").value;
    let nota = Math.floor(Math.random() * 5) + 1;

    // Adicione "@" automaticamente ao nome de usuário
    const nomeUsuario = `@${nomeUsuarioInput.value}`;

    // Crie um novo elemento para exibir o comentário
    const novoComentario = document.createElement("div");
    novoComentario.className = "comentario";
    let estrelasHTML = "";
    for (let i = 1; i <= nota; i++) {
      estrelasHTML += '<span class="star2" data-rating="' + i + '">&#9733;</span>';
    }
    novoComentario.innerHTML = `
            <h3>${nomeUsuario}</h3>
            <p id="filme-serie">Filme/Série: ${nomeFilmeSerie}</p>
            <p>Comentário: ${comentario}</p>
            ${estrelasHTML}
        `;

    // Adicione o novo comentário à lista de comentários
    comentariosDiv.appendChild(novoComentario);

    // Limpe os campos do formulário
    comentarioForm.reset();
  });
});

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
                <p class="obras"><strong>Obras:</strong>Obra ${resultado.obras}</p>
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
