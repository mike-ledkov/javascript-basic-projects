//* Method using DOM tree traversal
/* 
  Meaning: we select all buttons and then inside
  each button (inside the click event) we move up the DOM tree
  to select the question for that button.
*/

const open = document.querySelectorAll(".open-btn")
const close = document.querySelectorAll(".close-btn")

open.forEach(openAnswer)
function openAnswer(btn) {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement.parentElement
    question.classList.add("show-answer")
    // close other questions if they are opened
    open.forEach(function(cycleBtn) {
      const question = cycleBtn.parentElement.parentElement.parentElement
      if (cycleBtn !== btn) {
        question.classList.remove("show-answer")
      }
    })
  })
}

close.forEach(closeAnswer)
function closeAnswer(btn) {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement.parentElement
    question.classList.remove("show-answer")
  })
}