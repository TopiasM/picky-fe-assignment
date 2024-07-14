interface DiscussionCategory {
  id: number;
  label: string;
}

interface User {
  id: number;
  image_url: string;
  nick_name: string;
  skin_type: string;
}

export interface Comment {
  id: number;
  content: string;
  image_urls: string[];
  viewCount: number;
  upvoteCount: number;
  commentCount: number;
  category: DiscussionCategory;
  user: User;
  createdAt: Date;
  replies?: Comment[];
}

export interface Discussion {
  id: number;
  title: string;
  content: string;
  image_urls: string[];
  viewCount: number;
  upvoteCount: number;
  commentCount: number;
  user: User;
  category: DiscussionCategory;
  createdAt: Date;
  comments?: Comment[];
}
