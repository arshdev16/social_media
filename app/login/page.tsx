"use client";
import React from "react";
import "../../styles/globals.css";
import { auth, db } from "../../lib/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type Props = {};

const Login = (props: Props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(8, "Password has to be atleast 8 words")
      .required(),
  });

  return (
    <div className="flex flex-col h-screen items-center">
      <h1 className="my-5 font-bold text-xl">Login to continue</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => alert(JSON.stringify(values))}
        validateOnMount={true}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="flex flex-col items-center h-20">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <Field
                className="bg-[#f1f1f1] outline-none border-1 border-black"
                name="name"
                id="name"
              />
              {errors.name && touched.name ? (
                <div className="text-red-600">{errors.name}</div>
              ) : null}
            </div>
            <div className="flex flex-col items-center h-20">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <Field
                className="bg-[#f1f1f1] outline-none border-1 border-black"
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
                className="bg-[#f1f1f1] outline-none border-1 border-black"
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
                  errors.name !== undefined &&
                  errors.password !== undefined
                }
                type="submit"
                className={`${
                  errors.email !== undefined &&
                  errors.name !== undefined &&
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
    </div>
  );
};

export default Login;
