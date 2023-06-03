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
  resultsPerPage = 5;
  currentPage = 0;
  searchQuery = '';
  totalPages = 100;

  constructor(private postsService: PostsService) {
    this.posts$ = this.postsService.getAllPosts({
      paginate: { page: this.currentPage, limit: this.resultsPerPage },
    });
  }

  getPosts() {
    this.posts$ = this.postsService.getAllPosts({
      paginate: { page: this.currentPage, limit: this.resultsPerPage },
      search: { q: this.searchQuery },
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getPosts();
  }

  search() {
    this.getPosts();
  }

  clear() {
    this.searchQuery = '';
    this.getPosts();
  }
}
