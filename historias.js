/* ================================= */
/* CARROSSEL */
/* ================================= */

const slides =
    document.querySelectorAll(".slide");

const indicadores =
    document.querySelectorAll(".indicador");

const anterior =
    document.getElementById("anterior");

const proximo =
    document.getElementById("proximo");


let slideAtual = 0;


/* ================================= */
/* MOSTRAR SLIDE */
/* ================================= */

function mostrarSlide(numero) {

    slides.forEach(function(slide) {

        slide.classList.remove("ativo");

    });


    indicadores.forEach(function(indicador) {

        indicador.classList.remove("ativo");

    });


    slides[numero].classList.add("ativo");

    indicadores[numero].classList.add("ativo");

}


/* ================================= */
/* PRÓXIMO */
/* ================================= */

function proximoSlide() {

    slideAtual++;


    if (slideAtual >= slides.length) {

        slideAtual = 0;

    }


    mostrarSlide(slideAtual);

}


/* ================================= */
/* ANTERIOR */
/* ================================= */

function slideAnterior() {

    slideAtual--;


    if (slideAtual < 0) {

        slideAtual = slides.length - 1;

    }


    mostrarSlide(slideAtual);

}


/* ================================= */
/* BOTÕES */
/* ================================= */

if (proximo) {

    proximo.addEventListener(
        "click",
        proximoSlide
    );

}


if (anterior) {

    anterior.addEventListener(
        "click",
        slideAnterior
    );

}


/* ================================= */
/* INDICADORES */
/* ================================= */

indicadores.forEach(
    function(indicador, index) {

        indicador.addEventListener(
            "click",
            function() {

                slideAtual = index;

                mostrarSlide(slideAtual);

            }
        );

    }
);


/* ================================= */
/* TROCA AUTOMÁTICA */
/* ================================= */

setInterval(
    proximoSlide,
    5000
);


/* ================================= */
/* PESQUISA */
/* ================================= */

const botaoPesquisa =
    document.getElementById("botao-pesquisa");

const areaPesquisa =
    document.getElementById("area-pesquisa");

const campoPesquisa =
    document.getElementById("campo-pesquisa");

const enviarPesquisa =
    document.getElementById("enviar-pesquisa");

const fecharPesquisa =
    document.getElementById("fechar-pesquisa");

const sugestoes =
    document.getElementById("sugestoes");

const cards =
    document.querySelectorAll(".card-historia");


/* ================================= */
/* NOMES DAS MULHERES */
/* ================================= */

const mulheres = [

    "Princesa Diana",

    "Rosalind Franklin",

    "Ada Lovelace",

    "Katherine Johnson",

    "Marielle Franco",

    "Tarana Burke",

    "Malala Yousafzai",

    "Melanie Klein",

    "Karen Horney",

    "Nise da Silveira",

    "Tarsila do Amaral",

    "Clarice Lispector",

    "Rita Lee",

    "Marie Curie"

];


/* ================================= */
/* ABRIR PESQUISA */
/* ================================= */

if (botaoPesquisa) {

    botaoPesquisa.addEventListener(
        "click",
        function() {

            areaPesquisa.classList.add("aberta");

            campoPesquisa.focus();

        }
    );

}


/* ================================= */
/* FECHAR PESQUISA */
/* ================================= */

if (fecharPesquisa) {

    fecharPesquisa.addEventListener(
        "click",
        function() {

            areaPesquisa.classList.remove("aberta");

            campoPesquisa.value = "";

            esconderSugestoes();

            mostrarTodasAsMulheres();

        }
    );

}


/* ================================= */
/* NORMALIZAR TEXTO */
/* ================================= */

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}


/* ================================= */
/* SUGESTÕES ENQUANTO DIGITA */
/* ================================= */

if (campoPesquisa) {

    campoPesquisa.addEventListener(
        "input",
        function() {

            const texto =
                normalizarTexto(
                    campoPesquisa.value.trim()
                );


            /* Se estiver vazio */

            if (texto === "") {

                esconderSugestoes();

                return;

            }


            /* Procurar nomes */

            const resultados =
                mulheres.filter(
                    function(mulher) {

                        return normalizarTexto(
                            mulher
                        ).includes(texto);

                    }
                );


            mostrarSugestoes(resultados);

        }
    );

}


/* ================================= */
/* MOSTRAR SUGESTÕES */
/* ================================= */

function mostrarSugestoes(resultados) {

    if (!sugestoes) {
        return;
    }


    sugestoes.innerHTML = "";


    /* Nenhum resultado */

    if (resultados.length === 0) {

        const mensagem =
            document.createElement("div");


        mensagem.className =
            "sem-sugestao";


        mensagem.textContent =
            "Nenhuma mulher encontrada.";


        sugestoes.appendChild(mensagem);


        sugestoes.classList.add("aberta");


        return;

    }


    /* Criar cada sugestão */

    resultados.forEach(
        function(mulher) {

            const botao =
                document.createElement("button");


            botao.type = "button";


            botao.className =
                "sugestao";


            botao.textContent =
                mulher;


            /* Quando clicar no nome */

            botao.addEventListener(
                "click",
                function() {

                    campoPesquisa.value =
                        mulher;


                    esconderSugestoes();


                    campoPesquisa.focus();

                }
            );


            sugestoes.appendChild(botao);

        }
    );


    sugestoes.classList.add("aberta");

}


/* ================================= */
/* ESCONDER SUGESTÕES */
/* ================================= */

function esconderSugestoes() {

    if (!sugestoes) {
        return;
    }


    sugestoes.innerHTML = "";

    sugestoes.classList.remove("aberta");

}


/* ================================= */
/* BOTÃO PESQUISAR */
/* ================================= */

if (enviarPesquisa) {

    enviarPesquisa.addEventListener(
        "click",
        fazerPesquisa
    );

}


/* ================================= */
/* ENTER TAMBÉM PESQUISA */
/* ================================= */

if (campoPesquisa) {

    campoPesquisa.addEventListener(
        "keydown",
        function(evento) {

            if (evento.key === "Enter") {

                fazerPesquisa();

            }

        }
    );

}


/* ================================= */
/* FAZER PESQUISA */
/* ================================= */

function fazerPesquisa() {

    /* Esconde as sugestões */

    esconderSugestoes();


    const pesquisa =
        normalizarTexto(
            campoPesquisa.value.trim()
        );


    /* Se estiver vazio */

    if (pesquisa === "") {

        mostrarTodasAsMulheres();

        return;

    }


    let encontrou = false;


    cards.forEach(function(card) {

        const nome =
            card.querySelector("h4");


        if (!nome) {

            return;

        }


        const nomeMulher =
            normalizarTexto(
                nome.textContent
            );


        if (
            nomeMulher.includes(pesquisa)
        ) {

            card.style.display = "block";

            encontrou = true;

        } else {

            card.style.display = "none";

        }

    });


    mostrarMensagemResultado(
        encontrou,
        pesquisa
    );

}


/* ================================= */
/* MOSTRAR TODAS */
/* ================================= */

function mostrarTodasAsMulheres() {

    cards.forEach(function(card) {

        card.style.display = "block";

    });


    removerMensagemResultado();

}


/* ================================= */
/* SEM RESULTADO */
/* ================================= */

function mostrarMensagemResultado(
    encontrou,
    pesquisa
) {

    removerMensagemResultado();


    if (
        !encontrou &&
        pesquisa.length > 0
    ) {

        const mensagem =
            document.createElement("div");


        mensagem.className =
            "sem-resultado";


        mensagem.textContent =
            "Nenhuma mulher encontrada para: " +
            campoPesquisa.value;


        const grade =
            document.getElementById(
                "grade-historias"
            );


        if (grade) {

            grade.appendChild(mensagem);

        }

    }

}


/* ================================= */
/* REMOVER MENSAGEM */
/* ================================= */

function removerMensagemResultado() {

    const mensagem =
        document.querySelector(
            ".sem-resultado"
        );


    if (mensagem) {

        mensagem.remove();

    }

}


/* ================================= */
/* BORBOLETA — CONTROLE POR GÊNERO */
/* ================================= */

document.addEventListener("DOMContentLoaded", function () {

    /*
     * Recupera o gênero salvo durante o cadastro.
     */
    const generoUsuario =
        localStorage.getItem("generoUsuario");


    /*
     * Procura a borboleta pelo CLASS.
     *
     * No HTML ela está assim:
     *
     * class="borboleta"
     */
    const borboleta =
        document.querySelector(".borboleta");


    /*
     * Se a borboleta não existir na página,
     * não fazemos nada.
     */
    if (!borboleta) {
        return;
    }


    /*
     * HOMEM
     *
     * Se o usuário escolheu homem,
     * a borboleta desaparece completamente.
     */
    if (
        generoUsuario &&
        generoUsuario.toLowerCase().trim() === "homem"
    ) {

        borboleta.remove();

        return;
    }


    /*
     * MULHER
     *
     * Se escolheu mulher, a borboleta permanece.
     */
    if (
        generoUsuario &&
        generoUsuario.toLowerCase().trim() === "mulher"
    ) {

        borboleta.style.display = "flex";

        return;
    }


    /*
     * Se não houver gênero salvo,
     * também não mostra a borboleta.
     */
    borboleta.remove();

});