import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { PostsListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      // { path: '', redirectTo: 'posts', pathMatch: 'full' },
      // { path: 'posts', component: ProjectSummaryComponent }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [
    {provide: APP_BASE_HREF, useFactory : () => location.pathname },
  ]
})

export class PostsRoutingModule {

}
