import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private route:Router) { }
  plist:any=[];
  ngOnInit() {
    this.plist=JSON.parse(localStorage.getItem("productinfo"));
    
  }
  // parentvar:string;
  // parentvarmethod(a:string){
  //   this.parentvar=a;
  // }


  // getAll():number{
  //   return this.plist.length;
  // }


  // getBeuty():number{
  //   return this.plist.filter(em =>em.categories === "beuty").length;
  // }

  // getCosmetics():number{
  //   return this.plist.filter(em =>em.categories === "cosmetics").length;
  // }

  qty:number;
  tobj:any={};
  addtocart(j){
    alert("Product is added");
    this.plist=JSON.parse(localStorage.getItem("productinfo"));
    for(let i=0;i<this.plist.length;i++){
      if(i==j){
        let tarr=JSON.parse(localStorage.getItem("viewcart"));
        if(tarr==null){
          tarr=[];
        }
        this.tobj=this.plist[i];
        this.tobj.qunty=this.qty;
        tarr.push(this.tobj);
        localStorage.setItem("viewcart",JSON.stringify(tarr));
        // this.route.navigate(['/viewcart']);

      }
    }
  }
  
}
