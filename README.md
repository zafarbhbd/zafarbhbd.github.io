# Abu Zafar Academic Website v3
## Complete system with Student Management

---

## 📁 File Structure

```
zafar-site-v3/
├── index.html              Home
├── about.html              About (bio, positions, experience, education)
├── positions.html          Academic Positions page
├── education.html          Education page
├── research.html           Research areas
├── publications.html       Publications
├── blog.html               Blog
├── contact.html            Contact + email form
├── admin.html              🔐 Website Admin Panel
├── attendance.html         Student attendance (no login)
├── student-portal.html     Student login + marks + attendance
├── student-mgmt.html       🔐 Teacher Student Management
├── css/style.css
├── js/
│   ├── firebase-config.js  ← PUT YOUR CREDENTIALS HERE
│   ├── shared.js
│   └── nav.js
├── firebase.json
├── firestore.rules
├── storage.rules
└── .firebaserc
```

---

## ⚙️ SETUP (Do this first)

### 1. Firebase credentials
Open `js/firebase-config.js` → replace all placeholder values.
Get from: Firebase Console → Project Settings → Your Apps → Web App

### 2. Your email
Replace `YOUR_GOOGLE_EMAIL@gmail.com` in:
- `js/firebase-config.js` (ADMIN_EMAIL)
- `firestore.rules` (3 places)
- `storage.rules` (2 places)

### 3. Firebase project ID
In `.firebaserc` → replace `YOUR_FIREBASE_PROJECT_ID`

### 4. Enable services in Firebase Console
- Authentication → Sign-in method → Enable **Google**
- Firestore Database → Create database → Production mode → asia-south1
- Storage → Get started → Production mode

### 5. Enable Firebase Storage
Firebase Console → Storage → Get started

---

## 🚀 Deploy

```bash
firebase deploy
```

---

## 🔐 Admin Panel Access
Go to: `yoursite.web.app/admin.html`
Sign in with your Google account.

## 🎓 Student Management Access
Go to: `yoursite.web.app/student-mgmt.html`
Same Google sign-in — no second login needed.

## 👨‍🎓 Student Portal
Go to: `yoursite.web.app/student-portal.html`
Students log in with Registration Number + their own password.

## 📋 Attendance
Go to: `yoursite.web.app/attendance.html`
No login needed for students.

---

## 📬 Contact Form
Sign up free at https://formspree.io
In `contact.html` replace `YOUR_FORMSPREE_ENDPOINT` with your URL.

---

## 🎓 Student Management Workflow

### Adding students
Student Management → Select year → Students tab → "+ Add Student"

### Taking attendance
1. Student Management → Attendance tab → Open session with date label
2. Students go to attendance.html → select year → submit
3. When done → Close attendance (absent filled automatically)

### Assignments
1. Student Management → Assignments tab → Create assignment
2. Students log in to student-portal.html → upload file
3. You → Submissions button → download files
4. You → Mark button → enter marks for each student

### Debates
1. Student Management → Debates tab → Create debate (groups auto-assigned)
2. Students perform in class
3. You → Mark button → enter marks

### Promoting students
Students tab → scroll down → uncheck students to EXCLUDE → Promote button
⚠️ Previous year records deleted automatically after confirmation.
