/* =========================================================
   NAVBAR SCROLL
========================================================= */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

});


/* =========================================================
   DARK MODE
========================================================= */

const themeToggle = document.getElementById("theme-toggle");

function updateThemeIcon() {

    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");

    if (!icon) return;

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    } else {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }

}


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    updateThemeIcon();

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("mobile-open");

        const icon = menuToggle.querySelector("i");

        if (navbar.classList.contains("mobile-open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =========================================================
   MOBILE DROPDOWN
========================================================= */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function (dropdown) {

    const link = dropdown.querySelector(":scope > a");

    link.addEventListener("click", function (e) {

        if (window.innerWidth <= 850) {

            e.preventDefault();

            dropdowns.forEach(function (item) {

                if (item !== dropdown) {
                    item.classList.remove("open");
                }

            });

            dropdown.classList.toggle("open");

        }

    });

});


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function (e) {

    if (window.innerWidth > 850) return;

    if (
        navbar &&
        menuToggle &&
        !navbar.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        navbar.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    }

});


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING NORMAL LINK
========================================================= */

const navLinks = document.querySelectorAll(
    ".nav-menu > li:not(.dropdown) > a"
);

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 850) {

            navbar.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

});


/* =========================================================
   CHARACTER COUNT
========================================================= */

const textarea = document.getElementById("projectDetails");
const charCount = document.getElementById("charCount");

if (textarea && charCount) {

    textarea.addEventListener("input", function () {

        charCount.textContent = textarea.value.length;

    });

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Your message has been sent successfully!");

        contactForm.reset();

        if (charCount) {
            charCount.textContent = "0";
        }

    });

}


/* =========================================================
   BACK TO TOP
========================================================= */

const upBtn = document.getElementById("upBtn");

if (upBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            upBtn.classList.remove("hide");

        } else {

            upBtn.classList.add("hide");

        }

    });


    upBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   UPDATE THEME ICON ON LOAD
========================================================= */

updateThemeIcon();