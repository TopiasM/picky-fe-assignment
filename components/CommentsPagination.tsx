'use client'

import React from 'react'
import { Pagination } from 'flowbite-react'

export default function CommentsPagination() {
  return (
    <div className="flex overflow-x-auto sm:justify-center my-2">
      <Pagination currentPage={1} totalPages={1} onPageChange={() => 1 === 1} showIcons />
    </div>
  )
}