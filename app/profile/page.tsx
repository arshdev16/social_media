"use client";
import React, { useState } from "react";
import UserInfoSection from "../../components/ProfileComponents/UserInfoSection";
import { useUserContext } from "../../lib/Context";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import DifferentPostsSplitter from "../../components/ProfileComponents/DifferentPostsSplitter";

type Props = {};

const Profile = (props: Props) => {
  const [currentlyShowing, setCurrentlyShowing] = useState<number>(0);

  if (auth.currentUser !== null) {
    return (
      <div className="flex flex-col h-screen w-screen">
        <UserInfoSection />
        <DifferentPostsSplitter setCurrentlyShowing={setCurrentlyShowing}/>
      </div>
    );
  }
  // else{
  //   useRouter().push('/login')
  // }
};

export default Profile;
