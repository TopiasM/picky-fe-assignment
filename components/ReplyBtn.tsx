"use client";

import React from "react";
import { scrollToComment } from "@/utils";
import { Button } from "flowbite-react";

export default function ReplyBtn() {
  return (
    <Button
      className="focus:ring-pink-200"
      size="xs"
      color="light"
      pill
      onClick={scrollToComment}
    >
      Reply
    </Button>
  );
}
