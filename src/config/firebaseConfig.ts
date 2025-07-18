// firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBe4rurxFVBsuEEtUOIZL0H67uiMrZ5ZrA",
  authDomain: "my-farm-land-44d4f.firebaseapp.com",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
