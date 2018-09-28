import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts-list',
  templateUrl: './postslist.html'
})

export class PostsListComponent {
  public posts;
  public loading;

  constructor(
    private http: HttpClient
  ) {
    this.loading = false;
    this.loadPosts();
  }

  loadPosts() {
    this.loading = true;
    this.http.get('/api/posts').subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
      this.loading = false;
    });
  }
}
