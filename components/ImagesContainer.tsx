'use client'

import React from 'react'
import Image from 'next/image'

interface ImagesContainerProps {
  images: string[]
  size: 'sm' | 'lg'
}

const sizes = {
  lg: 175,
  sm: 75
}

export default function ImagesContainer({images, size}: ImagesContainerProps) {
  const res = sizes[size]

  return (
    <React.Fragment>
      { images.map((url, i) => 
          <Image
            className="rounded-lg border-2 border-gray-100 border-solid dark:border-gray-800 cursor-pointer"
            key={`discussion-img-${i}`}
            src={url}
            width={res}
            height={res}
            alt={`Image ${i+1} of discussion`}
          />
        )
      }
    </React.Fragment>
  )
}