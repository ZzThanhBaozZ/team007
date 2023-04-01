// Hide and show password
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {

    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("fa-eye");
});

// Open home 
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
