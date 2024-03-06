import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { carService } from 'src/services/car.service';
import { userService } from 'src/services/user.service';
import { siteService } from 'src/services/site.service';
import { taskService } from 'src/services/task.service';
import { rentService } from 'src/services/rent.service';
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

  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
 
  public dataFillCars : any;
  public dataFillSites : any;
  public dataFillUsers : any;
  public dataFillDelivery : any;
  public RentDetailList : any;
  public delivery: string = "";
  public collect: string = "";
  public idUser: string = "";
  public idCar: string = "";
  public comment: string = "";
  public idTask: string = "";
  public idTaskDelete: string = "";
  public status: string = "";
  public token: string = "";
  public nameOfTask: string = "";

  miFormulario = new FormGroup({
 
  })
  
  constructor(private RestService:RestService,
    private taskService:taskService, private carService:carService, private userService:userService,
    private siteService:siteService,private rentService:rentService, 
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
        tap((data: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.dataFillCars = respuesta
   
       })
       this.getFilterDataUsers();
       this.getFilterDataSites();
       this.getFilterDataRent()
  }

  private getFilterDataUsers() {
    this.userService
      .getUsers()
      .pipe(
        tap((data: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.dataFillUsers = respuesta
   
       })
       
  }

  private getFilterDataRent() {
    this.rentService
      .getRentDetails()
      .pipe(
        tap((data: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.RentDetailList = respuesta
   
       })
       
  }

  private getFilterDataSites() {
    this.siteService
      .getSite()
      .pipe(
        tap((data: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.dataFillSites = respuesta
   
       })
       
  }

  public onSelect(value: any) {
    debugger;
    var idDelivery = +this.delivery
    var idCollect = +this.collect
    this.carService
      .getCarFilter(idDelivery, idCollect)
      .pipe(
        tap((data: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.dataFillCars = respuesta
   
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

  createRent(): void {
    debugger;
    var car = +this.idCar
    var user = +this.idUser
    var comment = this.comment
    this.rentService
      .createRent(car, user, comment)
      .subscribe(
        
      );
      
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




