const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("menu-toggle");
const darkToggle = document.getElementById("toggle-dark");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
});

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
