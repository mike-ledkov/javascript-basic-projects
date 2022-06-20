const open = document.querySelector(".open-btn")
const close = document.querySelector(".close-btn")
const overlay = document.querySelector(".modal-overlay")
const banner = document.querySelector(".banner-window")

open.addEventListener("click", ()=> {
  overlay.classList.add("show-modal")
  banner.style.display = "none"
})

close.addEventListener("click", ()=> {
  overlay.classList.remove("show-modal")
  banner.style.display = "initial"
})