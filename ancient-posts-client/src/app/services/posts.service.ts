import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  PostsQueryResult,
  Post,
  PageQueryOptions,
} from '../graphql-models/schema';
import { Observable, map } from 'rxjs';
import { ALL_POSTS_QUERY } from '../graphql-models/queries';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private apollo: Apollo) {}

  getAllPosts($options: PageQueryOptions): Observable<Post[]> {
    return this.apollo
      .query<PostsQueryResult, { options: PageQueryOptions }>({
        query: ALL_POSTS_QUERY,
        variables: { options: $options },
      })
      .pipe(
        map((m) => {
          return m.data.posts.data;
        })
      );
  }
}
