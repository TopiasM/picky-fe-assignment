"use client";

import React from "react";
import { Pagination } from "flowbite-react";

export default function CommentsPagination() {
  return (
    <div className="my-2 flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={1}
        totalPages={1}
        onPageChange={() => 1 === 1}
        showIcons
      />
    </div>
  );
}
