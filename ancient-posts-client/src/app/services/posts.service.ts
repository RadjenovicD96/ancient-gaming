import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  PostsQueryResult,
  Post,
  PageQueryOptions,
  DeletePostInputVariables,
} from '../graphql-models/schema';
import { Observable, map } from 'rxjs';
import { ALL_POSTS_QUERY } from '../graphql-models/queries';
import { DELETE_POST_MUTATION } from '../graphql-models/mutations';

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

  deletePost(id: string): Observable<boolean> {
    return this.apollo
      .mutate<boolean, DeletePostInputVariables>({
        mutation: DELETE_POST_MUTATION,
        variables: {
          id,
        },
      })
      .pipe(
        map((result) => {
          return !!result.data;
        })
      );
  }
}
