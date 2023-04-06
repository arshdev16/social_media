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

export interface ImageComponentProps {
  postedBy: string;
  postedAt: string;
  Image: string;
  posterProfilePic: string;
  likes: number;
  comments: number;
  imageCaption: string;
}

export interface TextComponentProps {
  postedBy: string;
  postedAt: string;
  postText: string;
  posterProfilePic: string;
  likes: number;
  comments: number;
}

export interface VideoComponentProps {
  postedBy: string;
  postedAt: string;
  Video: string;
  posterProfilePic: string;
  likes: number;
  comments: number;
  VideoCaption: string;
}