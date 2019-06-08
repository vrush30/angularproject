// import { Component, OnInit, Input, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

// @Component({
//   selector: 'app-categories',
//   templateUrl: './categories.component.html',
//   styleUrls: ['./categories.component.css']
// })
// export class CategoriesComponent implements OnInit {

//   constructor() { }
// clist:any[]=[];
//   ngOnInit() {
//     this.clist=JSON.parse(localStorage.getItem("productinfo"));

//   }

//   // parentvar:string;

//   // getNutritions(){
//   //   return this.clist.filter(e=> e.nutrition).length;
//   // }
//   @Input()
//   nutrition;

//   @Input()
//   beuty;

//   @Input()
//   cosmetics;

//   @Output()
//   obj:EventEmitter=new EventEmitter<string>();
//   childvar:string;

//   childvarmethod(){
//     this.obj.emit(this.childvar);
//   }

// }
