import React from "react";
import { ImageComponentProps } from "../../../lib/interfaces";
import ImageComponent from "../../PostDisplayingComponents/ImageComponent";

type Props = {
  Images: Array<ImageComponentProps>;
};

const ImageDisplayer = (props: Props) => {
    
  return (
    <div className="m-5 pb-14">
      {props.Images.length <= 0 ? (
        <h1>No posts</h1>
      ) : (
        props.Images.map((image, index) => (
          <ImageComponent
            postedBy={image.postedBy}
            postedAt={image.postedAt}
            Image={image.Image}
            posterProfilePic={image.posterProfilePic}
            likes={image.likes}
            comments={image.comments}
            imageCaption={image.imageCaption}
            key={index}
          />
        ))
      )}
    </div>
  );
};

export default ImageDisplayer;