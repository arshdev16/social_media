import React from "react";
import { AiOutlineHome, AiTwotoneHome, AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex justify-evenly items-center fixed bottom-0 w-full h-14">
      {usePathname() === "/" ? (
        <Link
          href={"/"}
          className={
            usePathname() === "/"
              ? "border-black p-1 border-b-4"
              : "p-1 border-b-4 border-white"
          }
        >
          <AiTwotoneHome size={40} />
        </Link>
      ) : (
        <Link
          href={"/"}
          className={
            usePathname() === "/"
              ? "border-black p-1 border-b-4"
              : "p-1 border-b-4 border-white"
          }
        >
          <AiOutlineHome size={40} />
        </Link>
      )}
      <Link
        href={"/"}
        className={
          usePathname() === "/search"
            ? "border-black p-1 border-b-4"
            : "p-1 border-b-4 border-white"
        }
      >
        <AiOutlineSearch size={40} />
      </Link>
      <Link
        href={"/profile"}
        className={
          usePathname() === "/profile"
            ? "border-black p-1 border-b-4"
            : "p-1 border-b-4 border-white"
        }
      >
        <CgProfile size={40} />
      </Link>
    </div>
  );
};

export default Footer;
