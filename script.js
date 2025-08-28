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
// Copy Buttons
let copies = 0;
const copyCount = document.querySelector(".copies p:first-child");
const copyButtons = document.querySelectorAll(".card button:first-child");
for (const copyButton of copyButtons) {
    copyButton.addEventListener("click", function () {
        copies++;
        copyCount.innerText = copies;
    });
}

// Call Buttons
let coins = 100;
const coinCount = document.querySelector(".coins p");
const callButtons = document.querySelectorAll(".card .btn-primary");

const callHistory = document.querySelector(".call-history");

for (const callButton of callButtons) {
    callButton.addEventListener("click", function () {

        if (coins < 20) {
            alert("Not enough coins to make the call!");
            return;
        }

        const card = callButton.closest(".card");
        alert("Calling " + card.querySelector(".service-name").innerText + " " + card.querySelector(".service-hotline").innerText);

        coins -= 20;
        coinCount.innerText = coins;

        var now = new Date();
        var timeString = now.toLocaleTimeString('en-US');

        const historyItem = document.createElement("p");
        historyItem.innerHTML = "<div>" + "<div class='service-name-log'>" + card.querySelector(".service-name").innerText + "</div>" + "<br>" + "<div class='service-hotline-log'>" +
            card.querySelector(".service-hotline").innerText + "</div>" + "</div>" +
            "<div class='call-time'>" + timeString + "</div>";

        callHistory.appendChild(historyItem);
    });
}

// Clear Button
const clearButton = document.querySelector(".history .heading button");
clearButton.addEventListener("click", function () {
    callHistory.innerHTML = "";
});