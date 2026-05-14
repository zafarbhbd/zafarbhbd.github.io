// ═══════════════════════════════════════════════════════
//  shared.js — runs on every page
// ═══════════════════════════════════════════════════════
import { auth, ADMIN_EMAIL } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ── Year in footer ─────────────────────────────────────
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Navbar scroll shadow ───────────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

// ── Mobile nav toggle ──────────────────────────────────
const navToggle  = document.getElementById("navToggle");
const navLinksEl = document.getElementById("navLinks");
if (navToggle) {
  navToggle.addEventListener("click", () => navLinksEl.classList.toggle("open"));
  navLinksEl.querySelectorAll("a").forEach(l => l.addEventListener("click", () => navLinksEl.classList.remove("open")));
}

// ── Active nav link ────────────────────────────────────
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(link => {
  const href = link.getAttribute("href").split("/").pop();
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.classList.add("active");
  }
});

// ── Fade-in on scroll ──────────────────────────────────
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll("[data-fade]").forEach(el => observer.observe(el));

// ── Show admin bar if logged in as admin ───────────────
onAuthStateChanged(auth, user => {
  if (user && user.email === ADMIN_EMAIL) {
    const bar = document.createElement("a");
    bar.href = "admin.html";
    bar.className = "admin-bar";
    bar.innerHTML = "⚙️ Admin Panel";
    document.body.appendChild(bar);
  }
});

// ── Helpers ────────────────────────────────────────────
export function formatDate(ts) {
  if (!ts) return "";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function spinner() {
  return `<div class="spinner">Loading…</div>`;
}

export function emptyState(icon, msg) {
  return `<div class="empty-state"><div class="empty-icon">${icon}</div><p>${msg}</p></div>`;
}
