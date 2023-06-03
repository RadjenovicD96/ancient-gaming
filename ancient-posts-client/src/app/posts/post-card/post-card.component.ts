import { Component, Input } from '@angular/core';
import { Post } from '../../graphql-models/schema';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {
  @Input('post')
  post!: Post;

  constructor(private postsService: PostsService) {}

  deletePost(id: string) {
    const isDeleted = this.postsService.deletePost(id).subscribe();
  }
}
