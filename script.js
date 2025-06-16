const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("menu-toggle");
const darkToggle = document.getElementById("toggle-dark");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
});

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const buttons = document.querySelectorAll('.filter-buttons button');
const items = document.querySelectorAll('.menu-item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('active')) return; // no change if same filter

    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    // Fade out all items first
    items.forEach(item => {
      item.classList.add('hide');
    });

    // After fade-out duration, show filtered items with fade-in
    setTimeout(() => {
      items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block'; // show
          // Force reflow to restart CSS animation
          void item.offsetWidth;
          item.classList.remove('hide');
        } else {
          item.style.display = 'none'; // hide filtered out items
        }
      });
    }, 400); // matches the CSS transition time
  });
});

