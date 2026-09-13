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
