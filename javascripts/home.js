// Firebase configuration 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCAwr6FbE6KNfx_wq2LzR7X9KPYwbRRo7s",
    authDomain: "dhcq-007.firebaseapp.com",
    databaseURL: "https://dhcq-007-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dhcq-007",
    storageBucket: "dhcq-007.appspot.com",
    messagingSenderId: "323467087872",
    appId: "1:323467087872:web:61b2ecfc148c5dd7e108e5",
    measurementId: "G-1Q7WJ37DL6"
}; 

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Get username from database 
var url = window.location.href;
var myKey = url.split('=')[1];

const userRef = ref(database, `users/${myKey}`);
let username;

get(userRef).then((snapshot) => {
  if (snapshot.exists()) {
    const userData = snapshot.val();
    username = userData.username;
    alert("Welcome back, " + username + "!");
  } else {
    console.log('No user data found for this key.');
  }
}).catch((error) => {
  console.error('Error getting user data: ', error);
});

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