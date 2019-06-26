import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainNavComponent} from './navigation/main-nav/main-nav.component';
import {MainCanvasComponent} from './canvas/main-canvas/main-canvas.component';

const routes: Routes = [


  {
    path: 'main-nav', component: MainNavComponent, children: [
      {path: '', component: MainCanvasComponent},
      {path: 'dashboard', component: MainCanvasComponent} ]
  },
  {
    path: '', component: MainNavComponent, children: [
      {path: '', component: MainCanvasComponent},
      {path: 'dashboard', component: MainCanvasComponent} ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
