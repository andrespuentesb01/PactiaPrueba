import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { userService } from 'src/services/user.service';
import { Itask } from 'src/interfaces/task.interface';
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

  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 
  public listOfUsers : any;
  public name: string = ""
  public lastname: string = ""
  public cc: string = ""
  public drivePermision: string = ""


  miFormulario = new FormGroup({
 
  })
  
  constructor(private RestService:RestService,
    private userService:userService,
    ) {}
  
   

  //data = Object.values(this.jsonRespuesta)
  ngOnInit() 
  {
    debugger;
  
    this.getFilterData();


  }

  private getFilterData() {
    this.userService
      .getUsers()
      .pipe(
        tap((data: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.listOfUsers = respuesta
   
       })
       debugger;
       var a = this.listOfUsers;

  }


  createUser(): void {

    this.userService
      .createUser( this.name, this.lastname, this.cc, this.drivePermision)
      .subscribe(
        
      );
  
      this.getFilterData();
  }

  
}




