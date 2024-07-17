"use client";

import React, { ChangeEvent, useState } from "react";
import searchIcon from "../public/images/search@3x.png";
import Image from "next/image";
import { useStore } from "@/store/useStore";

const inputClassName = `
  block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300
  rounded-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
  dark:text-white focus:ring-indigo-300 focus:border-indigo-300
`;

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const commentChange = (e: HTMLInputElement) => {
    setSearch(e.value);
    useStore.setState({
      search: e.value,
    });
  };
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-2.5 start-0 flex ps-3">
        <Image className="size-4" src={searchIcon} alt="Search icon" />
      </div>
      <input
        type="search"
        id="default-search"
        className={inputClassName}
        placeholder="Search Comments"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => commentChange(e.target)}
      />
    </div>
  );
}
