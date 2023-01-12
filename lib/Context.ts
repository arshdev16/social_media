import { createContext, useContext } from "react";
import { userDocInterface } from "./interfaces";

export const UserContext = createContext<userDocInterface>({
  name: '',
  email: '',
  userId: '',
  profilePic: '',
  tag: '',
});

export const useUserContext = () => useContext(UserContext);
