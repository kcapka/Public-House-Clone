const hamburger = document.querySelector(".hamburger");
const bars = document.querySelector(".bar");
const navLinks = document.querySelector(".navlinks");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    bars.classList.toggle("active");
    navLinks.classList.toggle("active");
});