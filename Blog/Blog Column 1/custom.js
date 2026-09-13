
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       DARK / LIGHT MODE
    ========================================================= */

    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = themeToggle.querySelector("i");

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");

        } else {

            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");

        }

    });


    /* =========================================================
       MOBILE MENU
    ========================================================= */

    const menuToggle = document.getElementById("menu-toggle");
    const header = document.getElementById("header");

    menuToggle.addEventListener("click", function () {

        header.classList.toggle("mobile-open");

        if (header.classList.contains("mobile-open")) {

            menuToggle.textContent = "×";

        } else {

            menuToggle.textContent = "☰";

        }

    });


    /* =========================================================
       DROPDOWN
    ========================================================= */

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {

        const toggle = dropdown.querySelector(".dropdown-toggle");

        toggle.addEventListener("click", function (e) {

            /*
               Desktop:
               الـ dropdown يفتح بالـ hover من CSS
            */

            if (window.innerWidth <= 1100) {

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
       HEADER SCROLL
    ========================================================= */

    function handleHeaderScroll() {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    handleHeaderScroll();

    window.addEventListener("scroll", handleHeaderScroll);


    /* =========================================================
       CLOSE MOBILE MENU WHEN CLICKING NORMAL LINK
    ========================================================= */

    document
        .querySelectorAll(".nav-menu > li > a:not(.dropdown-toggle)")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                if (window.innerWidth <= 1100) {

                    header.classList.remove("mobile-open");

                    menuToggle.textContent = "☰";

                    dropdowns.forEach(function (dropdown) {

                        dropdown.classList.remove("open");

                    });

                }

            });

        });


    /* =========================================================
       CLOSE MOBILE MENU WHEN CLICKING DROPDOWN ITEM
    ========================================================= */

    document
        .querySelectorAll(".dropdown-menu a")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                header.classList.remove("mobile-open");

                menuToggle.textContent = "☰";

                dropdowns.forEach(function (dropdown) {

                    dropdown.classList.remove("open");

                });

            });

        });


    /* =========================================================
       RESET MOBILE MENU ON RESIZE
    ========================================================= */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 1100) {

            header.classList.remove("mobile-open");

            menuToggle.textContent = "☰";

            dropdowns.forEach(function (dropdown) {

                dropdown.classList.remove("open");

            });

        }

    });

});

