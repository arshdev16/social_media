import React from "react";
import { useUserContext } from "../../../lib/Context";

type Props = {};

const UserInfoSection = (props: Props) => {
  const { profilePic, name, followers } = useUserContext();
  return (
    <div className="flex">
      <div>
        <img src={profilePic} className="h-28 w-28 rounded-2xl" />
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-xl">{name}</h2>
        <div className="flex flex-col justify-center items-center my-2">
          <p className="font-bold text-xl">{followers}</p>
          <p className="text-xs text-gray-400">followers</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoSection;
