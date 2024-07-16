import React from 'react'
import searchIcon from '../public/images/search@3x.png'
import Image from 'next/image'

const inputClassName = `
  block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300
  rounded-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
  dark:text-white focus:ring-indigo-300 focus:border-indigo-300
`

export default function SearchBar() {
  return(
    <div className="relative">
      <div className="absolute inset-y-2.5 start-0 flex ps-3 pointer-events-none">
        <Image className="w-4 h-4" src={searchIcon} alt="Search icon" />
      </div>
      <input type="search" id="default-search" className={inputClassName} placeholder="Search Comments" />
    </div>
  )
}