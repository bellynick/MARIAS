const perguntas = [


{
    pergunta: "Quando aparece um desafio, você...",
    opcoes: [
        ["Procuro uma solução e não desisto.", "curie"],
        ["Transformo a dificuldade em algo criativo.", "frida"],
        ["Defendo aquilo que acredito.", "malala"],
        ["Penso em uma ideia diferente.", "ada"],
        ["Encaro o desafio e sigo em frente.", "amelia"]
    ]
},

{
    pergunta: "Qual dessas palavras mais combina com você?",
    opcoes: [
        ["Curiosa", "curie"],
        ["Criativa", "frida"],
        ["Corajosa", "malala"],
        ["Inteligente", "ada"],
        ["Aventureira", "amelia"]
    ]
},

{
    pergunta: "Se pudesse mudar uma coisa no mundo, você escolheria...",
    opcoes: [
        ["Ajudar a ciência a avançar.", "curie"],
        ["Incentivar as pessoas a se expressarem.", "frida"],
        ["Lutar por educação para todos.", "malala"],
        ["Criar novas tecnologias.", "ada"],
        ["Inspirar pessoas a explorar novos caminhos.", "amelia"]
    ]
},

{
    pergunta: "Em um trabalho em grupo, você costuma ser...",
    opcoes: [
        ["A pessoa que pesquisa tudo.", "curie"],
        ["A pessoa cheia de ideias.", "frida"],
        ["A pessoa que defende o grupo.", "malala"],
        ["A pessoa que resolve os problemas.", "ada"],
        ["A pessoa que toma iniciativa.", "amelia"]
    ]
},

{
    pergunta: "Qual atividade parece mais interessante?",
    opcoes: [
        ["Fazer uma descoberta científica.", "curie"],
        ["Criar uma obra de arte.", "frida"],
        ["Participar de um projeto social.", "malala"],
        ["Inventar alguma coisa.", "ada"],
        ["Conhecer um lugar novo.", "amelia"]
    ]
},

{
    pergunta: "O que você gostaria de deixar como legado?",
    opcoes: [
        ["Conhecimento.", "curie"],
        ["Arte e expressão.", "frida"],
        ["Mudança e igualdade.", "malala"],
        ["Inovação.", "ada"],
        ["Inspiração.", "amelia"]
    ]
}


];

const resultados = {


curie: {
    nome: "Marie Curie",
    inicial: "M",
    descricao:
        "Você tem um perfil curioso, determinado e apaixonado por conhecimento. Assim como Marie Curie, você não tem medo de investigar, aprender e buscar respostas para grandes perguntas."
},

frida: {
    nome: "Frida Kahlo",
    inicial: "F",
    descricao:
        "Você é criativa, autêntica e gosta de mostrar sua própria maneira de enxergar o mundo. Assim como Frida Kahlo, transforma experiências e sentimentos em expressão."
},

malala: {
    nome: "Malala Yousafzai",
    inicial: "M",
    descricao:
        "Você é corajosa e acredita que sua voz pode fazer diferença. Assim como Malala, valoriza a educação, a liberdade e a possibilidade de transformar a sociedade."
},

ada: {
    nome: "Ada Lovelace",
    inicial: "A",
    descricao:
        "Você é inteligente, curiosa e gosta de imaginar possibilidades. Assim como Ada Lovelace, combina criatividade e lógica para pensar em novas ideias."
},

amelia: {
    nome: "Amelia Earhart",
    inicial: "A",
    descricao:
        "Você é aventureira, independente e gosta de ultrapassar limites. Assim como Amelia Earhart, não deixa o medo impedir você de seguir novos caminhos."
}


};

let perguntaAtual = 0;
let pontos = {
curie: 0,
frida: 0,
malala: 0,
ada: 0,
amelia: 0
};

const intro = document.querySelector(".intro");
const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

const perguntaTexto = document.getElementById("pergunta");
const opcoesDiv = document.getElementById("opcoes");

const numeroPergunta = document.getElementById("numeroPergunta");
const progresso = document.getElementById("progresso");

document.getElementById("startBtn").addEventListener("click", iniciarQuiz);

function iniciarQuiz() {


intro.classList.add("hidden");
quiz.classList.remove("hidden");

mostrarPergunta();


}

function mostrarPergunta() {


const pergunta = perguntas[perguntaAtual];

perguntaTexto.textContent = pergunta.pergunta;

numeroPergunta.textContent =
    `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

const porcentagem =
    (perguntaAtual / perguntas.length) * 100;

progresso.style.width = porcentagem + "%";

opcoesDiv.innerHTML = "";

pergunta.opcoes.forEach(opcao => {

    const botao = document.createElement("button");

    botao.classList.add("opcao");

    botao.textContent = opcao[0];

    botao.addEventListener("click", () => escolherResposta(opcao[1]));

    opcoesDiv.appendChild(botao);

});


}

function escolherResposta(personagem) {


pontos[personagem]++;

perguntaAtual++;

if (perguntaAtual < perguntas.length) {

    mostrarPergunta();

} else {

    mostrarResultado();

}


}

function mostrarResultado() {


quiz.classList.add("hidden");
resultado.classList.remove("hidden");

let vencedor = Object.keys(pontos).reduce((a, b) =>
    pontos[a] > pontos[b] ? a : b
);

const mulher = resultados[vencedor];

document.getElementById("nomeResultado").textContent =
    mulher.nome;

document.getElementById("descricaoResultado").textContent =
    mulher.descricao;

document.getElementById("inicial").textContent =
    mulher.inicial;

progresso.style.width = "100%";


}

function reiniciarQuiz() {


perguntaAtual = 0;

pontos = {
    curie: 0,
    frida: 0,
    malala: 0,
    ada: 0,
    amelia: 0
};

resultado.classList.add("hidden");
quiz.classList.remove("hidden");

mostrarPergunta();


}
