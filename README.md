# Abu Zafar — Academic Website v2
## Multi-page + Firebase Admin Panel

---

## 📁 File Structure

```
zafar-site/
├── index.html          ← Home page
├── about.html          ← About page
├── research.html       ← Research page
├── publications.html   ← Publications page
├── blog.html           ← Blog page
├── contact.html        ← Contact page
├── admin.html          ← Admin panel (protected)
├── css/
│   └── style.css
├── js/
│   ├── firebase-config.js   ← PUT YOUR FIREBASE CREDENTIALS HERE
│   └── shared.js
├── firebase.json
├── firestore.rules
└── .firebaserc
```

---

## ⚙️ SETUP — Do This First (5 steps)

### Step 1 — Add Firebase credentials
Open `js/firebase-config.js` and replace all placeholder values:
- `YOUR_API_KEY`
- `YOUR_PROJECT_ID`
- `YOUR_MESSAGING_SENDER_ID`
- `YOUR_APP_ID`
- `YOUR_GOOGLE_EMAIL@gmail.com`

Get these from: Firebase Console → Your Project → Project Settings → Your Apps → Web App

### Step 2 — Add your admin email
In `js/firebase-config.js`, set:
```js
const ADMIN_EMAIL = "your.real.email@gmail.com";
```

In `firestore.rules`, replace:
```
"YOUR_GOOGLE_EMAIL@gmail.com"
```
with your real Gmail address.

### Step 3 — Set Firebase Project ID
In `.firebaserc`, replace `YOUR_FIREBASE_PROJECT_ID` with your real project ID.

### Step 4 — Enable Google Sign-In in Firebase
1. Go to Firebase Console → Authentication → Sign-in method
2. Enable "Google" provider
3. Save

### Step 5 — Enable Firestore Database
1. Go to Firebase Console → Firestore Database
2. Click "Create database"
3. Choose "Start in production mode"
4. Select a region (e.g. asia-south1 for Bangladesh)
5. Done

---

## 🚀 Deploy

```bash
cd zafar-site
firebase login
firebase deploy
```

---

## 🔐 Using the Admin Panel

1. Go to `https://your-site.web.app/admin.html`
2. Click "Sign in with Google"
3. Log in with YOUR Google account
4. Manage everything from the tabs:
   - **Home** — position, institution, tagline, photo, stats
   - **About** — bio paragraphs, future ambitions
   - **Positions** — add/delete academic positions
   - **Experience** — add/delete professional experience
   - **Education** — add/delete degrees
   - **Research** — add/delete research areas
   - **Publications** — add/delete papers
   - **Blog** — add/delete blog posts
   - **Contact** — email, office, all social links

All changes appear on the live website instantly!

---

## 📬 Contact Form
Set up Formspree (free): https://formspree.io
Then in `contact.html`, replace `YOUR_FORMSPREE_ENDPOINT` with your URL.
