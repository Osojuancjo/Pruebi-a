// Llama a la función toggleAudio() al cargar la página
window.onload = toggleAudio;

// Inicia la reproducción del audio automáticamente
document.getElementById('background-audio').play();
// Función para alternar el audio
        function toggleAudio() {
            var audio = document.getElementById('background-audio');
            var icon = document.getElementById('audio-icon');
            if (audio.paused) {
                audio.play();
                icon.src = 'bocina.png'; // Cambia a icono de bocina activa
            } else {
                audio.pause();
                icon.src = 'bocina_silencio.png'; // Cambia a icono de bocina en silencio
            }
        }

