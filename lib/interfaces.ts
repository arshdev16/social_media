export interface userDocInterface {
  name: string;
  userId: string;
  email: string;
  tag: string;
  profilePic: string;
  followers: number;
}

export interface userState {
  userDoc: userDocInterface;
  setUserDoc: (doc: userDocInterface) => void;
}
