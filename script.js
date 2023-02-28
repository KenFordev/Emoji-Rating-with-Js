const starEl = document.querySelectorAll(".fa-star");
const farEl = document.querySelectorAll(".far");

const colorsArr = ["red", "orange", "blue", "lightgreen", "green"];
updateRating(0);

starEl.forEach((star, index) => {
    star.addEventListener("click", () => {
        updateRating(index);
    });
});

function updateRating(index) {
    starEl.forEach((star, idx) => {
        if (idx < index + 1) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });

    farEl.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`;
        emoji.style.color = colorsArr[index]
    });
}