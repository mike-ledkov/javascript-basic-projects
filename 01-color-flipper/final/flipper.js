const colors = ["white", "red", "green", "blue", "yellow", "orange", "cyan", "rgba(133,122,200)", "#f15025", "purple", "DeepPink", "lime", "DarkKhaki", "RosyBrown", "BlanchedAlmond", "#582c4d"]

const btn = document.querySelector(".btn")
const colorValue = document.querySelector(".color-value")

btn.addEventListener("click", ()=> {
  // generate random number from 0 to colors.length-1
  let randomNumber = Math.random()
  let randomColor = Math.floor(randomNumber * colors.length)
  console.log(randomNumber, randomColor)
  document.body.style.backgroundColor = colors[randomColor]
  colorValue.textContent = colors[randomColor]
  colorValue.style.color = colors[randomColor]
})