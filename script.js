function toggleMenu() {
  const hamburgerNav = document.getElementById('hamburger-nav');
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  hamburgerNav.classList.toggle('active');
}
