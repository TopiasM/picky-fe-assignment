"use client";

import { Button } from "flowbite-react/components/Button";
import React from "react";
import { scrollToComment } from "@/utils";

export default function CommentBtn() {
  return (
    <Button
      className="w-full focus:ring-pink-200"
      color="light"
      onClick={scrollToComment}
    >
      Leave a Comment
    </Button>
  );
}
