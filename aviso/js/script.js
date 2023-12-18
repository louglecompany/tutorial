
        if (window.innerWidth <= 600) {
            document.addEventListener("DOMContentLoaded", function () {
                // Se a largura da tela for menor ou igual a 600 pixels, mantenha a página visível.
                // Caso contrário, redirecione para outra página.
                document.body.style.display = "block";
                document.body.style.visibility = "visible";
                document.body.style.opacity = 1;
            });
        } else {
            window.location.href = "../index.html"; // Substitua pelo caminho da sua página de não permitido
        }
