import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopComponent } from './shop.component';


@NgModule({
  declarations: [
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [ShopComponent]
})
export class carsModule { }
