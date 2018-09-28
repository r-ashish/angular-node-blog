import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsRoutingModule } from './posts.router';
import { PostsListComponent } from './components';
const COMPONENTS = [
  PostsListComponent
];

@NgModule({
  imports: [
    FormsModule,
    NgbModule,
    PostsRoutingModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
  ],
  entryComponents: [
  ]
})
export class PostsModule { }
