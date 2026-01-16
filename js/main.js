// BURGER MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
// Tilføjer kortvarig visuel feedback ved klik
const buttons = document.querySelectorAll('.button, .nav-button, .cta-button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 200);
    });
});
