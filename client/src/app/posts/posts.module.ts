import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsListComponent, PostCreateComponent, PostCardComponent } from './components';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  PostsListComponent,
  PostCreateComponent,
  PostCardComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
  ],
  entryComponents: [
  ]
})
export class PostsModule { }
