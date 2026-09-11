/* ============================= */
/* CADASTRO */
/* ============================= */

const formCadastro = document.getElementById("formCadastro");

if (formCadastro) {

    formCadastro.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const usuario =
            document.getElementById("usuario").value.trim();

        const senha =
            document.getElementById("senha").value;

        const confirmarSenha =
            document.getElementById("confirmarSenha").value;

        const termos =
            document.getElementById("termos").checked;

        /* GÊNERO */

        const generoSelecionado =
            document.querySelector('input[name="genero"]:checked');


        let valido = true;


        /* ============================= */
        /* LIMPAR ERROS */
        /* ============================= */

        document.getElementById("erroEmail").textContent = "";

        document.getElementById("erroUsuario").textContent = "";

        document.getElementById("erroSenha").textContent = "";

        document.getElementById("erroConfirmarSenha").textContent = "";

        document.getElementById("erroTermos").textContent = "";


        const erroGenero =
            document.getElementById("erroGenero");

        if (erroGenero) {
            erroGenero.textContent = "";
        }


        /* ============================= */
        /* EMAIL */
        /* ============================= */

        if (email === "") {

            document.getElementById("erroEmail").textContent =
                "Digite seu e-mail.";

            valido = false;

        } else if (!validarEmail(email)) {

            document.getElementById("erroEmail").textContent =
                "Digite um e-mail válido.";

            valido = false;
        }


        /* ============================= */
        /* USUÁRIO */
        /* ============================= */

        if (usuario === "") {

            document.getElementById("erroUsuario").textContent =
                "Digite um nome de usuário.";

            valido = false;

        } else if (usuario.length < 3) {

            document.getElementById("erroUsuario").textContent =
                "O usuário deve ter pelo menos 3 caracteres.";

            valido = false;
        }


        /* ============================= */
        /* SENHA */
        /* ============================= */

        if (senha === "") {

            document.getElementById("erroSenha").textContent =
                "Crie uma senha.";

            valido = false;

        } else if (senha.length < 6) {

            document.getElementById("erroSenha").textContent =
                "A senha precisa ter pelo menos 6 caracteres.";

            valido = false;
        }


        /* ============================= */
        /* CONFIRMAR SENHA */
        /* ============================= */

        if (confirmarSenha !== senha) {

            document.getElementById("erroConfirmarSenha").textContent =
                "As senhas não são iguais.";

            valido = false;
        }


        /* ============================= */
        /* GÊNERO */
        /* ============================= */

        if (!generoSelecionado) {

            if (erroGenero) {

                erroGenero.textContent =
                    "Selecione se você é mulher ou homem.";

            } else {

                alert(
                    "Selecione se você é mulher ou homem."
                );
            }

            valido = false;
        }


        /* ============================= */
        /* TERMOS */
        /* ============================= */

        if (!termos) {

            document.getElementById("erroTermos").textContent =
                "Você precisa aceitar os termos.";

            valido = false;
        }


        /* ============================= */
        /* CADASTRO VÁLIDO */
        /* ============================= */

        if (valido) {

            /*
             * Guarda o gênero escolhido.
             *
             * Esse valor será usado na historias.html
             * para decidir se a borboleta aparecerá.
             */

            localStorage.setItem(
            "generoUsuario",
            generoSelecionado.value.trim().toLowerCase()
            );


            alert("Cadastro realizado com sucesso!");


            formCadastro.reset();


            window.location.href = "login.html";
        }

    });

}


/* ============================= */
/* LOGIN */
/* ============================= */

const formLogin =
    document.getElementById("formLogin");


if (formLogin) {

    formLogin.addEventListener("submit", function(event) {

        event.preventDefault();


        const login =
            document.getElementById("login").value.trim();

        const senha =
            document.getElementById("senhaLogin").value;


        let valido = true;


        /* ============================= */
        /* LIMPAR ERROS */
        /* ============================= */

        document.getElementById("erroLogin").textContent = "";

        document.getElementById("erroSenhaLogin").textContent = "";


        /* ============================= */
        /* LOGIN */
        /* ============================= */

        if (login === "") {

            document.getElementById("erroLogin").textContent =
                "Digite seu e-mail ou nome de usuário.";

            valido = false;
        }


        /* ============================= */
        /* SENHA */
        /* ============================= */

        if (senha === "") {

            document.getElementById("erroSenhaLogin").textContent =
                "Digite sua senha.";

            valido = false;
        }


        /* ============================= */
        /* LOGIN VÁLIDO */
        /* ============================= */

        if (valido) {

            alert("Login realizado com sucesso!");

            window.location.href = "historias.html";
        }

    });

}


/* ============================= */
/* VALIDAR EMAIL */
/* ============================= */

function validarEmail(email) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}