import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsListComponent, PostCreateComponent } from './components';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  PostsListComponent,
  PostCreateComponent,
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
