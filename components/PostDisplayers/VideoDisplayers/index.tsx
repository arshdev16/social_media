import React from "react";
import { VideoComponentProps } from "../../../lib/interfaces";
import VideoComponent from "../../PostDisplayingComponents/VideoComponent";

type Props = {
  Videos: Array<VideoComponentProps>;
};

const VideoDisplayer = (props: Props) => {
    
  return (
    <div className="m-5 pb-14">
      {props.Videos.length <= 0 ? (
        <h1>No posts</h1>
      ) : (
        props.Videos.map((Video, index) => (
          <VideoComponent
            postedBy={Video.postedBy}
            postedAt={Video.postedAt}
            Video={Video.Video}
            posterProfilePic={Video.posterProfilePic}
            likes={Video.likes}
            comments={Video.comments}
            VideoCaption={Video.VideoCaption}
            key={index}
          />
        ))
      )}
    </div>
  );
};

export default VideoDisplayer;