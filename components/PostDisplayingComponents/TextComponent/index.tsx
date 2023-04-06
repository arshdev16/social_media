import React from "react";
import { TextComponentProps } from "../../../lib/interfaces";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";

type Props = {
  textPost: TextComponentProps;
};

const TextComponent = (props: Props) => {
  const { postText, postedAt, postedBy, posterProfilePic, likes, comments } =
    props.textPost;

  return (
    <div className="flex items-center my-5 border-b-[1px] border-gray-400 p-2 pb-4">
      <div className="mx-4 self-start">
        <img
          src={posterProfilePic}
          width={45}
          className="rounded-full min-w-[45px]"
        />
      </div>
      <div className="flex flex-col">
        <div className="self-start flex">
          <p className="font-bold">{postedBy.slice(0, -5)}</p>
          <p className="text-gray-500 mx-3">&#x2022; {postedAt}</p>
        </div>
        <div className="flex">
          <p className="text-sm">{postText}</p>
        </div>
        <div className="flex my-2">
          <button className="mx-2 flex flex-col">
            <AiOutlineLike size={20} />
            <span className="text-gray-300">{likes}</span>
          </button>
          <button className="text-gray-300 mx-2 flex flex-col">
            <BiCommentDots size={20} />
            <span>{comments}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextComponent;
