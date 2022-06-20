const toggleButton = document.querySelector(".sidebar-toggle");
const closeButton = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("hide-sidebar");
});

closeButton.addEventListener("click", () => {
    sidebar.classList.add("hide-sidebar");
});


