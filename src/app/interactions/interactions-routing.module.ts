import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InteractionsHomeComponent } from './interactions-home.component';

const routes: Routes = [
    { path: '', component: InteractionsHomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class InteractionsRoutingModule { }
