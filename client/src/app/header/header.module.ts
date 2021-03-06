import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header';
const COMPONENTS = [
  HeaderComponent
];

@NgModule({
  imports: [
    FormsModule,
    NgbModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
  ],
  entryComponents: [
  ]
})
export class HeaderModule { }
