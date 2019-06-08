import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {

  constructor(private routes:Router) { }
  temp:any=[];

  ngOnInit() {
    this.temp=JSON.parse(localStorage.getItem("userform"));
  }

  arr:any[]=[];
  addlogindata(frm1){
    

  }

obj:any={}
  save(frm){
    // var arr=JSON.parse(localStorage.getItem("loginform"));
    // if(this.arr==null){
    //   arr=[];
    // }
    //   arr.push(frm);
    //   localStorage.setItem("loginform",JSON.stringify(arr));
    //   localStorage.setItem("loginform",JSON.stringify(frm));

    this.temp=JSON.parse(localStorage.getItem("userform"));
    if(frm.email=="admin@gmail.com" && frm.pass==="admin"){
      alert("admin login successful");
      this.routes.navigate(['./product']);
    }
    else{
      for(let i=0;i<this.temp.length;i++){
        if(this.temp[i].email==frm.email && this.temp[i].pass==frm.pass){
          alert("user login is successful");
          this.routes.navigate(['/shop']);
        }
        else{
          alert("admin login is unsuccessful");
        }
      
    }
   
   
    
   
  }
   
  

  }}