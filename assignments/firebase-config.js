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

// ---- Year / Subject navigation (Subject only applies to Non-Major years,
// same structure as the Attendance System) ----
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
export const NM_SUBJECTS = { NM1: ["Islamic History"], NM2: ["Islamic History", "Bengali", "English", "Economics", "Philosophy"] };
export const NM_YEARS = ["NM1", "NM2"];
export function needsSubject(yearKey) { return NM_YEARS.indexOf(yearKey) !== -1; }
export const NEXT_YEAR_MAP = { Y1: "Y2", Y2: "Y3", Y3: "Y4" };

// ---- Collection names ----
export const COURSES = "asgn_courses";
export const STUDENTS = "asgn_students";
export const ASSIGNMENTS = "asgn_assignments";
export const SUBMISSIONS = "asgn_submissions";
export const ARCHIVED_REPORTS = "asgn_archivedReports";

// ---- Deterministic IDs ----
export function studentDocId(yearKey, subject, reg) { return (yearKey + "_" + (subject || "none") + "_" + reg).replace(/\s+/g, "_"); }
export function submissionDocId(assignmentId, reg) { return (assignmentId + "_" + reg).replace(/\s+/g, "_"); }

// ---- Distinct colors for courses (stable, hash-based) ----
const PALETTE = ["#4f46e5", "#059669", "#d97706", "#dc2626", "#7c3aed", "#0891b2", "#db2777", "#65a30d"];
export function courseColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

// ---- Splits a roster into fixed-size chunks (registration order or shuffled).
// Correct remainder behavior: size 3 on 7 students -> [3,3,1], not uneven groups. ----
export function splitIntoGroups(students, size, order) {
  let pool = students.slice();
  if (order === 'reg') pool.sort((a, b) => a.reg.localeCompare(b.reg, undefined, { numeric: true }));
  else for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
  const chunks = [];
  for (let i = 0; i < pool.length; i += size) chunks.push(pool.slice(i, i + size));
  return chunks;
}
