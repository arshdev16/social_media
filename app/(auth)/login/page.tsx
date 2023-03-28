"use client";
import React from "react";
import { auth } from "../../../lib/firebase";
import {
  setPersistence,
  signInWithEmailAndPassword,
  indexedDBLocalPersistence,
} from "firebase/auth";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import GoogleLogin from "../../../components/AuthWithGoogle";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

interface FormValues {
  email: string;
  password: string;
}

const Auth = (props: Props) => {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(8, "Password has to be atleast 8 words")
      .required(),
  });

  const LoginWithEmailAndPassword = async (values: FormValues) => {
    setPersistence(auth, indexedDBLocalPersistence).then(async () => {
      signInWithEmailAndPassword(auth, values.email, values.password);
    });
    return router.push("/");
  };

  return (
    <div className="flex flex-col h-screen items-center">
      <h1 className="my-5 font-bold text-xl">Login to continue</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          LoginWithEmailAndPassword(values);
        }}
        validateOnMount={true}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="flex flex-col items-center h-20 text-black">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <Field
                className="bg-[#f1f1f1] outline-none border-1 border-black rounded-lg"
                name="email"
                id="email"
                type="email"
              />
              {errors.email && touched.email ? (
                <div className="text-red-600">{errors.email}</div>
              ) : null}
            </div>
            <div className="flex flex-col items-center h-20">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <Field
                className="bg-[#f1f1f1] outline-none border-1 border-black rounded-lg"
                name="password"
                id="password"
                type="password"
              />
              {errors.password && touched.password ? (
                <div className="text-red-600">{errors.password}</div>
              ) : null}
            </div>
            <div className="flex flex-col items-center">
              <button
                disabled={
                  errors.email !== undefined &&
                  errors.password !== undefined
                }
                type="submit"
                className={`${
                  errors.email !== undefined &&
                  errors.password !== undefined
                    ? "bg-blue-400"
                    : "bg-blue-200"
                } text-white rounded-lg px-4 py-2 `}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div className="flex flex-col items-center my-4 w-1/2">
        <h1 className="font-bold text-xl text-gray-700">OR</h1>
        <GoogleLogin />
      </div>
      <div className="flex flex-col items-center my-2 w-1/2">
        <span>
          {" "}
          Create an account{" "}
          <Link href={"/signup"} className="text-blue-400">
            here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Auth;
