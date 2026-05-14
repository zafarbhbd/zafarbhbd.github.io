/* ═══════════════════════════════════════════════════════
   Abu Zafar Academic Website — main.js
═══════════════════════════════════════════════════════ */

// ── Year in footer ─────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Navbar: scroll shadow + active link ────────────────
const navbar   = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function onScroll() {
  // Shadow on scroll
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  // Active nav link based on current section
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // Run once on load

// ── Mobile nav toggle ──────────────────────────────────
const navToggle   = document.getElementById('navToggle');
const navLinksEl  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinksEl.classList.remove('open'));
});

// ── Fade-in on scroll (Intersection Observer) ──────────
const faders = document.querySelectorAll('[data-fade]');
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);
faders.forEach(el => observer.observe(el));

// ── Contact form (placeholder handler) ─────────────────
// NOTE: To make this form actually send emails, integrate
// Firebase Functions + Nodemailer, OR use a service like
// Formspree (https://formspree.io) or EmailJS.
//
// Quick Formspree setup:
//   1. Go to https://formspree.io and create a free account
//   2. Create a new form and copy your endpoint URL
//   3. Replace 'YOUR_FORMSPREE_ENDPOINT' below with it
//   4. That's it — no backend needed!
//
const FORMSPREE_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT'; // e.g. https://formspree.io/f/xabcdefg

const contactForm = document.getElementById('contactForm');
const formNote    = document.getElementById('formNote');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (FORMSPREE_ENDPOINT === 'YOUR_FORMSPREE_ENDPOINT') {
    // Demo mode — no endpoint configured yet
    formNote.textContent = '✅ (Demo) Message received! Set up Formspree to make this live.';
    formNote.style.color = '#4a8c6e';
    contactForm.reset();
    return;
  }

  const data = new FormData(contactForm);
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      formNote.textContent = '✅ Message sent! I will get back to you soon.';
      formNote.style.color = '#4a8c6e';
      contactForm.reset();
    } else {
      formNote.textContent = '⚠️ Something went wrong. Please email me directly.';
      formNote.style.color = '#c0392b';
    }
  } catch {
    formNote.textContent = '⚠️ Network error. Please try again later.';
    formNote.style.color = '#c0392b';
  }
});
