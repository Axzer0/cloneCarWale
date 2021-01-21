import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './landing/landing-page/landing-page.component';
import {BasicLayoutComponent} from './layout/basic-layout/basic-layout.component';
import {BasicRoutes} from './shared/routes/basicRoutes';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BasicLayoutComponent,
    children: BasicRoutes
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
