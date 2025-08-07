// authHelper.ts

import { signInWithCustomToken, signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

/**
 * Function to log in to Firebase using a custom token
 * * This function uses Firebase's signInWithCustomToken method to log in. *
 * @async
 * @param {string} customToken
 * @returns {*}
 */
export const loginWithCustomToken = async (customToken: string) => {
  try {
    await signInWithCustomToken(auth, customToken);
    console.log("✅ Firebase login successful");
  } catch (err) {
    console.error("❌ Firebase login failed", err);
  }
};

/**
 *
 * Function to log out of Firebase
 *
 * @async
 * @returns {*}
 */
export const logoutFireBase = async () => {
  await signOut(auth);
  console.log("🚪 Logged out");
};

/**
 * Function to get the current user's Firebase ID token
 *
 * @async
 * @returns {Promise<string | null>}
 */
export const getToken = async (): Promise<string | null> => {
  const user = auth.currentUser;
  if (!user) return null;
  return await user.getIdToken(); // auto-refreshes if needed
};
