import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TechnologyDetailComponent } from './technology-detail/technology-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: TechnologyDetailComponent },
  { path: 'technologies', component: TechnologiesComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  declarations: [],
  exports: [ RouterModule ]
})
export class AngularRoutingModule { }
