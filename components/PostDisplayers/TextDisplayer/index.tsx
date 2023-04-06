import React from "react";
import { TextComponentProps } from "../../../lib/interfaces";
import TextComponent from "../../PostDisplayingComponents/TextComponent";

type Props = {
  textPosts: Array<TextComponentProps>;
};

const TextDisplayer = (props: Props) => {
  return (
    <div className="pb-14">
      {props.textPosts.length <= 0 ? (
        <h1>No posts</h1>
      ) : (
        props.textPosts.map((textPost, index) => (
            <TextComponent key={index} textPost={textPost}/>
        ))
      )}
    </div>
  );
};

export default TextDisplayer;
