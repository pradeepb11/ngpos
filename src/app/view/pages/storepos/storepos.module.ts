import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreposRoutingModule } from './storepos-routing.module';
import { StoreposComponent } from './storepos.component';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    StoreposComponent
  ],
  imports: [
    CommonModule,
    StoreposRoutingModule,
  ]
})
export class StoreposModule { }
