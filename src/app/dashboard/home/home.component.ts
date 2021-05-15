import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AngularFireAuth, private router:Router) { }

  ngOnInit(): void {
  }
  onLogout(){
this.auth.signOut();
this.router.navigate(['/login'])
  }
}
