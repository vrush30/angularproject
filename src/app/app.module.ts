import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopComponent } from './shop/shop.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { AloginComponent } from './alogin/alogin.component';
import { ProductComponent } from './product/product.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { RegistrationComponent } from './registration/registration.component';
import { BookingComponent } from './booking/booking.component';
import { AboutusComponent } from './aboutus/aboutus.component';
//import { CategoriesComponent } from './shop/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    PageNotFoundComponent,
    ShopComponent,
    UloginComponent,
    AloginComponent,
    ProductComponent,
    ViewcartComponent,
    RegistrationComponent,
    BookingComponent,
    AboutusComponent,
   // CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

