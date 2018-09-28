import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './postcard.html'
})

export class PostCardComponent {
  @Input() post;

  constructor(
    private router: Router
  ) {
  }

  openPost() {
    this.router.navigate([`posts/view/${this.post._id}`]);
  }

  editPost($event) {
    this.router.navigate([`posts/edit/${this.post._id}`]);
    $event.stopPropagation();
  }
}
