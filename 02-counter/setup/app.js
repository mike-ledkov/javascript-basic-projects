// set initial count
let count = 0;

// select counter and buttons
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

// logic
buttons.forEach(function(btn) {
    btn.addEventListener("click", changeValue);
});

function changeValue(item) {
    let currentBtn = item.currentTarget.classList;
    // count depending on which button is pressed
    if (currentBtn.contains("decrease")) {
        count--;
    } else if (currentBtn.contains("increase")) {
        count++;
    } else {
        count = 0;
    }

    switch(Math.sign(count)) {
        case 1:
            value.style.color = "#00FF00";
            break;
        case -1:
            value.style.color = "#FF0000";
            break;
        default:
            value.style.color = "#0000FF";
    }

    value.textContent = count;
}