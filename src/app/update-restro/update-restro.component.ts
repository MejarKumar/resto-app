import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RestoService} from '../resto.service';
@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css']
})
export class UpdateRestroComponent implements OnInit {
  editResto= new FormGroup({
    name:new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private router:ActivatedRoute, private resto:RestoService) { }
alert:boolean=false;

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result:any)=>{
      console.warn(result);
     this.editResto= new FormGroup({
        name:new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email'])
      })
    })
  }
collection(){
  console.warn(this.editResto.value)
 this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
   console.warn(result);
   this.alert=true;
 })
}
closeAlert(){
  this.alert=false;
}
}
