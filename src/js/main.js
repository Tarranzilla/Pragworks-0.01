// Hamburger e Menu Secundário
const burger = document.getElementById("burger01");
const nav2 = document.getElementById("nav-secondary-id");
let nav2isOpen = false;

burger.addEventListener("click", () => {
    if (nav2isOpen === false) {
        nav2.classList.add("nav-secondary-active");
        burger.classList.add("burger-active");
        document.body.classList.add("body-overflow");
        nav2isOpen = true;
        console.log("secondary nav open");
    } else {
        nav2.classList.remove("nav-secondary-active");
        burger.classList.remove("burger-active");
        document.body.classList.remove("body-overflow");
        nav2isOpen = false;
        console.log("secondary nav closed");
    }
});

const opener = document.getElementById("config-btn");
const closer = document.getElementById("closer01");
const config = document.getElementById("config-div");
let configIsOpen = false;

opener.addEventListener("click", () => {
    if (configIsOpen === false) {
        config.classList.add("config-div-active");
        configIsOpen = true;
        console.log("config open");
    }
});

closer.addEventListener("click", () => {
    if (configIsOpen === true) {
        config.classList.remove("config-div-active");
        configIsOpen = false;
        console.log("config closed");
    }
});
