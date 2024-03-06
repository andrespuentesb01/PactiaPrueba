import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { taskService } from 'src/services/task.service';
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

  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
 
  public data : any;
  public idTask: string = ""
  public idTaskDelete: string = ""
  public status: string = ""
  public token: string = ""
  public nameOfTask: string = ""

  miFormulario = new FormGroup({
 
  })
  
  constructor(private RestService:RestService,
    private taskService:taskService,
    ) {}
  
   

  //data = Object.values(this.jsonRespuesta)
  ngOnInit() 
  {
    debugger;
  
    this.getFilterData();


  }

  private getFilterData() {
    this.taskService
      .getTask()
      .pipe(
        tap((data: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.data = respuesta
   
       })
  }

  updateTask(): void {
    var task = this.idTask;
    var idTask = +task
    this.taskService
      .updateTask( idTask, this.status)
      .subscribe(
        
      );
      window.alert("el registro fue actualizado");
      this.getFilterData();
  }

  createTask(): void {

    this.taskService
      .createTask( this.nameOfTask)
      .subscribe(
        
      );
      window.alert("el registro fue creado");
      this.getFilterData();
  }

  deleteTask(): void {
    var task = this.idTaskDelete;
    var idTask = +task
    this.taskService
      .deleteTask( idTask)
      .subscribe(
        
      );
      window.alert("el registro fue eliminado");
      this.getFilterData();
  }
  
}




