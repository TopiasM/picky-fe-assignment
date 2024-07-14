import React from "react";
import { formatDateString } from "../helpers";

export default async function Discussions({ data }) {
  const discussion =  await getDiscussion()
  
  return (
    <div>
    </div>
  );
}

async function getDiscussion() {
  const discussionJson = await require('./data/discussion.json')
  const commentsJson = await require('./data/comments.json')
  
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