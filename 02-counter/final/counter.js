let value = document.querySelector(".value")
// let decrease = document.querySelector(".decrease")
// let reset = document.querySelector(".reset")
// let increase = document.querySelector(".increase")
let buttons = document.querySelectorAll(".btn")
let counter = 0

buttons.forEach(changeValue)
function changeValue(button) {
  button.addEventListener("click", ()=> {
    if (button.classList.contains("decrease")) {
      counter--
    } 
    else if (button.classList.contains("increase")) {
      counter++
    }
    else {
      counter = 0
    }
    if (counter < 0) {
      value.style.color = "#842029"
    }
    else if (counter > 0) {
      value.style.color = "#0f5132"
    }
    else {value.style.color = "#222"}
    value.textContent = counter
  })
}