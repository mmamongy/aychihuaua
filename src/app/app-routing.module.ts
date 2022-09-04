import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
 },
  {
    path: '',
    loadChildren: () => import ('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'admin',
    loadChildren: () => import ('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'login', component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

