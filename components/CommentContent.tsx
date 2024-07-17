"use client";

import React, { useState } from "react";
import type { Comment } from "../types";
import UserContainer from "./UserContainer";
import VoteBtns from "./VoteBtns";
import StatsContainer from "./StatsContainer";
import ImagesContainer from "./ImagesContainer";
import ReplyBtn from "./ReplyBtn";
import { useStore } from "@/store/useStore";

export default function CommentContent({ comment }: { comment: Comment }) {
  const [content, searchMatches] = useStore((state) => {
    if (state.search.length < 1) return [comment.content, false];

    const regex = RegExp(String.raw`${state.search}`, "g");
    const matchesFound = comment.content.match(regex);
    if (!matchesFound) return [comment.content, false];

    const searchContent = comment.content.replaceAll(
      regex,
      `<mark>${state.search}</mark>`,
    );
    return [searchContent, true];
  });

  const containerClasses = searchMatches
    ? "rounded-lg outline-dotted outline-2 outline-offset-4 outline-gray-200 dark:outline-gray-600"
    : "";

  return (
    <div className={containerClasses}>
      <UserContainer
        user={comment.user}
        createdAt={comment.createdAt}
        inline={true}
      />
      <div className="flex flex-row">
        <p
          className="basis-5/6 py-2 md:basis-11/12"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        <div className="flex basis-1/6 items-center justify-end md:basis-1/12">
          <VoteBtns count={comment.upvoteCount}></VoteBtns>
        </div>
      </div>
      {comment.image_urls.length > 0 && (
        <ImagesContainer size="sm" images={comment.image_urls} />
      )}
      <div className="mt-1 flex flex-row justify-between">
        <StatsContainer
          views={comment.viewCount}
          comments={comment.commentCount}
        />
        <ReplyBtn />
      </div>
    </div>
  );
}
