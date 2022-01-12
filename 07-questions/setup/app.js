// -- Traversing the DOM tree -- //

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(selectButton);
// function selectButton(btn) {
//     btn.addEventListener("click", (event) => {
//         const question = event.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     })
// }

// -- Second Solution --                        //

// I'm using getElementsByClassName instead of querySelectorAll
const questions = document.getElementsByClassName("question");
for (let i=0; i < questions.length; i++) {
    openClose(questions[i]);
}
function openClose(question) {
    // question[i] selects ONE question
    // Select the button inside the question
    // The button doesn't have to be a direct child of the question 
    let btn = question.querySelector(".question-btn");
    // Listen to the click on the button
    btn.addEventListener("click", function() {
        for (let k = 0; k < questions.length; k++) {
            if (questions[k] !== question) {
                questions[k].classList.remove("show-text");
            }
        }
        question.classList.toggle("show-text");
    }); 
    
}
