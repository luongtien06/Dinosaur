// Tìm kiếm khủng long
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const dinoCards = document.querySelectorAll(".dino-card");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        dinoCards.forEach(card => {
            const name = card.querySelector("h2").textContent.toLowerCase();
            if (name.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Hiệu ứng xuất hiện khi cuộn
const cards = document.querySelectorAll(".dino-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
