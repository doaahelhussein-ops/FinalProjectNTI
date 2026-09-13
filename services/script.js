
/* =========================================================
   NAVBAR
========================================================= */

const header = document.getElementById("header");
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");


/* Scroll Navbar */

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* Mobile Menu */

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

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
   DROPDOWN
========================================================= */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {

    const link = dropdown.querySelector(":scope > a");

    if (!link) return;

    link.addEventListener("click", (event) => {

        if (window.innerWidth <= 1100) {

            event.preventDefault();

            dropdowns.forEach((item) => {

                if (item !== dropdown) {
                    item.classList.remove("open");
                }

            });

            dropdown.classList.toggle("open");

        }

    });

});


/* Close mobile menu after clicking normal links */

const navLinks = document.querySelectorAll(
    ".nav-menu > li:not(.dropdown) > a"
);

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 1100) {

            navbar.classList.remove("active");

            const icon = menuToggle?.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    });

});


/* =========================================================
   CLOSE MENU WHEN RESIZING
========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 1100) {

        navbar.classList.remove("active");

        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("open");
        });

        const icon = menuToggle?.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    }

});


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = themeToggle.querySelector("i");

        if (document.body.classList.contains("dark")) {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        } else {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        }

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================================
   EXPLORE SERVICES
========================================================= */

function scrollToExpertise() {

    const cards =
        document.getElementById("expertise-cards");

    if (!cards) {
        return;
    }

    cards.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}







// ================= FAQ =================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", function () {

        // اقفل أي سؤال تاني مفتوح
        faqItems.forEach(function (otherItem) {
            if (otherItem !== item) {
                otherItem.classList.remove("active");

                const otherAnswer = otherItem.querySelector(".faq-answer");
                otherAnswer.style.maxHeight = null;
            }
        });

        // فتح / إغلاق السؤال الحالي
        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });

});




/* =========================================================
   DARK MODE
========================================================= */

const themeBtn =
    document.getElementById("themebtn");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}


function updateThemeIcon() {

    if (!themeBtn) {
        return;
    }

    const icon =
        themeBtn.querySelector("i");


    if (!icon) {
        return;
    }


    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        icon.className =
            "fa-regular fa-moon";

    } else {

        icon.className =
            "fa-regular fa-sun";

    }

}


updateThemeIcon();


if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );


            localStorage.setItem(
                "theme",
                isDark ? "dark" : "light"
            );


            updateThemeIcon();

        }
    );

}


/* =========================================================
   NEWSLETTER
========================================================= */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "newsletterEmail"
                );


            if (!email) {
                return;
            }


            const value =
                email.value.trim();


            if (value === "") {

                email.focus();

                return;

            }


            alert(
                "Thank you for subscribing!"
            );


            newsletterForm.reset();

        }
    );

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById(
        "backToTop"
    );


if (backToTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}