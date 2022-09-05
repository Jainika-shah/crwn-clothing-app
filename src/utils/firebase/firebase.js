import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBObqJf2BkKRDQHAIhSkJyBd4cKlOBRzbE",
  authDomain: "crwn-clothing-app-6034c.firebaseapp.com",
  projectId: "crwn-clothing-app-6034c",
  storageBucket: "crwn-clothing-app-6034c.appspot.com",
  messagingSenderId: "800695528361",
  appId: "1:800695528361:web:40c2b41ccd7dc29c8332b8",
};

// firebase initialization
const app = initializeApp(firebaseConfig);

// for google auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// for authentication
export const auth = getAuth();
export const signWithGooglePopup = () => signInWithPopup(auth, provider); // specific for popup

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider); // specififc for redirect feature

export const db = getFirestore();
export const createUserDocument = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot)
  // console.log(userSnapShot.exists())

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      // console.log("alert: error creating a new user- ", error.message);
    }
  }
  return userDocRef;
};

// for email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// sign in with email and password
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

// storage:

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey); // collection
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  // console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};
