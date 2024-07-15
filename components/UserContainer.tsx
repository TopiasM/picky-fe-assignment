import React from "react";
import { User } from '../types'
import { Badge, Label, Tooltip } from "flowbite-react";
import { dateFromNow } from "../utils";
import * as dayjs from "dayjs"
import Image from 'next/image'

interface UserContainerProps {
  user: User
  createdAt: Date
}

export default function UserContainer({ user, createdAt }: UserContainerProps) {
  const userImgAltText = `Profile picture of ${user.nick_name}`
  
  const postedAgo = dateFromNow(createdAt) 
  const postedDate = dayjs(createdAt).format('YYYY-MM-DD HH:mm:ss')

  return (
    <div className="flex items-center gap-4 w-min">
      <Image
        className="min-w-10 h-10 rounded-full object-cover"
        src={user.image_url}
        width={40}
        height={40}
        alt={userImgAltText}
      />
      <div>
        <span className="inline-flex gap-2">
          <b className="dark:text-white">{user.nick_name}</b>
          <Badge color="pink" className="self-center">
            {user.skin_type}
          </Badge>
        </span>
        <Tooltip content={postedDate} placement="bottom" style="auto">
          <p className="text-gray-400 text-sm cursor-default">{postedAgo}</p>
        </Tooltip>
      </div>
    </div>
  )
}