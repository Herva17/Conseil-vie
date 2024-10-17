// Fonction pour parler le texte
function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Obtenir les voix disponibles
        const voices = speechSynthesis.getVoices();
        // Choisir une voix spécifique (par exemple, la première voix)
        utterance.voice = voices[0]; // Modifiez l'index pour choisir une autre voix
        
        utterance.lang = 'fr-FR'; // Choisir la langue
        speechSynthesis.speak(utterance);
    } else {
        alert('Désolé, votre navigateur ne prend pas en charge l\'API de synthèse vocale.');
    }
}

// Ajoutez un écouteur d'événements comme avant
