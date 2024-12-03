const menuToggle = document.querySelector(".new-menu-item");
const header = document.getElementById("header");

menuToggle.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
