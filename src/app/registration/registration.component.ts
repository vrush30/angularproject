import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private route:Router){}
   
    userform:FormGroup;
    temp:any[]=[];

    save(){
      let arr=JSON.parse(localStorage.getItem("userinfo"));
      if(arr==null)
      {
        arr=[];
      }
      arr.push(this.userform.value);
      localStorage.setItem("userinfo",JSON.stringify(arr));
      alert("done with rigistration");
      this.route.navigate(['/login']);
    }
    ngOnInit(){
      this.userform=new FormGroup({
        username:new FormControl('',Validators.required),
        name:new FormControl('',Validators.required),
        pass:new FormControl('',Validators.required),
        mobile:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
        address1:new FormControl('',Validators.required),
        address2:new FormControl(''),
        pincode:new FormControl('',Validators.required),
        email:new FormControl('',[Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z0-9]+[.][a-zA-Z0-9)]+'),Validators.required])
      });
    
    }
}