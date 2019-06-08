import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  constructor(private routes:Router) { }
  plist:any[];
  sum:number=0;
  // pprice:number;
  // qunty:number;
  ngOnInit() {
   
    this.plist=JSON.parse(localStorage.getItem("viewcart"));
    this.blist=JSON.parse(localStorage.getItem("loginform"));
  }

  final()
  { 
    this.plist=JSON.parse(localStorage.getItem("viewcart"));
    for(let i=0;i<this.plist.length;i++)
    {
     this.sum=this.sum+(this.plist[i].pprice*this.plist[i].qunty);
    }
    alert(this.sum);
  }

  data={};
  delete(id:number){
    for(let i=0;i<this.plist.length;i++){
      if(i==id){
        this.data=this.plist[i];
        this.plist.splice(id,1);
        localStorage.setItem("viewcart" ,JSON.stringify(this.plist));
      }
    }
  }

  blist:any[]=[];
  proceed(frm){
    this.blist=JSON.parse(localStorage.getItem("loginform"));
        for(let i=0;i<this.blist.length;i++){
          if(this.blist[i].email==frm.email && this.blist[i].pass==frm.pass){
            alert("user login is successful"); 
            this.routes.navigate(['/login']);
          }
          else{
            alert(" login is unsuccessful");
          }
   
        
      }
    }}