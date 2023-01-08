"use client";
import React, { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { userDocInterface } from "../lib/interfaces";
import { DocumentData } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <div>
      <h1>Home screen</h1>
    </div>
  );
};

export default HomeScreen;
