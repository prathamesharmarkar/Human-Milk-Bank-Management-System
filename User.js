document.addEventListener('DOMContentLoaded', function () {
    var loginModal = document.getElementById('login-modal');
    var registerModal = document.getElementById('register-modal');
    var loginBtn = document.querySelector('.login-btn');
    var closeBtns = document.querySelectorAll('.close-btn');
    var registerLink = document.getElementById('register-link');

    loginBtn.onclick = function () {
        loginModal.style.display = 'block';
    }

    closeBtns.forEach(function (btn) {
        btn.onclick = function () {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        }
    });

    window.onclick = function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        } else if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    }

    registerLink.onclick = function (event) {
        event.preventDefault();
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    }
});
document.querySelector('.wishlist-btn').addEventListener('click', () => {
    alert('Item Added to wishlist!');
});
document.querySelector('.cart-btn').addEventListener('click', () => {
    alert('Item Added to cart!');
});
function toggleAnswer(element) {
    const answer = element.nextElementSibling;

    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
function contactUs() {
    alert("Redirecting to the contact page...");
    window.location.href = "Contact.html";
}