function toggleBurger() {
    let navbar = document.querySelector(".navbar");
    let menu = document.querySelector(".menu-btn");

    navbar.classList.toggle("showNav");
    menu.classList.toggle("showClose");
}