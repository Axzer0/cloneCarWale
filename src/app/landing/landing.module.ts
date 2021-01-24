import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {SharedModule} from '../shared/shared.module';
import {NzImageModule} from "ng-zorro-antd/image";


@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    NzImageModule
  ]
})
export class LandingModule { }
