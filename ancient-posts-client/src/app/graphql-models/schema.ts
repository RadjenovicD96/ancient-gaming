export interface Post {
  id: string;
  title: string;
}

export interface PostsQueryResult {
  meta: { totalCount: number };
  posts: { data: Post[] };
}

export interface PostsOptions {
  paginate: {
    page: number;
    limit: number;
  };
}
