const hamburgerMenu = document.querySelector('#ham-d');
const menuContent = document.querySelector('.menu-content');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menuContent.classList.toggle('active');
});
const hamburgerMenuM = document.querySelector('#ham-m');

hamburgerMenuM.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menuContent.classList.toggle('active');
});