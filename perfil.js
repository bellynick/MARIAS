const modal = document.getElementById("modalAvatares");
const fotoPerfil = document.getElementById("fotoPerfil");


function abrirAvatares() {

    modal.classList.add("mostrar");

}


function fecharAvatares() {

    modal.classList.remove("mostrar");

}


function selecionarAvatar(caminho) {

    fotoPerfil.src = caminho;

    localStorage.setItem(
        "avatarUsuario",
        caminho
    );

    fecharAvatares();

}


/* RECUPERA O AVATAR ESCOLHIDO */

const avatarSalvo =
    localStorage.getItem("avatarUsuario");


if (avatarSalvo) {

    fotoPerfil.src = avatarSalvo;

}


/* ALTERAR SENHA */

function alterarSenha() {

    const novaSenha =
        prompt("Digite sua nova senha:");

    if (!novaSenha) {
        return;
    }


    if (novaSenha.length < 6) {

        alert(
            "A senha precisa ter pelo menos 6 caracteres."
        );

        return;

    }


    localStorage.setItem(
        "senhaUsuario",
        novaSenha
    );


    alert(
        "Senha alterada com sucesso!"
    );

}


/* SAIR */

function sair() {

    // Cria a caixa de confirmação
    const confirmar = document.createElement("div");

    confirmar.className = "confirmacao-sair";

    confirmar.innerHTML = `
        <div class="caixa-confirmacao">

            <h2>Sair da conta?</h2>

            <p>Tem certeza de que deseja sair da sua conta?</p>

            <div class="botoes-confirmacao">

                <button class="botao-sim" id="botaoSim">
                    Sim
                </button>
                

                <button class="botao-nao" id="botaoNao">
                    Não
                </button>


            </div>

        </div>
    `;

    document.body.appendChild(confirmar);


    // Botão NÃO
    document
        .getElementById("botaoNao")
        .addEventListener("click", function () {

            confirmar.remove();

        });


    // Botão SIM
    document
        .getElementById("botaoSim")
        .addEventListener("click", function () {

            // Remove os dados do usuário, caso estejam salvos
            localStorage.removeItem("usuarioLogado");

            // Volta para a página de login
            window.location.href = "login.html";

        });

}




/* FECHAR MODAL CLICANDO FORA */

modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {

            fecharAvatares();

        }

    }
);