"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../lib/firebase";
import { doc, DocumentData, getDoc, onSnapshot } from "firebase/firestore";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    let unsubscribe;

    if (user) {
      const ref = doc(db, "users", user.uid);
      unsubscribe = onSnapshot(ref, async (doc) => {     
        setUsername(doc.data()?.name);
        setProfilePic(doc.data()?.profilePic);
      });
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user]);




  return (
    <html>
      <head />
      <body>
        <Navbar />
        {children}
        {!(usePathname() === "/login" || usePathname() === "/signup") ? (
          <>
            <Footer />
          </>
        ) : (
          <></>
        )}
      </body>
    </html>
  );
}
