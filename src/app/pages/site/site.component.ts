import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { siteService } from 'src/services/site.service';
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

  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
 
  public dataFillCars : any;
  public dataFillSites : any;
  public dataFillSitesDetails : any;
  public dataSite : any;
  public dataFillDelivery : any;
  public delivery: string = "";
  public idCar: string = "";
  public collect: string = "";
  public user: string = "";
 

  miFormulario = new FormGroup({
 
  })
  
  constructor(private RestService:RestService,
    private siteService:siteService, private carService:carService,
    ) {}
  
   

  //data = Object.values(this.jsonRespuesta)
  ngOnInit() 
  {
      
    this.getFilterData()

  }

  private getFilterData() {
    this.getCarsData();
    this.getSiteData();
    this.getSiteDataDetails();

  }


  private getCarsData() {
    this.carService
      .getCarsNewSite()
      .pipe(
        tap((dataSite: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.dataFillCars = respuesta
   
       })
  }

  private getSiteData() {
    this.siteService
      .getSite()
      .pipe(
        tap((dataSite: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.dataFillSites = respuesta
   
       })
  }

  private getSiteDataDetails() {
    this.siteService
      .getSiteDetails()
      .pipe(
        tap((dataSite: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.dataFillSitesDetails = respuesta
   
       })
  }


  createSite(): void {
    var idDelivery = +this.delivery
    var idCollect = +this.collect
    var idCar = +this.idCar
    this.siteService
      .createSite( idDelivery, idCollect, idCar)
      .subscribe(
        
      );
      window.alert("el registro fue creado");
      this.getFilterData();
  }


  
}




