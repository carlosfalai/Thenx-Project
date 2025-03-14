export interface Post {
  id: number;
  threadId: number;
  content: string;
  author: string;
  timestamp: number;
  imageUrl?: string;
  replies: number[];
  viewCount: number;
  upvotes: number;
  downvotes: number;
  isOP: boolean;
}

export interface Thread {
  id: number;
  title: string;
  boardId: string;
  posts: Post[];
  pinned: boolean;
  locked: boolean;
  createdAt: number;
  lastActivity: number;
  viewCount: number;
  replyCount: number;
}

export interface Board {
  id: string;
  name: string;
  description: string;
  threadCount: number;
  postCount: number;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  boards: string[];
}

export interface UserVote {
  postId: number;
  vote: 'up' | 'down' | null;
}
