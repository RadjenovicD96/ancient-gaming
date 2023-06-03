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

export interface CreatePostInputVariables {
  title: string;
  body: string;
}

export interface DeletePostInputVariables {
  id: string;
}

export interface UpdatePostInputVariables {
  title: string;
  body: string;
}
