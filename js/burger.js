const menu = document.getElementById('header_top_burger_menu');
const burger = document.getElementById('burger');

function toggleMenu() {
  menu.classList.toggle('open');
  burger.classList.toggle('active');
}

burger.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', function(event) {
  const isMenuOpen = menu.classList.contains('open');
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnBurger = burger.contains(event.target);

  if (isMenuOpen && !isClickInsideMenu && !isClickOnBurger) {
    toggleMenu();
  }
});