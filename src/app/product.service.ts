import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  data:any=[];
  
  addtolocal(){
    let data=localStorage.getItem("myinfo");
    if(data==null)
    {
    localStorage.setItem("myinfo","my mobile");
     data=localStorage.getItem("myinfo");
    }
    else{

    }


    let temp=JSON.parse(localStorage.getItem("productinfo"));
    console.log("localdata service data="+JSON.stringify(temp));
    if(temp==null)
    {
      return temp=[];  //
    }else
    {
    return temp;
    }
  }
}
