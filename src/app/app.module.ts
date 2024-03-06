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
import { CrudComponent } from './pages/crud/crud.component';
import { CarsComponent } from './pages/cars/cars.component';
import { RentComponent } from './pages/rent/rent.component';
import { UserComponent } from './pages/user/user.component';
import { SiteComponent } from './pages/site/site.component';
import { AppInterceptorService } from 'src/services/app-interceptor.service';

const appRoutes:Routes=[
  {path:'main',component:MainComponent},
  {path:'login',component:LoginComponent},
  {path:'cars',component:CarsComponent},
  {path:'rent',component:RentComponent},
  {path:'user',component:UserComponent},
  {path:'site',component:SiteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, MainComponent, NavbarComponent, CrudComponent, CarsComponent, RentComponent,
    UserComponent, SiteComponent
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
