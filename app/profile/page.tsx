"use client";
import React, { useState } from "react";
import UserInfoSection from "../../components/ProfileComponents/UserInfoSection";
import { auth } from "../../lib/firebase";
import DifferentPostsSplitter from "../../components/ProfileComponents/DifferentPostsSplitter";
import ImageDisplayer from "../../components/PostDisplayers/ImageDisplayer";
import TextDisplayer from "../../components/PostDisplayers/TextDisplayer";
import VideoDisplayer from "../../components/PostDisplayers/VideoDisplayers";

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
];

const textPosts = [
  {
    postedBy: "Arsh#jri8",
    postedAt: "2 April 2023",
    postText:
      "when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "2 April 2023",
    postText:
      "Programs must be written for people to read, and only incidentally for machines to execute",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "2 April 2023",
    postText:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "2 April 2023",
    postText:
      "I'm not a great programmer; I'm just a good programmer with great habits",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "2 April 2023",
    postText:
      "That's the thing about people who think they hate computers. What they really hate is lousy programmers",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
  },
];

const videos = [
  {
    postedBy: "Arsh#jri8",
    postedAt: "28 march 2023",
    Video: "../../../public/vid1.mp4",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
    VideoCaption: "HEHEHE LOL YOU SUCK ]",
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "28 march 2023",
    Video: "../../../public/vid2.mp4",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
    VideoCaption: "HEHEHE LOL YOU SUCK ]",
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "28 march 2023",
    Video: "../../../public/vid3.mp4",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
    VideoCaption: "HEHEHE LOL YOU SUCK ]",
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "28 march 2023",
    Video: "../../../public/vid4.mp4",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
    VideoCaption: "HEHEHE LOL YOU SUCK ]",
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
          <TextDisplayer textPosts={textPosts} />
        ) : (
          // <VideoDisplayer Videos={videos} />
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
