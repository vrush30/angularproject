import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }

  temp:any[]=[];
  ngOnInit() {
    this.temp=JSON.parse(localStorage.getItem("bookingform"))
  }
  save(frm){
    var arr=JSON.parse(localStorage.getItem("bookingform"));
    if(this.temp==null){
      arr=[];
    }
    arr.push(frm);
    localStorage.setItem("bookingform",JSON.stringify(arr));
    alert("done with booking");
    // this.route.navigate(['/login']);
  }
}
