const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn")
const colorValue = document.querySelector(".color-value")

function makeHex(array) {
  let hexColor = "#"
  let randomArrayIndex = null
  let randomArrayValue = null
  let i = 0
  while (i < 6) {
    randomArrayIndex = Math.floor(Math.random() * array.length)
    randomArrayValue = array[randomArrayIndex]
    // hexColor = hexColor + randomArrayValue
    hexColor += randomArrayValue
    i++
  }
  return hexColor
}

btn.addEventListener("click", ()=> {
  const hexColor = makeHex(hex)
  document.body.style.backgroundColor = hexColor
  colorValue.style.color = hexColor
  colorValue.textContent = hexColor
})