// ? ? ? LET'S TRY TO WRITE THE FILE WITHOUT SEMICOLONS ? ? ?

// (1) ***** SELECT ITEMS *****
const alert = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const inputField = document.getElementById("input-field")
const submitBtn = document.querySelector(".submit-btn")
const groceryList = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")


// edit option
let editedItem
let editFlag = false
let editID = ""

// (2) ***** EVENT LISTENERS *****
form.addEventListener("submit", addItem)
clearBtn.addEventListener("click", clearItems)
inputField.focus()
window.addEventListener("DOMContentLoaded", setupItems)


// (3) ***** FUNCTIONS *****
// <<<<< Add item >>>>>
function addItem(event) {
  event.preventDefault()
  const value = inputField.value
  const id = Math.floor((new Date().getTime())/1000).toString()

  if (value && !editFlag) {
    createListItem(id, value)

    displayAlert(`Added to the list: ${value}`, "success")
    changeVisibility()
    addToLocalStorage(id, value)
    setBackToDefault()
  }
  else if (value && editFlag) {
    editedItem.innerHTML = value
    displayAlert(`Edited: ${value}`, "success")
    editLocalStorage(editID, value)
    setBackToDefault()

  }
  else {
    displayAlert("Please type in something", "failure")
    inputField.focus()
  }
}

// <<<<< Delete item >>>>>
function deleteItem(e) {
  const element = e.parentElement.parentElement
  const elementId = element.dataset.id

  // The other way to access item name:
  // e.currentTarget.parentElement.previousElementSibling.textContent
  const itemName = element.querySelector(".title").textContent
  groceryList.removeChild(element)
  changeVisibility()
  displayAlert(`Removed from the list: ${itemName}`, "failure")
  removeFromLocalStorage(elementId)
  setBackToDefault()
  inputField.focus()
}

// <<<<< Edit item >>>>>
function editItem(e) {
  const element = e.parentElement.parentElement
  editID = element.dataset.id
  editFlag = true
  editedItem = e.parentElement.previousElementSibling
  inputField.value = editedItem.innerHTML
  inputField.focus()
  submitBtn.textContent = "edit"
}

// <<<<< Change visibility >>>>>
function changeVisibility() {
  if (groceryList.children.length !== 0) {
    groceryList.style.visibility = "visible"
    clearBtn.style.visibility = "visible"
  }
  else {
    groceryList.style.visibility = "hidden"
    clearBtn.style.visibility = "hidden"
  }
}

// <<<<< Display alert >>>>>
function displayAlert(text, status) {
  alert.textContent = text
  alert.classList.add(`alert-${status}`)

  // Remove alert
  setTimeout(function() {
    alert.textContent = ""
    alert.classList.remove(`alert-${status}`)
  }, 2000)
}

// <<<<< Clear items list >>>>>
function clearItems() {
  groceryList.innerHTML = ""
  changeVisibility()
  setBackToDefault()
  displayAlert("List has been cleared", "success")
  localStorage.removeItem("List")
}

// <<<<< Set back to default >>>>>
function setBackToDefault() {
  inputField.value = ""
  inputField.focus()
  editFlag = false
  editID = ""
  submitBtn.textContent = "Send"
}

// (4) ***** LOCAL STORAGE ***** 

// <<<<< Add to local storage >>>>>
function addToLocalStorage(id, value) {
  const grocery = {
    id: id,
    value: value
  }
  let list = getLocalStorage()
  list.push(grocery)
  localStorage.setItem("List", JSON.stringify(list))
}

// <<<<< Remove from local storage >>>>>
function removeFromLocalStorage(id) {
  let list = getLocalStorage()

  list = list.filter(function(item) {
    if (item.id !== id) return item
  })
  localStorage.setItem("List", JSON.stringify(list))
}

// <<<<< Edit local storage >>>>>
function editLocalStorage(id, value) {
  let list = getLocalStorage()
  list = list.map(function(item) {
    if(item.id === id) {
      item.value = value
    }
    return item
  })
  localStorage.setItem("List", JSON.stringify(list))
}

function getLocalStorage(){
 return localStorage.getItem("List")
 ? JSON.parse(localStorage.getItem("List"))
 : []
}

// (5) ***** SETUP ITEMS *****
// get the array from local storage
// get the list
// for all elements in the array:
function setupItems() {
  let items = getLocalStorage()
  if (items.length > 0) {
    items.forEach(function(item) {
      createListItem(item.id, item.value)
    })
  }
  changeVisibility()
}

function createListItem(id, value) {
    // We need to:
    // 1) create new article (in HTML)
    // 2) set the class "grocery-item" to the new article
    // 3) set the ID for the new article using dataset

    const newItem = document.createElement("article")
    
    // Set class
    newItem.classList.add("grocery-item")
    
    // Set ID
    // 1) create html attribute
    const idAttribute = document.createAttribute("data-id")
    // 2) set the value for the html attribute
    idAttribute.value = id
    // 3) add the attribute with its value to the article
    newItem.setAttributeNode(idAttribute)

    // Set the article innerHTML
    newItem.innerHTML = `
      <p class="title">${value}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>`
    
    // Activate delete and edit buttons for the new item
    // const deleteBtn = newItem.querySelector(".delete-btn")
    // const editBtn = newItem.querySelector(".edit-btn")
    // deleteBtn.addEventListener("click", deleteItem)
    // editBtn.addEventListener("click", editItem)
    groceryList.addEventListener("click", activateBtns)

    // Now we need to add the article to our HTML list:
    // Append child
    groceryList.appendChild(newItem)
}

function activateBtns(e) {
  const target = e.target
  if (target.classList.contains("delete-btn")) {
    deleteItem(target)
  }
  else if (target.classList.contains("fa-trash")) {
    deleteItem(target.parentElement)
  }
  else if (target.classList.contains("edit-btn")) {
    editItem(target)
  }
  else if (target.classList.contains("fa-edit")) {
    editItem(target.parentElement)
  }
}