import React from "react";
import Link from "next/link";
import { BiImageAdd } from "react-icons/bi";

type Props = {};

const NewPost = (props: Props) => {
  return (
    <section className="flex flex-col h-full w-full items-center">
      <h1 className="self-center font-bold text-xl">New Post</h1>
      <Link href="newpost/image" className="bg-gray-800 my-8 mx-8 border-2 border-white rounded-xl p-8 w-max flex flex-col items-center justify-center shadow-lg shadow-gray-400">
       <BiImageAdd size={100}/>
        <span className="font-bold">Image Post</span>
      </Link>
    </section>
  );
};

export default NewPost;
