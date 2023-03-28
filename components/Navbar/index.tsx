import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useUserContext } from "../../lib/Context";
import { auth } from "../../lib/firebase";
import Default from "../../public/default.jpg";

type Props = {};

const Navbar = (props: Props) => {
  const { profilePic } = useUserContext();
  return (
    <div className="flex justify-between p-4 items-center">
      <Link href={"/"}>
        <h1 className="text-blue-400 font-bold text-xl">Logo here</h1>
      </Link>
      {auth.currentUser === null ? (
        <Link href="/login">
          <Image
            width={40}
            height={50}
            className="rounded-full"
            alt="default picture"
            src={Default}
          />
        </Link>
      ) : (
        <Link href="/profile">
          <img
            src={profilePic}
            alt="Profile Picture"
            width={40}
            height={50}
            className="rounded-full"
          />
        </Link>
      )}
    </div>
  );
};

export default Navbar;
