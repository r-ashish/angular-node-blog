import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
// import { PostsModule } from './posts/posts.module';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'posts',
    children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'posts', loadChildren: './posts/posts.module#PostsModule' }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    {provide: APP_BASE_HREF, useFactory : () => location.pathname },
  ]
})

export class AppRoutingModule {

}
