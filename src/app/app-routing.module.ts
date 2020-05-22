import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnderContructionComponent } from './under-contruction/under-contruction.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'under-construction', component: UnderContructionComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
