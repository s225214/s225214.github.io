const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menu-toggle");
const darkToggle = document.getElementById("toggle-dark");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
});

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
