// ═══════════════════════════════════════════════════════
//  firebase-config.js
//  Replace ALL placeholder values with your Firebase credentials
//
//  HOW TO GET THESE:
//  Firebase Console → Project Settings → Your Apps → Web App
// ═══════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey:            "AIzaSyDPPOLouI__RnSeKH4PbMUyP_Cpdbw3fOQ",
  authDomain:        "abu-zafar-website-78193.firebaseapp.com",
  projectId:         "abu-zafar-website-78193",
  storageBucket:     "abu-zafar-website-78193.firebasestorage.app",
  messagingSenderId: "866882657881",
  appId:             "1:866882657881:web:b49d39dd67a07e24351b48"
};

// Your Google account email — only this can access admin panel
const ADMIN_EMAIL = "zafarbhbd@gmail.com";

import { initializeApp }     from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }      from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth }           from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getStorage }        from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const app     = initializeApp(firebaseConfig);
const db      = getFirestore(app);
const auth    = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage, ADMIN_EMAIL };
