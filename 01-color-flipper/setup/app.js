const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");
btn.addEventListener("click", changeColor);

function changeColor() {
    const randomNumber = Math.round((colors.length - 1) * Math.random());
    console.log(randomNumber);
    const randomColor = colors[randomNumber];
    document.body.style.backgroundColor = randomColor;
    colorName.textContent = randomColor;
};