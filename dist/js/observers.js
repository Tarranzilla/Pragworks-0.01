// Talvez adicionar estes codigos junto ao main.js

const menu_anchor_01 = document.getElementById("menu_anchor_01");
const menu_anchor_02 = document.getElementById("menu_anchor_02");
const menu_anchor_03 = document.getElementById("menu_anchor_03");
const menu_anchor_04 = document.getElementById("menu_anchor_04");
const menu_anchor_05 = document.getElementById("menu_anchor_05");
const menu_anchor_06 = document.getElementById("menu_anchor_06");
const menu_anchor_07 = document.getElementById("menu_anchor_07");

const sections = document.querySelectorAll(".section-observe");

const options = {
    threshold: 0.01,
};

const section1_observer = new IntersectionObserver(function (
    entries,
    section1_observer
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            menu_anchor_01.classList.add("nav-item-active");
            menu_anchor_02.classList.remove("nav-item-active");
            menu_anchor_03.classList.remove("nav-item-active");
            menu_anchor_04.classList.remove("nav-item-active");
            menu_anchor_05.classList.remove("nav-item-active");
            menu_anchor_06.classList.remove("nav-item-active");
            menu_anchor_07.classList.remove("nav-item-active");
        }
    });
},
options);

const section2_observer = new IntersectionObserver(function (
    entries,
    section2_observer
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            menu_anchor_02.classList.add("nav-item-active");
            menu_anchor_01.classList.remove("nav-item-active");
            menu_anchor_03.classList.remove("nav-item-active");
            menu_anchor_04.classList.remove("nav-item-active");
            menu_anchor_05.classList.remove("nav-item-active");
            menu_anchor_06.classList.remove("nav-item-active");
            menu_anchor_07.classList.remove("nav-item-active");
        }
    });
},
options);

const section3_observer = new IntersectionObserver(function (
    entries,
    section3_observer
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            menu_anchor_03.classList.add("nav-item-active");
            menu_anchor_01.classList.remove("nav-item-active");
            menu_anchor_02.classList.remove("nav-item-active");
            menu_anchor_04.classList.remove("nav-item-active");
            menu_anchor_05.classList.remove("nav-item-active");
            menu_anchor_06.classList.remove("nav-item-active");
            menu_anchor_07.classList.remove("nav-item-active");
        }
    });
},
options);

const section4_observer = new IntersectionObserver(function (
    entries,
    section4_observer
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            menu_anchor_04.classList.add("nav-item-active");
            menu_anchor_01.classList.remove("nav-item-active");
            menu_anchor_02.classList.remove("nav-item-active");
            menu_anchor_03.classList.remove("nav-item-active");
            menu_anchor_05.classList.remove("nav-item-active");
            menu_anchor_06.classList.remove("nav-item-active");
            menu_anchor_07.classList.remove("nav-item-active");
        }
    });
},
options);

const section5_observer = new IntersectionObserver(function (
    entries,
    section5_observer
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            menu_anchor_05.classList.add("nav-item-active");

            menu_anchor_01.classList.remove("nav-item-active");
            menu_anchor_02.classList.remove("nav-item-active");
            menu_anchor_03.classList.remove("nav-item-active");
            menu_anchor_04.classList.remove("nav-item-active");
            menu_anchor_06.classList.remove("nav-item-active");
            menu_anchor_07.classList.remove("nav-item-active");
        }
    });
},
options);

const section6_observer = new IntersectionObserver(function (
    entries,
    section6_observer
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            menu_anchor_06.classList.add("nav-item-active");

            menu_anchor_01.classList.remove("nav-item-active");
            menu_anchor_02.classList.remove("nav-item-active");
            menu_anchor_03.classList.remove("nav-item-active");
            menu_anchor_04.classList.remove("nav-item-active");
            menu_anchor_05.classList.remove("nav-item-active");
            menu_anchor_07.classList.remove("nav-item-active");
        }
    });
},
options);

const section7_observer = new IntersectionObserver(function (
    entries,
    section7_observer
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            menu_anchor_07.classList.add("nav-item-active");

            menu_anchor_01.classList.remove("nav-item-active");
            menu_anchor_02.classList.remove("nav-item-active");
            menu_anchor_03.classList.remove("nav-item-active");
            menu_anchor_04.classList.remove("nav-item-active");
            menu_anchor_05.classList.remove("nav-item-active");
            menu_anchor_06.classList.remove("nav-item-active");
        }
    });
},
options);

section1_observer.observe(sections[0]);
section2_observer.observe(sections[1]);
section3_observer.observe(sections[2]);
section4_observer.observe(sections[3]);
section5_observer.observe(sections[4]);
section6_observer.observe(sections[5]);
section7_observer.observe(sections[6]);
