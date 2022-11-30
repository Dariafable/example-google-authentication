import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDIV5-rDXA3JN7hX9dsJSka7GloZmaVWlI',
  authDomain: 'authentication-1e413.firebaseapp.com',
  projectId: 'authentication-1e413',
  storageBucket: 'authentication-1e413.appspot.com',
  messagingSenderId: '985445133813',
  appId: '1:985445133813:web:ae6f251f84e5b0b84ec4bc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
