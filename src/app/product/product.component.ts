import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private prod:ProductService,private rr:Router) { }
  prname:string;
  prprice:number;
  quantity:number;
  plist:any=[];
  image:string;

  ngOnInit() {
    this.plist=this.prod.addtolocal();
    // let data=this.prod.addtolocal();
    // console.log("new data update"+data);  
  }
  save(){
    let obj= new product(this.prname,this.prprice,this.image,this.quantity);  
    let arr=this.plist;
    arr.push(obj);
    localStorage.setItem("productinfo",JSON.stringify(arr)); 
 
  }


  xyz()
  {
    alert("hii");
    this.rr.navigate(['/login']);
  }
  data={};
  delete(id:number){
    for(let i=0;i<this.plist.length;i++){
      if(i==id){
        this.data=this.plist[i];
        this.plist.splice(id,1);
        localStorage.setItem("productinfo",JSON.stringify(this.plist));
      }
    }

  }
  oobj={};
  temp:number;
  update(id:number){
    this.temp=id;
    for(let i=0;i<this.plist.length;i++){
      if(i==id){
        this.oobj=this.plist[i];  
      }
    }
  }
  modify(){
    for(let i=0;i<this.plist.length;i++){
     this.plist[this.temp]=this.oobj;
     console.log(JSON.stringify(this.oobj));
     
     localStorage.setItem("productinfo",JSON.stringify(this.plist));   
     this.plist=JSON.parse(localStorage.getItem("productinfo"));

  }

 

}


}