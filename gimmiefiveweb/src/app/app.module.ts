import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/user/home/home.component';
import { LoginComponent } from './client/user/login/login.component';
import { ProductComponent } from './client/user/product/product.component';
import { RegisterComponent } from './client/user/register/register.component';
import { ShopComponent } from './client/user/shop/shop.component';
import { ContactusComponent } from './client/user/contactus/contactus.component';
import { ProfileComponent } from './client/user/profile/profile.component';
import { CartComponent } from './client/user/cart/cart.component';
import { HeaderComponent } from './client/user/header/header.component';
import { CreateProductComponent } from './client/admin/create-product/create-product.component';
import { VariantProductComponent } from './client/admin/variant-product/variant-product.component';
import { InformationProductComponent } from './client/admin/information-product/information-product.component';
import { CompleteComponent } from './complete/complete.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    RegisterComponent,
    ShopComponent,
    ContactusComponent,
    ProfileComponent,
    CartComponent,
    HeaderComponent,
    CreateProductComponent,
    VariantProductComponent,
    InformationProductComponent,
    CompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
