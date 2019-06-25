import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainNavComponent} from './navigation/main-nav/main-nav.component';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';

const routes: Routes = [


  {
    path: 'main-nav', component: MainNavComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent} ]
  },
  {
    path: '', component: MainNavComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent} ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
