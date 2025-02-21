

  document.addEventListener("DOMContentLoaded", function() {
    const typewriterText = "A Sacred Place of Eternal Peace";
    const typewriterElement = document.querySelector('.typewriter');
    
    function typeWriterEffect() {
        typewriterElement.textContent = ""; // Clear text
        let index = 0;

        const typingInterval = setInterval(() => {
            typewriterElement.textContent += typewriterText.charAt(index);
            index++;
            if (index === typewriterText.length) {
                clearInterval(typingInterval);
                setTimeout(() => {
                    typewriterElement.textContent = ""; // Clear text again for the next cycle
                    typeWriterEffect(); // Start typing effect again
                }, 1000); // Wait 1 second before restarting
            }
        }, 120); // Speed of typing
    }

    typeWriterEffect(); // Start the effect
});
