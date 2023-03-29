import React, { useState , Dispatch, SetStateAction} from "react";
import { BsImage } from "react-icons/bs";
import { BsInputCursorText } from "react-icons/bs";
import { BsFilm } from "react-icons/bs";

type Props = {
  setCurrentlyShowing: Dispatch<SetStateAction<number>>;
};

const DifferentPostsSplitter = (props: Props) => {
 const {setCurrentlyShowing} = props;
  return (
    <div className="flex p-2 justify-evenly w-full border-t-[1px] border-b-[1px] border-gray-400">
      <button onClick={()=> setCurrentlyShowing(1)}>
        <BsImage size={25} />
      </button>
      <button>
        <BsInputCursorText onClick={()=> setCurrentlyShowing(2)} size={25} />
      </button>
      <button>
        <BsFilm onClick={()=> setCurrentlyShowing(3)} size={25} />
      </button>
    </div>
  );
};

export default DifferentPostsSplitter;
