import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListRestroComponent} from './list-restro/list-restro.component';
import {LoginFormComponent} from './login/login-form/login-form.component'
import {RegisterComponent} from './login/register/register.component';
import {UpdateRestroComponent} from './update-restro/update-restro.component';
import {AddRestroComponent} from './add-restro/add-restro.component';
import {HomeComponent} from './dashboard/home/home.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectLoggedInToItems = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
 
  {
    component:RegisterComponent,
    path:'register'
  },
 {
 component:LoginFormComponent,
    path:'login',
    // canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }
  },
  {
    component:UpdateRestroComponent,
    path:'update/:id',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems }
  },
  {
    component:AddRestroComponent,
    path:'add',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems }
    
  },
  {
    component:ListRestroComponent,
    path:'list',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems }
  },
  {
    component: HomeComponent,
    path:'home'
   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
