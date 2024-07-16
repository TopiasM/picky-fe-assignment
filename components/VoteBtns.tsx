import React from 'react'
import upIcon from '../public/images/icon-up-big-19-px@3x.png'
import downIcon from '../public/images/icon-down-big-19-px@3x.png'
import Image from 'next/image'

interface VoteBtnsProps {
  count: number
}

export default function VoteBtns({count}: VoteBtnsProps) {
  return(
    <span className="flex flex-col items-center w-min">
      <Image
        className="w-5 h-5 -mb-1.5 cursor-pointer dark:invert"
        src={upIcon}
        alt="Up icon"
      />
      <p className="text-sm font-medium dark:text-white">
        {count} 
      </p>
      <Image
        className="w-5 h-5 -mt-1.5 cursor-pointer dark:invert"
        src={downIcon}
        alt="Down icon"
      />
    </span>
  )
}