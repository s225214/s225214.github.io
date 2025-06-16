const toggleBtn = document.getElementById('toggle-dark');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Toggle dark mode
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Toggle sidebar menu
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('visible');
});
