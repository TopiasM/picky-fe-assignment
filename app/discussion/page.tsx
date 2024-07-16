import React from "react";
import { formatDateString } from "../../utils";
import UserContainer from "../../components/UserContainer";
import StatsContainer from "../../components/StatsContainer";
import BookmarkBtn from "../../components/BookmarkBtn";
import VoteBtns from "../../components/VoteBtns";
import CommentsContainer from "../../components/CommentsContainer";
import SearchBar from "../../components/SearchBar";
import { Badge, Button, Label, Pagination, Textarea } from "flowbite-react";
import CommentsPagination from "../../components/CommentsPagination";
import CommentForm from "../../components/CommentForm";
import ImagesContainer from "../../components/ImagesContainer";

export default async function Discussions() {
  const discussion =  await getDiscussion()

  return (
    <React.Fragment>
      <div className="flex flex-row mb-8">
        <div className="basis-1/5 mr-8 p-4 text-gray-300 text-sm font-bold bg-gray-100 rounded-lg hidden md:flex dark:bg-gray-900">
          SIDEBAR MOCK
        </div>
        <div className="basis-full md:basis-4/5">
          <Badge color="indigo" className="mb-2 w-auto inline-flex">
            {discussion.category.label}
          </Badge>
          <div className="flex flex-col sm:inline-flex sm:flex-row w-full justify-between">
            <UserContainer user={discussion.user} createdAt={discussion.createdAt} />
            <StatsContainer 
              views={discussion.viewCount}
              upvotes={discussion.upvoteCount}
              comments={discussion.commentCount}
            />
          </div>
          <div className="mt-4">
            <h1 className="text-xl md:text-2xl font-semibold dark:text-white">
              {discussion.title}
            </h1> 
            <p className="mt-2 dark:text-white">
              {discussion.content}
            </p>
          </div>
          <div className="mt-4 inline-grid grid-flow-col gap-2">
            <ImagesContainer images={discussion.image_urls} size="lg" />
          </div>
          <br />
          <div className="mt-4 inline-flex place-items-center gap-4">
            <Button color="light">
              Leave a Comment
            </Button>
            <BookmarkBtn /> 
            <VoteBtns count={discussion.upvoteCount} />
          </div>
          <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          <div>
            <div className="flex flex-col w-full sm:flex-row justify-between mb-4 items-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0">Comments ({discussion.commentCount})</h3>
              <SearchBar />
            </div>
            <CommentsContainer comments={discussion.comments}/>
            <CommentsPagination />
            <CommentForm />
          </div>
        </div>
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