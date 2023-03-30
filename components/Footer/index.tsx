import React from "react";
import { AiOutlineHome, AiTwotoneHome, AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#1D1D1D] flex justify-evenly items-center fixed bottom-0 w-full h-14">
      {usePathname() === "/" ? (
        <Link
          href={"/"}
          className={
            usePathname() === "/"
              ? "border-white p-1 border-b-4"
              : "p-1 border-b-4 border-[#1D1D1D]"
          }
        >
          <AiTwotoneHome size={40} />
        </Link>
      ) : (
        <Link
          href={"/"}
          className={
            usePathname() === "/"
              ? "border-white p-1 border-b-4"
              : "p-1 border-b-4 border-[#1D1D1D]"
          }
        >
          <AiOutlineHome size={40} />
        </Link>
      )}
      <Link
        href={"/"}
        className={
          usePathname() === "/search"
            ? "border-white p-1 border-b-4"
            : "p-1 border-b-4 border-black"
        }
      >
        <AiOutlineSearch size={40} />
      </Link>
      <Link
        href={"/profile"}
        className={
          usePathname() === "/profile"
            ? "border-white p-1 border-b-4"
            : "p-1 border-b-4 border-black"
        }
      >
        <CgProfile size={40} />
      </Link>
    </div>
  );
};

export default Footer;
