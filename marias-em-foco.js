const modal = document.getElementById("modal");

const modalTitulo =
    document.getElementById("modalTitulo");

const modalMulher =
    document.getElementById("modalMulher");

const modalTexto =
    document.getElementById("modalTexto");


function mostrarInfo(titulo, mulher, texto) {

    modalTitulo.textContent = titulo;

    modalMulher.textContent = mulher;

    modalTexto.textContent = texto;

    modal.classList.add("mostrar");

}


function fecharModal() {

    modal.classList.remove("mostrar");

}


modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {

            fecharModal();

        }

    }
);

function abrirLivro(link) {

window.open(
    link,
    "_blank"
);

}

function abrirTrailer(link) {

window.open(
    link,
    "_blank"
);

}
