// ========================================
// DARK / LIGHT MODE
// ========================================

const themeToggle =
    document.getElementById("theme-toggle");

const themeIcon =
    themeToggle.querySelector("i");


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



// ========================================
// MOBILE MENU
// ========================================

const menuToggle =
    document.getElementById("menu-toggle");

const header =
    document.getElementById("header");


menuToggle.addEventListener("click", function () {

    header.classList.toggle("mobile-open");


    

    if (header.classList.contains("mobile-open")) {

        menuToggle.textContent = "×";

    } else {

        menuToggle.textContent = "☰";

    }

});



// ========================================
// DROPDOWN
// ========================================

const dropdowns =
    document.querySelectorAll(".dropdown");


dropdowns.forEach(function (dropdown) {

    const toggle =
        dropdown.querySelector(".dropdown-toggle");


    toggle.addEventListener("click", function (e) {

        e.preventDefault();


        // Dropdown يعمل click في الموبايل

        if (window.innerWidth <= 1100) {

            dropdowns.forEach(function (item) {

                if (item !== dropdown) {

                    item.classList.remove("open");

                }

            });


            dropdown.classList.toggle("open");

        }

    });

});



// ========================================
// HEADER SCROLL
// ========================================

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



// ========================================
// TYPING EFFECT
// ========================================

const typedElement =
    document.getElementById("typed-element");


const words = [

    "UX/UI Design",

    "Web Development",

    "Digital Marketing"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {


        typedElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );


        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;


            setTimeout(
                typeEffect,
                1500
            );

            return;

        }


    } else {


        typedElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );


        charIndex--;


        if (charIndex === 0) {

            deleting = false;


            wordIndex++;


            if (
                wordIndex ===
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(

        typeEffect,

        deleting ? 70 : 120

    );

}


typeEffect();



// ========================================
// PARTICLES
// ========================================

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");


let particles = [];



// Resize Canvas

function resizeCanvas() {

    canvas.width =
        canvas.offsetWidth;

    canvas.height =
        canvas.offsetHeight;


    createParticles();

}



// Create particles

function createParticles() {

    particles = [];


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        particles.push({

            x:
                Math.random() *
                canvas.width,

            y:
                Math.random() *
                canvas.height,

            size:
                Math.random() * 2 + 1,

            speedX:
                (Math.random() - 0.5)
                * 0.3,

            speedY:
                (Math.random() - 0.5)
                * 0.3

        });

    }

}



// Draw particles

function drawParticles() {

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );


    particles.forEach(
        function (particle, index) {


        // حركة النقطة

        particle.x +=
            particle.speedX;

        particle.y +=
            particle.speedY;


        // حدود الشاشة

        if (
            particle.x < 0 ||
            particle.x >
            canvas.width
        ) {

            particle.speedX *= -1;

        }


        if (
            particle.y < 0 ||
            particle.y >
            canvas.height
        ) {

            particle.speedY *= -1;

        }



        // رسم النقطة

        ctx.beginPath();


        ctx.arc(

            particle.x,

            particle.y,

            particle.size,

            0,

            Math.PI * 2

        );


        ctx.fillStyle =
            "rgba(255,255,255,0.5)";


        ctx.fill();



        // رسم الخطوط

        for (

            let j = index + 1;

            j < particles.length;

            j++

        ) {


            const other =
                particles[j];


            const dx =
                particle.x -
                other.x;


            const dy =
                particle.y -
                other.y;


            const distance =
                Math.sqrt(

                    dx * dx +
                    dy * dy

                );


            if (distance < 150) {


                ctx.beginPath();


                ctx.moveTo(

                    particle.x,

                    particle.y

                );


                ctx.lineTo(

                    other.x,

                    other.y

                );


                ctx.strokeStyle =

                    `rgba(255,255,255,${
                        0.15 *
                        (1 -
                            distance / 150)
                    })`;


                ctx.stroke();

            }

        }

    });


    requestAnimationFrame(
        drawParticles
    );

}



// ========================================
// EVENTS
// ========================================

window.addEventListener(
    "resize",
    resizeCanvas
);


// Start

resizeCanvas();

drawParticles();


// =========================================================
// OUR PROCESSES SCROLL ANIMATION
// =========================================================

const processGrid = document.querySelector(".process-grid");

if (processGrid) {

    const processObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    processGrid.classList.add("in-view");

                    processObserver.unobserve(processGrid);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    processObserver.observe(processGrid);
}


// =========================================================
// PORTFOLIO FILTER
// =========================================================

const filterBtns =
    document.querySelectorAll(".filter-btn");

const portfolioCards =
    document.querySelectorAll(".portfolio-card");


filterBtns.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active from all buttons

        filterBtns.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Add active to clicked button

        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        portfolioCards.forEach(function (card) {

            const category =
                card.getAttribute("data-category");


            card.classList.remove("hide", "show");


            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.add("show");

            } else {

                card.classList.add("hide");

            }

        });

    });

});



const testimonials = [
    {
        name: "Olivia Carter",
        role: "Startup Founder",
        text: "The team turned our idea into a professional and modern website.They understood our needs and delivered an amazing result.",
        image: "assits/images/face-01.png"
    },

    {
        name: "Daniel Wilson",
        role: "CEO, TechVision",
        text: "We were impressed by the quality and attention to detail.The team was professional, responsive, and delivered exactly what we needed",
        image: "assits/images/face-02.png"
    },

    {
        name: "Sophia Miller",
        role: "Marketing Manager",
        text: "From design to development, everything was handled professionally.The team was professional, responsive, and delivered exactly what we needed",
        image: "assits/images/face-03.png"
    },

    {
        name: "James Anderson",
        role: "Business Owner",
        text: "Working with this team was a great experience.Our new website helped us present our business in a much better way ",
        image: "assits/images/face-04.png"
    }
];


const cards = document.querySelectorAll(".testi-card");

let startIndex = 0;


function renderCards() {

    cards.forEach((card, i) => {

        const data = testimonials[(startIndex + i) % testimonials.length];

        card.querySelector("p").textContent = data.text;

        card.querySelector(".name").textContent = data.name;

        card.querySelector(".role").textContent = data.role;
        card.querySelector("img").src = data.image;

    });

}


renderCards();


setInterval(() => {

    cards.forEach(card => {
        card.classList.remove("active");
    });


    setTimeout(() => {

        startIndex = (startIndex + 1) % testimonials.length;

        renderCards();

        cards.forEach(card => {
            card.classList.add("active");
        });

    }, 400);

}, 3000);


// =================================
// Project Details Character Counter
// =================================

const projectDetails =
    document.getElementById("projectDetails");

const charCount =
    document.getElementById("charCount");


projectDetails.addEventListener("input", function () {

    charCount.textContent = projectDetails.value.length;

});



// =================================
// BACK TO TOP
// =================================

const backToTop =
    document.getElementById("backToTop");


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});




const footer = document.querySelector(".site-footer");
const hand = document.querySelector(".footer-hand");

window.addEventListener("scroll", () => {

    const rect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // نسبة دخول الـFooter للشاشة
    let progress =
        (windowHeight - rect.top) /
        (windowHeight + rect.height);

    progress = Math.max(0, Math.min(1, progress));

    // حركة اليد
    const moveY = -120 + (progress * 120);

    hand.style.transform = `translateY(${moveY}px)`;

    // ظهور تدريجي
    hand.style.opacity = progress;

});



// كاونتر العداد

const counters = document.querySelectorAll(".experience-stat-num");
const experienceSection = document.querySelector(".experience-wrap");

let started = false;

const startCounter = () => {

    if (started) return;

    started = true;

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);
        let current = 0;

        const updateCounter = () => {

            const increment = target / 100;

            if (current < target) {

                current += increment;

                counter.textContent =
                    Math.ceil(current).toLocaleString() + "+";

                setTimeout(updateCounter, 20);

            } else {

                counter.textContent =
                    target.toLocaleString() + "+";
            }
        };

        updateCounter();
    });
};


const observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {
        startCounter();
    }

}, {
    threshold: 0.4
});


observer.observe(experienceSection);



// كارد ال بيرسنج يظهر ب حلركه عند ال scroll


    const pricingTitle = document.querySelector(".pricing-title");
    const pricingCards = document.querySelectorAll(".pricing-card");

    const pricingObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                pricingTitle.classList.add("show");

                pricingCards.forEach((card) => {
                    card.classList.add("show");
                });

            }

        });

    }, {
        threshold: 0.2
    });


    pricingObserver.observe(pricingTitle);




    // عامله اسكرول ل البلوج


    

    const blogSection = document.querySelector(".blog-section");

    const blogTitle = document.querySelector(".blog-header h2");

    const blogButton = document.querySelector(".view-all-btn");

    const blogCards = document.querySelectorAll(".blog-card");


    const blogObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                blogTitle.classList.add("show");

                blogButton.classList.add("show");


                blogCards.forEach((card) => {
                    card.classList.add("show");
                });

                blogObserver.unobserve(blogSection);

            }

        });

    }, {

        threshold: 0.2

    });


    blogObserver.observe(blogSection);

// ترانسشن بتاع  services


    const servicesSection = document.querySelector(".services");

    const servicesTitle = document.querySelector(".section-title");

    const serviceCards = document.querySelectorAll(".service-card");


    const servicesObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                // إظهار العنوان
                servicesTitle.classList.add("show");


                // إظهار الكروت
                serviceCards.forEach((card) => {

                    card.classList.add("show");

                });


                // الأنيميشن يحصل مرة واحدة
                servicesObserver.unobserve(servicesSection);

            }

        });

    }, {

        threshold: 0.2

    });


    servicesObserver.observe(servicesSection);


// تراسشن ل المهاات 



    const aboutSection = document.querySelector(".about-skills");

    const aboutContent =
        document.querySelector(".about-skills-content");

    const aboutImage =
        document.querySelector(".about-skills-image");

    const skills =
        document.querySelectorAll(".skill");

    const progressBars =
        document.querySelectorAll(".skill-progress");


    const aboutObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                /* المحتوى */
                aboutContent.classList.add("show");


                /* الصورة */
                aboutImage.classList.add("show");


                /* Skills */
                skills.forEach((skill) => {

                    skill.classList.add("show");

                });


                /* Progress Bars */
                progressBars.forEach((bar) => {

                    bar.classList.add("animate");

                });


                /* يحصل مرة واحدة */
                aboutObserver.unobserve(aboutSection);

            }

        });

    }, {

        threshold: 0.2

    });


    aboutObserver.observe(aboutSection);



/*CONTACT SCROLL ANIMATION */

const contactSection =
    document.querySelector(".contact-section");

const contactTitle =
    document.querySelector(".contact-title");

const contactInfo =
    document.querySelector(".contact-info");

const contactForm =
    document.querySelector(".contact-form-box");

const contactItems =
    document.querySelectorAll(".contact-item");

const followUs =
    document.querySelector(".follow-us");


const contactObserver =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                /* Title */
                contactTitle.classList.add("show");


                /* Left */
                contactInfo.classList.add("show");


                /* Form */
                contactForm.classList.add("show");


                /* Contact Items */
                contactItems.forEach((item) => {

                    item.classList.add("show");

                });


                /* Social Media */
                followUs.classList.add("show");


                /* Animation مرة واحدة */
                contactObserver.unobserve(contactSection);

            }

        });

    }, {

        threshold: 0.2

    });


contactObserver.observe(contactSection);


