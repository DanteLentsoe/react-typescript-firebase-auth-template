import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
const appAuthConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEARSUREMENT_ID
};

// get analytics from google analytics services

export const app = initializeApp(appAuthConfig);
export const analytics = getAnalytics(app);
