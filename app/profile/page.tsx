"use client";
import React from "react";
import UserInfoSection from "../../components/ProfileComponents/UserInfoSection";
import { useUserContext } from "../../lib/Context";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";

type Props = {};

const Profile = (props: Props) => {

  if (auth.currentUser !== null) {
    return (
      <div className="flex h-screen w-screen py-5 px-3">
        <UserInfoSection />
      </div>
    );
  }else{
    useRouter().push('/login')
  }
};

export default Profile;
