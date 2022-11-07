import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layout/base/base.component';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./public/home/home.module').then(m => m.HomeModule)
  },
  { path: 'storepos', loadChildren: () => import('./view/pages/storepos/storepos.module').then(m => m.StoreposModule) },
  {
  path:'',
  component: BaseComponent,
  children:[
   
    { path: 'dashboard', loadChildren: () => import('./view/pages/admin/admin.module').then(m => m.AdminModule) },
  
   
  ]
  },
  {
    path:'**', redirectTo:'/home'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
