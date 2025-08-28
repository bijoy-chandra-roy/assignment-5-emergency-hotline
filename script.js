// Heart Icons
let hearts = 0;
const heartCount = document.querySelector(".hearts p");
const heartIcons = document.querySelectorAll(".card .fa-heart");
for (const heartIcon of heartIcons) {
    heartIcon.addEventListener("click", function () {
        hearts++;
        heartCount.innerText = hearts;
    });
}
// Call Buttons
// Call History Section