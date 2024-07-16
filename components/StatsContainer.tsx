import React from 'react'
import Image from 'next/image'
import commentIcon from '../public/images/icon-comment-14-px@3x.png'
import upvoteIcon from '../public/images/icon-upvote-14-px@3x.png'

interface StatsContainerProps {
  views: number
  upvotes?: number
  comments: number
}

const stats = [
  { name: 'views' },
  { name: 'comments', src: commentIcon, size: 5 },
  { name: 'upvotes', src: upvoteIcon, size: 4 }
]

export default function StatsContainer(counts: StatsContainerProps) {
  return (
    <div className="mt-2 md:mt-0 inline-flex gap-4 h-min self-center">
      { 
        stats.map(s => counts[s.name] !== undefined && (
          <span className="inline-flex gap-2" key={`${s.name}-count`}>
            { s.src ?
              <Image
                className={`w-${s.size} h-${s.size} self-center`}
                src={s.src!}
                alt={`${s.name} icon`}
              />
              :
              <span className="text-sm text-gray-500 capitalize">
                {s.name}
              </span>
            }
            <b className="text-sm dark:text-white">
              {counts[s.name]}
            </b>
          </span>
        ))
      }
    </div>
  )
}