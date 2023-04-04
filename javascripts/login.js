// Firebase configuration 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, push, set, get } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

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
// Initialize Firebase and collect users' data
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const usersRef = ref(database, 'users');

const form = document.getElementById('loginForm');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    writeData(username, password);
});

// Only write data when they meet conditions
function writeData(username, password) {
    if((username.length != 8) || (isNaN(Number(username)))) {
        alert('Username must contain 8-digit number');
    } else if (password.length === 0) {
        alert("Password can't be empty")
    } else {
        const userRef = push(usersRef);
        let userKey = userRef.key; // create a unique key for each user
            set(userRef, {
            username,
            password
        }).then(() => {
            console.log('Data successfully written to Firebase!');
            window.location.href = `../html/home.html?key=${userKey}`;
        }).catch((error) => {
            console.error('Error writing data to Firebase: ', error);
        });
    }
}

// Hide and show password
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {

    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("fa-eye");
});

// Hide Recent accounts and Show Login Form only when clicking Add 
const addLoginItem = document.querySelector('.recent-login__item-add');
const firstWrapper = document.querySelector('.first-wrapper');

addLoginItem.addEventListener('click', () => {
  firstWrapper.style.display = 'none';
});

const secondWrapper = document.querySelector('.second-wrapper');
const addButton = document.querySelector('.recent-login__item-add');

addButton.addEventListener('click', () => {
  secondWrapper.classList.toggle('large');
});
