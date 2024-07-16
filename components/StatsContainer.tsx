/* eslint-disable */

import React from "react";
import Image, { StaticImageData } from "next/image";
import commentIcon from "../public/images/icon-comment-14-px@3x.png";
import upvoteIcon from "../public/images/icon-upvote-14-px@3x.png";

interface StatsContainerProps {
  views: number;
  upvotes?: number;
  comments: number;
}

const stats: Stat[] = [
  { name: "views" },
  { name: "comments", src: commentIcon, size: 5 },
  { name: "upvotes", src: upvoteIcon, size: 4 },
];

interface Stat {
  name: string;
  src?: StaticImageData;
  size?: number;
}

export default function StatsContainer(counts: StatsContainerProps) {
  return (
    <div className="mt-2 inline-flex h-min gap-4 self-center md:mt-0">
      {stats.map(
        (s: Stat) =>
          counts[s.name as keyof StatsContainerProps] !== undefined && (
            <span className="inline-flex gap-2" key={`${s.name}-count`}>
              {s.src ? (
                <Image
                  className={`w-${s.size} h-${s.size} self-center`}
                  src={s.src!}
                  alt={`${s.name} icon`}
                />
              ) : (
                <span className="text-sm capitalize text-gray-500">
                  {s.name}
                </span>
              )}
              <b className="text-sm dark:text-white">
                {counts[s.name as keyof StatsContainerProps]}
              </b>
            </span>
          ),
      )}
    </div>
  );
}
