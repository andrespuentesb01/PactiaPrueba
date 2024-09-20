import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './pages/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './pages/product/product.component';
import { ShopComponent } from './pages/shop/shop.component';
import { UserComponent } from './pages/user/user.component';
import { AppInterceptorService } from 'src/services/app-interceptor.service';

const appRoutes:Routes=[
  {path:'main',component:MainComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'shop',component:ShopComponent},
  {path:'user',component:UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, MainComponent, NavbarComponent, ProductComponent, ShopComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, ReactiveFormsModule,  RouterModule.forRoot(appRoutes),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
