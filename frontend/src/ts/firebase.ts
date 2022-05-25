// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, Auth as AuthType } from "firebase/auth";
import { firebaseConfig } from "./constants/firebase-config"; // eslint-disable-line require-path-exists/exists
import { setToTrue as setOfflineTrue } from "./states/is-offline";

// Initialize Firebase
export let app: FirebaseApp | null = null;
export let Auth: AuthType | null = null;

// const a = true;

try {
  // if (a) throw new Error("Offline");
  app = initializeApp(firebaseConfig);
  Auth = getAuth(app);
} catch (e) {
  console.error(e);
  setOfflineTrue();
  // $("body").text(
  //   "Failed to initialize Firebase. Are you sure you have the correct config in the firebase-config.ts file?"
  // );
}
