
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
   STORY ANIMATION
========================================================= */

const storyElements = document.querySelectorAll(
    ".story-text, .story-image"
);

const storyObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.2
    }
);

storyElements.forEach((element) => {
    storyObserver.observe(element);
});


/* =========================================================
   TEAM ANIMATION
========================================================= */

const teamElements = document.querySelectorAll(
    ".team-title, .team-card"
);

const teamObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

teamElements.forEach((element) => {
    teamObserver.observe(element);
});


/* =========================================================
   TEAM CARD DELAY
========================================================= */

document.querySelectorAll(".team-card").forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.12}s`;

});


/* =========================================================
   MEMBER ANIMATION
========================================================= */

const members = document.querySelectorAll(".member");

const memberObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

members.forEach((member) => {

   

    if (member.closest(".page4")) {
        memberObserver.observe(member);
    }

});


/* =========================================================
   SKILL BAR ANIMATION
========================================================= */

const skillBars = document.querySelectorAll(".skill-bar span");

skillBars.forEach((bar) => {

    const finalWidth = bar.style.width;

    bar.style.width = "0";

    const skillObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    setTimeout(() => {
                        bar.style.transition = "width 1.2s ease";
                        bar.style.width = finalWidth;
                    }, 200);

                    observer.unobserve(bar);

                }

            });

        },
        {
            threshold: 0.5
        }
    );

    skillObserver.observe(bar);

});


/* =========================================================
   BACK TO TOP
========================================================= */

const upBtn = document.getElementById("upBtn");

window.addEventListener("scroll", () => {

    if (!upBtn) return;

    const storySection = document.querySelector(".page2");

    if (!storySection) return;

    const showPoint = storySection.offsetTop;

    if (window.scrollY >= showPoint) {
        upBtn.classList.remove("hide");
    } else {
        upBtn.classList.add("hide");
    }

});


if (upBtn) {

    upBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   CONTACT BUTTON
========================================================= */

const contactBtn = document.querySelector(".contact-btn");

if (contactBtn) {

    contactBtn.addEventListener("click", () => {

        window.location.href = "../contact/contact.html";

    });

}


/* =========================================================
   GET QUOTES BUTTON
========================================================= */

const quoteBtn = document.querySelector(".quote-btn");

if (quoteBtn) {

    quoteBtn.addEventListener("click", () => {

        window.location.href = "../contact/contact.html";

    });

}


/* =========================================================
   NEWSLETTER
========================================================= */

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const emailInput = newsletterForm.querySelector(
            'input[type="email"]'
        );

        if (emailInput && emailInput.value.trim() !== "") {

            alert("Thank you for subscribing!");

            emailInput.value = "";

        }

    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const copyright = document.querySelector(".copyright");

if (copyright) {

    const currentYear = new Date().getFullYear();

    copyright.textContent = `ITAgency © ${currentYear}`;

}


/* =========================================================
   CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {

    if (window.innerWidth > 1100) return;

    if (!event.target.closest(".dropdown")) {

        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("open");
        });

    }

});

