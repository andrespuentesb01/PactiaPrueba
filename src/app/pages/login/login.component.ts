import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { loginService } from 'src/services/login.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RestService } from 'src/app/rest.service';
import { Itask, Itoken } from 'src/interfaces/task.interface';
import {
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  takeUntil,
  tap,
} from 'rxjs/operators';



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public user: string = "";
  public password: string = "";
  public data : any;


  miFormulario = new FormGroup({
  
  })

  constructor(private router: Router, private RestService:RestService,
    private loginService:loginService,) {}
  ngOnInit(): void {}

  login(): void {

    this.validate();
  }

  private validate() {

    this.loginService
    .validatePassword(this.user, this.password)
      .pipe(
        tap((data: Itoken) => {
        
        })
      )
      .subscribe(respuesta=>{    
        debugger;
        let name1:string = respuesta.token!;
        window.localStorage.setItem("token", name1 );
       })
    
    debugger;    
    
    let valor = localStorage.getItem('token');
    if(valor != "")
      {
        this.router.navigate(["/shop"]);
      }
    else
    {
      this.router.navigate(["/login"]);
    
    }
  }
  
}

