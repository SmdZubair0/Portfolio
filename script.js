function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('show');
}

document.addEventListener("click", (event) => {
  const nav = document.getElementById('navMenu');
  const toggle = document.querySelector('.menu-toggle');

  if (nav.classList.contains('show')) {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove('show');
    }

    if (event.target.tagName === "A" && nav.contains(event.target)) {
        nav.classList.remove('show');
    }
  }
});