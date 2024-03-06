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
  public nameOfTask: string = "";
  public token2: string = "";
  public data : any;
  public token: any;

  miFormulario = new FormGroup({
  
  })

  constructor(private router: Router, private RestService:RestService,
    private loginService:loginService,) {}
  ngOnInit(): void {}

  login(): void {
    debugger;
    
    this.validate();
  }

  private validate() {
   debugger;

    this.loginService
    .validatePassword(this.user, this.password)
      .pipe(
        tap((data: Itoken) => {
        
        })
      )
      .subscribe(respuesta=>{    
   
        let name1:string = respuesta.token!;
        window.localStorage.setItem("token", name1 );
       })
    
    debugger;    
    
   
    this.router.navigate(["/rent"]);
  }
  
}

