import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { PostCreateComponent, PostsListComponent, PostViewComponent } from './posts/components';
import { PostsModule } from './posts/posts.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    children: [
      { path: '', component: PostsListComponent, pathMatch: 'full'},
      { path: 'create', component: PostCreateComponent },
      { path: 'edit/:postId', component: PostCreateComponent },
      { path: 'view/:postId', component: PostViewComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PostsModule
  ],
  exports: [ RouterModule ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})

export class AppRoutingModule {

}
