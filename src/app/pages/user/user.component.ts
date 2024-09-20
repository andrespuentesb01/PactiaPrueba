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
  public password: string = ""
  public idUserDelete: string = ""
  public isDelete: boolean = false
  public isUpdate: boolean = false
  public idUserUpdate: string = ""
  public nameUpdate: string = ""

  miFormulario = new FormGroup({
 
  })
  
  constructor(private RestService:RestService,
    private userService:userService,
    ) {}
  

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
      .createUser( this.name, this.password)
      .subscribe(
        
      );
      window.alert("el registro fue creado");
      this.ngOnInit();
  }

  deleteUser(): void {
    var idUserDelete =+ this.idUserDelete;
    this.userService
      .deleteUser( idUserDelete)
      .subscribe(respuesta=>{
 
        this.isDelete = respuesta
   
       });      
      debugger 
      if (this.isDelete == true)
        {
          window.alert("el registro fue eliminado");
        }
       else
       {
        window.alert("el registro no existe, revise el idUser");
       }
  }

  updateUser(): void {
    var idUserUpdate =+ this.idUserUpdate;
    this.userService
      .updateUser( idUserUpdate, this.nameUpdate)
      .subscribe(respuesta=>{
 
        this.isUpdate = respuesta
   
       });      
      debugger 
      if (this.isUpdate == true)
        {
          window.alert("el registro fue actualizado");
        }
       else
       {
        window.alert("el registro no existe, revise el idUser");
       }
  }

  selectRow(row: Number): void {
    debugger;
    var a = row;
  }

  
}




