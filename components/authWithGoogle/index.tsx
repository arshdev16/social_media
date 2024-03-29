import Image from "next/image";
import React from "react";
import GoogleLogo from "../../public/google.svg";
import {
  setPersistence,
  signInWithPopup,
  indexedDBLocalPersistence,
  GoogleAuthProvider,
} from "firebase/auth";
import { db, auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import { doc, setDoc, getDoc } from "firebase/firestore";

type Props = {};

const GoogleLogin = (props: Props) => {
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const LoginWithGoogle = () => {
    setPersistence(auth, indexedDBLocalPersistence).then(async () => {
      signInWithPopup(auth, provider)
        .then(async (result) => {
          const user = result.user;
          const userRef = doc(db, `users/${user.uid}`);
          const userData = {
            name: capitalizeFirstLetter(user.displayName!),
            userId: user.uid,
            email: user.email,
            tag: user.uid.slice(0, 4),
            profilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
            followers: 0,
          };
          await setDoc(userRef, userData);
          return router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(
            "error code =",
            errorCode,
            "\n error message = ",
            errorMessage
          );
        });
    });
  };
  return (
    <>
      <button
        onClick={LoginWithGoogle}
        className="flex rounded-3xl bg-[#0e0e0e] w-full justify-center py-2 my-3"
      >
        Login in with
        <Image width={30} alt="Google Logo" className="mx-1" src={GoogleLogo} />
      </button>
    </>
  );
};

export default GoogleLogin;
