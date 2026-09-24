// shared.js — academic site (nav wiring now lives in nav.js)
import { auth, ADMIN_EMAIL } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
  { threshold: 0.1 }
);
document.querySelectorAll("[data-fade]").forEach(el => observer.observe(el));

// Show admin shortcut if logged in
onAuthStateChanged(auth, user => {
  if (user && user.email === ADMIN_EMAIL && !document.querySelector(".admin-fab")) {
    const fab = document.createElement("a");
    fab.href = "admin.html";
    fab.className = "admin-fab";
    fab.textContent = "⚙️ Admin";
    document.body.appendChild(fab);
  }
});

export function formatDate(ts) {
  if (!ts) return "";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function showToast(msg, ok = true) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.style.cssText = "position:fixed;bottom:80px;right:16px;left:16px;max-width:360px;margin-left:auto;z-index:3000;padding:12px 20px;border-radius:8px;font-size:0.9rem;font-weight:500;box-shadow:0 4px 16px rgba(0,0,0,0.15);transition:opacity 0.3s";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.background = ok ? "#2e7d32" : "#c62828";
  t.style.color = "#fff";
  t.style.opacity = "1";
  setTimeout(() => t.style.opacity = "0", 3000);
}
