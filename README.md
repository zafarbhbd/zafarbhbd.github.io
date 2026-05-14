# Abu Zafar — Personal Academic Website

A clean, minimal academic personal website. Built with HTML, CSS, and vanilla JavaScript. Hosted on Firebase.

---

## 📁 Project Structure

```
abu-zafar-website/
├── index.html          ← Main page (all sections)
├── css/
│   └── style.css       ← All styles & theme variables
├── js/
│   └── main.js         ← Interactivity (nav, animations, form)
├── images/
│   └── profile.jpg     ← YOUR PHOTO (add this file)
├── firebase.json       ← Firebase hosting config
├── .firebaserc         ← Firebase project alias
└── README.md           ← This file
```

---

## ✏️ How to Edit Content

All editable sections are clearly marked with comments in `index.html`. Look for lines like:
```html
<!-- PHOTO PLACEHOLDER — see instructions below -->
<!-- ADD MORE POSITIONS HERE — copy the block above -->
```

### Change Your Profile Photo
1. Save your photo as `images/profile.jpg` (or any format: `.png`, `.webp`)
2. In `index.html`, find the `photo-placeholder` div and replace it with:
   ```html
   <img src="images/profile.jpg" alt="Abu Zafar" class="hero-photo"/>
   ```

### Add / Edit Academic Positions
In `index.html`, find the **Academic Positions** section and copy/edit `timeline-item` blocks:
```html
<div class="timeline-item">
  <span class="timeline-year">2022 – Present</span>
  <strong>Assistant Professor</strong>
  <span>Department of Political Science, University of Dhaka</span>
</div>
```

### Add / Edit Publications
Find the **Publications** section and copy/edit `pub-card` blocks. Fill in:
- `pub-year` — the year badge
- `pub-title` — paper title
- `pub-authors` — all authors
- `pub-journal` — journal name, volume, pages, citations
- `pub-link` href values — link to PDF or DOI

### Add a Blog Post
Find the **Blog** section and copy/edit `blog-card` blocks.

### Update Contact Details
In the **Contact** section, replace:
- `your.email@university.edu` with your real email
- GitHub, Google Scholar, ResearchGate, ORCID links
- Your office address

---

## 📬 Making the Contact Form Work

The form uses [Formspree](https://formspree.io) (free tier — no backend needed):
1. Sign up at https://formspree.io
2. Create a new form → copy your endpoint URL
3. In `js/main.js`, replace:
   ```js
   const FORMSPREE_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT';
   ```
   with your actual URL, e.g.:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xabcdefg';
   ```

---

## 🚀 Deploy to Firebase Hosting

### First Time Setup
```bash
# 1. Install Firebase CLI (requires Node.js)
npm install -g firebase-tools

# 2. Login to Firebase
firebase login

# 3. Go to your project folder
cd abu-zafar-website

# 4. Initialize (choose "Hosting", select your project)
firebase init hosting
#    → Public directory: . (just press Enter / type a dot)
#    → Single-page app: No
#    → Overwrite index.html: No

# 5. In .firebaserc, replace YOUR_FIREBASE_PROJECT_ID with your project ID
#    (find it at https://console.firebase.google.com)

# 6. Deploy!
firebase deploy
```

### After Making Changes
```bash
firebase deploy
```
That's it — your live URL will appear in the terminal (e.g. `https://your-project.web.app`).

---

## 🎨 Customising Colours & Fonts

All design tokens are in `css/style.css` at the top, inside `:root {}`:
```css
:root {
  --clr-accent:  #2a5298;   /* Navy blue — change to any colour */
  --clr-accent2: #4a8c6e;   /* Teal green — secondary accent    */
  --font-head:   'Lora', Georgia, serif;
  --font-body:   'DM Sans', sans-serif;
  ...
}
```

---

## 📝 License
This website code is for personal use by Abu Zafar. Feel free to adapt as needed.
