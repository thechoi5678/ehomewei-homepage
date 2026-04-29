// ============================================
// EHOMEWEI — Interactions
// ============================================

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav__menu');

navToggle.addEventListener('click', () => {
  const isActive = navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', String(isActive));
  navToggle.setAttribute('aria-label', isActive ? '메뉴 닫기' : '메뉴 열기');
});

// Close mobile nav on link click
document.querySelectorAll('.nav__menu a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll(
  '.section__title, .section__sub, .story__body, .product, .why__card, .stores__buttons, .contact__body, .contact__email'
);
revealEls.forEach((el) => el.classList.add('reveal'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);

revealEls.forEach((el) => io.observe(el));

// Nav background on scroll
const nav = document.getElementById('nav');
let lastY = 0;
window.addEventListener(
  'scroll',
  () => {
    const y = window.scrollY;
    nav.style.boxShadow = y > 8 ? '0 1px 0 rgba(0,0,0,0.06)' : 'none';
    lastY = y;
  },
  { passive: true }
);
