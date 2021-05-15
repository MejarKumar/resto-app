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
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire';
import {environment} from 'src/environments/environment.prod'
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreCollection } from 'Public/node_modules/@angular/fire/firestore/public_api';


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
    DashboardModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireModule,
  AngularFireAnalyticsModule,
  AngularFireDatabaseModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
