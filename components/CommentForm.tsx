"use client";

import { Button, Label, Textarea } from "flowbite-react";
import React from "react";

export default function CommentForm() {
  return (
    <div>
      <form className="w-full">
        <div className="mb-2 block text-lg">
          <Label
            className="text-md font-semibold"
            htmlFor="comment"
            value="Leave a comment"
          />
        </div>
        <Textarea
          className="focus:outline-opacity-0 focus:border-opacity-0 focus:ring-opacity-0"
          id="comment"
          required
          rows={4}
        />
        <Button
          disabled={true}
          className="mt-2 w-full"
          outline={true}
          gradientDuoTone="purpleToPink"
        >
          Submit Comment
        </Button>
      </form>
    </div>
  );
}
