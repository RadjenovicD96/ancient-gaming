export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface PostsQueryResult {
  meta: { totalCount: number };
  posts: { data: Post[] };
}

export interface PageQueryOptions {
  paginate: {
    page: number;
    limit: number;
  };
  search?: {
    q: string;
  };
}

export interface CreatePostInput {
  title: string;
  body: string;
}

export interface UpdatePostInput {
  title: string;
  body: string;
}
