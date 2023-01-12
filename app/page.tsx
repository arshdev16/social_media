"use client";
import React from "react";
import { auth } from "../lib/firebase";
import { useUserContext } from "../lib/Context";
import Image from "next/image";

type Props = {};

const HomeScreen = (props: Props) => {
  const { profilePic } = useUserContext();
  return (
    <div>
      {auth.currentUser !== null ? (
        <>
          <h1>Logged in</h1>
          <Image alt="profile pic" src={profilePic} width={100} height={100}/>
        </>
      ) : (
        <h1>logged out</h1>
      )}
    </div>
  );
};

export default HomeScreen;
