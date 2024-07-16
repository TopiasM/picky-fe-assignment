import React from "react";
import { User } from "../types";
import { Badge, Label, Tooltip } from "flowbite-react";
import { dateFromNow } from "../utils";
import dayjs from "dayjs";
import Image from "next/image";

interface UserContainerProps {
  user: User;
  createdAt: Date;
  inline?: boolean;
}

export default function UserContainer({
  user,
  createdAt,
  inline,
}: UserContainerProps) {
  const userImgAltText = `Profile picture of ${user.nick_name}`;

  const postedAgo = dateFromNow(createdAt);
  const postedDate = dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss");

  const infoContainerClasses = inline
    ? "flex flex-col sm:flex-row sm:items-center sm:w-full sm:justify-between"
    : "";

  return (
    <div className="flex items-center gap-4">
      <Image
        className="h-10 min-w-10 rounded-full object-cover"
        src={user.image_url}
        width={40}
        height={40}
        alt={userImgAltText}
      />
      <div className={infoContainerClasses}>
        <span className="inline-flex gap-2">
          <b className="dark:text-white">{user.nick_name}</b>
          <Badge color="pink" className="self-center">
            {user.skin_type}
          </Badge>
        </span>
        <Tooltip content={postedDate} placement="bottom" style="auto">
          <p className="cursor-default text-sm text-gray-400">{postedAgo}</p>
        </Tooltip>
      </div>
    </div>
  );
}
