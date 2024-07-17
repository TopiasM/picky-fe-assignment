"use client";

import { Button, Label, Textarea } from "flowbite-react";
import React, { ChangeEvent, useState } from "react";

export default function CommentForm() {
  const [comment, setComment] = useState("");
  const commentChange = (e: HTMLTextAreaElement) => setComment(e.value);

  const mockSubmit = () => {
    alert(`${comment}`);
    setComment("");
  };

  return (
    <div>
      <form className="w-full">
        <div className="mb-2 block">
          <Label
            className="text-lg font-semibold"
            htmlFor="comment"
            value="Leave a comment"
          />
        </div>
        <Textarea
          className="focus:border-white/0 focus:outline-white/0 focus:ring-white/0"
          id="comment"
          value={comment}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            commentChange(e.target)
          }
          required
          rows={4}
        />
        <Button
          disabled={comment.length < 2}
          className="mt-2 w-full"
          outline={true}
          gradientDuoTone="purpleToPink"
          onClick={mockSubmit}
        >
          Submit Comment
        </Button>
      </form>
    </div>
  );
}
