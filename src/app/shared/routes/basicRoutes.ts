import {Routes} from '@angular/router';

export const BasicRoutes: Routes =[
  {
    path: 'landing',
    loadChildren: () =>import('../../landing/landing.module').then( m => m.LandingModule)
  }
]
