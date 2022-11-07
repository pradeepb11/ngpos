import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreposComponent } from './storepos.component';

const routes: Routes = [{ path: '', component: StoreposComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreposRoutingModule { }
