import React from "react";
import { formatDateString } from "../../utils";
import UserContainer from "../../components/UserContainer";
import Image from 'next/image'
import StatsContainer from "../../components/StatsContainer";
import { Card } from "flowbite-react";
import BookmarkBtn from "../../components/BookmarkBtn";

export default async function Discussions() {
  const discussion =  await getDiscussion()

  return (
    <React.Fragment>
      <div className="flex flex-col md:inline-flex sm:flex-row w-full justify-between">
        <UserContainer user={discussion.user} createdAt={discussion.createdAt} />
        <StatsContainer 
          views={discussion.viewCount}
          upvotes={discussion.upvoteCount}
          comments={discussion.commentCount}
        />
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-semibold dark:text-white">
          {discussion.title}
        </h1> 
        <p className="mt-2 dark:text-white">
          {discussion.content}
        </p>
      </div>
      <div className="mt-4 inline-grid grid-flow-col gap-2">
        { discussion.image_urls.map((url, i) => 
            <Image
              className="rounded-lg border-2 border-gray-100 border-solid dark:border-gray-800"
              key={`discussion-img-${i}`}
              src={url}
              width={175}
              height={175}
              alt={`Image ${i+1} of discussion`}
            />
          )
        }
      </div>
      <div className="mt-4">
        <BookmarkBtn /> 
      </div>
    </React.Fragment>
  );
}

async function getDiscussion() {
  const discussionJson = await require('/assets/discussion.json')
  const commentsJson = await require('/assets/comments.json')
  
  return {
    ...discussionJson,
    comments: commentsJson.map((c) => ({
          ...c,
          createdAt: formatDateString(c.createdAt),
          replies: c.replies.map((r) => ({...r, createdAt: formatDateString(r.createdAt)}))
        }
      )
    ),
    createdAt: formatDateString(discussionJson.createdAt)
  }
}