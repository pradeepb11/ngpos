import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginposRoutingModule } from './loginpos-routing.module';
import { LoginposComponent } from './loginpos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginposComponent
  ],
  imports: [
    CommonModule,
    LoginposRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginposModule { }
