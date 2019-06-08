import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopComponent } from './shop/shop.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { ProductComponent } from './product/product.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { RegistrationComponent } from './registration/registration.component';
import { BookingComponent } from './booking/booking.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"services",component:ServicesComponent},
  {path:"services",component:ServicesComponent},
  {path:"shop",component:ShopComponent},
  {path:"login",component:UloginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"product",component:ProductComponent},
  {path:"viewcart",component:ViewcartComponent},
  {path:"booking",component:BookingComponent},
  {path:"about",component:AboutusComponent},
  {path:"**",component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
