const hamburger = document.querySelector(".hamburger");
const bars = document.querySelector(".bar");
const navLinks = document.querySelector(".navlinks");
const contactBubble = document.querySelector(".contact-bubble");
const contactOverlay = document.querySelector(".contact-items");
const exit = document.querySelector('.fa-x');


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    bars.classList.toggle("active");
    navLinks.classList.toggle("active");
});

contactBubble.addEventListener("click", () => {
    contactOverlay.classList.add("active");
    contactBubble.classList.add("active");
});

exit.addEventListener("click", () => {
    contactOverlay.classList.remove("active");
    contactBubble.classList.remove("active");
});