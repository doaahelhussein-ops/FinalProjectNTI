/* =========================================================
   NAVBAR SCROLL
========================================================= */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", function () {

    if (!nav) {
        return;
    }

    if (window.scrollY > 50) {

        nav.classList.add("scrolled");

    } else {

        nav.classList.remove("scrolled");

    }

});


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


/* =========================================================
   FAQ
========================================================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(function (item) {

    const question =
        item.querySelector(".faq-question");


    if (!question) {
        return;
    }


    question.addEventListener("click", function () {

        const isActive =
            item.classList.contains("active");


        faqItems.forEach(function (faq) {

            faq.classList.remove("active");

        });


        if (!isActive) {

            item.classList.add("active");

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