/* =========================================================
   NAVBAR SCROLL
========================================================= */

const navbar = document.querySelector(".nav");

if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;


        const revealPoint = 120;


        if (elementTop <
            windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

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
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

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
   DARK MODE
========================================================= */

const themeToggle =
    document.getElementById("themeToggle");


if (themeToggle) {

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeToggle.textContent = "☀";

    } else {

        themeToggle.textContent = "☾";

    }


    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle("dark");


            if (
                document.body.classList.contains("dark")
            ) {

                themeToggle.textContent = "☀";

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            } else {

                themeToggle.textContent = "☾";

                localStorage.setItem(
                    "theme",
                    "light"
                );

            }

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