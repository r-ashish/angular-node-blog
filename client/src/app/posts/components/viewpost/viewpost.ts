import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-post-view',
  templateUrl: './viewpost.html'
})
export class PostViewComponent {
  public post;
  public loading;
  public error;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.loadPost();
  }

  loadPost() {
    this.loading = true;
    this.error = '';
    this.http.get(`/api/posts/${this.route.snapshot.params.postId}`).subscribe(post => {
      this.post = post;
      this.loading = false;
    }, () => {
      this.error = 'Couldn\'t load post details, try again later...';
    });
  }
}
