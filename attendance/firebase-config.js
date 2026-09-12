// Shared Firebase setup + constants for both index.html (student) and teacher.html.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, collection, doc, getDoc, getDocs, addDoc, setDoc, updateDoc,
  deleteDoc, query, where, orderBy, onSnapshot, serverTimestamp, writeBatch
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: these are your project's values — safe to keep public in client code.
const firebaseConfig = {
  apiKey: "AIzaSyDPPOLouI__RnSeKH4PbMUyP_Cpdbw3fOQ",
  authDomain: "abu-zafar-website-78193.firebaseapp.com",
  projectId: "abu-zafar-website-78193",
  storageBucket: "abu-zafar-website-78193.firebasestorage.app",
  messagingSenderId: "866882657881",
  appId: "1:866882657881:web:b49d39dd67a07e24351b48"
};

export const ADMIN_EMAIL = "zafarbhbd@gmail.com";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export {
  collection, doc, getDoc, getDocs, addDoc, setDoc, updateDoc, deleteDoc,
  query, where, orderBy, onSnapshot, serverTimestamp, writeBatch,
  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
};

// ---- Fixed year/subject structure (same as the original Apps Script version) ----
export const YEARS = ["Y1", "Y2", "Y3", "Y4", "NM1", "NM2"];
export const YEAR_LABELS = {
  Y1: "First Year", Y2: "Second Year", Y3: "Third Year", Y4: "Fourth Year",
  NM1: "Non-Major First Year", NM2: "Non-Major Second Year"
};
export const NM_SUBJECTS = {
  NM1: ["Islamic History"],
  NM2: ["Islamic History", "Bengali", "English", "Economics", "Philosophy"]
};
export const NM_YEARS = ["NM1", "NM2"];

export const YEAR_COLORS = {
  Y1: "#2563eb",   // blue
  Y2: "#059669",   // green
  Y3: "#d97706",   // amber
  Y4: "#dc2626",   // red
  NM1: "#7c3aed",  // purple
  NM2: "#0891b2"   // teal
};

export function needsSubject(yearKey) {
  return NM_YEARS.indexOf(yearKey) !== -1;
}

export function sectionLabel(yearKey, subject) {
  return subject ? YEAR_LABELS[yearKey] + " — " + subject : YEAR_LABELS[yearKey];
}

// Deterministic doc IDs so re-adding the same student/record never creates
// a silent duplicate, and so Firestore rules can block a second check-in
// by simply not granting "update" permission to students.
export function studentDocId(yearKey, subject, reg) {
  return (yearKey + "_" + (subject || "none") + "_" + reg).replace(/\s+/g, "_");
}
export function attendanceDocId(sessionId, reg) {
  return (sessionId + "_" + reg).replace(/\s+/g, "_");
}
