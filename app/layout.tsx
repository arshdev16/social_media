"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { UserContext } from "../lib/Context";
import { userDocInterface } from "../lib/interfaces";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user] = useAuthState(auth);
  const [userDoc, setUserDoc] = useState<userDocInterface>({
    name: '',
    email: '',
    userId: '',
    profilePic: '',
    tag: '',
  });

  useEffect(() => {
    let unsubscribe;

    if (user) {
      const ref = doc(db, "users", user.uid);
      unsubscribe = onSnapshot(ref, async (doc) => {
        setUserDoc({
          email: doc.data()?.email,
          name: doc.data()?.name,
          profilePic: doc.data()?.profilePic,
          tag: doc.data()?.tag,
          userId: doc.data()?.userId,
        });
      });
    }
    return unsubscribe;
  }, [user]);

  return (
    <html>
      <UserContext.Provider value={userDoc}>
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
      </UserContext.Provider>
    </html>
  );
}
