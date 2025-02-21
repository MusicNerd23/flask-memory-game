document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const restartButton = document.getElementById("restart-btn");
    let flippedCards = [];
    let matchedPairs = 0;

    // Card Click Logic
    cards.forEach(card => {
        card.addEventListener("click", () => {
            if (flippedCards.length < 2 && !card.classList.contains("matched")) {
                card.classList.add("flipped");
                card.textContent = card.dataset.value; // Reveal value
                
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    setTimeout(checkForMatch, 500);
                }
            }
        });
    });

    function checkForMatch() {
        const [card1, card2] = flippedCards;
        
        if (card1.dataset.value === card2.dataset.value) {
            card1.classList.add("matched");
            card2.classList.add("matched");
            matchedPairs++;
        } else {
            card1.textContent = "?";
            card2.textContent = "?";
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
        }

        flippedCards = [];

        if (matchedPairs === cards.length / 2) {
            setTimeout(() => alert("You Win!"), 300);
        }
    }

    // Restart Button Logic
    restartButton.addEventListener("click", () => {
        window.location.reload(); // Simple reload to reset the game
    });
});