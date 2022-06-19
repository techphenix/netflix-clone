// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBkVNvVJkVmUIC6OrB3swi15PKuEo0a8HE',
  authDomain: 'user-auth-test-1a519.firebaseapp.com',
  projectId: 'user-auth-test-1a519',
  storageBucket: 'user-auth-test-1a519.appspot.com',
  messagingSenderId: '806830965526',
  appId: '1:806830965526:web:198874cd0f2df5ec218637',
  measurementId: 'G-6TNS7TXSH9'
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app

export { db, auth }
