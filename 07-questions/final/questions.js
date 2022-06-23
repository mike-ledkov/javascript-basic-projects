const questions = document.querySelectorAll(".question-container")

for (let q of questions) {
  const btn = q.querySelector(".question-btn")
  btn.addEventListener("click", function() {
    q.classList.toggle("show-answer")
    for (i of questions) {
      if (i !== q) {
        i.classList.remove("show-answer")
      }
    }
  })
}