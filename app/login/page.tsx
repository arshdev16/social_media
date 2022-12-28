import React from "react";
import { auth, db } from "../../lib/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

type Props = {};

const Login = (props: Props) => {
  return <div>Login</div>;
};

export default Login;
