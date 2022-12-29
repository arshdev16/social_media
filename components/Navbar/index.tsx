import Image from "next/image";
import React from "react";
import Link from 'next/link';
import placeholder from "../../public/placeholder.bmp";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between p-4 items-center">
      <h1 className="text-blue-400 font-bold text-xl">Logo here</h1>
      <Link href="/">
        <Image
          src={placeholder}
          alt="Profile Picture"
          width={40}
          height={50}
          className="rounded-full"
        />
      </Link>
    </div>
  );
};

export default Navbar;
