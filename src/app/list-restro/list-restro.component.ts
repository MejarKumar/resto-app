import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css']
})
export class ListRestroComponent implements OnInit {

  collection:any= [];
  constructor(private resto:RestoService ) {  }

  ngOnInit(): void {
   this.resto.getlist().subscribe((result) =>{
     console.warn(result);
     this.collection=result;
   })
  }
  deleteResto(item:any)
  {
    // console.warn(item);
    this.collection.splice(item-1,1);

    this.resto.deleteResto(item).subscribe((result:any)=>{
      console.warn(result);
     
    })
  }

}
