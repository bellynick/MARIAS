// =========================
// ANIMAÇÃO DAS SEÇÕES
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const secoes = document.querySelectorAll(
        ".conteudo, .logo-projeto, .equipe, .frase"
    );


    secoes.forEach(function (secao) {

        secao.classList.add("animar");

    });


    const observador = new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visivel");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    secoes.forEach(function (secao) {

        observador.observe(secao);

    });

});


// =========================
// BOTÃO CENTRAL
// =========================

const botaoCentral = document.querySelector(".botao-central");


if (botaoCentral) {

    botaoCentral.addEventListener("click", function (event) {

        event.preventDefault();

        console.log("Botão central clicado.");

    });

}