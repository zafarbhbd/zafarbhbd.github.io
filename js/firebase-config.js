// ═══════════════════════════════════════════════════════
//  firebase-config.js
//  Replace the placeholder values below with your own
//  Firebase project credentials.
//
//  HOW TO GET THESE VALUES:
//  1. Go to https://console.firebase.google.com
//  2. Click your project → Project Settings (gear icon)
//  3. Scroll to "Your apps" → click "</>" (Web app)
//  4. Register app if needed → copy the firebaseConfig object
//  5. Paste each value below
// ═══════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey:            "AIzaSyDPPOLouI__RnSeKH4PbMUyP_Cpdbw3fOQ",
  authDomain:        "abu-zafar-website-78193.firebaseapp.com",
  projectId:         "abu-zafar-website-78193",
  storageBucket:     "abu-zafar-website-78193.firebasestorage.app",
  messagingSenderId: "866882657881",
  appId:             "1:866882657881:web:b49d39dd67a07e24351b48"
};

// ── ADMIN EMAIL ────────────────────────────────────────
// Replace with YOUR Google account email.
// Only this email can access the admin panel.
const ADMIN_EMAIL = "zafarbhbd@gmail.com";

// ── Initialize Firebase ────────────────────────────────
import { initializeApp }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth }         from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth, ADMIN_EMAIL };
