"use client";

import React, { useEffect, useState } from "react";
import upIcon from "../public/images/icon-up-big-19-px@3x.png";
import downIcon from "../public/images/icon-down-big-19-px@3x.png";
import Image from "next/image";
import { useStore } from "@/store/useStore";

interface VoteBtnsProps {
  count: number;
  // Uses a store if true,
  // so that top-right stats counter gets updated too
  discussion?: boolean;
}

export default function VoteBtns({ count, discussion }: VoteBtnsProps) {
  useEffect(() => {
    // For discussion sets the state
    if (discussion) {
      useStore.setState({
        upvoteCount: count,
      });
    }
  }, [discussion, count]);

  // State used for comments
  const [countState, setCountState] = useState(count);

  const vote = (vote: number) => {
    if (!discussion) {
      setCountState(countState + vote);
    } else {
      useStore.setState({
        upvoteCount: upvoteCount + vote,
      });
    }
  };

  const upvoteCount = useStore((state) => state.upvoteCount);

  return (
    <span className="flex w-12 flex-col items-center">
      <Image
        className="-mb-1.5 size-5 cursor-pointer dark:invert"
        src={upIcon}
        alt="Up icon"
        onClick={() => vote(1)}
      />
      <p className="text-sm font-medium dark:text-white">
        {discussion && upvoteCount > 0 ? upvoteCount : countState}
      </p>
      <Image
        className="-mt-1.5 size-5 cursor-pointer dark:invert"
        src={downIcon}
        alt="Down icon"
        onClick={() => vote(-1)}
      />
    </span>
  );
}
