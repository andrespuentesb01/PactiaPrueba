import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { carService } from 'src/services/car.service';
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

  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
 
  public dataCars : any;
  public plate: string = ""
  public idTask: string = ""
  public branch: string = ""
  public year: string = ""
  public model: string = ""
  public idTaskDelete: string = ""
  public status: string = ""
  public token: string = ""
  public nameOfTask: string = ""

  miFormulario = new FormGroup({
 
  })
  
  constructor(private RestService:RestService,
    private carService:carService,
    ) {}
  
   

  //data = Object.values(this.jsonRespuesta)
  ngOnInit() 
  {
    debugger;
  
    this.getFilterData();


  }

  private getFilterData() {
    this.carService
      .getCar()
      .pipe(
        tap((dataCars: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.dataCars = respuesta
   
       })
  }

  updateTask(): void {
    var task = this.idTask;
    var idTask = +task
    this.carService
      .updateTask( idTask, this.status)
      .subscribe(
        
      );
      window.alert("el registro fue actualizado");
      this.getFilterData();
  }

  createTask(): void {

    this.carService
      .createCar( this.plate, this.branch, this.year, this.model)
      .subscribe(
        
      );
      window.alert("el registro fue creado");
      this.getFilterData();
  }

  deleteTask(): void {
    var task = this.idTaskDelete;
    var idTask = +task
    this.carService
      .deleteTask( idTask)
      .subscribe(
        
      );
      window.alert("el registro fue eliminado");
      this.getFilterData();
  }
  
}




