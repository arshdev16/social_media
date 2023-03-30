"use client";
import React, { useState } from "react";
import UserInfoSection from "../../components/ProfileComponents/UserInfoSection";
import { auth } from "../../lib/firebase";
import DifferentPostsSplitter from "../../components/ProfileComponents/DifferentPostsSplitter";
import ImageDisplayer from "../../components/ProfileComponents/PostsDisplayer/ImageDisplayer";

type Props = {};

const Images = [
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
  {
    postedBy: "Arsh#jri8",
    postedAt: "2 April 2023",
    Image:
      "https://images.unsplash.com/photo-1679627720696-8975b3e0b288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
    imageCaption: "HEHEHE LOL YOU SUCK ]",
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "3 April 2023",
    Image:
      "https://images.unsplash.com/photo-1679627720696-8975b3e0b288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
    imageCaption: "HEHEHE LOL YOU SUCK ]",
  },
];

const Profile = (props: Props) => {
  const [currentlyShowing, setCurrentlyShowing] = useState<number>(1);

  if (auth.currentUser !== null) {
    return (
      <div className="flex flex-col h-screen w-screen">
        <UserInfoSection />
        <DifferentPostsSplitter setCurrentlyShowing={setCurrentlyShowing} />
        {currentlyShowing === 1 ? (
          <ImageDisplayer Images={Images} />
        ) : currentlyShowing === 2 ? (
          <h1>2</h1>
        ) : (
          <h1>3</h1>
        )}
      </div>
    );
  }
  // else{
  //   useRouter().push('/login')
  // }
};

export default Profile;
