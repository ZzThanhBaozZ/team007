const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuContent = document.querySelector('.menu-content');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menuContent.classList.toggle('active');
});
