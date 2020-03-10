import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../shared/service/blog-post.service';
import { BlogPost } from 'src/app/shared/models/blog-post';

@Component({
  selector: 'app-past-posts',
  templateUrl: './past-posts.component.html',
  styleUrls: ['./past-posts.component.css']
})
export class PastPostsComponent implements OnInit {
  loading = true;
  posts: BlogPost[];

  constructor(private postService: BlogPostService) {}

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(): void {
    this.postService.GetPosts().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
    });
  }
}
