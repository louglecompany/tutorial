// Select buttons
var buttons = document.querySelectorAll('.read_button');

// Add click event to each button
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Select the card associated with the button
        var card = button.parentElement;

        // Add/Remove Class Active
        card.classList.toggle('active1');

        if (card.classList.contains('active1')) {
            // Change button text if it has the class active
            button.textContent = 'Ler menos';
        } else {
            // Change button text if it doesn't have the class active
            button.textContent = 'Ler mais';
        }
    });
});

        // Esta função cria um novo reprodutor de vídeo do YouTube
        function onYouTubeIframeAPIReady() {
            var player = new YT.Player('player', {
                height: '315',
                width: '560',
                videoId: 'ID_DO_SEU_VÍDEO',
                playerVars: {
                    controls: 0,  // Oculta os controles do reprodutor
                    modestbranding: 1,  // Oculta o logotipo do YouTube
                    showinfo: 0  // Oculta o título do vídeo e informações do uploader
                }
            });
        }
