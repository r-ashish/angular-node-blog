import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './postcard.html'
})

export class PostCardComponent {
  @Input() post;

  constructor(
  ) {
  }

  getDescription() {
    return (this.post.description.length > 230) ? this.post.description.substr(0, 230) + '...' : this.post.description;
  }
}
