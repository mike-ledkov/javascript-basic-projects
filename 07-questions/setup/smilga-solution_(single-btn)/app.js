//* Method using selectors INSIDE elements
/* 
  Meaning: we select questions rather than buttons
  and then we select individual button INSIDE each question
  using 
! question.querySelector
  and not 
! document.querySelector
*/

const questions = document.querySelectorAll(".question-container")

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn")
  btn.addEventListener("click", () => {
    question.classList.toggle("show-answer")
    questions.forEach((questionInLoop) => {
      if (questionInLoop !== question) {
        questionInLoop.classList.remove("show-answer")
      }
    })
  })
})