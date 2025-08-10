// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//@ts-ignore
import {getAuth, initializeAuth, getReactNativePersistence} from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvOaxnVp_OJX9nkZrYR0nwVVeoNs9ELqQ",
  authDomain: "college-campus-2bb8b.firebaseapp.com",
  projectId: "college-campus-2bb8b",
  storageBucket: "college-campus-2bb8b.firebasestorage.app",
  messagingSenderId: "918780176734",
  appId: "1:918780176734:web:94f184a34a445b787047cf",
  measurementId: "G-RGFVX4J3PE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
//const analytics = getAnalytics(app);