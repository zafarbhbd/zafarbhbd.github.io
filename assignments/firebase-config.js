import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, collection, doc, getDoc, getDocs, addDoc, setDoc, updateDoc,
  deleteDoc, query, where, onSnapshot, serverTimestamp, writeBatch
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getStorage, ref, uploadBytes, getDownloadURL, deleteObject
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
export const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export {
  collection, doc, getDoc, getDocs, addDoc, setDoc, updateDoc, deleteDoc,
  query, where, onSnapshot, serverTimestamp, writeBatch,
  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
  ref, uploadBytes, getDownloadURL, deleteObject
};

// ---- Year navigation (same as Attendance) ----
export const YEARS = ["Y1", "Y2", "Y3", "Y4", "NM1", "NM2"];
export const YEAR_LABELS = {
  Y1: "First Year", Y2: "Second Year", Y3: "Third Year", Y4: "Fourth Year",
  NM1: "Non-Major First Year", NM2: "Non-Major Second Year"
};
export const YEAR_COLORS = { Y1: "#2563eb", Y2: "#059669", Y3: "#d97706", Y4: "#dc2626", NM1: "#7c3aed", NM2: "#0891b2" };
export const YEAR_TINTS = {
  Y1: { bg: "#dbeafe", border: "#93c5fd" }, Y2: { bg: "#d1fae5", border: "#6ee7b7" },
  Y3: { bg: "#fef3c7", border: "#fcd34d" }, Y4: { bg: "#fee2e2", border: "#fca5a5" },
  NM1: { bg: "#ede9fe", border: "#c4b5fd" }, NM2: { bg: "#cffafe", border: "#67e8f9" }
};
export const NEXT_YEAR_MAP = { Y1: "Y2", Y2: "Y3", Y3: "Y4" };

// ---- Collection names (prefixed to avoid colliding with Attendance) ----
export const COURSES = "asgn_courses";
export const STUDENTS = "asgn_students";       // now YEAR-level roster, shared across a year's courses
export const GROUPS = "asgn_groups";
export const ASSIGNMENTS = "asgn_assignments";
export const SUBMISSIONS = "asgn_submissions";
export const ARCHIVED_REPORTS = "asgn_archivedReports";

// ---- Deterministic IDs ----
export function studentDocId(yearKey, reg) { return (yearKey + "_" + reg).replace(/\s+/g, "_"); }
export function submissionDocId(assignmentId, reg) { return (assignmentId + "_" + reg).replace(/\s+/g, "_"); }

// ---- Distinct colors, for courses (hash-based, stable) and groups (sequential) ----
const PALETTE = ["#4f46e5", "#059669", "#d97706", "#dc2626", "#7c3aed", "#0891b2", "#db2777", "#65a30d"];
export function courseColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return PALETTE[Math.abs(hash) % PALETTE.length];
}
export function groupColor(index) { return PALETTE[index % PALETTE.length]; }

export function groupLetterName(index) {
  return "Group " + String.fromCharCode(65 + (index % 26));
}
