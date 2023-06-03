import { Component } from '@angular/core';
import { Post } from '../graphql-models/schema';
import { PostsService } from '../services/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts$: Observable<Post[]>;
  currentPage = 1;
  resultsPerPage = 5;

  constructor(private postsService: PostsService) {
    this.posts$ = this.postsService.getAllPosts({
      paginate: { page: this.currentPage, limit: this.resultsPerPage },
    });
  }
}
