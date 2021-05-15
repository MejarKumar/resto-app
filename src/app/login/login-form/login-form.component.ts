import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
loginform= new FormGroup({});
  constructor(private auth:AngularFireAuth, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginform=this.fb.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  onLogin(){
    const {email,password}=this.loginform.value;
    this.auth.signInWithEmailAndPassword(email,password).then(user=>{
      // console.warn('RegisterComponent ->createUser -> user', user);
      this.router.navigate(['/home']);
    });
  }
}
