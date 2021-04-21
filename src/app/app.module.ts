import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UpdateRestroComponent } from './update-restro/update-restro.component';


import { ListRestroComponent } from './list-restro/list-restro.component';
import { AddRestroComponent } from './add-restro/add-restro.component';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    UpdateRestroComponent,
    ListRestroComponent,
    AddRestroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginModule,
    DashboardModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
