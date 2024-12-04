const icon = document.querySelector(".icon");
const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector("#hamburger");

icon.addEventListener("click", () => {
  if (sidebar.classList.contains("d-none")) {
    sidebar.classList.remove("d-none")
    sidebar.classList.add("d-block")
  }
  else{
    sidebar.classList.remove("d-block")
    sidebar.classList.add("d-none")
  }
});

document.addEventListener("click", (event) => {
  if (!hamburger.contains(event.target) && !sidebar.contains(event.target)) {
    sidebar.classList.remove("d-block");
    sidebar.classList.add("d-none");
  }
});