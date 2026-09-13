
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

        navbar.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navbar.classList.contains("active")) {
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
        ".reveal"
    );


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(
        function (element) {

            const elementTop =
                element.getBoundingClientRect().top;


            const revealPoint = 120;


            if (
                elementTop <
                windowHeight - revealPoint
            ) {

                element.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


window.addEventListener(
    "load",
    revealOnScroll
);


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
                document
                    .getElementById(
                        "newsletterEmail"
                    )
                    .value
                    .trim();


            if (email === "") {

                alert(
                    "Please enter your email address."
                );

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
   RESIZE
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 1100) {

            if (navbarMenu) {

                navbarMenu.classList.remove(
                    "mobile-open"
                );

            }


            dropdowns.forEach(
                function (dropdown) {

                    dropdown.classList.remove(
                        "open"
                    );

                }
            );


            if (menuToggle) {

                const icon =
                    menuToggle.querySelector("i");


                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }

    }
);