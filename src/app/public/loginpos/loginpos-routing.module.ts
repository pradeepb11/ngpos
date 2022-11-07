import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginposComponent } from './loginpos.component';

const routes: Routes = [{ path: '', component: LoginposComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginposRoutingModule { }
