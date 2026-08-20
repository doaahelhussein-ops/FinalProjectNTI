const themeToggleBtn = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const darkIcon = document.getElementById('theme-toggle-dark-icon');

// 1. التبديل بين الثيم المظلم والمضيء عند الضغط
themeToggleBtn.addEventListener('click', () => {
  // تبديل الكلاس على الـ body
  document.body.classList.toggle('dark-mode');

  // إظهار وإخفاء الأيقونات
  lightIcon.classList.toggle('hidden');
  darkIcon.classList.toggle('hidden');
});

// 2. تغيير لون الـ Header عند الـ Scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});