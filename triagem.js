const formulario =
    document.getElementById("form-triagem");

formulario.addEventListener(
    "submit",
    function(evento) {

        evento.preventDefault();

        const violencia =
            document.querySelector(
                'input[name="violencia"]:checked'
            )?.value;

        const medo =
            document.querySelector(
                'input[name="medo"]:checked'
            )?.value;

        const controle =
            document.querySelector(
                'input[name="controle"]:checked'
            )?.value;

        const identificacao =
            document.querySelector(
                'input[name="identificacao"]:checked'
            )?.value;

        const esconder =
            document.querySelector(
                'input[name="esconder"]:checked'
            )?.value;

        const cuidado =
            document.querySelector(
                'input[name="cuidado"]:checked'
            )?.value;

        const culpa =
            document.querySelector(
                'input[name="culpa"]:checked'
            )?.value;


        let sinaisDeRisco = 0;


        if (violencia === "sim") {
            sinaisDeRisco++;
        }

        if (medo === "sim") {
            sinaisDeRisco++;
        }

        if (controle === "sim") {
            sinaisDeRisco++;
        }

        if (identificacao === "sim") {
            sinaisDeRisco++;
        }

        if (esconder === "sim") {
            sinaisDeRisco++;
        }

        if (cuidado === "sim") {
            sinaisDeRisco++;
        }

        if (culpa === "sim") {
            sinaisDeRisco++;
        }


        /*
         * Se houver medo neste momento,
         * encaminha para denúncia.
         */

        if (medo === "sim") {

            window.location.href =
                "denuncia.html";

            return;
        }


        /*
         * Se houver qualquer outro sinal,
         * encaminha para denúncia/orientação.
         */

        if (sinaisDeRisco >= 1) {

            window.location.href =
                "denuncia.html";

            return;
        }


        /*
         * Nenhum sinal foi identificado
         * pelas respostas fornecidas.
         */

        window.location.href =
            "sem-perigo.html";

    }
);