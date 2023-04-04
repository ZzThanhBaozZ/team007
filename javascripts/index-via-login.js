// Show hamburger when clicking
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

// Show Noti box when clicking
const notiBox = document.querySelector('.nav-noti-box');
const notiIcon = document.querySelector('.nav__icon-noti');

notiIcon.addEventListener('click', function() {
  const perList = document.querySelector('.per-list');
  if (perList.classList.contains('show')) {
    perList.classList.remove('show');
  }

  notiBox.classList.toggle('show');
});

// Show perList box when clicking
const perList = document.querySelector('.per-list');
const perIcon = document.querySelector('.nav__icon-person');

perIcon.addEventListener('click', function() {
  const notiBox = document.querySelector('.nav-noti-box');
  if (notiBox.classList.contains('show')) {
    notiBox.classList.remove('show');
  }

  perList.classList.toggle('show');
});