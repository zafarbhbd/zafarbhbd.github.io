// nav.js — academic site only (no student links)
export function insertNav() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  nav.innerHTML = `
  <div class="nav-inner">
    <a href="index.html" class="nav-brand">Abu Zafar</a>
    <button class="nav-toggle" id="navToggle"><span></span><span></span><span></span></button>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li class="nav-dropdown">
        <button class="nav-dropbtn">Academic ▾</button>
        <div class="nav-dropdown-menu">
          <a href="positions.html">Academic Positions</a>
          <a href="education.html">Education</a>
          <a href="research.html">Research</a>
        </div>
      </li>
      <li><a href="publications.html">Publications</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </div>`;
}
