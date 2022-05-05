import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBJlXgnF3HIfyo5PmOWJa0sAf4lHc_-E80",
  authDomain: "week2022-final.firebaseapp.com",
  projectId: "week2022-final",
  storageBucket: "week2022-final.appspot.com",
  messagingSenderId: "345373420162",
  appId: "1:345373420162:web:449129e8199cf42acea29b"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()
export { db , auth}