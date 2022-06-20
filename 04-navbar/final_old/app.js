// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// Long but readable way
// const navButton = document.querySelector(".nav-toggle");
// const links = document.querySelector(".links");

// navButton.addEventListener("click", function() {
//     links.classList.toggle("show-links");
// })

// Short but unreadable way
document.querySelector(".nav-toggle").addEventListener("click", () => {document.querySelector(".links").classList.toggle("show-links");})