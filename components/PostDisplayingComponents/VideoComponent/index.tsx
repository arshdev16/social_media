import React from "react";
import { VideoComponentProps } from "../../../lib/interfaces";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";

type Props = {};

const VideoComponent = (props: VideoComponentProps) => {
  const {
    postedAt,
    postedBy,
    Video,
    posterProfilePic,
    likes,
    comments,
    VideoCaption,
  } = props;

  return (
    <div className={`my-5`}>
      <div className="flex items-center">
        <img className="rounded-full w-[45px]" src={posterProfilePic} />
        <h1 className="mx-2">{postedBy.slice(0, -5)}</h1>
      </div>
      <div className="my-2">
        <video
          src={require("../../../public/vid1.mp4")}
          className="h-[500px] w-full rounded-2xl"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex">
          <button className="mx-2 flex flex-col">
            <AiOutlineLike size={40} />
            <span className="text-gray-300">{likes}</span>
          </button>
          <button className="text-gray-300 mx-2 flex flex-col">
            <BiCommentDots size={40} />
            <span>{comments}</span>
          </button>
        </div>
        <div className="self-start">
          <p className="text-gray-500">&#x2022; {postedAt}</p>
        </div>
      </div>
      <div>
        <p>
          <span className="font-bold">{postedBy.slice(0, -5)} :</span>
          {VideoCaption}
        </p>
      </div>
    </div>
  );
};

export default VideoComponent;
