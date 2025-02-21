document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    let flippedCards = [];
    let matchedPairs = 0;

    cards.forEach(card => {
        card.addEventListener("click", () => {
            if (flippedCards.length < 2 && !card.classList.contains("matched")) {
                card.classList.add("flipped");
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
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
        }

        flippedCards = [];

        // Check if all pairs are matched
        if (matchedPairs === cards.length / 2) {
            setTimeout(() => alert("You Win!"), 300);
        }
    }
});