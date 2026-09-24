// nav.js — builds the navbar AND wires it up (menu, dropdown, theme, active link).
// Wiring lives here because the nav HTML only exists after insertNav() runs.
const SUN  = `<svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;
const MOON = `<svg class="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>`;
const CHEV = `<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;

export function insertNav() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  nav.innerHTML = `
  <div class="nav-inner">
    <a href="index.html" class="nav-brand" aria-label="Abu Zafar — home">
      <span class="brand-logo">AZ</span>
      <span class="brand-text"><span class="brand-name">Abu Zafar</span><span class="brand-sub">Academic Portfolio</span></span>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li class="nav-dropdown">
        <button type="button" class="nav-dropbtn" aria-expanded="false" aria-haspopup="true">Academic ${CHEV}</button>
        <div class="nav-dropdown-menu">
          <a href="positions.html">Academic Positions</a>
          <a href="education.html">Education</a>
          <a href="research.html">Research</a>
          <a href="publications.html">Publications</a>
        </div>
      </li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li class="nav-admin"><a href="admin.html">Admin</a></li>
    </ul>
    <div class="nav-tools">
      <button type="button" class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">${SUN}${MOON}</button>
      <button type="button" class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks"><span></span><span></span><span></span></button>
    </div>
  </div>`;
  wireNav(nav);
}

function wireNav(nav) {
  const links  = nav.querySelector("#navLinks");
  const toggle = nav.querySelector("#navToggle");
  const drop   = nav.querySelector(".nav-dropdown");
  const dropBtn = drop.querySelector(".nav-dropbtn");

  const setMenu = open => {
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (!open) setDrop(false);
  };
  const setDrop = open => { drop.classList.toggle("open", open); dropBtn.setAttribute("aria-expanded", open); };

  toggle.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  dropBtn.addEventListener("click", e => { e.stopPropagation(); setDrop(!drop.classList.contains("open")); });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("click", e => { if (!nav.contains(e.target)) setMenu(false); else if (!drop.contains(e.target)) setDrop(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
  window.addEventListener("resize", () => { if (window.innerWidth > 820) setMenu(false); });

  // theme toggle
  nav.querySelector("#themeToggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // shadow on scroll
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // active page (+ highlight "Academic" when a sub-page is open)
  const page = window.location.pathname.split("/").pop() || "index.html";
  links.querySelectorAll("a").forEach(a => {
    if ((a.getAttribute("href") || "") === page) {
      a.classList.add("active");
      if (drop.contains(a)) dropBtn.classList.add("active");
    }
  });
}
