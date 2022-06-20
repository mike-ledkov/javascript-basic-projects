const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");

btn.addEventListener("click", selectHex);

function selectHex() {
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        const randomNumber = Math.round((hex.length - 1) * Math.random());
        hexColor = hexColor + hex[randomNumber];
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    colorName.textContent = hexColor;
};