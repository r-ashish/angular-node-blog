import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsListComponent, PostCreateComponent } from './components';

const COMPONENTS = [
  PostsListComponent,
  PostCreateComponent,
];

@NgModule({
  imports: [
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
