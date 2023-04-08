import React from 'react'
import TextDisplayer from '../../components/PostDisplayers/TextDisplayer'

type Props = {}

const textPosts = [
  {
    postedBy: "Arsh#jri8",
    postedAt: "2 April 2023",
    postText:
      "when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "2 April 2023",
    postText:
      "Programs must be written for people to read, and only incidentally for machines to execute",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "2 April 2023",
    postText:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "2 April 2023",
    postText:
      "I'm not a great programmer; I'm just a good programmer with great habits",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
  },
  {
    postedBy: "Arsh#jri8",
    postedAt: "2 April 2023",
    postText:
      "That's the thing about people who think they hate computers. What they really hate is lousy programmers",
    posterProfilePic: "https://api.dicebear.com/5.x/bottts-neutral/svg",
    likes: 0,
    comments: 0,
  },
];



const TextPosts = (props: Props) => {
  return (
    <div className='flex flex-col h-screen w-screen'>
        <div className='pb-14'>
        <TextDisplayer textPosts={textPosts}/>
        </div>
    </div>
  )
}

export default TextPosts