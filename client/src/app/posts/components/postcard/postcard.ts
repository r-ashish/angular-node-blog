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
}
