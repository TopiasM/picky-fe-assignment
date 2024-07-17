import React from "react";
import { Badge } from "flowbite-react";
import { formatDateString } from "../../utils";
import type { Comment } from "../../types";
import UserContainer from "@/components/UserContainer";
import StatsContainer from "@/components/StatsContainer";
import BookmarkBtn from "@/components/BookmarkBtn";
import VoteBtns from "@/components/VoteBtns";
import CommentsContainer from "@/components/CommentsContainer";
import SearchBar from "@/components/SearchBar";
import CommentsPagination from "@/components/CommentsPagination";
import CommentForm from "@/components/CommentForm";
import ImagesContainer from "@/components/ImagesContainer";
import CommentBtn from "@/components/CommentBtn";

export default async function Discussions() {
  const discussion = await getDiscussion();

  return (
    <React.Fragment>
      <div className="flex flex-row">
        <div className="mr-8 hidden basis-1/5 rounded-lg bg-gray-100 p-4 text-sm font-bold text-gray-300 dark:bg-gray-900 md:flex">
          SIDEBAR MOCK
        </div>
        <div className="basis-full md:basis-4/5">
          <Badge color="indigo" className="mb-2 inline-flex w-auto">
            {discussion.category.label}
          </Badge>
          <div className="flex w-full flex-col justify-between sm:inline-flex sm:flex-row">
            <UserContainer
              user={discussion.user}
              createdAt={discussion.createdAt}
            />
            <StatsContainer
              views={discussion.viewCount}
              upvotes={discussion.upvoteCount}
              comments={discussion.commentCount}
            />
          </div>
          <div className="mt-4">
            <h1 className="text-xl font-semibold dark:text-white md:text-2xl">
              {discussion.title}
            </h1>
            <p className="mt-2 dark:text-white">{discussion.content}</p>
          </div>
          <div className="mt-4 inline-grid grid-flow-col gap-2">
            <ImagesContainer images={discussion.image_urls} size="lg" />
          </div>
          <br />
          <div className="mt-4 flex flex-row flex-wrap place-items-center justify-start gap-4">
            <span className="order-2 basis-full sm:order-none sm:basis-auto">
              <CommentBtn />
            </span>
            <BookmarkBtn />
            <span className="order-1 sm:order-2">
              <VoteBtns count={discussion.upvoteCount} discussion />
            </span>
          </div>
          <hr className="mx-auto my-4 h-1 rounded border-0 bg-gray-100 dark:bg-gray-700" />
          <div>
            <div className="mb-4 flex w-full flex-col items-center justify-between sm:flex-row">
              <h3 className="mb-2 text-lg font-semibold sm:mb-0 sm:text-xl">
                Comments ({discussion.commentCount})
              </h3>
              <SearchBar />
            </div>
            <CommentsContainer comments={discussion.comments} />
            <CommentsPagination />
            <div className="mt-4" id="comment-box">
              <CommentForm />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

async function getDiscussion() {
  const discussionJson = await require("/assets/discussion.json");
  const commentsJson = await require("/assets/comments.json");

  return {
    ...discussionJson,
    comments: commentsJson.map((c: Comment) => ({
      ...c,
      createdAt: formatDateString(c.createdAt.toString()),
      replies: c.replies!.map((r) => ({
        ...r,
        createdAt: formatDateString(r.createdAt.toString()),
      })),
    })),
    createdAt: formatDateString(discussionJson.createdAt),
  };
}
