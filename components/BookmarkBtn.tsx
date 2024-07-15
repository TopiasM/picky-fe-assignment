'use client'

import { Button } from 'flowbite-react'
import React, { useState } from 'react'
import bookmarkIcon from '../public/images/icon-bookmark-14-px@3x.png'
import Image from 'next/image'
import styles from './BookmarkBtn.module.css'

export default function BookmarkBtn() {
  const [ bookmarked, setBookmarked ] = useState(false)

  const toggleBookmarked = () => setBookmarked(!bookmarked)

  return (
    <Button className="items-center focus:ring-pink-200" color="light" size="md" outline
      onClick={toggleBookmarked}>
      <Image 
        className={(bookmarked ? styles.bookmarked : '') + " w-4 h-4 mr-2 self-center"}
        src={bookmarkIcon} alt="bookmark icon" />
      Bookmark
    </Button>
  )

}