import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, collection, doc, getDoc, getDocs, addDoc, setDoc, updateDoc,
  deleteDoc, query, where, onSnapshot, serverTimestamp, writeBatch
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getStorage, ref, uploadBytes, getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPPOLouI__RnSeKH4PbMUyP_Cpdbw3fOQ",
  authDomain: "abu-zafar-website-78193.firebaseapp.com",
  projectId: "abu-zafar-website-78193",
  storageBucket: "abu-zafar-website-78193.firebasestorage.app",
  messagingSenderId: "866882657881",
  appId: "1:866882657881:web:b49d39dd67a07e24351b48"
};

export const ADMIN_EMAIL = "zafarbhbd@gmail.com";
export const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

// ---- Year navigation (same structure/colors as the Attendance System, for
// a consistent feel across the whole suite). Courses now belong to a Year. ----
export const YEARS = ["Y1", "Y2", "Y3", "Y4", "NM1", "NM2"];
export const YEAR_LABELS = {
  Y1: "First Year", Y2: "Second Year", Y3: "Third Year", Y4: "Fourth Year",
  NM1: "Non-Major First Year", NM2: "Non-Major Second Year"
};
export const YEAR_COLORS = {
  Y1: "#2563eb", Y2: "#059669", Y3: "#d97706", Y4: "#dc2626", NM1: "#7c3aed", NM2: "#0891b2"
};
export const YEAR_TINTS = {
  Y1: { bg: "#dbeafe", border: "#93c5fd" },
  Y2: { bg: "#d1fae5", border: "#6ee7b7" },
  Y3: { bg: "#fef3c7", border: "#fcd34d" },
  Y4: { bg: "#fee2e2", border: "#fca5a5" },
  NM1: { bg: "#ede9fe", border: "#c4b5fd" },
  NM2: { bg: "#cffafe", border: "#67e8f9" }
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export {
  collection, doc, getDoc, getDocs, addDoc, setDoc, updateDoc, deleteDoc,
  query, where, onSnapshot, serverTimestamp, writeBatch,
  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
  ref, uploadBytes, getDownloadURL
};

// ---- Collection names, prefixed so they never collide with other projects
// sharing this same Firestore database (e.g. the Attendance System's own
// "students"/"sessions" collections). ----
export const COURSES = "asgn_courses";
export const STUDENTS = "asgn_students";
export const ASSIGNMENTS = "asgn_assignments";
export const SUBMISSIONS = "asgn_submissions";

// ---- Deterministic IDs (prevent duplicates, and let Firestore rules block
// a second submission simply by not granting "update" permission). ----
export function studentDocId(courseId, roll) {
  return (courseId + "_" + roll).replace(/\s+/g, "_");
}
export function submissionDocId(assignmentId, roll) {
  return (assignmentId + "_" + roll).replace(/\s+/g, "_");
}

// ---- A distinct color per course, derived from its name so it stays the
// same forever without needing to store it separately. ----
const COURSE_COLORS = ["#4f46e5", "#059669", "#d97706", "#dc2626", "#7c3aed", "#0891b2", "#db2777", "#65a30d"];
export function courseColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return COURSE_COLORS[Math.abs(hash) % COURSE_COLORS.length];
}
