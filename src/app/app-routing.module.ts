import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListRestroComponent} from './list-restro/list-restro.component';
import {LoginFormComponent} from './login/login-form/login-form.component'
import {RegisterComponent} from './login/register/register.component';
import {UpdateRestroComponent} from './update-restro/update-restro.component';
import {AddRestroComponent} from './add-restro/add-restro.component';
import {HomeComponent} from './dashboard/home/home.component';

const routes: Routes = [
 
  {
    component:RegisterComponent,
    path:'register'
  },
 {
 component:LoginFormComponent,
    path:'login'
  },
  {
    component:UpdateRestroComponent,
    path:'update/:id'
  },
  {
    component:AddRestroComponent,
    path:'add'
  },
  {
    component:ListRestroComponent,
    path:'list'
  },
  {
    component: HomeComponent,
    path:''
   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
