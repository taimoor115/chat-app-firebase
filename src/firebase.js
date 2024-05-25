import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAYsFLUkwc9sh7XRcGeQAvgUIR99mouzRQ",
  authDomain: "chat-app-8f82a.firebaseapp.com",
  projectId: "chat-app-8f82a",
  storageBucket: "chat-app-8f82a.appspot.com",
  messagingSenderId: "140916610307",
  appId: "1:140916610307:web:9844ee9ef1d7b3455ac536",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
