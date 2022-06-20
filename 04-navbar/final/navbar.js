const btn = document.querySelector(".nav-button")
const navbar = document.querySelector(".navbar")

btn.addEventListener("click", ()=> {
  navbar.classList.toggle("show-nav")
})