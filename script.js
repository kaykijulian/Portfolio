document.addEventListener("DOMContentLoaded", () => {
    // Typing Effect
    const phrases = [
        "an IT Student",
        "Photographer",
        "CyberSec Major",
    ];

    const typingSpan = document.querySelector(".typing-text span");

    let phraseIndex = 0;
    let charIndex = 0;
    let isErasing = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (!isErasing && charIndex <= currentPhrase.length) {
            // Typing effect
            typingSpan.textContent = currentPhrase.substring(0, charIndex++);
            setTimeout(typeEffect, 100); // Typing speed
        } else if (isErasing && charIndex >= 0) {
            // Erasing effect
            typingSpan.textContent = currentPhrase.substring(0, charIndex--);
            setTimeout(typeEffect, 50); // Erasing speed
        } else {
            // Switch to typing or erasing
            isErasing = !isErasing;

            if (!isErasing) {
                // Move to the next phrase
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            setTimeout(typeEffect, 1000); // Pause between phrases
        }
    }

    // Start the typing effect
    typeEffect();

    // Timeline Animation
    const timelineItems = document.querySelectorAll(".education .container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    timelineItems.forEach((item) => {
        observer.observe(item);
    });

    typeEffect();

  

});

