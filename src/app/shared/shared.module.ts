import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './templates/navbar/navbar.component';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NzAvatarModule,
    NzIconModule,
    NzInputModule,
    NzGridModule,
    NzDropDownModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
