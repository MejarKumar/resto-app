import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { LoginFormComponent } from './login-form/login-form.component' 
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule } from '@angular/material/select'
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider';
import { RegisterComponent } from './register/register.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule} from '@angular/forms'
 @NgModule({
  declarations: [
    LoginFormComponent,
    RegisterComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    ReactiveFormsModule,
    
    
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginModule { }
