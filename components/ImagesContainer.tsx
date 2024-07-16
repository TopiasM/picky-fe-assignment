"use client";

import React from "react";
import Image from "next/image";

interface ImagesContainerProps {
  images: string[];
  size: "sm" | "lg";
}

const sizes = {
  lg: 175,
  sm: 75,
};

export default function ImagesContainer({
  images,
  size,
}: ImagesContainerProps) {
  const res = sizes[size];

  return (
    <React.Fragment>
      {images.map((url, i) => (
        <Image
          className="cursor-pointer rounded-lg border-2 border-solid border-gray-100 dark:border-gray-800"
          key={`discussion-img-${i}`}
          src={url}
          width={res}
          height={res}
          alt={`Image ${i + 1} of discussion`}
        />
      ))}
    </React.Fragment>
  );
}
