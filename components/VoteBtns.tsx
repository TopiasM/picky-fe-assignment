import React from "react";
import upIcon from "../public/images/icon-up-big-19-px@3x.png";
import downIcon from "../public/images/icon-down-big-19-px@3x.png";
import Image from "next/image";

interface VoteBtnsProps {
  count: number;
}

export default function VoteBtns({ count }: VoteBtnsProps) {
  return (
    <span className="flex w-min flex-col items-center">
      <Image
        className="-mb-1.5 h-5 w-5 cursor-pointer dark:invert"
        src={upIcon}
        alt="Up icon"
      />
      <p className="text-sm font-medium dark:text-white">{count}</p>
      <Image
        className="-mt-1.5 h-5 w-5 cursor-pointer dark:invert"
        src={downIcon}
        alt="Down icon"
      />
    </span>
  );
}
