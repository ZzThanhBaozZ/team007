// Set balanced height for two wrapper on window width's changes
function updateHeights() {
    if (window.matchMedia("(min-width: 64em)").matches) {
        const query_subpages = document.querySelector('.query-subpages');
        const websites = document.querySelector('.websites');

        websites.style.height = `${query_subpages.clientHeight}px`;

        const web_wrap = document.querySelectorAll('.web-wrap');

        web_wrap.forEach((element) => {
        element.style.height = `${query_subpages.clientHeight / 4}px`;
        });
    }
}

window.addEventListener('load', () => {
    updateHeights();    
});

window.addEventListener('resize', () => {
    updateHeights();
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