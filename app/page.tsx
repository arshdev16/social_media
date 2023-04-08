"use client";
import React from "react";
import { auth } from "../lib/firebase";
import { useUserContext } from "../lib/Context";
import Image from "next/image";
import ImageDisplayer from "../components/PostDisplayers/ImageDisplayer";

type Props = {};

const HomeImages = [
  {
    postedBy: "Arsh#jri8",
    postedAt: "28 march 2023",
    Image:
      "https://images.unsplash.com/photo-1680030062888-e691d5992056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
    imageCaption: "HEHEHE LOL YOU SUCK ]",
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "29 march 2023",
    Image:
      "https://images.unsplash.com/photo-1680000498724-3d0f002060be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
    imageCaption: "HEHEHE LOL YOU SUCK ]",
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "30 march 2023",
    Image:
      "https://images.unsplash.com/photo-1680016791527-ec010edad4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
    imageCaption: "HEHEHE LOL YOU SUCK ]",
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "31 march 2023",
    Image:
      "https://images.unsplash.com/photo-1679997091102-cee8e8ddaf57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
    imageCaption: "HEHEHE LOL YOU SUCK ]",
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "1 April 2023",
    Image:
      "https://plus.unsplash.com/premium_photo-1668790939920-f5f0a5c34b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
    imageCaption: "HEHEHE LOL YOU SUCK ]",
  },
];


const HomeScreen = (props: Props) => {
  const { profilePic } = useUserContext();
  return (
    <div>
      {auth.currentUser !== null ? (
        <div className="flex flex-col h-screen w-screen">
          <ImageDisplayer Images={HomeImages}/>
        </div>
      ) : (
        <h1>logged out</h1>
      )}
    </div>
  );
};

export default HomeScreen;
