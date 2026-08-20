//سكرول الناف بار
window.addEventListener("scroll", function () {
    let nav = document.querySelector(".nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Dark & Light Mode
let themeBtn = document.getElementById("themebtn");
if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        let icon = themeBtn.querySelector("i");
        if (icon) {
            if (document.body.classList.contains("dark-mode")) {
                icon.className = "fa-regular fa-moon";
            } else {
                icon.className = "fa-regular fa-sun";
            }
        }
    });
}

//header
function addExtraShapes() {
    const container = document.querySelector('.dots');

    if (!container) return;
    const layout = [
        { zone: 'right', type: 'circle-filled', minLeft: 65, maxLeft: 73, top: 15 },
        { zone: 'right', type: 'circle-filled', minLeft: 78, maxLeft: 88, top: 25 },
        { zone: 'right', type: 'circle-filled', minLeft: 68, maxLeft: 76, top: 70 },
        { zone: 'right', type: 'circle-outlined', minLeft: 82, maxLeft: 90, top: 75 },
        { zone: 'right', type: 'circle-outlined', minLeft: 72, maxLeft: 80, top: 35 },

        { zone: 'center', type: 'circle-filled', minLeft: 40, maxLeft: 48, top: 20 },
        { zone: 'center', type: 'circle-outlined', minLeft: 50, maxLeft: 58, top: 72 },

        { zone: 'left', type: 'circle-filled', minLeft: 6, maxLeft: 14, top: 20 },
        { zone: 'left', type: 'circle-filled', minLeft: 20, maxLeft: 28, top: 75 },
        { zone: 'left', type: 'circle-outlined', minLeft: 10, maxLeft: 18, top: 55 }
    ];

    layout.forEach((item) => {
        const shape = document.createElement('span');
        shape.classList.add('shape-extra', item.type);

        const size = Math.floor(Math.random() * 80) + 45;
        const left = (Math.random() * (item.maxLeft - item.minLeft) + item.minLeft).toFixed(2);
        const top = (item.top + (Math.random() * 8 - 4)).toFixed(2);

        const duration = (Math.random() * 5 + 5).toFixed(1);
        const delay = (Math.random() * 4).toFixed(1);
        const opacity = (Math.random() * 0.3 + 0.15).toFixed(2);

        shape.style.width = size + 'px';
        shape.style.height = size + 'px';
        shape.style.top = top + '%';
        shape.style.left = left + '%';
        shape.style.animationDuration = duration + 's';
        shape.style.animationDelay = delay + 's';
        shape.style.opacity = opacity;

        container.appendChild(shape);
    });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addExtraShapes);
} else {
    addExtraShapes();
}
//menu
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('mobile-open');

            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (nav.classList.contains('mobile-open')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
});

const projectDetails =
    document.getElementById("projectDetails");

const charCount =
    document.getElementById("charCount");

projectDetails.addEventListener("input", function () {

    charCount.textContent = projectDetails.value.length;

});

//btn
const upBtn = document.getElementById("upBtn");
const page2 = document.querySelector(".page1");

window.addEventListener("scroll", function () {

    if (window.scrollY >= page2.offsetTop) {
        upBtn.classList.replace("hide", "show");
    } else {
        upBtn.classList.replace("show", "hide");
    }
});

upBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});