import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform= new FormGroup({})
  constructor( private fb:FormBuilder, private auth: AngularFireAuth , private router:Router) { }

  ngOnInit(): void {
    this.registerform=this.fb.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
 
    // password : new FormControl('',[Validators.required, Validators.min(6)])
  }
createUser(){
  const {email,password}=this.registerform.value;
  this.auth.createUserWithEmailAndPassword(email,password).then(user=>{
    console.warn('RegisterComponent ->createUser -> user', user);
    this.router.navigate(['/home']);
  });
 
}
}
