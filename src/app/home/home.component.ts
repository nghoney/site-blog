import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogPostService } from '../shared/service/blog-post.service';
import { BlogPost } from '../shared/models/blog-post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  posts: BlogPost[];

  constructor(private postService: BlogPostService, private router: Router) {}

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
