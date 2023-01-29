import { db } from "../firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provide = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provide);
      const user = result.user;
      //check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorized the Google");
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className=" flex items-center justify-center w-full bg-red-600 text-white px-7 py-4 text-sm font-medium uppercase rounded shadow-md hover:bg-red-700 transition duration-200 ease-in-out hover:shadow-xl active:bg-red-900"
    >
      <FcGoogle className="text-2x1 bg-white rounded-full mr-2" /> Continue with
      Google
    </button>
  );
}
