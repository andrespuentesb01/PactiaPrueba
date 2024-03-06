import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MainComponent } from 'src/app/pages/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from '../crud/crud.component';



@NgModule({
  declarations: [ 
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class mainModule { }
