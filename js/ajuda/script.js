document.addEventListener("DOMContentLoaded", function() {
    var btnInicio = document.getElementById('btnInicio');

    // Adiciona um ouvinte de clique para o botão Início
    btnInicio.addEventListener('click', function() {
        // Redireciona para a página desejada usando um caminho absoluto
        window.location.href = '//index.html';
    });
});
