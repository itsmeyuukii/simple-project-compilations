const navbarCollapse = document.querySelector(".navbar-collapse");
const navMenu = document.querySelector(".nav-menu");

navbarCollapse.addEventListener("click", () => {
    navbarCollapse.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll (".nav-link").forEach(n => n.addEventListener("click", () => {
    navbarCollapse.classList.remove("active");
    navMenu.classList.remove("active");
}))