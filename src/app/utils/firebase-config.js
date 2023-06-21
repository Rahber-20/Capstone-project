import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCs-DDxKSSp4Ztw99m2tR2t3XmniQ_XVeo",
  authDomain: "mern-flixxit.firebaseapp.com",
  projectId: "mern-flixxit",
  storageBucket: "mern-flixxit.appspot.com",
  messagingSenderId: "580973669157",
  appId: "1:580973669157:web:a7a98742172517a4c488cc",
  measurementId: "G-YV0RF6LMCB"
};
const app = initializeApp(firebaseConfig);

 export const firebaseAuth = getAuth(app)