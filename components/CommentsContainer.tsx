import React from 'react'
import type { Comment, User } from '../types'
import UserContainer from './UserContainer'
import VoteBtns from './VoteBtns'
import StatsContainer from './StatsContainer'
import ImagesContainer from './ImagesContainer'

interface CommentsContainerProps {
  comments: Comment[]
}

export default function CommentsContainer({comments}: CommentsContainerProps) {
  return (
    <div className="flex flex-col divide-y">
      {comments.map(c =>
        <div key={`comment-${c.id}`} className="py-3">
          <div className="py-2">
            <CommentContent comment={c} />
            {c.replies?.map(r =>
              <div className="border-l border-l-8 py-4 pl-4 mt-2" key={`reply-${r.id}`}>
                <CommentContent comment={r} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function CommentContent({ comment }: { comment: Comment}) {
  return (
    <React.Fragment>
      <UserContainer user={comment.user} createdAt={comment.createdAt} inline={true} />
      <div className="flex flex-row">
        <p className="py-2 basis-5/6 md:basis-11/12">
          {comment.content}
        </p>
        <div className="flex basis-1/6 md:basis-1/12 items-center justify-end">
          <VoteBtns count={comment.upvoteCount}></VoteBtns>
        </div>
      </div>
      <ImagesContainer size='sm' images={comment.image_urls} />
      <br/>
      <StatsContainer views={comment.viewCount} comments={comment.commentCount} />
    </React.Fragment>
  )
}