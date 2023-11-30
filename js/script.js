// Adiciona as classes 'a' e 'b' após 2 segundos
setTimeout(function () {
    document.getElementById('a').classList.add('a');
    document.getElementById('b').classList.add('b');

    // Adiciona a classe 'b-hidden' à div B após a transição
    setTimeout(function () {
        document.getElementById('b').classList.add('b-hidden');
    }, 2000);

    // Oculta as bolinhas brancas do carregamento após 2 segundos
    setTimeout(function () {
        $('.loader div').css('display', 'none');
    }, 100);

    // Adiciona as classes 'show' e 'hidden' ao texto após a transição
    $('.texto p').css('display', 'block'); // Exibe o texto
    $('.texto').fadeIn(10).css('display', 'flex');
    $('.texto p').animate({ fontSize: '0px' }, 10);

    // Oculta o texto após a animação
    setTimeout(function () {
        $('.texto').css('display', 'none');
    }, 2300);

}, 2000); // Reduzi o tempo para 1 segundo para que o texto seja exibido imediatamente

// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Seu código existente para carregamento da página

    // Após o carregamento, adicione o código para controlar a visibilidade da .direita
    var direitaElement = document.querySelector('.direita');

    function showElement() {
        direitaElement.style.opacity = 1;
    }

    // Exemplo: Aplicar showElement após 2 segundos
    setTimeout(showElement, 3000);
});

// script.js
document.addEventListener("DOMContentLoaded", function() {
    var perfeitoElement = document.querySelector('.perfeito');

    function showElement() {
        perfeitoElement.style.top = "0px";
    }

    // Exemplo: Aplicar showElement após 2 segundos
    setTimeout(showElement, 2500);
});

document.addEventListener("DOMContentLoaded", function() {
    var botoesElement = document.querySelector('.botoes');

    function ajustarPosicaoTop() {
        // Verificar a largura da tela
        var larguraDaTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // Se a largura da tela for menor ou igual a 1024 pixels, ajustar o top para 200px
        if (larguraDaTela <= 1024) {
            botoesElement.style.top = "420px";
        } else {
            // Caso contrário, manter o top como 600px
            botoesElement.style.top = "600px";
        }
    }

    // Exemplo: Aplicar showElement para os botões após 2 segundos
    setTimeout(function() {
        ajustarPosicaoTop();

        // Adicionar um ouvinte de redimensionamento para ajustar a posição top quando a tela for redimensionada
        window.addEventListener('resize', ajustarPosicaoTop);
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
    var menuElement = document.querySelector('.menu');

    function ajustarPosicaoTop() {
        // Verificar a largura da tela
        var larguraDaTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // Se a largura da tela for menor ou igual a 1024 pixels, ajustar o top para 80%
        if (larguraDaTela <= 1024) {
            menuElement.style.top = "70%";
        } else {
            // Caso contrário, ajustar o top para 25%
            menuElement.style.top = "25%";
        }
    }

    // Exemplo: Aplicar ajustarPosicaoTop para o menu após 2 segundos
    setTimeout(function() {
        ajustarPosicaoTop();

        // Adicionar um ouvinte de redimensionamento para ajustar a posição top quando a tela for redimensionada
        window.addEventListener('resize', ajustarPosicaoTop);
    }, 2000);
});
