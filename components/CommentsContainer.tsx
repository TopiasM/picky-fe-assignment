import React from "react";
import type { Comment } from "../types";
import CommentContent from "./CommentContent";

interface CommentsContainerProps {
  comments: Comment[];
}

export default function CommentsContainer({
  comments,
}: CommentsContainerProps) {
  return (
    <div className="flex flex-col divide-y">
      {comments.map((c) => (
        <div key={`comment-${c.id}`} className="py-3">
          <div className="py-2">
            <CommentContent comment={c} />
            {c.replies?.map((r) => (
              <div className="mt-2 border-l-8 py-4 pl-4" key={`reply-${r.id}`}>
                <CommentContent comment={r} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
